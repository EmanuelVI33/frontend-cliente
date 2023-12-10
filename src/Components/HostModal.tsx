import { Modal } from "antd";
import { HostForm } from ".";

interface HostModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const HostModal: React.FC<HostModalProps> = ({ isModalOpen, closeModal }) => {
  return (
    <>
      <Modal
        title="Subir Presentador"
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
      >
        <HostForm close={closeModal} />
      </Modal>
    </>
  );
};

export default HostModal;
