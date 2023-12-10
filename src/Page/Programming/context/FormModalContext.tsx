/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode } from "react";
import { ProgrammingModel } from "../model/ProgrammingModel";
import { Form } from "antd";
import dayjs from "dayjs";
import { useProgramContext } from "@/Page/Program/hooks";

interface ModalContextProps {
  isModalOpen: boolean;
  isAdd: boolean;
  isHostOpen: boolean;
  form: any;
  openModal: () => void;
  closeModal: () => void;
  setEditValues: (values: ProgrammingModel) => void;
  openHostModal: () => void;
  closeHostModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useFormModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useFormModal must be used within a FormModalProvider");
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

const FormModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAdd, setIsAdd] = useState<boolean>(true);
  const [isHostOpen, setIsHostOpen] = useState<boolean>(false);

  const [form] = Form.useForm();

  const { getStorageProgram } = useProgramContext();

  const openModal = () => {
    if (isAdd) {
      form.setFieldsValue({
        host: getStorageProgram()?.host,
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsAdd(true); // Reiniciar a true por defecto
    form.resetFields();
  };

  const setEditValues = (value: ProgrammingModel) => {
    setIsAdd(false);
    form.setFieldsValue({
      ...value,
      duration: dayjs(value.duration, "HH:mm:ss"),
      startTime: dayjs(value.startTime, "HH:mm:ss"),
    });
    openModal();
  };

  const openHostModal = () => {
    setIsHostOpen(true);
  };

  const closeHostModal = () => {
    setIsHostOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        isAdd,
        form,
        isHostOpen,
        openModal,
        closeModal,
        setEditValues,
        closeHostModal,
        openHostModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default FormModalProvider;
