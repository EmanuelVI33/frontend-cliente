import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProgram, deleteProgram, getPrograms, updateProgram } from "../api/program";

export const useProgramQuery = () => {
  return useQuery({
    queryKey: ["program"],
    queryFn: getPrograms,
  });
};

export const useCreateProgramMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProgram,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["program"] });
    },
  });
};

export const useUpdateProgramMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProgram,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["program"] });
    },
  });
};

export const useDeleteProgramMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProgram,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["program"] });
    },
  });
};


