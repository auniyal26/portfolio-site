"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const elements = [...document.querySelectorAll('[data-reveal="section"]')];
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add("is-revealed");
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -8% 0px" });

    elements.forEach((element) => {
      // Content already on screen should not disappear briefly on hydration.
      if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
        element.classList.add("is-revealed");
      } else {
        observer.observe(element);
      }
    });
    root.classList.add("motion-ready");
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
