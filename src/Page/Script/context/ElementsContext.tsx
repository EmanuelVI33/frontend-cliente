import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { ElementInterface } from "../model";

interface ElementsContextProps {
  elements: Element[];
  formData: Record<string, any>;
  setFormData: (data: string | any) => void;
  addElement: (element: ElementInterface) => void;
  removeElement: (id: number) => void;
  editElement: (id: number, updatedElement: ElementInterface) => void;
  findElement: (id: number) => ElementInterface | undefined;
}

const ElementsContext = createContext<ElementsContextProps | undefined>(
  undefined
);

const ElementsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [elements, setElements] = useState<Element[]>([]);
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

  const addElement = (element: ElementInterface) => {
    setElements((prevElements) => [...prevElements, element]);
  };

  const removeElement = (id: number) => {
    setElements((prevElements) =>
      prevElements.filter((element) => element.id !== id)
    );
  };

  const editElement = (id: number, updatedElement: ElementInterface) => {
    setElements((prevElements) =>
      prevElements.map((element) =>
        element.id === id ? updatedElement : element
      )
    );
  };

  const findElement = (id: number) =>
    elements.find((element) => element.id === id);

  return (
    <ElementsContext.Provider
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
    </ElementsContext.Provider>
  );
};

export { ElementsContext, ElementsProvider };
