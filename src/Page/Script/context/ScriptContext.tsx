import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { ElementFactory, ElementModel } from "../model";
import { ElementOptions } from "../model/ElementOptions";

interface ScriptContextProps {
  elements: ElementModel[];
  formData: Record<string, any>;
  selectedElement: ElementModel | null;
  setFormData: (data: string | any) => void;
  addElement: (element: ElementModel) => void;
  removeElement: (id: number) => void;
  editElement: (id: number, updatedElement: ElementModel) => void;
  findElement: (id: number) => ElementModel | undefined;
  setSelectedElement: (id: ElementModel | null) => void;
}

const ScriptContext = createContext<ScriptContextProps | undefined>(undefined);

const LOCAL_STORAGE_KEY = "elements";

const ScriptProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [elements, setElements] = useState<ElementModel[]>(() => {
    const storedElements = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedElements = storedElements ? JSON.parse(storedElements) : [];
    // Reconstruir las instancias de ElementModel aquí usando los datos almacenados
    const reconstructedElements = parsedElements.map((data: any) =>
      ElementFactory.createElement(data)
    );

    return reconstructedElements;
  });

  // Estado par seleccionar elemento
  const [selectedElement, setSelectedElement] = useState<ElementModel | null>(
    null
  );

  const [formData, setFormData] = useState<ElementOptions>({});

  useEffect(() => {
    const elementsToStore = elements.map((element, index) => {
      // Mapear el elemento según tus necesidades

      const e = element.getAllAttributes();
      console.log(`Elemento [${index}]: ${e.duration}`);

      return e;
    });

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(elementsToStore));
  }, [elements]);

  // useEffect(() => {

  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(elements));
  // }, [elements]);

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
        selectedElement,
        setFormData,
        addElement,
        removeElement,
        editElement,
        findElement,
        setSelectedElement,
      }}
    >
      {children}
    </ScriptContext.Provider>
  );
};

export { ScriptContext, ScriptProvider };
