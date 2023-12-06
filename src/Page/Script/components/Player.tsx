import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useScriptContext } from "../hooks";
import { ElementFactory, ElementModel } from "../model";
import { UseQueryResult } from "@tanstack/react-query";

const PlayerContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-color: black;
  color: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MediaContainer = styled.div`
  margin-top: 16px;
`;

const Player = ({ query }: { query: UseQueryResult<any, Error> }) => {
  const { data, isLoading, isError } = query;
  const { selectedElement } = useScriptContext();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playlist, setPlaylist] = useState<ElementModel[]>([]);
  const [autoPlayAll, setAutoPlayAll] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    if (data) {
      const elements = data.map(ElementFactory.createElement);
      setPlaylist(elements);
    }
  }, [data]);

  useEffect(() => {
    const initializeVideo = async () => {
      if (playlist.length > 0 && videoRef.current) {
        try {
          // Limpiar el video actual antes de cargar uno nuevo
          videoRef.current.src = "";
          await videoRef.current.load();
          if (autoPlayAll) {
            // Cargar el siguiente video en la lista de reproducción
            videoRef.current.src = `${import.meta.env.VITE_BASE_URL}/${
              playlist[currentVideoIndex].path
            }`;
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
  }, [playlist, autoPlayAll, currentVideoIndex]);

  const handlePlayAll = async () => {
    setAutoPlayAll(true);
    setCurrentVideoIndex(0);
  };

  const handlePlayIndividual = async () => {
    setAutoPlayAll(false);
    if (selectedElement && videoRef.current) {
      videoRef.current.src = `${import.meta.env.VITE_BASE_URL}/${
        selectedElement.path
      }`;
      await videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.error("Error al reproducir el video:", error);
      });
    }
  };

  const handleVideoEnd = () => {
    if (autoPlayAll && currentVideoIndex < playlist.length - 1) {
      // Reproducir el siguiente video en la lista de reproducción
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    }
  };

  if (isLoading) return <p>Cargando...</p>;

  if (isError) return <p>Error...</p>;

  return (
    <PlayerContainer>
      <h2>Reproductor</h2>
      <MediaContainer>
        <div>
          <video
            ref={videoRef}
            width="320"
            height="320"
            controls
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.play().catch((error) => {
                  console.error("Error al reproducir el video:", error);
                });
              }
            }}
            onEnded={handleVideoEnd}
          >
            <source
              src={
                autoPlayAll && playlist.length > 0
                  ? `${import.meta.env.VITE_BASE_URL}/${
                      playlist[currentVideoIndex].path
                    }`
                  : undefined
              }
              type="video/mp4"
            />
          </video>
        </div>
        <button onClick={handlePlayAll}>Reproducir Todos</button>
        <button onClick={handlePlayIndividual}>Reproducir Individual</button>
      </MediaContainer>
    </PlayerContainer>
  );
};

export default Player;
