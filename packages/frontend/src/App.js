import React from "react";
import Routes from "./Routes";
import "./assets/styles/styles.css";

// import PubSub from "@aws-amplify/pubsub";
// PubSub.configure(awsmobile);
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

// import { CREATE_PRODUCT, LIST_PRODUCTS } from '../graphql'
import { gql, useQuery, useMutation } from "@apollo/client";

const LIST_EXPENSES = gql`
  query ListExpenses {
    listExpenses {
      id
      name
      price
      description
    }
  }
`;

function App() {
  // const { loading, error, data } = useQuery(LIST_EXPENSES);
  const x = useQuery(LIST_EXPENSES);
  console.log(x);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  // console.log("response:", data);

  return <>Hmmmm</>;
  // return <Routes />;
}

export default App;
