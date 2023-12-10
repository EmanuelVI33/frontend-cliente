import React, { useState } from "react";
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Button, List, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { EditOutlined } from "@mui/icons-material";
import { ProgrammingModel } from "../model/ProgrammingModel";
import { useFormModal } from "../context";
import { usePlayer, useScriptContext } from "@/Page/Script/hooks";
import FlexRow from "../style/FlexRow";
import { ProgrammingPlayer } from ".";

interface ProgrammingCardProps {
  item: ProgrammingModel;
}

const ProgrammingCard: React.FC<ProgrammingCardProps> = ({ item }) => {
  const [modal, contextHolder] = Modal.useModal();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const { handleScript } = useScriptContext();
  const { setEditValues } = useFormModal();
  const playlist = item.elements;

  const { handlePlay } = usePlayer({
    playlist,
  });

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

  const handleCloseModal = () => {
    setIsPlaying(false);
    handlePlay(false);
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
        // extra={<img width={200} alt={item.title} src={item.presenter} />}
        extra={
          <FlexRow>
            <img
              width={180}
              alt={item.title}
              className="mr-4"
              src="https://create-images-results.d-id.com/DefaultPresenters/Toman_f_ai/image.jpeg"
            />
            <Button type="primary" onClick={() => setIsPlaying(true)}>
              <PlayCircleOutlined width={200} />
            </Button>
          </FlexRow>
        }
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

      <Modal
        title={"Reproductor"}
        open={isPlaying}
        onCancel={handleCloseModal}
        footer={null}
      >
        <ProgrammingPlayer playlist={playlist} />
      </Modal>
    </>
  );
};

export default ProgrammingCard;
