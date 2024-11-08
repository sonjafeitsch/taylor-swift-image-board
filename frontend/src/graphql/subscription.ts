import { gql } from "@apollo/client";

export const IMAGE_ADDED = gql`
  subscription imageAdded {
    images: imageAdded {
      id
      url
    }
  }
`;
