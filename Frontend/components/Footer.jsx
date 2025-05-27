"use client";
import { useState, useEffect } from 'react';

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // On mount, check if html has 'dark' class
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      setDarkMode(true);
    }
  }, []);

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
    <button
      onClick={toggleDarkMode}
      style={{
        position: "fixed",
        right: "1rem",
        bottom: "1rem",
        padding: "0.5rem 1rem",
        fontSize: "0.85rem",
        borderRadius: "0.375rem",
        background: darkMode ? "#166534" : "#bbf7d0",
        color: darkMode ? "#bbf7d0" : "#166534",
        border: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        cursor: "pointer",
        zIndex: 1000,
      }}
      aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {darkMode ? "🫖 Light" : "🍵 Dark"}
    </button>
  );
}