import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, List, Modal } from "antd";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { EditOutlined } from "@mui/icons-material";

import { ProgrammingModel } from "../model/ProgrammingModel";
import { useFormModal } from "../context";
import { useScriptContext } from "@/Page/Script/hooks";
import { useProgramming } from "../hooks";

interface ProgrammingCardProps {
  item: ProgrammingModel;
}

const ProgrammingCard: React.FC<ProgrammingCardProps> = ({ item }) => {
  const [modal, contextHolder] = Modal.useModal();
  const { handleScript } = useScriptContext();
  const { setEditValues } = useFormModal();
  const { handleDeleteProgramming } = useProgramming();

  const navigate = useNavigate();

  const handleDelete = () => {
    modal.confirm({
      title: "Confirmación",
      icon: <ExclamationCircleOutlined />,
      okText: "Eliminar",
      content: "¿Estás seguro de que quieres eliminar la programación?",
      onOk: () => handleDeleteProgramming(item.id!),
    });
  };

  const handleEdit = () => {
    setEditValues(item);
  };

  // console.log(item);
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
        extra={<img width={200} alt={item.title} src={item.photoUrl} />}
        style={{ cursor: "pointer" }}
      >
        <div
          onClick={() => {
            console.log(`Navegar ${item.id}`);
            handleScript(`${item.id}`);
            navigate(`/programming/${item.id}`);
          }}
        >
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
