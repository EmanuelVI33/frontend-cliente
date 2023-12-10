import { useProgrammingContext } from "@/Page/Programming/hooks/useProgrammingContext";
import { useEffect, useRef } from "react";

export const usePlayer = ({ playlist = [] }: { playlist: string[] }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { autoPlayAll, currentVideoIndex, handleVideoIndex, handlePlay } =
    useProgrammingContext();
  // const [currentVideoIndex, handleVideoIndex] = useState(0);

  useEffect(() => {
    console.log(`Ejecuta`);
    const initializeVideo = async () => {
      if (playlist.length > 0 && videoRef.current) {
        try {
          // let index = currentVideoIndex;
          // while (
          //   playlist[currentVideoIndex] === null &&
          //   index > playlist.length
          // ) {
          //   index++;
          // }

          // Limpiar el video actual antes de cargar uno nuevo
          videoRef.current.src = "";
          await videoRef.current.load();
          if (autoPlayAll && currentVideoIndex < playlist.length) {
            // Cargar el siguiente video en la lista de reproducción

            const url = `${import.meta.env.VITE_BASE_URL}/${
              playlist[currentVideoIndex]
            }`;

            console.log(url);

            videoRef.current.src = url;

            // Cargar video
            await videoRef.current.load();

            // Reproducir el video
            videoRef.current.play().catch((error) => {
              console.error("Error al reproducir el video:", error);
            });
          }
        } catch (error) {
          console.error("Error al cargar o reproducir el video:", error);
        }
      }
    };

    initializeVideo();
  }, [playlist, currentVideoIndex, autoPlayAll]);

  const handleVideoEnd = () => {
    if (autoPlayAll && currentVideoIndex < playlist.length - 1) {
      // Reproducir el siguiente video en la lista de reproducción
      const newIndex = currentVideoIndex + 1;
      handleVideoIndex(newIndex);
    }
  };

  return {
    handleVideoEnd,
    handleVideoIndex,
    handlePlay,
    autoPlayAll,
    currentVideoIndex,
    videoRef,
  };
};
