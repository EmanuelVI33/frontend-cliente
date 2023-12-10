import { createContext, useEffect, useState } from "react";

interface ProgrammingContextProps {
  programmingId: string | undefined;
  autoPlayAll: boolean;
  currentVideoIndex: number;
  setProgrammingId: (id: string | undefined) => void;
  handlePlay: (play: boolean) => void;
  handleVideoIndex: (index: number) => void;
  // setCurrentVideoIndex: (id: number) => void;
  // setAutoPlayAll: (id: boolean) => void;
}

const ProgrammingContext = createContext<ProgrammingContextProps | undefined>(
  undefined
);

const LOCAL_STORAGE_KEY = "selectedProgramming";

const ProgrammingProvider = ({ children }: { children: React.ReactNode }) => {
  const [programmingId, setProgrammingId] = useState<string | undefined>(() => {
    const storedProgramming = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedProgramming ? JSON.parse(storedProgramming) : null;
  });

  const [autoPlayAll, setAutoPlayAll] = useState(false); // Reproducción automática
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  const handlePlay = (play = false) => {
    setAutoPlayAll(play);
  };

  const handleVideoIndex = (index = 0) => {
    setCurrentVideoIndex(index);
  };

  useEffect(() => {
    if (programmingId) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(programmingId));
    }
  }, [programmingId]);

  return (
    <ProgrammingContext.Provider
      value={{
        programmingId,
        autoPlayAll,
        currentVideoIndex,
        setProgrammingId,
        handlePlay,
        handleVideoIndex,
      }}
    >
      {children}
    </ProgrammingContext.Provider>
  );
};

export { ProgrammingProvider };

export default ProgrammingContext;
