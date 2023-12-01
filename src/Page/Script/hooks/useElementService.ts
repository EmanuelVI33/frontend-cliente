import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createElement } from "../api/elementService";

export const useElementMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createElement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["element"] });
    },
  });
};
