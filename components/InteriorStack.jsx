"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Natural-height stacked cards for About and Work. Each panel stays as tall as
 * its contents require. For panels taller than the viewport, a negative sticky
 * top ensures the entire chapter scrolls by before the next panel covers it.
 */
export default function InteriorStack() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.querySelector(".interior-stack");
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let observer;
    let panels = [];

    const collect = () => {
      panels = [...root.children].filter(element =>
        element.classList.contains("stack-panel") &&
        window.getComputedStyle(element).display !== "none"
      );
      [...root.children].forEach(element => {
        if (!panels.includes(element)) {
          element.style.removeProperty("--stack-depth");
          element.style.removeProperty("--panel-stick-top");
          element.style.removeProperty("z-index");
        }
      });
      panels.forEach((element, index) => { element.style.zIndex = String(index + 1); });
    };

    const measure = () => {
      const header = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 84;
      const viewport = window.innerHeight;
      for (const panel of panels) {
        // offsetHeight is the natural (untransformed) content height.
        // A tall panel must be allowed to pass upwards until its bottom is visible.
        const top = Math.min(header, viewport - panel.offsetHeight - 12);
        const next = `${Math.round(top)}px`;
        if (panel.style.getPropertyValue("--panel-stick-top") !== next) {
          panel.style.setProperty("--panel-stick-top", next);
        }
      }
    };

    const update = () => {
      frame = 0;
      if (reduced.matches) {
        panels.forEach(panel => panel.style.removeProperty("--stack-depth"));
        return;
      }
      const header = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 84;
      const travel = Math.max(1, window.innerHeight - header);
      panels.forEach((panel, index) => {
        const nextTop = panels[index + 1]?.getBoundingClientRect().top ?? Infinity;
        const distance = Math.min(490, travel * .82);
        const progress = Math.max(0, Math.min(1, (window.innerHeight - nextTop) / distance));
        panel.style.setProperty("--stack-depth", progress.toFixed(4));
      });
    };

    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    const refresh = () => {
      collect();
      if (observer) {
        observer.disconnect();
        observer.observe(root);
        panels.forEach(panel => observer.observe(panel));
      }
      measure();
      schedule();
    };

    if ("ResizeObserver" in window) {
      observer = new ResizeObserver(() => { measure(); schedule(); });
    }
    refresh();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", refresh, { passive: true });
    window.addEventListener("pageshow", refresh);
    window.addEventListener("site-mode-change", refresh);
    reduced.addEventListener?.("change", refresh);
    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", refresh);
      window.removeEventListener("pageshow", refresh);
      window.removeEventListener("site-mode-change", refresh);
      reduced.removeEventListener?.("change", refresh);
    };
  }, [pathname]);
  return null;
}
