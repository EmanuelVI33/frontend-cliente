import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { ElementModel } from "../model";

interface ScriptContextProps {
  elements: ElementModel[];
  formData: Record<string, any>;
  setFormData: (data: string | any) => void;
  addElement: (element: ElementModel) => void;
  removeElement: (id: number) => void;
  editElement: (id: number, updatedElement: ElementModel) => void;
  findElement: (id: number) => ElementModel | undefined;
}

const ScriptContext = createContext<ScriptContextProps | undefined>(undefined);

const ScriptProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [elements, setElements] = useState<ElementModel[]>([]);
  const [formData, setFormData] = useState<Record<string, any>>({});

  useEffect(() => {
    const storedElements = localStorage.getItem("elements");
    if (storedElements) {
      setElements(JSON.parse(storedElements));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("elements", JSON.stringify(elements));
  }, [elements]);

  const addElement = (element: ElementModel) => {
    setElements((prevElements) => [...prevElements, element]);
  };

  const removeElement = (id: number) => {
    setElements((prevElements) =>
      prevElements.filter((element) => element.id !== id)
    );
  };

  const editElement = (id: number, updatedElement: ElementModel) => {
    setElements((prevElements) =>
      prevElements.map((element) =>
        element.id === id ? updatedElement : element
      )
    );
  };

  const findElement = (id: number) =>
    elements.find((element) => element.id === id);

  return (
    <ScriptContext.Provider
      value={{
        elements,
        formData,
        setFormData,
        addElement,
        removeElement,
        editElement,
        findElement,
      }}
    >
      {children}
    </ScriptContext.Provider>
  );
};

export { ScriptContext, ScriptProvider };
