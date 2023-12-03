import { Card, Col, Modal, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ProgramForm, ProgramList } from "./components";
import { PHeader } from "@/layout";
import { useModal } from "./context";

export default function ProgramPage() {
  // const {
  //   selectedProgram,
  //   handleCreateProgram,
  //   handleProgramClick,
  //   handleConfirmation,
  //   closeModal,
  //   nameRef,
  //   durationRef,
  //   programs,
  // } = useProgram();

  const { isModalOpen, openModal, closeModal, isAdd } = useModal();

  return (
    <>
      <PHeader> Lista de Programas</PHeader>
      <div style={{ height: 20 }}></div>
      <Row gutter={[16, 16]} wrap align="middle">
        <Col span={6}>
          <AddProgramCard onClick={openModal} />
        </Col>
        <ProgramList />
      </Row>
      <Modal
        title={isAdd ? "Crear Nuevo Programa" : "Editar Programa"}
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
      >
        <ProgramForm />
      </Modal>
    </>
  );
}

interface AddProgramCardProps {
  onClick: () => void;
}

const AddProgramCard: React.FC<AddProgramCardProps> = ({ onClick }) => {
  return (
    <>
      <Card
        bordered
        hoverable
        style={{
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <PlusOutlined
          style={{
            width: "100%",
            fontSize: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        Crear Nuevo Programa
      </Card>
    </>
  );
};
