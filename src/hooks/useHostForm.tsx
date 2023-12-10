/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Form, UploadFile } from "antd";
import { useHostMutation } from "./useHostQuery";

interface UseHostFormProps {
  close: () => void;
}

export const useHostForm = ({ close }: UseHostFormProps) => {
  const { mutateAsync: upload } = useHostMutation();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({
    fileList: newFileList,
  }: {
    fileList: UploadFile[];
  }) => {
    setFileList(newFileList);
  };

  const handleSubmit = async (value: any) => {
    const formData = new FormData();

    if (fileList.length === 0) return;

    formData.append("file", fileList[0].originFileObj as Blob);
    formData.append("sex", value.sex);
    setIsLoading(true);
    try {
      const host = await upload(formData);
      console.log(host);
      close();
      form.resetFields();
    } catch (error) {
      console.log("uploading host error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    fileList,
    isLoading,
    handleChange,
    handleSubmit,
  };
};
