/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState, ReactNode } from "react";
import { ProgramModel } from "../model";
import { Form } from "antd";
import dayjs from "dayjs";

interface ModalContextProps {
  isModalOpen: boolean;
  isAdd: boolean;
  isHostOpen: boolean;
  form: any;
  openModal: () => void;
  closeModal: () => void;
  setEditValues: (values: ProgramModel) => void;
  openHostModal: () => void;
  closeHostModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAdd, setIsAdd] = useState<boolean>(true);
  const [isHostOpen, setIsHostOpen] = useState<boolean>(false);

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
      // cover: value.coverUrl,
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
        isHostOpen,
        form,
        openModal,
        closeModal,
        setEditValues,
        openHostModal,
        closeHostModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
