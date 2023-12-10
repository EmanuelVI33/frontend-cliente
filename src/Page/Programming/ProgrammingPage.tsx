import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { FloatButton, List, Modal } from "antd";
import { PHeader } from "../../layout";
import { ProgrammingCard, ProgrammingForm } from "./components";
import { useFormModal } from "./context";
import { useProgramming } from "./hooks/useProgramming";

const ProgrammingPage: React.FC = () => {
  const { id } = useParams();
  const { isAdd, isModalOpen, closeModal, openModal } = useFormModal();
  const { query } = useProgramming({ id });
  const { data: programming = [], isLoading, isError } = query;

  if (isLoading) return <p>Cargando...</p>;

  if (isError) return <p>Error...</p>;

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <>
      <PHeader>
        <Link to="/">
          <ArrowLeftOutlined style={{ fontSize: 30 }} />{" "}
        </Link>

        <span style={{ marginLeft: 20 }}> Programa: {id} </span>
      </PHeader>
      <div style={{ height: 20 }}></div>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <List
          itemLayout="vertical"
          dataSource={programming}
          renderItem={(item) => <ProgrammingCard item={item} />}
        />
      </div>
      <FloatButton
        icon={<PlusOutlined style={{ fontSize: 20 }} />}
        type="primary"
        style={{
          right: 94,
          width: 60,
          height: 60,
        }}
        onClick={openModal}
      />
      <Modal
        title={isAdd ? "Crear Nueva Programación" : "Editar Programación"}
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
      >
        <ProgrammingForm />
      </Modal>
    </>
  );
};

export default ProgrammingPage;
