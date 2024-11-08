import {
  OperationVariables,
  SubscribeToMoreOptions,
  useSuspenseQuery,
} from "@apollo/client";
import { GET_IMAGES } from "./queries";
import { Exact, GetImagesQuery, Image } from "../gql/graphql";

export function useImages(): {
  images: Image[];
  error?: string;
  subscribeToMore: <
    TSubscriptionData = GetImagesQuery,
    TSubscriptionVariables extends OperationVariables = Exact<{
      [key: string]: never;
    }>
  >(
    options: SubscribeToMoreOptions<
      GetImagesQuery,
      TSubscriptionVariables,
      TSubscriptionData
    >
  ) => () => void;
} {
  const { data, error, subscribeToMore } = useSuspenseQuery(GET_IMAGES);

  if (error) {
    return { images: [], error: error.message, subscribeToMore };
  }

  return { images: data.images, subscribeToMore };
}
