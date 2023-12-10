import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { Flex, FloatButton, Image, List, Modal, Space } from "antd";

import { PHeader } from "../../layout";
import { ProgrammingCard, ProgrammingForm } from "./components";

import { useFormModal } from "./context";
import { useProgramming } from "./hooks/useProgramming";
import { useProgramContext } from "../Program/hooks";
import { ProgrammingModel } from "./model/ProgrammingModel";
import HostModal from "@/Components/HostModal";

// const data = Array.from({ length: 4 }).map((_, i) => ({
//   id: i,
//   title: `Programacion ${i}`,
//   presenter: `https://create-images-results.d-id.com/DefaultPresenters/Toman_f_ai/image.jpeg`,
//   description:
//     "Ant Design, a design language for background applications, is refined by Ant UED Team.",
//   duration: "00:15:00",
//   turn: "Tarde",
//   startTime: `1${i}:00:00`,
//   programId: "82394820sda",
// }));

const ProgrammingPage: React.FC = () => {
  // console.log(`Id de program: ${id}`);
  const {
    isAdd,
    isModalOpen,
    closeModal,
    openModal,
    isHostOpen,
    closeHostModal,
  } = useFormModal();
  const { programming } = useProgramming();
  const { getStorageProgram } = useProgramContext();

  return (
    <>
      <PHeader>
        <Link to="/">
          <ArrowLeftOutlined style={{ fontSize: 30 }} />{" "}
        </Link>

        <span style={{ marginLeft: 20 }}>
          {" "}
          Programa: {getStorageProgram()?.name}{" "}
        </span>
      </PHeader>
      <div style={{ height: 20 }}></div>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Flex gap={50} justify="space-between">
          <Space direction="vertical" size="small" style={{ display: "flex" }}>
            <Image
              width={200}
              height={200}
              src={getStorageProgram()?.photoUrl}
            />
            <p>Presentador por defecto del Programa</p>
          </Space>
          <List
            itemLayout="vertical"
            style={{ flexGrow: 1 }}
            dataSource={programming}
            renderItem={(item: ProgrammingModel) => (
              <ProgrammingCard item={item} />
            )}
          />
        </Flex>
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
        width={650}
      >
        <ProgrammingForm />
      </Modal>
      <HostModal isModalOpen={isHostOpen} closeModal={closeHostModal} />
    </>
  );
};

export default ProgrammingPage;
