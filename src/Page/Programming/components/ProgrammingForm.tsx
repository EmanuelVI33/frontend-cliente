/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Form, Image, Input, Radio, Row, TimePicker } from "antd";
import { useFormModal } from "../context";
import { buttonItemLayout, formItemLayout, toUpperCase } from "@/constant";
import { useProgramming } from "../hooks";

const { TextArea } = Input;

const ProgrammingForm: React.FC = () => {
  const { isAdd, form, openHostModal } = useFormModal();
  const { handleSubmit, hosts } = useProgramming();

  return (
    <>
      <Form form={form} {...formItemLayout} onFinish={handleSubmit}>
        {!isAdd ? (
          <Form.Item name="id" hidden>
            <Input />{" "}
          </Form.Item>
        ) : null}

        <Form.Item
          label="Nombre de la Programación"
          name="title"
          rules={[
            {
              required: true,
              message: "El nombre de la Programación no puede estar vacío",
            },
          ]}
          normalize={toUpperCase}
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

        <Form.Item label="Presentador">
          <Form.Item
            name="host"
            rules={[
              {
                required: true,
                message: "Elegir un presentador para el programa ",
              },
            ]}
          >
            <Radio.Group>
              <Row gutter={[32, 32]}>
                {hosts.map((p: any) => (
                  <Col span={8} key={p.id}>
                    <Radio
                      value={p.id}
                      style={{ lineHeight: "32px" }}
                      disabled={!isAdd}
                    >
                      <Image width={90} height={80} src={p.photoUrl} />
                    </Radio>
                  </Col>
                ))}
              </Row>
            </Radio.Group>
          </Form.Item>
          {isAdd ? (
            <Form.Item>
              <Button type="primary" onClick={openHostModal}>
                Añadir presentador
              </Button>
            </Form.Item>
          ) : null}
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
