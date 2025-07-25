import React from "react";
import "./bubble-logo.css";

export default function BubbleLogo() {
  return (
    <div className="bubble-container mx-auto my-8">
      <video
        autoPlay
        loop
        muted
        className="bubble-bg"
        playsInline
      >
        <source src="/bubbles.mp4" type="video/mp4" />
      </video>
      <img src="/aft.svg" alt="Logo" className="logo" />
    </div>
  );
} 