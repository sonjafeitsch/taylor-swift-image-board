import { graphql } from "../gql";

export const GET_IMAGES = graphql(`
  query getImages {
    images {
      id
      description
      url
    }
  }
`);
