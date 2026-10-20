"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Github, Mail, FlaskConical, Network, Activity,
  GraduationCap, Brain, Waves, Dna, Shield,
} from "lucide-react";

const projects = [
  {
    title: "Credit Risk Intelligence",
    category: "Applied data science",
    icon: Shield,
    description: "Applicant-level SQL analytics, exploratory diagnostics, and interpretable default-risk modeling on multi-table credit application data.",
    tags: ["SQL", "DuckDB", "Python", "scikit-learn"],
    proof: "307,511 applicant records; logistic-regression ROC-AUC 0.7641.",
    repo: "https://github.com/auniyal26/credit-risk-intelligence",
  },
  {
    title: "Brain Tumor MRI Imaging",
    category: "Medical imaging",
    icon: Brain,
    description: "Reproducible four-class MRI baseline, extended into tumor/no-tumor screening followed by tumor-subtype classification.",
    tags: ["PyTorch", "torchvision", "Classification", "Evaluation"],
    proof: "Versioned baseline comparisons, confusion matrices, and staged evaluation.",
    repo: "https://github.com/auniyal26/brain-tumor-mri-imaging",
  },
  {
    title: "Signals",
    category: "Biomedical signals",
    icon: Activity,
    description: "Reusable ECG and EEG signal-processing toolkit with filtering, peak detection, timing analysis, and robustness checks.",
    tags: ["Python", "NumPy", "SciPy", "Signal processing"],
    proof: "Runnable ECG demo with saved figures and noisy-signal tests.",
    repo: "https://github.com/auniyal26/Signals",
  },
  {
    title: "Epigenetic Tumor Typing",
    category: "Computational biology",
    icon: Dna,
    description: "Methylation-based CNS tumor-typing baselines with dataset quality control, label grouping, and compact error analysis.",
    tags: ["Python", "Feature selection", "Linear models", "QC"],
    proof: "Public GSE90496 cohort; 2,801 samples across 91 raw classes.",
    repo: "https://github.com/auniyal26/epigenetic_tumor_typing",
  },
  {
    title: "MEG Pipeline",
    category: "Neurophysiology",
    icon: Waves,
    description: "Reproducible sensor-space MEG processing from raw measurements to cleaned, report-ready visual analyses.",
    tags: ["MNE", "Python", "Time-frequency analysis", "ICA"],
    proof: "One-command workflow with epochs, evoked responses, and dated reports.",
    repo: "https://github.com/auniyal26/MEG",
  },
];

const researchSteps = [
  { icon: FlaskConical, num: "I", title: "Represent", detail: "Organise haematological and glycaemic biomarkers into separate physiological blocks." },
  { icon: Network, num: "II", title: "Decompose", detail: "Model shared, discordant, and block-specific information while preserving the underlying measurements." },
  { icon: Activity, num: "III", title: "Evaluate", detail: "Examine phenotype associations and test whether mappings remain stable over time and across datasets." },
];

const education = [
  ["2026 — PRESENT", "PhD · Translational & Computational Medicine", "Plaksha University · Mohali, India"],
  ["2022 — 2025", "MSc · Data Science", "FAU Erlangen–Nürnberg · Germany"],
  ["2018 — 2022", "BTech · Information Technology", "NMIMS University · Mumbai, India"],
];

const appear = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

function Heading({ number, eyebrow, title, intro }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#97794A]">{number} / {eyebrow}</p>
      <h2 className="mt-4 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#193C31] sm:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-[15px] leading-8 text-[#53645A]">{intro}</p>}
    </div>
  );
}

function WorkCard({ project, index }) {
  const Icon = project.icon;
  return (
    <motion.article
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }}
      variants={appear} transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.25) }}
      className="overflow-hidden rounded-md border border-[#DDD6C8] bg-[#FFFEFA]"
    >
      <div className="flex items-start gap-4 border-b border-[#E7E0D4] p-6 sm:p-8">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#E6EEE7] text-[#193C31]"><Icon className="h-6 w-6" /></div>
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.19em] text-[#97794A]">{project.category}</p>
          <h3 className="font-serif text-2xl text-[#193C31]">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#53645A]">{project.description}</p>
        </div>
      </div>
      <div className="p-6 pt-5 sm:p-8 sm:pt-5">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => <span key={tag} className="rounded-sm border border-[#D3DFD5] bg-[#F0F4EE] px-2.5 py-1 text-[11px] text-[#2D5447]">{tag}</span>)}
        </div>
        <p className="mt-5 text-[13px] leading-6 text-[#53645A]"><strong className="font-semibold text-[#193C31]">Evidence:</strong> {project.proof}</p>
        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 border-b border-[#B79A61] pb-1 text-sm font-semibold text-[#193C31] hover:opacity-70">View repository <ArrowUpRight className="h-4 w-4" /></a>
      </div>
    </motion.article>
  );
}

export default function ResearchPortfolio() {
  return (
    <div className="min-h-screen bg-[#F5F1E7] font-sans text-[#303932]">
      <nav className="border-b border-[#E1D9CA] bg-[#FFFEFA]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
          <a href="#top" className="font-serif text-base text-[#193C31] sm:text-xl">Alankar Sunil Uniyal<span className="text-[#B79A61]">.</span></a>
          <div className="flex items-center gap-4 text-xs font-semibold text-[#355548] sm:gap-8">
            <a href="#research" className="hover:text-[#97794A]">Research</a>
            <a href="#projects" className="hover:text-[#97794A]">Projects</a>
            <a href="#about" className="hidden hover:text-[#97794A] sm:inline">About</a>
            <a href="mailto:auniyal26@gmail.com" className="hover:text-[#97794A]">Contact</a>
          </div>
        </div>
      </nav>

      <header id="top" className="relative overflow-hidden bg-[#193C31] text-[#FFFEFA]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_22%,rgba(183,154,97,0.15),transparent_43%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:px-10 lg:py-28">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D5BA81]">Plaksha University · PhD Researcher</p>
            <h1 className="mt-7 max-w-3xl font-serif text-5xl font-normal leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">Understanding physiology.<span className="mt-2 block text-[#DFCA9D]">Exploring cognition.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#D5E1D8]">I work at the intersection of computational medicine, biomedical data science, and statistical learning—developing reproducible methods to study how shared and independent physiological information relates to mental and cognitive health.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#research" className="inline-flex items-center gap-2 rounded-sm bg-[#DCC594] px-5 py-3 text-sm font-semibold text-[#193C31] hover:bg-[#E9D5AC]">Current research <ArrowUpRight className="h-4 w-4" /></a>
              <a href="https://github.com/auniyal26" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-[#7F988A] px-5 py-3 text-sm font-semibold text-[#FFFEFA] hover:border-[#DCC594]"><Github className="h-4 w-4" /> GitHub</a>
            </div>
          </div>
          <div className="rounded-lg border border-[#557165] bg-[#24493D] p-6 sm:p-8" role="img" aria-label="Conceptual research map showing haematological and glycaemic measurements decomposed to a physiological representation and mapped to health phenotypes">
            <p className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#DCC594]">Research architecture</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-sm border border-[#668074] p-4"><p className="font-serif text-4xl">A</p><p className="mt-1 text-xs text-[#DBE6DD]">Haematology</p></div>
              <div className="rounded-sm border border-[#668074] p-4"><p className="font-serif text-4xl">G</p><p className="mt-1 text-xs text-[#DBE6DD]">Glycaemia</p></div>
            </div>
            <p className="py-3 text-center text-xl text-[#DCC594]">↓</p>
            <div className="rounded-sm border border-[#B79A61] bg-[#35594C] p-4 text-center"><p className="font-serif text-4xl">Z</p><p className="text-xs text-[#DBE6DD]">Shared · Discordant · Private</p></div>
            <p className="py-3 text-center text-xl text-[#DCC594]">↓</p>
            <div className="rounded-sm border border-[#668074] p-4 text-center"><p className="font-serif text-4xl">Y</p><p className="text-xs text-[#DBE6DD]">Health phenotypes</p></div>
            <p className="mt-5 text-[11px] leading-5 text-[#BFCFC3]">A conceptual workflow, not a causal diagram.</p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#B79A61] via-[#DCC594] to-[#193C31]" />
      </header>

      <section id="research" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <Heading number="01" eyebrow="Current doctoral research" title="Haematological and glycaemic decomposition" intro="Investigating the independent and overlapping information in physiological systems—and whether those representations support stable, interpretable associations with depression-related and cognitive phenotypes." />
        <div className="grid gap-5 lg:grid-cols-3">
          {researchSteps.map(({ icon: Icon, num, title, detail }) => (
            <div key={title} className="rounded-md border border-[#DDD6C8] bg-[#FFFEFA] p-7">
              <div className="flex items-center justify-between"><Icon className="h-6 w-6 text-[#2D5447]" /><span className="font-serif text-3xl text-[#B79A61]">{num}.</span></div>
              <h3 className="mt-7 font-serif text-2xl text-[#193C31]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#53645A]">{detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-md border border-[#D6C9AE] bg-[#EFE6D4] px-6 py-5">
          <p className="text-sm text-[#40584A]"><strong className="text-[#193C31]">Status:</strong> Ongoing doctoral research. Findings are exploratory, not clinical or causal claims.</p>
          <a href="https://github.com/auniyal26/anemic-glycemic-burden-decomposition" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#193C31] hover:underline">Research repository <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </section>

      <section id="projects" className="border-y border-[#DFD8C8] bg-[#F0EBDD]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <Heading number="02" eyebrow="Selected technical work" title="Projects and reproducible systems" intro="Selected work across medical imaging, computational biology, biosignals, neurophysiology, and applied data science. Each card links directly to its GitHub repository." />
          <div className="grid items-start gap-6 lg:grid-cols-2">
            {projects.map((project, index) => <WorkCard key={project.title} project={project} index={index} />)}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-10 lg:py-24">
        <div>
          <Heading number="03" eyebrow="Background" title="Research grounded in engineering." />
          <p className="max-w-lg text-[15px] leading-8 text-[#53645A]">My background spans information technology, data science, biomedical signal processing, and medical AI. I prioritise rigorous baselines, transparent evaluation, reproducible workflows, and critical interpretation of results.</p>
          <a href="mailto:auniyal26@gmail.com" className="mt-7 inline-flex items-center gap-2 border-b border-[#B79A61] pb-1 text-sm font-semibold text-[#193C31]"><Mail className="h-4 w-4" /> Get in touch</a>
        </div>
        <div className="rounded-md border border-[#DDD6C8] bg-[#FFFEFA] p-7 sm:p-9">
          <div className="mb-3 flex items-center gap-2 text-[#97794A]"><GraduationCap className="h-5 w-5" /><span className="text-[11px] font-bold uppercase tracking-[0.2em]">Academic timeline</span></div>
          {education.map(([years, degree, institution]) => (
            <div key={degree} className="border-b border-[#E6DFD2] py-5 last:border-0">
              <p className="mb-2 text-[11px] font-bold tracking-wide text-[#97794A]">{years}</p>
              <h3 className="font-serif text-xl text-[#193C31]">{degree}</h3>
              <p className="mt-1 text-sm text-[#667269]">{institution}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#193C31] text-[#F5F1E7]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-8 lg:px-10">
          <p className="font-serif text-xl">Alankar Sunil Uniyal</p>
          <p className="text-xs text-[#CEDDD2]">Computational Medicine · Biomedical AI · Statistical Learning</p>
          <a href="mailto:auniyal26@gmail.com" className="text-xs font-semibold text-[#E4CCA0]">Contact ↗</a>
        </div>
      </footer>
    </div>
  );
}
