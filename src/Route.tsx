import { createBrowserRouter } from "react-router-dom";
import { ProgramPage } from "./Page";
import { Dashboard } from "./layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "program",
        element: <ProgramPage />,
      },
    ],
  },
]);
