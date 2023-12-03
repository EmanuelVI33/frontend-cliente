import React from "react";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, List, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { EditOutlined } from "@mui/icons-material";
import { ProgrammingModel } from "../model/ProgrammingModel";
import { useFormModal } from "../context";

interface ProgrammingCardProps {
  item: ProgrammingModel;
}

const ProgrammingCard: React.FC<ProgrammingCardProps> = ({ item }) => {
  const [modal, contextHolder] = Modal.useModal();

  const { setEditValues } = useFormModal();

  const navigate = useNavigate();

  const handleDelete = () => {
    modal.confirm({
      title: "Confirmación",
      icon: <ExclamationCircleOutlined />,
      okText: "Eliminar",
      content: "¿Estás seguro de que quieres eliminar la programación?",
    });
  };

  const handleEdit = () => {
    setEditValues(item);
  };

  return (
    <>
      {contextHolder}
      <List.Item
        key={item.title}
        actions={[
          <Button icon={<EditOutlined />} key="edit" onClick={handleEdit} />,
          <Button
            icon={<DeleteOutlined />}
            key="delete"
            onClick={handleDelete}
          />,
        ]}
        extra={<img width={200} alt={item.title} src={item.presenter} />}
        style={{ cursor: "pointer" }}
      >
        <div onClick={() => navigate(`/programming/${item.id}`)}>
          <List.Item.Meta
            title={<p>{item.title}</p>}
            description={item.description}
          />
        </div>
        <p>Tiempo de Inicio: {item.startTime}</p>
        <p>Duración: {item.duration}</p>
      </List.Item>
    </>
  );
};

export default ProgrammingCard;
