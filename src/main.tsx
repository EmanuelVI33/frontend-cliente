import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ProgramProvider } from "./Page/Program/context/ProgramContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { ProgrammingProvider } from "./Page/Programming/context/ProgrammingContext.tsx";
import { ElementsProvider } from "./Page/Script/context/ElementsContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProgramProvider>
        <ProgrammingProvider>
          <ElementsProvider>
            <App />
          </ElementsProvider>
        </ProgrammingProvider>
      </ProgramProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
