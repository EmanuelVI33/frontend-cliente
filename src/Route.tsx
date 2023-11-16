import { createBrowserRouter } from "react-router-dom";
import { ProgramPage } from "./Page";
import { Dashboard } from "./layout";
import { ProgrammingPage } from "./Page/Programming";

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
    ],
  },
]);
