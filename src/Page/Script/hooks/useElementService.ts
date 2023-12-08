import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createElement,
  getElementsByProgramming,
  triggerElement,
} from "../api/elementService";

const key = "element";

export const useElementMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createElement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
};

export const useElementQuery = (id: string | undefined) => {
  return useQuery({
    queryKey: [key],
    queryFn: () => getElementsByProgramming(id),
  });
};

export const useElementTriggerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: triggerElement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
};
