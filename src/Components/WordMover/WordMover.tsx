import React, { useEffect, useRef } from 'react';
import { useWordMoverContext } from './wordContext2';

interface WordMoverProps {
  word: string;
  duration: number;
}

const WordMover: React.FC<WordMoverProps> = ({ word, duration }) => {
  const requestRef = useRef<number>();
  const { position, setPosition, isPaused, toggleAnimation } = useWordMoverContext();

  const animate = (timestamp: number) => {
    if (!isPaused) {
      const step = (window.innerWidth + word.length * 10) / duration * 16.67;
        setPosition((prevPosition) => {
            if (prevPosition != undefined) {
                if (prevPosition <= -word.length * 10) {
                    return window.innerWidth;
                }
                return prevPosition - step;
            }
});
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!isPaused) {
      requestRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [duration, isPaused]);

  const wordStyle: React.CSSProperties = {
    display:"flex",
   
    whiteSpace: 'nowrap',
      transform: `translateX(${position}px)`,
    fontFamily: "monospace",
  
  };

  return (
    <>
      <div className="">
      <div style={wordStyle}>{word}</div>
      </div>
    
    </>
  );
};

export default WordMover;
