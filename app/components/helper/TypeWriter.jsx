"use client";
import { Typewriter } from "react-simple-typewriter";

export default function TypeWriter() {
  return (
    <Typewriter
      words={["Frontend Developer", "MERN Stack Developer", "Web Developer"]}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={100}
      deleteSpeed={70}
    />
  );
}
