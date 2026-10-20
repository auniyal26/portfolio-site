import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ScrollReveals from "../components/ScrollReveals";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://portfolio-site-vert-kappa-18.vercel.app"),
  title: { default: "Alankar Sunil Uniyal | Personal Website", template: "%s | Alankar Sunil Uniyal" },
  description: "The personal website of Alankar Sunil Uniyal, a PhD researcher at Plaksha University working across computational medicine, biomedical data science and cognition.",
  openGraph: {
    type: "website",
    title: "Alankar Sunil Uniyal",
    description: "A little about me, my research, and the things I love outside work.",
  },
  robots: { index: true, follow: true },
};

const initMode = `try { const saved = localStorage.getItem('alankar-site-mode'); document.documentElement.dataset.mode = saved === 'dark' || saved === 'knight' ? 'dark' : 'light'; } catch (e) { document.documentElement.dataset.mode = 'light'; }`;

export default function RootLayout({ children }) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: initMode }} /></head><body><ScrollReveals /><SiteHeader />{children}<SiteFooter /><div className="mode-wipe" aria-hidden="true" /></body></html>;
}
