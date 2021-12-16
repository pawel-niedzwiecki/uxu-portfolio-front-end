import React, { useRef, useEffect } from "react";
import { MovingElementBox } from "./index.movingElement.style";

export const MovingElement = ({ children }: any) => {
  const box = useRef(null);

  useEffect(() => {
    const el = box.current;
    const elWidth = el.offsetWidth;
    const elHeight = el.offsetHeight;
    const allElMovie = el.querySelectorAll(".movieEL");

    const handleMousemove = async (event: any) => {
      const { offsetX, offsetY } = event;
      console.log(Math.floor((offsetX * 100) / elWidth));
      allElMovie.forEach((elMovie: any) => (elMovie.style.transform = `translate(-100%, 0%)`));
    };

    const movingElementEvent = el.addEventListener("mousemove", (e: any) => handleMousemove(e));

    return () => {
      movingElementEvent.removeEventListener("mousemove", (e: any) => {
        handleMousemove(e);
      });
    };
  }, [box]);

  return <MovingElementBox ref={box}>{children}</MovingElementBox>;
};
