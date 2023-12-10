import { usePlayer } from "@/Page/Script/hooks";
import { Button } from "antd";
import styled from "styled-components";

const ContainerPlayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export function ProgrammingPlayer({ playlist = [] }: { playlist: string[] }) {
  const {
    handleVideoEnd,
    videoRef,
    autoPlayAll,
    currentVideoIndex,
    handleVideoIndex,
    handlePlay,
  } = usePlayer({
    playlist,
  });

  const handlePlayVideo = async () => {
    handleVideoIndex(0);
    handlePlay(true);
  };

  const handlePause = async () => {
    handlePlay(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <ContainerPlayer>
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
                  playlist[currentVideoIndex]
                }`
              : undefined
          }
          type="video/mp4"
        />
      </video>
      <ContainerButton>
        <Button type="primary" onClick={handlePlayVideo}>
          Reproducir
        </Button>
        <Button type="primary" onClick={handlePause}>
          Pausar
        </Button>
      </ContainerButton>
    </ContainerPlayer>
  );
}

export default ProgrammingPlayer;
