import { Card, Col, Modal, Row, Spin, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ProgramForm, ProgramList } from "./components";
import { PHeader } from "@/layout";
import { useModal } from "./context";
import { useProgram } from "./hooks";
import HostModal from "@/Components/HostModal";

export default function ProgramPage() {
  const {
    isModalOpen,
    isAdd,
    isHostOpen,
    closeModal,
    openModal,
    closeHostModal,
  } = useModal();
  const { isLoading, isError, error } = useProgram();

  const [messageApi] = message.useMessage();

  return (
    <>
      <PHeader> Lista de Programas</PHeader>

      <div style={{ height: 20 }}></div>

      {!isLoading &&
        isError &&
        messageApi.open({
          type: "error",
          content: `${error}`,
        })}
      <Row gutter={[16, 16]} wrap align="middle">
        <Col span={6}>
          <AddProgramCard onClick={openModal} />
        </Col>
        {isLoading && <Spin />}
        {!isLoading && !isError && <ProgramList />}
      </Row>
      <Modal
        title={isAdd ? "Crear Nuevo Programa" : "Editar Programa"}
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        width={600}
      >
        <ProgramForm />
      </Modal>
      <HostModal isModalOpen={isHostOpen} closeModal={closeHostModal} />
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
