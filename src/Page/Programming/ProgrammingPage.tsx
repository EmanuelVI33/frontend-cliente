import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { FloatButton, List, Modal } from "antd";

import { PHeader } from "../../layout";
import { ProgrammingCard, ProgrammingForm } from "./components";

import { useFormModal } from "./context";

const data = Array.from({ length: 4 }).map((_, i) => ({
  id: i,
  title: `Programacion ${i}`,
  presenter: `https://create-images-results.d-id.com/DefaultPresenters/Toman_f_ai/image.jpeg`,
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  duration: "00:15:00",
  turn: "Tarde",
  startTime: `1${i}:00:00`,
  programId: "82394820sda",
}));

const ProgrammingPage: React.FC = () => {
  const { id } = useParams();
  const { isAdd, isModalOpen, closeModal, openModal } = useFormModal();
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
          dataSource={data}
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
        onCancel={closeModal}
        footer={null}
      >
        <ProgrammingForm />
      </Modal>
    </>

  );
};

export default ProgrammingPage;
