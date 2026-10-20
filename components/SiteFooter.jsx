"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const isHome = usePathname() === "/";
  if (isHome) return (
    <footer className="home-minimal-footer" aria-label="Site footer">
      <span>© {new Date().getFullYear()} Alankar Sunil Uniyal</span>
    </footer>
  );
  return (
    <footer id="contact" className="site-footer">
      <div className="shell footer-main">
        <div>
          <p className="footer-kicker">CONTACT</p>
          <h2>Get in touch.</h2>
          <div className="footer-emails"><a className="footer-email" href="mailto:alankar.uniyal@plaksha.edu.in">alankar.uniyal@plaksha.edu.in <span aria-hidden="true">↗</span></a><a className="footer-email" href="mailto:auniyal26@gmail.com">auniyal26@gmail.com <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="footer-side">
          <p>Currently based in Mohali, India.</p>
          <p>Born in Ahmedabad, raised in Surat, where my family lives.<br />Our roots are in Jakh, Tehri, Uttarakhand.</p>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/work">Work</Link>
            <a href="https://github.com/auniyal26" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/alankar-uniyal/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://www.instagram.com/uniyal.alankar/" target="_blank" rel="noopener noreferrer">@uniyal.alankar ↗</a>
            <a href="https://www.instagram.com/hashtoslash/" target="_blank" rel="noopener noreferrer">@hashtoslash ↗</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom shell"><span>© {new Date().getFullYear()} Alankar Sunil Uniyal</span><span>Personal website</span></div>
    </footer>
  );
}
