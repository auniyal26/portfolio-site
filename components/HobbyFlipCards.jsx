"use client";

import { useState } from "react";

function FlipCard({item}) {
  const [flipped, setFlipped] = useState(false);
  return (
    <article
      className={`interest-flip-card ${flipped ? "is-flipped" : ""}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="interest-flip-inner">
        <button
          className="interest-flip-front" type="button"
          onClick={() => setFlipped(true)}
          aria-label={`Show favourites for ${item.title}`}
          aria-expanded={flipped}
          tabIndex={flipped ? -1 : 0}
        >
          <span className="interest-flip-index">{item.number} / OUTSIDE WORK</span>
          <div className="interest-flip-front-copy">
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </div>
          <span className="interest-flip-hint">Favourites <span aria-hidden="true">↗</span></span>
        </button>
        <div className="interest-flip-back">
          <span className="interest-flip-index">{item.label}</span>
          <h3>{item.title}</h3>
          <div className="interest-flip-favourites" aria-label={`${item.title}: ${item.label}`}>
            {item.favourites.map(favourite => <span key={favourite}>{favourite}</span>)}
          </div>
          {item.link && <a tabIndex={flipped ? 0 : -1} className="interest-flip-link" href={item.link.href} target="_blank" rel="noopener noreferrer">{item.link.label} ↗</a>}
          <button type="button" tabIndex={flipped ? 0 : -1} className="interest-flip-back-button" onClick={() => setFlipped(false)} aria-label={`Show ${item.title} introduction`}>Back <span aria-hidden="true">↶</span></button>
        </div>
      </div>
    </article>
  );
}

export default function HobbyFlipCards({items}) {
  return <div className="interests-grid interests-flip-grid">{items.map(item => <FlipCard key={item.number} item={item}/>)}</div>;
}
