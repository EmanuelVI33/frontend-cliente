import { useState } from "react";
import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Radio,
  Row,
  TimePicker,
  Upload,
  UploadFile,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useModal } from "../context";

const formItemLayout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };
const buttonItemLayout = { wrapperCol: { span: 14, offset: 4 } };
const { TextArea } = Input;

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

const ProgramForm: React.FC = () => {
  const { isAdd, form } = useModal();
  const [fileList, setFileList] = useState<UploadFile[]>([
    { uid: "xxxxx", name: "xxxx" },
  ]);

  const handleProgramName = (value: string) => {
    return value.toUpperCase();
  };

  const handleSubmit = (value: any) => {
    value.duration = value["duration"].format("HH:mm:ss");

    // console.log(value);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  return (
    <>
      <Form form={form} {...formItemLayout} onFinish={handleSubmit}>
        <Form.Item
          label="Nombre del Programa"
          name="name"
          rules={[
            {
              required: true,
              message: "El nombre del programa no puede estar vacío",
            },
          ]}
          normalize={handleProgramName}
        >
          <Input placeholder="Introduzca el nombre del programa" />
        </Form.Item>

        <Form.Item
          label="Duración del Programa"
          name="duration"
          rules={[
            {
              required: true,
              message: "Introduce el tiempo máximo que puede durar el programa",
            },
          ]}
        >
          <TimePicker />
        </Form.Item>

        <Form.Item
          label="Descripción"
          name="description"
          rules={[
            {
              required: true,
              message: "Escribe una descripción para el programa ",
            },
          ]}
        >
          <TextArea />
        </Form.Item>

        <Form.Item label="Portada" name="cover">
          <Upload
            accept="image/*"
            beforeUpload={(file) => {
              setFileList([...fileList, file]);
              return false;
            }}
            listType="picture-card"
            fileList={fileList}
            onChange={handleChange}
          >
            {fileList.length >= 1 ? null : (
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Subir Portada
                </div>
              </div>
            )}
          </Upload>
        </Form.Item>

        <Form.Item
          label="Presentador"
          name="presenter"
          rules={[
            {
              required: true,
              message: "Elegir un presentador para el programa ",
            },
          ]}
        >
          <Radio.Group>
            <Row gutter={[16, 16]}>
              {presenters.map((p) => (
                <Col span={12} key={p.id}>
                  <Radio
                    value={p.id}
                    style={{ lineHeight: "32px" }}
                    disabled={!isAdd}
                  >
                    <Image width={90} height={80} src={p.url} />
                  </Radio>
                </Col>
              ))}
            </Row>
          </Radio.Group>
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">
            {isAdd ? "Crear Programa" : "Modificar Programa"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ProgramForm;
