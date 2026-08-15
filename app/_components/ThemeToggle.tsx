"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "flipbit-theme";

// The theme lives on <html>, put there by the inline script in the layout
// before first paint. This component subscribes to it rather than owning it.
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", onChange);
  return () => {
    listeners.delete(onChange);
    media.removeEventListener("change", onChange);
  };
}

function getSnapshot(): Theme {
  const set = document.documentElement.getAttribute("data-theme");
  if (set === "dark" || set === "light") return set;
  // No manual choice stored: follow the system.
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// The server can't know which theme the inline script picked, so it renders
// nothing and the label fills in on hydration.
function getServerSnapshot(): Theme | null {
  return null;
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function flip() {
    const next: Theme = getSnapshot() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
    notify();
  }

  return (
    <button
      type="button"
      onClick={flip}
      aria-label="Switch colour theme"
      className="font-mono text-[12px] tracking-[0.12em] uppercase text-muted hover:text-text bg-tile rounded-[10px] px-3 py-2 transition-colors duration-140 ease-bit cursor-pointer min-w-16"
    >
      {theme ?? ""}
    </button>
  );
}
