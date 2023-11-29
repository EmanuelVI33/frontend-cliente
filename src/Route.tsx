import { createBrowserRouter } from "react-router-dom";
import { ProgramPage } from "./Page";
import { Dashboard } from "./layout";
import { ProgrammingPage } from "./Page/Programming";
import { ScriptPage } from "./Page/Script";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "program",
        element: <ProgramPage />,
      },
      {
        path: "program/:id",
        element: <ProgrammingPage />,
      },
      {
        path: "programming/:id",
        element: <ScriptPage />,
      },
    ],
  },
]);
