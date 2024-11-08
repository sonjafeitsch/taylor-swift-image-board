import { gql } from "@apollo/client";

export const IMAGE_ADDED = gql`
  subscription OnImageAdded {
    images: imageAdded {
      id
      url
    }
  }
`;
