/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateImageInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type Image = {
  __typename?: 'Image';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  url: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createImage: Image;
  removeImage: Image;
  updateImage: Image;
};


export type MutationCreateImageArgs = {
  createImageInput: CreateImageInput;
};


export type MutationRemoveImageArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateImageArgs = {
  updateImageInput: UpdateImageInput;
};

export type Query = {
  __typename?: 'Query';
  image: Image;
  images: Array<Image>;
};


export type QueryImageArgs = {
  id: Scalars['Int']['input'];
};

export type UpdateImageInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type GetImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetImagesQuery = { __typename?: 'Query', images: Array<{ __typename?: 'Image', id: number, description?: string | null, url: string }> };


export const GetImagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<GetImagesQuery, GetImagesQueryVariables>;