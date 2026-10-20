import Link from "next/link";
import HomeFlow from "../components/HomeFlow";

const destinations = [
  {
    id: "about-card", number: "01", type: "A BIT ABOUT ME",
    title: "About me",
    description: "Where I'm from, what I get up to outside work, and the occasional rabbit hole I end up down.",
    href: "/about", link: "Get to know me", next: "work-card",
  },
  {
    id: "work-card", number: "02", type: "WHAT I DO",
    title: "My work",
    description: "I'm doing a PhD at Plaksha University. My research looks at how information from the body relates to mood and cognition.",
    href: "/work", link: "See what I'm working on", next: "quotes-card",
  },
  {
    id: "quotes-card", number: "03", type: "A FEW THINGS I KEEP CLOSE",
    title: "Words that stuck with me",
    description: "A few quotes from music, games, shows and elsewhere that I find myself coming back to.",
    href: "/about#quotes", link: "Read the quotes", next: "thanks",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="landing-home">
      <HomeFlow />
      <section className="home-flow-section home-flow-intro" id="hello" aria-labelledby="home-title">
        <div className="home-flow-inner home-intro-content">
          <p className="landing-overline">ALANKAR SUNIL UNIYAL <span aria-hidden="true">/</span> MOHALI, INDIA</p>
          <h1 id="home-title">Hi, I'm <em>Alankar.</em></h1>
          <p className="home-intro-lead">
            I'm doing a PhD at Plaksha University, studying how patterns in the body relate to mood and cognition.
            Outside work, you'll usually find me with a guitar, following cricket, or learning something new.
          </p>
          <p className="home-intro-roots">Born in Ahmedabad. Raised in Surat, where my family lives. My roots are in Jakh, Tehri, Uttarakhand.</p>
          <a className="home-next" href="#about-card">Have a look around <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      {destinations.map((item, index) => (
        <section key={item.id} className={`home-flow-section home-flow-destination home-flow-tone-${index % 2}`} id={item.id} aria-labelledby={`${item.id}-title`}>
          <div className="home-flow-inner">
            <article className="home-feature-card">
              <span className="home-feature-overline"><span>{item.number} / 03</span><span>{item.type}</span></span>
              <h2 id={`${item.id}-title`}>{item.title}</h2>
              <p>{item.description}</p>
              <Link href={item.href} className="home-feature-link">{item.link}<span aria-hidden="true">↗</span></Link>
            </article>
            <a href={`#${item.next}`} className="home-next">Keep scrolling <span aria-hidden="true">↓</span></a>
          </div>
        </section>
      ))}

      <section className="home-flow-section home-flow-thanks" id="thanks" aria-labelledby="home-thanks-title">
        <div className="home-flow-inner home-conversation">
          <p className="home-section-count">04 / 05</p>
          <h2 id="home-thanks-title">Thanks for visiting.</h2>
          <p>That's it? I thought you'd be a little nosier. It's fine. I won't take it personally. Probably.</p>
          <div className="home-conversation-links">
            <a href="#about-card">Take another look <span aria-hidden="true">↑</span></a>
            <a href="#contact">Or keep going <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="home-flow-section home-flow-contact" id="contact" aria-labelledby="home-contact-title">
        <div className="home-flow-inner home-conversation">
          <p className="home-section-count">05 / 05</p>
          <h2 id="home-contact-title">Still here?</h2>
          <p>Alright, now I'm curious too. You could always say hello.</p>
          <div className="home-contact-emails">
            <a href="mailto:alankar.uniyal@plaksha.edu.in">alankar.uniyal@plaksha.edu.in <span aria-hidden="true">↗</span></a>
            <a href="mailto:auniyal26@gmail.com">auniyal26@gmail.com <span aria-hidden="true">↗</span></a>
          </div>
          <nav className="home-contact-socials" aria-label="Find me elsewhere">
            <a href="https://github.com/auniyal26" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/alankar-uniyal/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://www.instagram.com/uniyal.alankar/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
            <a href="https://www.youtube.com/@hash2slash/playlists" target="_blank" rel="noopener noreferrer">YouTube ↗</a>
          </nav>
          <a className="home-top-link" href="#hello">Back to the top ↑</a>
        </div>
      </section>
    </main>
  );
}
