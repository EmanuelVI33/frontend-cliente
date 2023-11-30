import { useScriptContext } from ".";

export const useTimeLine = () => {
  const { elements, selectedElement, setSelectedElement } = useScriptContext();

  return {
    elements,
    selectedElement,
    setSelectedElement,
  };
};
