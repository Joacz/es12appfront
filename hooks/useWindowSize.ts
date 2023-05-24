import { useEffect, useState } from 'react';


export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{ x: number; y: number; }>();


  const getWindowSize = (width: number, height: number) => {
    setWindowSize({ x: width, y: height });
  };

  useEffect(() => {
    getWindowSize(window.innerWidth, window.innerHeight);
  }, []);

  useEffect(() => {
    addEventListener('resize', () =>
      getWindowSize(window.innerWidth, window.innerHeight)
    );
  }, []);

  return windowSize;

};