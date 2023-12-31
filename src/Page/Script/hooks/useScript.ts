import { useScriptContext } from ".";
import { useElementQuery } from "./useElementService";

export const useScript = ({ id }: { id: string | undefined }) => {
  const {
    selectedElement,
    script,
    setSelectedElement,
    handleScript,
    formType,
  } = useScriptContext();

  const query = useElementQuery(id);
  console.log("query -------", query.data);

  return {
    query,
    script,
    handleScript,
    selectedElement,
    setSelectedElement,
    formType,
  };
};
