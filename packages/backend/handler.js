const fs = require("fs");
const path = require("path");
const { ApolloServer, gql } = require("apollo-server-lambda");
const {
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  ScanCommand,
  UpdateItemCommand,
  DeleteItemCommand,
} = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

const client = new DynamoDBClient({ region: "us-east-1" });

// Ensure the path to the schema file is correct
// const schemaPath = path.join(__dirname, "/schema.graphql");
// const typeDefs = gql(fs.readFileSync(schemaPath, "utf8"));

const typeDefs = gql`
  type Expense {
    id: ID!
    name: String!
    price: Float!
    description: String
  }

  input ExpenseInput {
    name: String!
    price: Float!
    description: String
  }

  type Query {
    getExpense(id: ID!): Expense
    listExpenses: [Expense]
  }

  type Mutation {
    createExpense(input: ExpenseInput!): Expense
    updateExpense(id: ID!, input: ExpenseInput!): Expense
    deleteExpense(id: ID!): Boolean
  }
`;

const resolvers = {
  Query: {
    getExpense: async (_, { id }) => {
      const params = {
        TableName: "ExpenseTable",
        Key: marshall({ id }),
      };
      const { Item } = await client.send(new GetItemCommand(params));
      return unmarshall(Item);
    },
    listExpenses: async () => {
      return [
        {
          id: "1234",
          name: "The Awakening",
          price: 1.0,
          description: "String",
        },
      ];
      // const params = {
      //   TableName: 'ExpenseTable',
      // };
      // const { Items } = await client.send(new ScanCommand(params));
      // return Items.map(unmarshall);
    },
  },
  Mutation: {
    createExpense: async (_, { input }) => {
      const params = {
        TableName: "ExpenseTable",
        Item: marshall(input),
      };
      await client.send(new PutItemCommand(params));
      return input;
    },
    updateExpense: async (_, { id, input }) => {
      const params = {
        TableName: "ExpenseTable",
        Key: marshall({ id }),
        UpdateExpression: "SET #name = :name, #price = :price",
        ExpressionAttributeValues: marshall(input),
        ExpressionAttributeNames: {
          "#name": "name",
        },
        ReturnValues: "ALL_NEW",
      };
      const { Attributes } = await client.send(new UpdateItemCommand(params));
      return unmarshall(Attributes);
    },
    deleteExpense: async (_, { id }) => {
      const params = {
        TableName: "ExpenseTable",
        Key: marshall({ id }),
        ReturnValues: "ALL_OLD",
      };
      const { Attributes } = await client.send(new DeleteItemCommand(params));
      return unmarshall(Attributes);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
});

const graphqlHandler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
});

exports.handler = graphqlHandler;
