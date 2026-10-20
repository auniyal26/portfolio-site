import InteriorStack from "../../components/InteriorStack";
import HobbyFlipCards from "../../components/HobbyFlipCards";
import ArrowLink from "../../components/ArrowLink";
import QuoteCarousel from "../../components/QuoteCarousel";

export const metadata = {
  title: "About Me",
  description: "A little about Alankar Sunil Uniyal, his roots in Uttarakhand, life in Surat and studies in Shirpur, Erlangen and Mohali.",
};

const path = [
  {
    year: "2018–2022", place: "Shirpur, India", school: "NMIMS University, Shirpur", degree: "BTech · Information Technology",
    heading: "Learning to build things with computers",
    body: "I studied information technology at NMIMS in Shirpur. It gave me the foundations to explore all sorts of questions with code.",
  },
  {
    year: "2022–2025", place: "Erlangen, Germany", school: "FAU Erlangen–Nürnberg", degree: "MSc · Data Science",
    heading: "Finding my way back to biology",
    body: "In Germany I worked with biomedical signals, including electromyography. It helped me connect data science with my interest in the human body.",
  },
  {
    year: "2026–present", place: "Mohali, India", school: "Plaksha University", degree: "PhD · Translational and Computational Medicine",
    heading: "Asking longer-term questions",
    body: "I'm now exploring how physiological information relates to depression and cognition, and how to test those relationships carefully.",
  },
];

const playlist = "https://www.youtube.com/@hash2slash/playlists";

const screenFavourites = ["Friends", "The Big Bang Theory", "House M.D.", "Sherlock", "Breaking Bad", "What If...? (Season 1)"];
const bands = ["Guns N’ Roses", "Linkin Park", "Red Hot Chili Peppers", "AC/DC", "Green Day", "Nirvana"];

const lightInterests = [
  {
    number: "01", title: "Music & guitar",
    copy: "I started playing guitar because I love rock music. These are some of the bands I keep coming back to, and I'm still learning songs that once felt impossible to play.",
    label: "Bands I listen to", favourites: bands,
    link: { href: playlist, label: "My YouTube playlists" },
  },
  {
    number: "02", title: "Shows I love",
    copy: "I like a good character, a clever conversation, and a series I can return to when I don't know what to watch.",
    label: "On my list", favourites: screenFavourites,
  },
  {
    number: "03", title: "Batman, games & anime",
    copy: "I've always been a Batman fan. I'm also into video games and anime, especially stories and characters that stay with me.",
    label: "Particular favourites", favourites: ["Batman", "God of War", "Naruto"],
  },
  {
    number: "04", title: "Cricket & training",
    copy: "Cricket has been a constant. I also enjoy the gym, where the progress is often slow enough to teach you patience.",
    label: "My regulars", favourites: ["Cricket", "Gym"],
  },
  {
    number: "05", title: "Cooking",
    copy: "I like cooking, following a recipe when I need to and improvising when I don't.",
    label: "What I enjoy", favourites: ["Trying recipes", "Improvising"],
  },
];

const darkInterests = [
  {
    number: "01", title: "Guitar & music",
    copy: "I'll play the same passage over and over until it sounds right. And if I'm not playing, I'm probably listening to something.",
    label: "Bands I listen to", favourites: bands,
    link: { href: playlist, label: "My YouTube playlists" },
  },
  {
    number: "02", title: "What I watch",
    copy: "I rewatch things. A lot. Good characters and dialogue are usually enough to pull me back in.",
    label: "Favourites", favourites: screenFavourites,
  },
  {
    number: "03", title: "Batman, games & anime",
    copy: "Batman is a long-standing favourite. Games and anime aren't far behind.",
    label: "Particular favourites", favourites: ["Batman", "God of War", "Naruto"],
  },
  {
    number: "04", title: "Cricket & the gym",
    copy: "After a day spent reading and coding, doing something physical helps. Cricket especially.",
    label: "My regulars", favourites: ["Cricket", "Gym"],
  },
  {
    number: "05", title: "Cooking",
    copy: "Sometimes I follow a recipe. Sometimes I just see what works. Both can go either way.",
    label: "What I enjoy", favourites: ["Trying recipes", "Improvising"],
  },
];

function ModeContent({ mode, children, stack = false }) {
  return <div className={`about-mode-content about-mode-${mode}${stack ? " stack-panel" : ""}`}>{children}</div>;
}

export default function About() {
  return (
    <main id="main-content" className="interior-stack interior-stack-about">
      <InteriorStack />
      <section className="page-hero page-hero-about stack-panel">
        <div className="shell page-hero-grid">
          <div>
            <ModeContent mode="light">
              <p className="eyebrow">ABOUT</p>
              <h1>A little more<br /><em>about me.</em></h1>
              <p className="lead">Where I've been, what interests me, and the things I make time for outside research.</p>
            </ModeContent>
            <ModeContent mode="dark">
              <p className="eyebrow">ABOUT</p>
              <h1>I like getting<br /><em>better at things.</em></h1>
              <p className="lead">I'm particular about how I do things, and sometimes stubborn about them. Over time I've learned that changing my approach doesn't mean giving up on what matters.</p>
            </ModeContent>
          </div>
          <div className="about-identity-wrap" aria-hidden="true">
            <ModeContent mode="light">
              <div className="identity-art"><span className="identity-arc identity-arc-one"/><span className="identity-arc identity-arc-two"/><span className="identity-big">A<span>.</span></span><span className="identity-note"></span></div>
            </ModeContent>
            <ModeContent mode="dark">
              <div className="identity-art identity-art-dark"><span className="identity-arc identity-arc-one"/><span className="identity-arc identity-arc-two"/><span className="identity-big">A<span>.</span></span><span className="identity-note"></span></div>
            </ModeContent>
          </div>
        </div>
      </section>

      <ModeContent mode="light" stack>
        <section className="section-space"><div className="shell story-grid" data-reveal="section">
          <div className="section-index"><span>01</span><span>WHERE I COME FROM</span></div>
          <div>
            <h2 className="display-title">Born in Ahmedabad. <em>Raised in Surat.</em></h2>
            <div className="story-columns">
              <p>I was born in Ahmedabad and grew up in Surat, where my family still lives. Our roots are in Jakh, in Tehri, Uttarakhand.</p>
              <p>I moved to Shirpur for my BTech and later to Erlangen for my master's. My research there involved signals from human muscles and brought together my interests in data and biology.</p>
              <p>I'm now in Mohali for my PhD. I like working through difficult questions, but I also make time for music, sport, cooking and friends.</p>
            </div>
          </div>
        </div></section>
      </ModeContent>
      <ModeContent mode="dark" stack>
        <section className="section-space about-dark-story"><div className="shell story-grid" data-reveal="section">
          <div className="section-index"><span>01</span><span>A BIT ABOUT ME</span></div>
          <div>
            <h2 className="display-title">I have my routines. <em>I also change them.</em></h2>
            <div className="story-columns">
              <p>I like a routine and I can be quite stubborn. That can help me stick with difficult work, but it can also make me slow to change course. I'm learning to notice when that happens.</p>
              <p>I care about doing things properly, whether it's research, music or training. I don't always get it right, and I spend a fair amount of time going back to improve things.</p>
              <p>Away from work, I like playing guitar, cricket, going to the gym, cooking, and getting lost in a good game or story.</p>
            </div>
          </div>
        </div></section>
      </ModeContent>

      <section className="stack-panel origins-section" aria-label="Where I am from"><div className="shell origins-inner" data-reveal="section">
        <div><span className="origins-label">Born</span><strong>Ahmedabad</strong></div>
        <div><span className="origins-label">Raised here · family lives here</span><strong>Surat</strong></div>
        <div><span className="origins-label">My roots</span><strong>Jakh, Tehri, Uttarakhand</strong></div>
      </div></section>

      <section className="stack-panel journey-section section-space"><div className="shell" data-reveal="section">
        <div className="section-index"><span>02</span><span>THREE CHAPTERS</span></div>
        <div className="journey-header"><h2 className="display-title">Shirpur. Erlangen.<br /><em>Mohali.</em></h2><p>NMIMS for my BTech, FAU for my master's, and Plaksha for my PhD. Three places, each with something different to teach me.</p></div>
        <div className="timeline">
          {path.map(item => <article key={item.school} className="timeline-entry">
            <div className="timeline-marker"><span className="timeline-dot"/></div>
            <div className="timeline-when"><strong>{item.year}</strong><span>{item.place}</span></div>
            <div className="timeline-story"><span className="timeline-school">{item.school} <span>·</span> {item.degree}</span><h3>{item.heading}</h3><p>{item.body}</p></div>
          </article>)}
        </div>
      </div></section>

      <ModeContent mode="light" stack>
        <section className="section-space"><div className="shell" data-reveal="section">
          <div className="section-index"><span>03</span><span>OUTSIDE THE RESEARCH</span></div>
          <div className="interests-header"><h2 className="display-title">The <em>other</em> parts of me.</h2><p>Research takes up a lot of my time, but it's not the whole story.</p></div>
          <HobbyFlipCards items={lightInterests} />
        </div></section>
      </ModeContent>
      <ModeContent mode="dark" stack>
        <section className="section-space about-dark-interests"><div className="shell" data-reveal="section">
          <div className="section-index"><span>03</span><span>OUTSIDE WORK</span></div>
          <div className="interests-header"><h2 className="display-title">Not everything has to be <em>productive.</em></h2><p>Some things are worth doing simply because they're part of who I am.</p></div>
          <HobbyFlipCards items={darkInterests} />
        </div></section>
      </ModeContent>

      <section id="quotes" className="stack-panel quote-section section-space" aria-labelledby="quote-section-title"><div className="shell" data-reveal="section">
        <div className="belief-section-header"><div><div className="section-index"><span>04</span><span>QUOTES</span></div><h2 className="display-title" id="quote-section-title">Words that <em>stuck with me.</em></h2></div><p>Some are mine. Others are lines from people, books, music and games that I remember.</p></div>
        <QuoteCarousel />
      </div></section>

      <section className="stack-panel about-bottom"><div className="shell about-bottom-grid" data-reveal="section">
        <p className="eyebrow eyebrow-light">WHAT I DO</p><h2>I also do<br /><em>research.</em></h2>
        <div><p>My work is mainly about physiology, data and health. Here's a short overview.</p><ArrowLink href="/work" light>See what I'm working on</ArrowLink></div>
      </div></section>
    </main>
  );
}
