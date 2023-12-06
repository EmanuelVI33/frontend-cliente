import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { ElementEnum, ElementModel } from "../model";
import { ElementOptions } from "../model/ElementOptions";
// import { useElementQuery } from "../hooks/useElementService";
// import { UseQueryResult } from "@tanstack/react-query";

interface ScriptContextProps {
  formData: ElementOptions;
  formType: ElementEnum;
  selectedElement: ElementModel | null;
  script: string | null;
  setFormData: (data: string | any) => void;
  setFormType: (formType: ElementEnum) => void;
  handleSelectElement: (selectedElement: ElementModel | null) => void;
  handleScript: (id: string | null) => void;
  handleChangeTab: (newType: ElementEnum) => void;
  // query: UseQueryResult<any, Error>;
}

const ScriptContext = createContext<ScriptContextProps | undefined>(undefined);

const LOCAL_STORAGE_KEY = "elements";

const ScriptProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [formType, setFormType] = useState<ElementEnum>(ElementEnum.imagen);
  const [script, setScript] = useState<string | null>(null);
  const [formData, setFormData] = useState<ElementOptions>({});
  const [selectedElement, setSelectedElement] = useState<ElementModel | null>(
    null
  );

  useEffect(() => {
    const storedElements = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedElements) {
      setScript(JSON.parse(storedElements));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(script));
  }, [script]);

  const handleScript = (id: string | null) => setScript(id);

  // const query = useElementQuery(script);

  const handleChangeTab = (newType: ElementEnum) => {
    setFormType(newType);
  };

  const handleSelectElement = (element: ElementModel | null) => {
    setSelectedElement(element);
  };

  return (
    <ScriptContext.Provider
      value={{
        formData,
        script,
        formType,
        selectedElement,
        setFormData,
        setFormType,
        handleSelectElement,
        handleScript,
        handleChangeTab,
        // query,
      }}
    >
      {children}
    </ScriptContext.Provider>
  );
};

export { ScriptContext, ScriptProvider };
