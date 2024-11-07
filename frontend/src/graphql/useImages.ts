import { useSuspenseQuery } from "@apollo/client";
import { GET_IMAGES } from "./queries";
import { Image } from "../gql/graphql";

export function useImages(): {
  images: Image[];
  error?: string;
} {
  const { data, error } = useSuspenseQuery(GET_IMAGES);

  if (error) {
    return { images: [], error: error.message };
  }

  return { images: data.images };
}
