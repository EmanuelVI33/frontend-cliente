import React from "react";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { ProgramModel } from "../model";
import { EditOutlined } from "@mui/icons-material";
import { useModal } from "../context";

const { Meta } = Card;

const presenters = [
  {
    id: "1111",
    url: "https://create-images-results.d-id.com/DefaultPresenters/Toman_f_ai/image.jpeg",
  },
  {
    id: "2222",
    url: "https://create-images-results.d-id.com/DefaultPresenters/Fotrisa_f_ai/image.jpg",
  },
  {
    id: "3333",
    url: "https://create-images-results.d-id.com/DefaultPresenters/Andrew_m_ai/image.jpg",
  },
  {
    id: "4444",
    url: "https://create-images-results.d-id.com/DefaultPresenters/Kanon_m_ai/image.jpeg",
  },
];

interface ProgramCardProps {
  item: ProgramModel;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ item }) => {
  const [modal, contextHolder] = Modal.useModal();
  const { setEditValues } = useModal();
  const navigate = useNavigate();

  const handleDeleteProgram = () => {
    modal.confirm({
      title: "Confirmación",
      icon: <ExclamationCircleOutlined />,
      okText: "Eliminar",
      content: "¿Estás seguro de que quieres eliminar el programa?",
    });
  };

  // Colocar item para editar
  const handleEdit = () => {
    setEditValues(item);
  };

  return (
    <>
      {contextHolder}
      <Card
        hoverable
        cover={
          <img
            alt={item.name}
            src={item.cover}
            onClick={() => navigate(`/program/${item.id}`)}
          />
        }
        actions={[
          <Button icon={<EditOutlined />} key="edit" onClick={handleEdit} />,
          <Button
            icon={<DeleteOutlined />}
            key="delete"
            onClick={handleDeleteProgram}
          />,
        ]}
      >
        <Meta
          avatar={
            <Avatar
              src={presenters.find((p) => p.id === item.presenter)?.url}
            />
          }
          title={item.name}
          description={item.description}
        />
      </Card>
    </>
  );
};

export default ProgramCard;
