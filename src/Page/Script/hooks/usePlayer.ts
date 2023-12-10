import { useProgrammingContext } from "@/Page/Programming/hooks/useProgrammingContext";
import { useEffect, useRef, useState } from "react";

// ... (importaciones y código)

// ... (importaciones y código)

export const usePlayer = ({ playlist = [] }: { playlist: string[] }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const nextVideoRef = useRef<HTMLVideoElement | null>(null);
  const { autoPlayAll, currentVideoIndex, handleVideoIndex, handlePlay } =
    useProgrammingContext();

  const loadNextVideo = (nextIndex: number) => {
    if (nextIndex < playlist.length) {
      const url = `${import.meta.env.VITE_BASE_URL}/${playlist[nextIndex]}`;
      nextVideoRef.current = document.createElement("video");
      nextVideoRef.current.src = url;
      nextVideoRef.current.preload = "auto";
      nextVideoRef.current.load();
    }
  };

  const playCurrentVideo = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
      } catch (error) {
        console.error("Error al reproducir el video:", error);
      }
    }
  };

  const initializeVideo = async () => {
    if (playlist.length > 0 && videoRef.current) {
      try {
        videoRef.current.src = "";
        await videoRef.current.load();

        if (autoPlayAll && currentVideoIndex < playlist.length) {
          const url = `${import.meta.env.VITE_BASE_URL}/${
            playlist[currentVideoIndex]
          }`;
          videoRef.current.src = url;
          await videoRef.current.load();
          videoRef.current.addEventListener("ended", handleVideoEnd);

          // Iniciar la carga en segundo plano del próximo video
          await loadNextVideo(currentVideoIndex + 1);

          // Reproducir el video actual
          await playCurrentVideo();
        }
      } catch (error) {
        console.error("Error al cargar o reproducir el video:", error);
      }
    }
  };

  useEffect(() => {
    initializeVideo();
  }, [playlist, currentVideoIndex, autoPlayAll]);

  const handleVideoEnd = async () => {
    if (autoPlayAll && currentVideoIndex < playlist.length - 1) {
      const newIndex = currentVideoIndex + 1;
      handleVideoIndex(newIndex);

      // Cambiar a la próxima instancia de video cargada en segundo plano
      if (nextVideoRef.current) {
        if (videoRef.current) {
          videoRef.current.src = nextVideoRef.current.src;

          // Esperar a que el video actual se cargue completamente antes de reproducir
          await new Promise((resolve) => {
            videoRef.current?.addEventListener("loadeddata", resolve, {
              once: true,
            });
            videoRef.current?.load();
          });

          // Reproducir el video actual
          videoRef.current.play().catch((error) => {
            console.error("Error al reproducir el video:", error);
          });
        }

        // Iniciar la carga en segundo plano del próximo próximo video
        await loadNextVideo(newIndex + 1);
      }
    } else {
      // Si estamos en el último video, puedes detener la reproducción o realizar alguna otra acción
      handlePlay(false);
    }
  };

  return {
    handleVideoEnd,
    handlePlay,
    handleVideoIndex,
    autoPlayAll,
    currentVideoIndex,
    videoRef,
  };
};
