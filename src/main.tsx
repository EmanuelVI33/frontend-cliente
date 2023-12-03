import React from "react";
import ReactDOM from "react-dom/client";
import esES from "antd/locale/es_ES";
import App from "./App.tsx";
import { ProgramProvider } from "./Page/Program/context/ProgramContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { ProgrammingProvider } from "./Page/Programming/context/ProgrammingContext.tsx";
import { ScriptProvider } from "./Page/Script/context/ScriptContext.tsx";
import { ConfigProvider } from "antd";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={esES}>
      <QueryClientProvider client={queryClient}>
        <ProgramProvider>
          <ProgrammingProvider>
            <ScriptProvider>
              <App />
            </ScriptProvider>
          </ProgrammingProvider>
        </ProgramProvider>
      </QueryClientProvider>
    </ConfigProvider>
  </React.StrictMode>
);
