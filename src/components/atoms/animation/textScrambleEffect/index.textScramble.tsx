import React, { useRef } from "react";

type TextScrambleType = {
  option?: {
    time?: number;
  };
  phrases: string[];
};

export const TextScramble = ({ phrases, option: { time = 1000 } = {} }: TextScrambleType) => {
  const span = useRef(null);

  // const [activePhrase, setActivePhrase] = useState(0);
  // const lastPhrase = activePhrase === 0 ? phrases.length - 1 : activePhrase - 1;
  // let wordLenght = Math.max(phrases[activePhrase].length, phrases[lastPhrase].length);
  // const chars = "____----`!@#$%^&*()_+=~/?><}{[]";

  // let queue: any = [];

  // useEffect(() => {
  //   for (let i = 0; i < wordLenght; i++) {
  //     const from = phrases[lastPhrase][i] || "";
  //     const to = phrases[activePhrase][i] || "";
  //     queue.push({ from, to });
  //   }
  //   console.log(queue);

  //   for (let i = 0, n = queue.length; i < n; i++) {
  //     // let { from, to, start, end } = queue[i];
  //     console.log(chars[Math.floor(Math.random() * chars.length)]);

  //     // console.log(from);
  //     // console.log(to);
  //     // console.log(start);
  //     // console.log(end);
  //   }
  // }, [phrases, queue, test, lastPhrase, activePhrase]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActivePhrase((activePhrase + 1) % phrases.length);
  //   }, time);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [time, phrases, activePhrase]);

  return (
    <>
      <span ref={span}>ok</span>
    </>
  );
};
