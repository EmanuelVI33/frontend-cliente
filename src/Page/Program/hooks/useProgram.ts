import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { UploadFile } from "antd";

import { ProgramModel } from "../model";
import { useProgramQuery } from ".";
import { useCreateProgramMutation, useDeleteProgramMutation, useUpdateProgramMutation } from "./useProgramQuery";
import { useHostQuery } from "@/hooks/useHostQuery";
import { useModal } from "../context";

export const useProgram = () => {
  const {data: hosts} = useHostQuery();
  
  const { mutate: createProgram } = useCreateProgramMutation();
  const { mutate: deleteProgram } = useDeleteProgramMutation();
  const { mutate: updateProgram } = useUpdateProgramMutation();
  
  const {isLoading, isError, error, data:programs} = useProgramQuery();
  const { isAdd,closeModal  } = useModal();

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChangeFile = ({
    fileList: newFileList,
  }: {
    fileList: UploadFile[];
  }) => {
    setFileList(newFileList);
  };

  const handleSubmit = (value:ProgramModel) => {
    // console.log(value);
    if (value["duration"] instanceof dayjs) {
      value.duration = (value["duration"] as Dayjs).format("HH:mm:ss");
    }

    if (isAdd) {
      if (fileList.length) return;
      const formData = new FormData();
      formData.append("cover", fileList[0].originFileObj as Blob);
  
      formData.append("data", JSON.stringify(value));
     createProgram(formData);
    } else {
      console.log(value);
      updateProgram(value);
    }

    closeModal();
    
  };

  const handleDeleteProgram = (id:number) => {
    // console.log(id);
    deleteProgram(id);
  };
  
 
  return {
    handleSubmit,
    handleDeleteProgram,
    handleChangeFile,
    
    isLoading,
    isError,
    programs,
    error,
    hosts,
    fileList
  };
};
