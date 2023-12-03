import { Button, Col, Form, Image, Input, Radio, Row, TimePicker } from "antd";
import { useFormModal } from "../context";

const formItemLayout = { labelCol: { span: 10 }, wrapperCol: { span: 14 } };
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

const ProgrammingForm: React.FC = () => {
  const { isAdd, form } = useFormModal();

  const handleProgramName = (value: string) => {
    return value.toUpperCase();
  };

  const handleSubmit = (value: any) => {
    value.duration = value["duration"].format("HH:mm:ss");
    value.startTime = value["startTime"].format("HH:mm:ss");
    console.log(value);
  };

  return (
    <>
      <Form form={form} {...formItemLayout} onFinish={handleSubmit}>
        <Form.Item
          label="Nombre de la Programación"
          name="title"
          rules={[
            {
              required: true,
              message: "El nombre de la Programación no puede estar vacío",
            },
          ]}
          normalize={handleProgramName}
        >
          <Input placeholder="Introduzca el nombre de la Programación" />
        </Form.Item>

        <Form.Item
          label="Tiempo de inicio"
          name="startTime"
          rules={[
            {
              required: true,
              message: "Introduce el tiempo de inicio de la Programación",
            },
          ]}
        >
          <TimePicker />
        </Form.Item>

        <Form.Item
          label="Duración"
          name="duration"
          rules={[
            {
              required: true,
              message:
                "Introduce el tiempo máximo que puede durar la Programación",
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
              message: "Escribe una descripción para la Programación ",
            },
          ]}
        >
          <TextArea />
        </Form.Item>

        <Form.Item
          label="Presentador"
          name="presenter"
          rules={[
            {
              required: true,
              message: "Elegir un presentador para la Programación ",
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
            {isAdd ? "Crear Programación" : "Modificar"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ProgrammingForm;
