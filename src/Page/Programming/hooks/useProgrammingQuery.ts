import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createProgramming,
  getProgramsByProgramming,
} from "../api/programming";

export const useProgrammingQuery = (id: number) => {
  return useQuery({
    queryKey: ["programming"],
    queryFn: () => getProgramsByProgramming(id),
  });
};

export const useProgrammingMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProgramming,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["programming"] });
    },
  });
};
