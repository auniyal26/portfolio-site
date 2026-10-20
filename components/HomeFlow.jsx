"use client";

import { useEffect } from "react";

/**
 * Homepage's layered scroll: native document scrolling drives the depth.
 * No wheel interception, scroll hijacking, autoplay or animation libraries.
 */
export default function HomeFlow() {
  useEffect(() => {
    const main = document.querySelector(".landing-home");
    if (!main) return;

    const panels = [...main.querySelectorAll(".home-flow-section")];
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const supportsIO = "IntersectionObserver" in window;
    let animationFrame = 0;
    let observer;

    const revealAll = () => {
      panels.forEach(panel => {
        panel.classList.add("is-visible");
        panel.style.removeProperty("--stack-depth");
      });
    };

    const updateDepth = () => {
      animationFrame = 0;
      if (media.matches) return;

      // Only the next panel changes the panel beneath it. This produces
      // the gentle back-of-deck effect while retaining ordinary scrolling.
      const header = document.querySelector(".site-header");
      const headerHeight = header?.getBoundingClientRect().height ?? 84;
      const travel = Math.max(1, window.innerHeight - headerHeight);
      for (let i = 0; i < panels.length; i += 1) {
        const next = panels[i + 1];
        if (!next) continue;
        const nextTop = next.offsetTop - window.scrollY;
        const progress = Math.min(1, Math.max(0, (travel + headerHeight - nextTop) / travel));
        panels[i].style.setProperty("--stack-depth", progress.toFixed(4));
      }
    };

    const schedule = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateDepth);
    };

    const activate = () => {
      if (media.matches) {
        main.classList.remove("home-flow-ready");
        revealAll();
      } else {
        if (!supportsIO) revealAll();
        else {
          observer?.disconnect();
          observer = new IntersectionObserver(entries => {
            entries.forEach(({ target, isIntersecting }) => {
              if (isIntersecting) {
                target.classList.add("is-visible");
                observer.unobserve(target);
              }
            });
          }, { threshold: 0.06, rootMargin: "0px 0px -2% 0px" });
          panels.forEach(panel => {
            const bounds = panel.getBoundingClientRect();
            if (bounds.top < window.innerHeight * 0.92) panel.classList.add("is-visible");
            else observer.observe(panel);
          });
          main.classList.add("home-flow-ready");
        }
        schedule();
      }
    };

    activate();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    window.addEventListener("pageshow", schedule);
    media.addEventListener?.("change", activate);
    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("pageshow", schedule);
      media.removeEventListener?.("change", activate);
    };
  }, []);
  return null;
}
