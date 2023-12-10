import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createProgramming,
  deleteProgramming,
  getProgramsByProgramming,
  updateProgramming,
} from "../api/programming";

export const useProgrammingQuery = (id: number) => {
  return useQuery({
    queryKey: ["programming"],
    queryFn: () => getProgramsByProgramming(id),
  });
};

export const useCreateProgrammingMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProgramming,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["programming"] });
    },
  });
};

export const useDeleteProgrammingMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProgramming,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["programming"] });
    },
  });
};

export const useUpdateProgrammingMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProgramming,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["programming"] });
    },
  });
};
