import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createElement, getElementsByProgramming } from "../api/elementService";

export const useElementMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createElement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["element"] });
    },
  });
};

export const useElementQuery = (id: number) => {
  return useQuery({
    queryKey: ["element"],
    queryFn: () => getElementsByProgramming(id),
  });
};
