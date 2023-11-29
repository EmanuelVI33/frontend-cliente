import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProgram, getPrograms } from "../api/program";

export const useProgramQuery = () => {
  return useQuery({
    queryKey: ["program"],
    queryFn: getPrograms,
  });
};

export const useProgramMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProgram,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["program"] });
    },
  });
};
