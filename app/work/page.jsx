import InteriorStack from "../../components/InteriorStack";
import ArrowLink from "../../components/ArrowLink";

export const metadata = { title: "My Work", description: "An accessible overview of Alankar Sunil Uniyal's doctoral research, peer-reviewed conference publications, and biomedical machine learning projects." };

const projects = [
  { number: "01", field: "Medical imaging", name: "Brain Tumor MRI Imaging", description: "Testing ways to classify MRI scans and checking whether a more structured approach actually improves the results.", href: "https://github.com/auniyal26/brain-tumor-mri-imaging" },
  { number: "02", field: "Biomedical signals", name: "Signals", description: "Writing reusable tools to explore heart and brain signals, and testing them on less-than-perfect data.", href: "https://github.com/auniyal26/Signals" },
  { number: "03", field: "Computational biology", name: "Epigenetic Tumor Typing", description: "Exploring how patterns in DNA methylation data can help distinguish types of brain tumours.", href: "https://github.com/auniyal26/epigenetic_tumor_typing" },
  { number: "04", field: "Neurophysiology", name: "MEG Pipeline", description: "Building a repeatable way to process brain recordings and turn them into useful figures and reports.", href: "https://github.com/auniyal26/MEG" },
  { number: "05", field: "Applied data science", name: "Credit Risk Intelligence", description: "Working through a real credit-risk dataset, from messy tables to clear analyses and baseline models.", href: "https://github.com/auniyal26/credit-risk-intelligence" },
];

const publications = [
  {
    title: "Parkinson’s Disease Predictor via Voice Analysis",
    authors: "Alankar Uniyal, Ayush Patel, Ritesh Dhanare",
    venue: "2021 2nd Global Conference for Advancement in Technology (GCAT)",
    doi: "10.1109/GCAT52182.2021.9587850",
  },
  {
    title: "U.K. Car Accident and Insurance Predictor using Machine Learning",
    authors: "Ayush Patel, Alankar Uniyal, Ritesh Dhanare",
    venue: "2021 2nd Global Conference for Advancement in Technology (GCAT)",
    doi: "10.1109/GCAT52182.2021.9587647",
  },
];

export default function Work() {
  return (
    <main id="main-content" className="interior-stack interior-stack-work">
      <InteriorStack />
      <section className="stack-panel page-hero work-hero"><div className="shell page-hero-grid"><div><p className="eyebrow eyebrow-light">02 / THE WORK</p><h1>Questions before<br /><em>answers.</em></h1><p className="lead">I work on questions about people, health, and data. Here's what I'm exploring now and a few things I've enjoyed building.</p></div><div className="question-art" aria-hidden="true"><div className="question-ring question-ring-one"/><div className="question-ring question-ring-two"/><div className="question-mark">?</div><span></span></div></div></section>
      <section className="stack-panel section-space"><div className="stack-panel shell research-overview" data-reveal="section"><div className="section-index"><span>01</span><span>WHAT I'M EXPLORING NOW</span></div><div className="research-body"><p className="tiny-label">DOCTORAL RESEARCH · PLAKSHA UNIVERSITY</p><h2 className="display-title">What can blood measurements tell us <em>when we look at them together?</em></h2><p className="work-lead">In my PhD, I look at two sets of measurements: markers from the blood and markers of how the body handles sugar. I want to understand what they tell us together, what each tells us on its own, and how those patterns relate to mood and cognition.</p><p>That means working with population data, trying to represent complex measurements more clearly, and checking whether the same patterns appear in different years. It's early research, not a medical test, and it doesn't prove cause and effect.</p><div className="research-links"><ArrowLink href="https://github.com/auniyal26/anemic-glycemic-burden-decomposition" external>Research repository</ArrowLink></div></div></div></section>
      <section className="stack-panel work-principles"><div className="shell principles-grid"><div><span>HOW I APPROACH A QUESTION</span><h2>Start simple.<br /><em>Test carefully.</em><br />Stay honest.</h2></div><div><p>Build baselines before complexity.</p><p>Look for what breaks, not just what works.</p><p>Make experiments reproducible.</p><p>Know the difference between an association and an explanation.</p></div></div></section>
      <section id="publications" className="stack-panel section-space publications-section"><div className="shell" data-reveal="section"><div className="section-index"><span>02</span><span>PUBLICATIONS</span></div><div className="publications-heading"><h2 className="display-title">Publications.</h2></div><div className="publication-list">{publications.map((paper, index) => <article key={paper.doi} className="publication-item"><span className="publication-number">{String(index + 1).padStart(2, "0")}</span><div className="publication-details"><h3>{paper.title}</h3><p className="publication-authors">{paper.authors}</p><p className="publication-venue">{paper.venue}</p><a className="publication-doi" href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" aria-label={`Read ${paper.title} via DOI`}>Read paper <span aria-hidden="true">↗</span></a></div></article>)}</div></div></section>
      <section className="stack-panel section-space projects-section"><div className="shell" data-reveal="section"><div className="section-index"><span>03</span><span>SELECTED PROJECTS</span></div><div className="projects-heading"><h2 className="display-title">A few things I've <em>built.</em></h2><p>I've followed my curiosity into quite a few fields. Here's a small selection.</p></div><div className="project-list">{projects.map((p) => <a key={p.number} className="project-list-item" href={p.href} target="_blank" rel="noopener noreferrer"><span className="project-number">{p.number}</span><div className="project-content"><span className="tiny-label">{p.field}</span><h3>{p.name}</h3><p>{p.description}</p></div><span className="project-arrow" aria-hidden="true">↗</span></a>)}</div><p className="project-footnote">More experiments and source code on <a href="https://github.com/auniyal26" target="_blank" rel="noopener noreferrer">GitHub ↗</a></p></div></section>
      <section className="stack-panel older-work"><div className="shell older-work-inner" data-reveal="section"><span className="tiny-label">BEFORE THE PHD</span><h2>From EMG signals and experimental modelling to a wider interest in computation and health.</h2><p>My master's research at FAU Erlangen–Nürnberg involved analysing electromyography measurements in movement-related tasks. Earlier work explored applied machine learning, including health-oriented applications.</p></div></section>
    </main>
  );
}
