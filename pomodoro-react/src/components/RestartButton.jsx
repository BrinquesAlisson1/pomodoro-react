import React from "react";
export default function RestartButton({ onClick }) {
  return (
    <button className="restart" onClick={onClick}>
      RESTART
    </button>
  );
}
