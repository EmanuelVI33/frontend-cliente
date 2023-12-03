import { FC, ReactNode, createContext, useState } from "react";
import { ElementEnum, ElementModel } from "../model";
import { ElementOptions } from "../model/ElementOptions";
import { useElementQuery } from "../hooks/useElementService";
import { useProgrammingContext } from "@/Page/Programming/hooks/useProgrammingContext";

interface ScriptContextProps {
  formData: ElementOptions;
  formType: ElementEnum;
  selectedElement: ElementModel | null;
  setFormData: (data: string | any) => void;
  setFormType: (formType: ElementEnum) => void;
  setSelectedElement: (id: ElementModel | null) => void;
  data: any;
  isLoading: boolean;
  isError: boolean;
}

const ScriptContext = createContext<ScriptContextProps | undefined>(undefined);

// const LOCAL_STORAGE_KEY = "elements";

const ScriptProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [formType, setFormType] = useState<ElementEnum>(ElementEnum.imagen);
  const [selectedElement, setSelectedElement] = useState<ElementModel | null>(
    null
  );
  const [formData, setFormData] = useState<ElementOptions>({});
  const { programming } = useProgrammingContext();
  const { data, isError, isLoading } = useElementQuery(programming.id);

  return (
    <ScriptContext.Provider
      value={{
        formData,
        selectedElement,
        formType,
        setFormData,
        setFormType,
        setSelectedElement,
        data,
        isLoading,
        isError,
      }}
    >
      {children}
    </ScriptContext.Provider>
  );
};

export { ScriptContext, ScriptProvider };
