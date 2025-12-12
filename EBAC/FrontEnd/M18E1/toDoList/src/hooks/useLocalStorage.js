import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : (typeof initialValue === "function" ? initialValue() : initialValue);
    } catch (err) {
      console.error("useLocalStorage read error:", err);
      return typeof initialValue === "function" ? initialValue() : initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (err) {
      console.error("useLocalStorage write error:", err);
    }
  }, [key, state]);

  return [state, setState];
}