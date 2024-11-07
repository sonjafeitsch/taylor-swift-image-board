import { graphql } from "../gql";

export const ADD_IMAGE = graphql(`
  mutation addImage($createImageInput: CreateImageInput!) {
    createImage(createImageInput: $createImageInput) {
      id
      url
      description
    }
  }
`);
