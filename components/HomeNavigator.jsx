"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const stops = [
  {
    title: "About me",
    number: "01",
    description: "Where I'm from, what I enjoy, and a few things I probably talk about too much.",
    href: "/about",
    action: "A little more about me",
  },
  {
    title: "My work",
    number: "02",
    description: "A short introduction to my PhD and some of the projects I've worked on.",
    href: "/work",
    action: "See my work",
  },
  {
    title: "Things I believe in",
    number: "03",
    description: "Lines I've kept close, including a few from games, music and anime.",
    href: "/about#quotes",
    action: "Read the quotes",
  },
  {
    title: "Get in touch",
    number: "04",
    description: "Email, GitHub, Instagram, and the other places you can find me.",
    href: "#contact",
    action: "Find my details",
  },
];

export default function HomeNavigator() {
  const [active, setActive] = useState(0);
  const startX = useRef(null);
  const current = stops[active];
  const go = (offset) => setActive((index) => Math.max(0, Math.min(stops.length - 1, index + offset)));

  return (
    <div className="home-explorer" id="explore" aria-label="Explore this website" role="region">
      <div className="home-explorer-topline">
        <span>Have a look around</span>
        <span className="home-explorer-count">{current.number} <span>/</span> 04</span>
      </div>
      <div
        className="home-explorer-stage"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") { event.preventDefault(); go(1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); go(-1); }
        }}
        onTouchStart={(event) => { startX.current = event.changedTouches[0]?.clientX ?? null; }}
        onTouchEnd={(event) => {
          const x = event.changedTouches[0]?.clientX;
          if (x != null && startX.current != null && Math.abs(x - startX.current) > 55) go(x < startX.current ? 1 : -1);
          startX.current = null;
        }}
        aria-label="One section at a time. Use the Previous and Next buttons or left and right arrow keys."
      >
        <article className="home-explorer-card" key={current.number}>
          <div className="home-explorer-card-body">
            <span className="home-explorer-number">{current.number}</span>
            <h2>{current.title}</h2>
            <p>{current.description}</p>
            <Link className="home-explorer-link" href={current.href}>
              {current.action} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>
      </div>
      <div className="home-explorer-controls">
        <button type="button" onClick={() => go(-1)} disabled={active === 0} aria-label="Previous section">← <span>Previous</span></button>
        <div className="home-explorer-steps" role="group" aria-label="Choose a section">
          {stops.map((stop, index) => <button
            type="button" key={stop.number}
            className={index === active ? "is-selected" : ""}
            aria-label={`Show ${stop.title}`}
            aria-current={index === active ? "step" : undefined}
            onClick={() => setActive(index)}
          />)}
        </div>
        <button type="button" onClick={() => go(1)} disabled={active === stops.length - 1} aria-label="Next section"><span>Next</span> →</button>
      </div>
    </div>
  );
}
