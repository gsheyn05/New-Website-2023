import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';


//Very intresting wrote this with aid of ChatGpt to see how it understand context
//It was able get alot of the way there but struggled to deal with context and using useEffects
//I had to edit about 20 lines of code to make it functional(specifically type inferences 
//and it not understanding how to take advantage of useEffect) 
//and prompt it around 10 times
//But still very cool for boiler plating

interface WordMoverContextValue {
  word: string;
  position: number | undefined;
  setPosition: React.Dispatch<React.SetStateAction<number | undefined>>;
  setWord: React.Dispatch<React.SetStateAction<string>>
  isPaused: boolean;
  toggleAnimation: () => void;
}

const WordMoverContext = createContext<WordMoverContextValue>({
  word: "",
  position: 0,
  setPosition: () => { },
  setWord: () => {},
  isPaused: false,
  toggleAnimation: () => {},
});

interface Props {
    children: React.ReactNode;
  }
export const WordMoverProvider: React.FC<Props> = ({ children }) => {
  //const initialPosition = useClientSideState<number>(window.innerWidth);
  const [position, setPosition] = useState<number|undefined>();
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [word,setWord]=useState<string>("Welcome to the site")
  const toggleAnimation = useCallback(() => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  }, []);

  useEffect(() => {
    setPosition(window.innerWidth);
    
  }, []);

  return (
    <WordMoverContext.Provider
      value={{word, position, setPosition,setWord, isPaused, toggleAnimation }}
    >
      {children}
    </WordMoverContext.Provider>
  );
};

export const useWordMoverContext = () => {
  return useContext(WordMoverContext);
};
