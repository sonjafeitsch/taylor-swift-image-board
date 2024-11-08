import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient.tsx";
import { RootLayout } from "./RootLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RootLayout />
    </ApolloProvider>
  </StrictMode>
);
