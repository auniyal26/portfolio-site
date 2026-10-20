import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About me" },
  { href: "/work", label: "My work" },
];

export default function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="shell header-inner">
          <Link className="brand" href="/" aria-label="Alankar Sunil Uniyal home">
            <span className="brand-symbol">a<span>.</span></span>
            <span className="brand-name">Alankar Sunil Uniyal</span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map(({href, label}) => <Link key={href} href={href}>{label}</Link>)}
            <ThemeSwitch /><a className="nav-contact" href="mailto:alankar.uniyal@plaksha.edu.in">Say hello <span aria-hidden="true">↗</span></a>
          </nav>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu <span aria-hidden="true">☰</span></summary>
            <nav aria-label="Mobile navigation">
              {links.map(({href, label}) => <Link key={href} href={href}>{label}</Link>)}
              <a href="mailto:alankar.uniyal@plaksha.edu.in">Say hello ↗</a>
              <div className="mobile-mode-switch"><ThemeSwitch /></div>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
