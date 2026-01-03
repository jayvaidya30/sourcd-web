"use client";
import React, { useState, useEffect } from "react";

const texts = ["WebDev", "DevOps", "GSOC", "Web3"];
const intervalDuration = 2000; // Time in milliseconds for each text to show

const ChangingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, intervalDuration);

    //Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
      <span className="text-blue-600 transition-opacity duration-700 ease-in-out text-7xl font-medium">
        {/* The text changes based on the currentIndex state */}
        {texts[currentIndex]}
      </span>
  );
};

export default ChangingText;
