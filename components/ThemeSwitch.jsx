"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "alankar-site-mode";

export default function ThemeSwitch() {
  const [mode, setMode] = useState("light");
  const [busy, setBusy] = useState(false);
  const buttonRef = useRef(null);
  const timers = useRef([]);

  useEffect(() => {
    const current = document.documentElement.dataset.mode === "dark" ? "dark" : "light";
    setMode(current);
    const syncMode = () => setMode(document.documentElement.dataset.mode === "dark" ? "dark" : "light");
    window.addEventListener("site-mode-change", syncMode);
    const onStorage = (event) => {
      if (event.key === STORAGE_KEY) {
        document.documentElement.dataset.mode = event.newValue === "dark" ? "dark" : "light";
        syncMode();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("site-mode-change", syncMode);
      window.removeEventListener("storage", onStorage);
      timers.current.forEach(clearTimeout);
    };
  }, []);

  function changeMode() {
    if (busy) return;
    const next = mode === "light" ? "dark" : "light";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const apply = () => {
      root.dataset.mode = next;
      setMode(next);
      window.dispatchEvent(new Event("site-mode-change"));
      try { window.localStorage.setItem(STORAGE_KEY, next); } catch { /* Storage may be blocked. */ }
    };

    if (reduced) { apply(); return; }

    const rect = buttonRef.current?.getBoundingClientRect();
    root.style.setProperty("--wipe-x", `${rect ? rect.left + rect.width / 2 : window.innerWidth / 2}px`);
    root.style.setProperty("--wipe-y", `${rect ? rect.top + rect.height / 2 : 40}px`);
    root.style.setProperty("--wipe-color", next === "dark" ? "#0b101b" : "#f7f4eb");
    root.classList.add("mode-transitioning");
    setBusy(true);
    timers.current.push(window.setTimeout(apply, 420));
    timers.current.push(window.setTimeout(() => {
      root.classList.remove("mode-transitioning");
      setBusy(false);
    }, 910));
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      className="mode-switch"
      onClick={changeMode}
      disabled={busy}
      aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
      aria-pressed={mode === "dark"}
      title="Switch color theme"
    >
      <span className="mode-switch-indicator" aria-hidden="true" />
      <span className={`mode-switch-option ${mode === "light" ? "is-active" : ""}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="3.4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        Light
      </span>
      <span className={`mode-switch-option ${mode === "dark" ? "is-active" : ""}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><path d="M20.3 15.5A8.3 8.3 0 0 1 8.5 3.7 8.3 8.3 0 1 0 20.3 15.5Z"/></svg>
        Dark
      </span>
    </button>
  );
}
