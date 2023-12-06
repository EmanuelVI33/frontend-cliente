import { QueryClient } from "@tanstack/react-query";

export function getEventGeneraElement(queryKey: string) {
  return new Promise((resolve, reject) => {
    const [_key] = queryKey;
    const queryClient = new QueryClient();
    const eventSource = new EventSource("dfgd");

    eventSource.addEventListener("SUCCESS", (e) => {
      const data = JSON.parse(e.data);
      if (e.lastEventId === "END") {
        queryClient.setQueryData(_key, data);
        eventSource.close();
        resolve(data); // Resolve promise with data
      } else {
        if (data) {
          queryClient.setQueryData(_key, data);
        }
      }
    });

    eventSource.addEventListener("error", (e) => {
      eventSource.close();
      reject(e); // Reject promise with error
    });
  });
}
