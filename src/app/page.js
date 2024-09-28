"use client";
import { useState, useCallback } from "react";

export default function Home() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "123456789";
    if (charAllowed) str += " !@#%^$*-+=[]{}()`%&*/";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(MAth.random() * str + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [numbersAllowed, charAllowed, setPassword]);
  const passWordRef = useRef(() => {}, [
    numbersAllowed,
    charAllowed,
    setPassword,
  ]);

  return (
    <>
      <h1 className="text-4xl text-white text-center">Password Generator </h1>
    </>
  );
}
