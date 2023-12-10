/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button, Form, Radio, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { buttonItemLayout, formItemLayout } from "@/constant";

import { useHostForm } from "@/hooks/useHostForm";

interface HostFormProps {
  close: () => void;
}

const HostForm: React.FC<HostFormProps> = ({ close }) => {
  const { form, handleSubmit, fileList, handleChange, isLoading } = useHostForm(
    { close }
  );

  return (
    <>
      <Form form={form} {...formItemLayout} onFinish={handleSubmit}>
        <Form.Item label="Portada" name="cover">
          <Upload
            accept="image/*"
            beforeUpload={() => {
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
          label="Sexo"
          name="sex"
          rules={[
            {
              required: true,
              message: "Elegir un sexo para el presentador@",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="M"> Masculino </Radio>
            <Radio value="F"> Femenino </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit" disabled={isLoading}>
            {isLoading ? "Subiendo..." : "Subir presentador"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default HostForm;
