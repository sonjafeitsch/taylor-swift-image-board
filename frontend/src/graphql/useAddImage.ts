import { AddImageMutation, AddImageMutationVariables } from "@/gql/graphql";
import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { ADD_IMAGE } from "./mutation";

export function useAddImage() {
  const [execute, result] = useMutation<
    AddImageMutation,
    AddImageMutationVariables
  >(ADD_IMAGE, {
    refetchQueries: ["getImages"],
  });

  const imageCreate = useCallback(
    (variables: AddImageMutationVariables) => {
      return execute({
        variables,
      });
    },
    [execute]
  );

  return [imageCreate, result] as const;
}
