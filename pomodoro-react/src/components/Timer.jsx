import React from "react";
export default function Timer({ seconds }) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return (
    <h2 className="timer">
      {minutes}:{secs}
    </h2>
  );
}
