import { createBrowserRouter } from "react-router-dom";
import { ProgramPage } from "./Page";
import { ProgrammingPage } from "./Page/Programming";
import { ScriptPage } from "./Page/Script";
import { ModalProvider } from "./Page/Program/context";
import { FormModalProvider } from "./Page/Programming/context";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ModalProvider>
        <ProgramPage />{" "}
      </ModalProvider>
    ),
  },
  {
    path: "/program/:id",
    element: (
      <FormModalProvider>
        <ProgrammingPage />{" "}
      </FormModalProvider>
    ),
  },
  {
    path: "/programming/:id",
    element: <ScriptPage />,
  },
]);
