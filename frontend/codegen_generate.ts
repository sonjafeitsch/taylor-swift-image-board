import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../backend/src/schema.gql",
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
      config: {
        scalars: {
          BigDecimal: {
            input: "number",
            output: "number",
          },
          BigInteger: {
            input: "number",
            output: "number",
          },
          DateTime: {
            input: "string",
            output: "string",
          },
          Date: {
            input: "string",
            output: "string",
          },
          Minutes: {
            input: "number",
            output: "number",
          },
          YearMonth: {
            input: "string",
            output: "string",
          },
          Prozent: {
            input: "number",
            output: "number",
          },
        },
      },
    },

    "./schema.json": {
      plugins: ["introspection"],
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
