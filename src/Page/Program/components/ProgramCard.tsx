/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { ProgramModel } from "../model";
import { EditOutlined } from "@mui/icons-material";
import { useModal } from "../context";
import { useProgram, useProgramContext } from "../hooks";

const { Meta } = Card;

interface ProgramCardProps {
  item: ProgramModel;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ item }) => {
  const [modal, contextHolder] = Modal.useModal();
  const { setEditValues } = useModal();
  const {
    handleDeleteProgram: deleteProgram,
    // handleChangeFile,
  } = useProgram();
  const { setSelectedProgram } = useProgramContext();
  const navigate = useNavigate();

  // console.log(hosts);

  const handleDeleteProgram = () => {
    modal.confirm({
      title: "Confirmación",
      icon: <ExclamationCircleOutlined />,
      okText: "Eliminar",
      content: "¿Estás seguro de que quieres eliminar el programa?",
      onOk: () => deleteProgram(item.id!),
    });
  };

  // Colocar item para editar
  const handleEdit = () => {
    // handleChangeFile({
    //   fileList: [{ uid: "-1", name: item.cover, url: item.coverUrl }],
    // });
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
            src={item.coverUrl}
            onClick={() => {
              setSelectedProgram(item);
              navigate(`/program/${item.id}`);
            }}
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
          avatar={<Avatar src={item.photoUrl} />}
          title={item.name}
          description={item.description}
        />
      </Card>
    </>
  );
};

export default ProgramCard;
