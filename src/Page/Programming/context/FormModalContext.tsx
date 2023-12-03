import React, { createContext, useContext, useState, ReactNode } from "react";
import { ProgrammingModel } from "../model/ProgrammingModel";
import { Form } from "antd";
import dayjs from "dayjs";

interface ModalContextProps {
  isModalOpen: boolean;
  isAdd: boolean;
  openModal: () => void;
  closeModal: () => void;
  setEditValues: (values: ProgrammingModel) => void;
  form: any;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(true);

  const [form] = Form.useForm();

  const openModal = () => {
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

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        isAdd,
        openModal,
        closeModal,
        setEditValues,
        form,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default FormModalProvider;
