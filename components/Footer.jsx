"use client";
import { useState, useEffect } from 'react';

export default function Footer() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // On mount, check if html has 'dark' class
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      setDarkMode(true);
    }
  }, []);

  function handleClick() {
    setCount(prev => prev + 1);
  }

  function toggleDarkMode() {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      setDarkMode(false);
    } else {
      html.classList.add('dark');
      setDarkMode(true);
    }
  }

  return (
    <div>
      <p>&copy; Our Company</p>
      <p>
        You have clicked the following button {count} times.{" "}
        <button onClick={handleClick}>Click Me</button>
      </p>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}