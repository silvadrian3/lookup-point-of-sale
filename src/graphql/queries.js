/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
      id
      name
      description
      selling_price
      createdAt
      updatedAt
    }
  }
`;
export const listProductss = /* GraphQL */ `
  query ListProductss(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        selling_price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
