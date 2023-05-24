import { useState, useEffect } from 'react';

export const useVerticalScroll = () => {
  const [scroll, setScroll] = useState(0);

  const onscroll = (t: { scrollY: number; }) => {
    setScroll(t.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => onscroll({ scrollY }));
  }, [scroll]);

  return scroll;

};