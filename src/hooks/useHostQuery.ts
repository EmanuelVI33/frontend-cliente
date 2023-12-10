import { getHosts, uploadHost } from "@/api/hostApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useHostQuery = () => {
  return useQuery({
    queryKey: ["host"],
    queryFn: getHosts,
  });
};

export const useHostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadHost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["host"] });
    },
  });
};





