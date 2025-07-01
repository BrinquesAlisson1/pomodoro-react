import React from "react";
export default function PauseButton({ onClick }) {
  return (
    <button className="pause" onClick={onClick}>
      PAUSE
    </button>
  );
}
