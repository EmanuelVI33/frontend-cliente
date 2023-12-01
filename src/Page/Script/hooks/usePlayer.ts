import { useScriptContext } from ".";

export const usePlayer = () => {
  const { elements } = useScriptContext();

  return {
    elements,
  };
};
