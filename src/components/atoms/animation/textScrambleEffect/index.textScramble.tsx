import React, { useRef, useState, useEffect } from "react";
import { TextScrambleContainer } from "./index.textScramble.style";

type TextScrambleType = {
  option?: {
    time?: number;
  };
  phrases: string[];
};

export const TextScramble = ({ phrases, option: { time = 1000 } = {} }: TextScrambleType) => {
  const span = useRef(null);
  const [activePhrase, setActivePhrase] = useState(0);
  const lastPhrase = activePhrase === 0 ? phrases.length - 1 : activePhrase - 1;
  const wordLenght = Math.max(phrases[activePhrase].length, phrases[lastPhrase].length);
  const chars = "____----`!@#$%^&*()_+=~/?><}{[]";

  useEffect(() => {
    let frame = 0;
    let queue: { from: string; to: string; start: number; end: number }[] = [];

    const updateStart: any = setInterval(() => {
      update();
    }, 10);

    for (let i = 0; i < wordLenght; i++) {
      const from = phrases[lastPhrase][i] || "";
      const to = phrases[activePhrase][i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end });
    }
    const update = () => {
      let char = "";
      let output = "";

      for (let i = 0, n = queue.length; i < n; i++) {
        let { from, to, start, end } = queue[i];
        if (frame >= end) output += to;
        else if (frame >= start) {
          if (!char || Math.random() < 0.28) char = chars[Math.floor(Math.random() * chars.length)];
          output += `<span class="textScrambleSign">${char}</span>`;
        } else output += from;
      }
      if (!!span.current) span.current.innerHTML = output;
      frame++;
    };

    return () => {
      clearInterval(updateStart);
    };
  }, [wordLenght, phrases, lastPhrase, activePhrase]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhrase((activePhrase + 1) % phrases.length);
    }, time);

    return () => {
      clearInterval(interval);
    };
  }, [time, phrases, activePhrase]);

  return (
    <>
      <TextScrambleContainer ref={span}></TextScrambleContainer>
    </>
  );
};