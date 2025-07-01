import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import StartButton from "./components/StartButton";
import PauseButton from "./components/PauseButton";
import RestartButton from "./components/RestartButton";
import "./index.css";

export default function App() {
  const [seconds, setSeconds] = useState(1500);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleRestart = () => {
    setIsActive(false);
    setSeconds(1500);
  };

  return (
    <div className="app">
      <Header />
      <Timer seconds={seconds} />
      <div className="buttons">
        <StartButton onClick={handleStart} />
        <PauseButton onClick={handlePause} />
        <RestartButton onClick={handleRestart} />
      </div>
    </div>
  );
}
