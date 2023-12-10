/* eslint-disable @typescript-eslint/no-explicit-any */
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
} from "antd";

import { PlusOutlined } from "@ant-design/icons";
import { useModal } from "../context";
import { useProgram } from "../hooks";
import { buttonItemLayout, formItemLayout, toUpperCase } from "@/constant";

const { TextArea } = Input;

const ProgramForm: React.FC = () => {
  const { isAdd, form, openHostModal } = useModal();
  const { hosts, handleSubmit, handleChangeFile, fileList } = useProgram();

  return (
    <>
      <Form form={form} {...formItemLayout} onFinish={handleSubmit}>
        {!isAdd ? (
          <Form.Item name="id" hidden>
            <Input />{" "}
          </Form.Item>
        ) : null}
        <Form.Item
          label="Nombre del Programa"
          name="name"
          rules={[
            {
              required: true,
              message: "El nombre del programa no puede estar vacío",
            },
          ]}
          normalize={toUpperCase}
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

        {isAdd ? (
          <Form.Item label="Portada" name="cover">
            <Upload
              accept="image/*"
              beforeUpload={() => false}
              listType="picture-card"
              fileList={fileList}
              onChange={handleChangeFile}
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
        ) : null}

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
            {isAdd ? "Crear Programa" : "Modificar Programa"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ProgramForm;
