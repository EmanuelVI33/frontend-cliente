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

  return {
    query,
    script,
    handleScript,
    selectedElement,
    setSelectedElement,
    formType,
  };
};
