
/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs, { Dayjs } from "dayjs";

import { QueryResult } from "@/interfaces";


import { useCreateProgrammingMutation, useDeleteProgrammingMutation, useProgrammingQuery, useUpdateProgrammingMutation } from ".";
import { useHostQuery } from "@/hooks/useHostQuery";
import {useProgramContext } from "@/Page/Program/hooks";
import { useFormModal } from "../context";


export const useProgramming = () => {
  const {data: hosts} = useHostQuery();

  const { mutate: createProgramming } = useCreateProgrammingMutation();
  const { mutate: deleteProgramming } = useDeleteProgrammingMutation();
  const { mutate: updateProgramming } = useUpdateProgrammingMutation();

  const {getStorageProgram} = useProgramContext();
  const programId = getStorageProgram()!.id!
  const {isLoading, error, data: programming = [] } = useProgrammingQuery(programId);

  const { isAdd,closeModal  } = useFormModal();

  console.log(`Lista de programming: ${programming}`);


  const handleSubmit = (value:any) => {
    
    if (value["duration"] instanceof dayjs) {
      value.duration = (value["duration"] as Dayjs).format("HH:mm:ss");
    }
    if (value["startTime"] instanceof dayjs) {
      value.startTime = (value["startTime"] as Dayjs).format("HH:mm:ss");
    }
    value.programId = programId;
    // console.log(value);
    if (isAdd) {
     createProgramming(value);
    } else {
      updateProgramming(value);
    }

    closeModal();
  };


  const handleDeleteProgramming = (id:number) => {
    // console.log(id);
    deleteProgramming(id);
  };

  return {
    programming,
    hosts,
    isLoading,
    error,
    handleSubmit,
    handleDeleteProgramming,

  };
};
