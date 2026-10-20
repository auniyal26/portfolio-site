"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  {
    theme: "Possibility",
    quote: "Act like nothing is guaranteed. Work like everything is possible.",
    credit: "Alankar Uniyal",
    reflection: "Nothing is promised, but I still want to give myself every chance to do something worthwhile.",
    image: "/quotes/alankar-possibility.webp", fallback: "/quotes/alankar-possibility.svg",
    alt: "Portrait of Alankar Uniyal", imageLabel: "ALANKAR",
  },
  {
    theme: "Learning from success",
    quote: "If you only analyze failures, you become good at avoiding mistakes. If you also analyze successes, you become good at repeating excellence.",
    credit: "Alankar Uniyal",
    reflection: "I want to understand the things that worked, not just remember the things that didn't.",
    image: "/quotes/alankar-excellence.webp", fallback: "/quotes/alankar-excellence.svg",
    alt: "Another portrait of Alankar Uniyal", imageLabel: "ALANKAR",
  },
  {
    theme: "Humility",
    quote: "Even monkeys fall from trees.",
    credit: "Japanese proverb",
    reflection: "I can know something well and still get it wrong. That's not a reason to stop trying.",
    image: "/quotes/monkey.svg", alt: "Japanese-style illustration of a monkey and a tree", imageLabel: "JAPANESE PROVERB",
  },
  {
    theme: "Competence",
    quote: "In society, the people with the least abilities tend to complain the most.",
    credit: "Attributed to Kakashi Hatake · Naruto",
    reflection: "Complaining can feel productive. I'd rather put that energy into actually improving something.",
    image: "/quotes/kakashi.webp", alt: "Kakashi Hatake from Naruto", imageLabel: "KAKASHI",
  },
  {
    theme: "Self-belief",
    quote: "All your efforts are pointless if you don't believe in yourself.",
    credit: "Attributed to Might Guy · Naruto",
    reflection: "Self-doubt doesn't disappear because I've worked hard. I still need to trust that I'm capable of learning.",
    image: "/quotes/guy.webp", alt: "Might Guy from Naruto", imageLabel: "MIGHT GUY",
  },
  {
    theme: "Deliberate practice",
    quote: "Don't practice until you get it right. Practice until you can't get it wrong.",
    credit: "On practice and mastery",
    reflection: "One good attempt isn't the same as being able to do it reliably. Guitar reminds me of that constantly.",
    image: "/quotes/slash.webp", alt: "Illustration of a guitarist playing an electric guitar", imageLabel: "GUITAR & PRACTICE",
  },
  {
    theme: "Habit",
    quote: "Practice makes permanent.",
    credit: "A reminder about repetition",
    reflection: "Repetition doesn't automatically make something better. It reinforces whatever I'm doing, good or bad.",
    image: "/quotes/practice-permanent.webp", alt: "JustinGuitar logo, shared by Alankar", imageLabel: "GUITAR PRACTICE",
  },
  {
    theme: "Accountability",
    quote: "Don't be sorry. Be better.",
    credit: "Kratos · God of War",
    reflection: "An apology matters, but what I do differently afterwards matters more.",
    image: "/quotes/kratos.webp", alt: "Kratos from God of War", imageLabel: "GOD OF WAR",
  },
  {
    theme: "Perspective",
    quote: "Sunny days wouldn't be special if it weren't for rain. Joy wouldn't feel so good if it weren't for pain.",
    credit: "50 Cent · Many Men",
    reflection: "The difficult parts of life have changed how I appreciate the good ones.",
    image: "/quotes/rain.svg", alt: "Graphic illustration of sun and rain", imageLabel: "PERSPECTIVE",
  },
];

function QuotePhoto({ item }) {
  const [src, setSrc] = useState(item.image);
  useEffect(() => setSrc(item.image), [item.image]);
  return (
    <img
      key={item.theme}
      src={src}
      alt={src === item.fallback ? "Decorative placeholder for a personal photograph" : item.alt}
      className={`belief-photo ${item.theme === "Habit" ? "belief-photo-logo" : ""}`}
      loading="lazy"
      draggable="false"
      onError={() => { if (item.fallback && src !== item.fallback) setSrc(item.fallback); }}
    />
  );
}

export default function QuoteCarousel() {
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);
  const current = slides[active];
  const move = (by) => setActive(i => (i + by + slides.length) % slides.length);

  useEffect(() => {
    function onKey(event) {
      if (!document.activeElement?.closest("#belief-carousel")) return;
      if (event.key === "ArrowRight") { event.preventDefault(); setActive(i => (i + 1) % slides.length); }
      if (event.key === "ArrowLeft") { event.preventDefault(); setActive(i => (i - 1 + slides.length) % slides.length); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="belief-carousel" id="belief-carousel" role="region" aria-roledescription="carousel" aria-label="Quotes and the reasons they matter to me">
      <div className="belief-carousel-meta"><span>QUOTES</span><span className="belief-count">{String(active + 1).padStart(2, "0")} <span>/</span> {String(slides.length).padStart(2, "0")}</span></div>
      <div className="belief-slide" onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => { const end = event.changedTouches[0]?.clientX; if (touchStart.current !== null && end !== undefined && Math.abs(end - touchStart.current) > 55) move(end < touchStart.current ? 1 : -1); touchStart.current = null; }}>
        <div className="belief-photo-panel"><QuotePhoto key={current.theme} item={current}/><div className="belief-photo-label"><span>{current.imageLabel}</span><span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span></div></div>
        <figure className="belief-quote-panel" key={active} aria-live="polite" aria-atomic="true">
          <span className="belief-topic">{current.theme}</span>
          <blockquote>“{current.quote}”</blockquote>
          <figcaption>{current.credit}</figcaption>
          <div className="belief-personal-note"><span>WHY I LIKE IT</span><p>{current.reflection}</p></div>
        </figure>
      </div>
      <div className="belief-controls">
        <div className="belief-dots" role="group" aria-label="Choose a quote">{slides.map((slide, i) => <button key={slide.theme} type="button" className={`belief-dot ${active === i ? "is-current" : ""}`} aria-label={`Show quote ${i + 1}: ${slide.theme}`} aria-current={active === i ? "true" : undefined} onClick={() => setActive(i)} />)}</div>
        <div className="belief-arrows"><button type="button" aria-label="Previous quote" onClick={() => move(-1)}>←</button><button type="button" aria-label="Next quote" onClick={() => move(1)}>→</button></div>
      </div>
    </div>
  );
}
