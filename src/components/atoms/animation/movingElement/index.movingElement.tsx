import React, { useRef, useEffect } from "react";
import { MovingElementBox } from "./index.movingElement.style";

export const MovingElement = ({ children }: any) => {
  const box = useRef(null);

  useEffect(() => {
    const el = box.current;
    const elWidth = el.offsetWidth;
    const elHeight = el.offsetHeight;
    const ElMoviePrecent: number[] = [];
    const widthWindow = window.innerWidth;
    const widthHeight = window.innerHeight;
    const allElMovie = el.querySelectorAll(".movieEL");
    allElMovie.forEach(() => ElMoviePrecent.push(Math.floor(Math.random() * 100)));

    console.log(ElMoviePrecent);

    const handleMousemove: any = (event: any) => {
      const { x, y } = event;

      allElMovie.forEach(
        (elMovie: any, i: number) =>
          (elMovie.style.transform = `translate(${100 - (((-widthWindow + elWidth + x) * ElMoviePrecent[i]) / elWidth) * 2}%, ${
            100 - (((-widthHeight + elHeight + y) * ElMoviePrecent[i]) / elHeight) * 2
          }%)`)
      );
    };

    const movingElementEvent = el.addEventListener("mousemove", (e: any) => {
      clearTimeout(handleMousemove);
      setTimeout(() => {
        handleMousemove(e);
      }, 10);
    });

    return () => {
      movingElementEvent.removeEventListener("mousemove", (e: any) => {
        clearTimeout(handleMousemove);
        setTimeout(() => {
          handleMousemove(e);
        }, 10);
      });
    };
  }, [box]);

  return <MovingElementBox ref={box}>{children}</MovingElementBox>;
};
