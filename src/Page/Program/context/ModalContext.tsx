import React, { createContext, useContext, useState, ReactNode } from "react";
import { ProgramModel } from "../model";
import { Form } from "antd";
import dayjs from "dayjs";

interface ModalContextProps {
  isModalOpen: boolean;
  isAdd: boolean;
  openModal: () => void;
  closeModal: () => void;
  setEditValues: (values: ProgramModel) => void;
  form: any;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
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

  const setEditValues = (value: ProgramModel) => {
    setIsAdd(false);
    form.setFieldsValue({
      ...value,
      duration: dayjs(value.duration, "HH:mm:ss"),
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

export default ModalProvider;
