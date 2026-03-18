"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Activity,
  Waves,
  Dna,
  Github,
  BarChart3,
  ShieldCheck,
  Microscope,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const projects = [
  {
    title: "Brain Tumor MRI Imaging",
    icon: Brain,
    tagline:
      "Reproducible MRI classification baseline with a two-stage pipeline for cleaner diagnosis under dataset shift.",
    stack: [
      "PyTorch",
      "torchvision",
      "scikit-learn",
      "Matplotlib",
      "Two-Stage Pipeline",
    ],
    status: "Versioned baselines + comparison snapshots",
    accent: "from-slate-800 to-slate-600",
    repo: "https://github.com/auniyal26/brain-tumor-mri-imaging",
    highlights: [
      "Built a 4-class brain tumor MRI baseline and extended it into a two-stage pipeline: Stage A separates tumor from no_tumor, and Stage B predicts the tumor subtype.",
      "Structured the project around reproducible runs instead of one-off experiments, with versioned result snapshots copied after each run.",
      "Kept a comparison file as the single source of truth so model changes could be judged systematically rather than by memory.",
      "Stored proof artifacts such as confusion matrices and run outputs to make model behavior visible and reviewable.",
      "Designed the repo as a practical model-diagnosis workflow, not just a leaderboard-style notebook.",
    ],
    wins: [
      "4-class baseline + Stage A/Stage B workflow shipped",
      "Versioned run snapshots stored after each experiment",
      "Comparison tracking built into the repo structure",
      "Strong foundation for medical-imaging model iteration",
    ],
    lessons: [
      "A clean evaluation structure matters as much as raw accuracy.",
      "Two-stage decomposition can make difficult classification problems easier to reason about.",
      "Saving proof artifacts turns experiments into portfolio-grade work.",
    ],
  },
  {
    title: "Signals",
    icon: Activity,
    tagline:
      "Lightweight ECG and EEG signal-processing sandbox focused on reproducibility, robustness, and reusable tooling.",
    stack: [
      "Python",
      "NumPy",
      "SciPy",
      "Matplotlib",
      "Signal Processing",
      "Toolkit Design",
    ],
    status: "Reusable toolkit + robustness demo shipped",
    accent: "from-emerald-800 to-emerald-600",
    repo: "https://github.com/auniyal26/Signals",
    highlights: [
      "Built a compact signal-processing repository around a reusable toolkit and a one-command ECG demo.",
      "Covered the full loop from filtering and peak detection to BPM and RR metrics, with outputs saved as visible artifacts rather than hidden in console logs.",
      "Improved the detector from a simple baseline to a more robust QRS-envelope approach using focused bandpass filtering, smoothing, adaptive prominence, and RR constraints.",
      "Included robustness cases such as noisy and T-wave-boosted signals to test whether the detector held up under harder conditions.",
      "Positioned the repo as a small but serious biosignals sandbox rather than a single throwaway notebook.",
    ],
    wins: [
      "Reusable toolkit module shipped",
      "One-command ECG demo with saved plots",
      "Robust detector handles noisy edge cases better",
      "Clear bridge from toy signals to real biosignal workflow thinking",
    ],
    lessons: [
      "Robustness matters more than a pretty single-case demo.",
      "Reusable functions are what turn an experiment into a toolkit.",
      "Visible outputs make signal-processing work easier to trust and explain.",
    ],
  },
  {
    title: "Epigenetic Tumor Typing",
    icon: Dna,
    tagline:
      "Public methylation-based CNS tumor typing baseline focused on QC, tractable modeling, and error analysis.",
    stack: [
      "Python",
      "Linear Models",
      "Feature Selection",
      "QC Artifacts",
      "Confusion Analysis",
    ],
    status: "Public-data baseline with QC and error analysis",
    accent: "from-rose-800 to-rose-600",
    repo: "https://github.com/auniyal26/epigenetic_tumor_typing",
    highlights: [
      "Built an implementation-first tumor-typing baseline on the public CNS methylation reference cohort GSE90496.",
      "Covered the full path from loading and QC to baseline models, evaluation, and compact error analysis without overengineering the workflow.",
      "Worked with 2,801 samples across 91 raw methylation classes, then grouped sparse labels into OTHER to produce more stable baselines.",
      "Shipped dataset QC artifacts, baseline runs, grouped-label confusion analysis, and compact follow-up error-analysis outputs.",
      "Used the project to show practical fluency in biomedical tabular ML and research-style reporting.",
    ],
    wins: [
      "Public cohort profiled and documented cleanly",
      "QC → baseline → evaluation pipeline shipped",
      "Grouped-label strategy improved tractability",
      "Error analysis kept compact and decision-useful",
    ],
    lessons: [
      "Good baseline work is about structure and judgment, not complexity for its own sake.",
      "Grouping sparse labels can stabilize a noisy long-tail classification problem.",
      "Error analysis is more valuable than dumping giant unreadable outputs.",
    ],
  },
  {
    title: "MEG Pipeline",
    icon: Waves,
    tagline:
      "Minimal reproducible MEG workflow from raw sensor data to report-ready outputs.",
    stack: [
      "Python",
      "MNE",
      "NumPy",
      "SciPy",
      "Matplotlib",
      "Sensor-Space Analysis",
    ],
    status: "End-to-end report pipeline shipped",
    accent: "from-indigo-800 to-indigo-600",
    repo: "https://github.com/auniyal26/MEG",
    highlights: [
      "Built a minimal MNE-based MEG workflow on the sample dataset that runs end-to-end from one command.",
      "Included raw loading, notch and bandpass filtering, event detection, epoching, evoked RMS analysis, Morlet time-frequency analysis, and an ICA artifact-removal attempt.",
      "Saved outputs into a structured dated report folder with numbered figures and a summary file.",
      "Designed the project as a reproducible neuro-signal workflow rather than a loose collection of exploratory steps.",
      "Used the repo to demonstrate clear sensor-space pipeline thinking with visible, report-ready artifacts.",
    ],
    wins: [
      "One-command MEG report generation",
      "Filtering, epochs, evoked, TFR, and ICA workflow included",
      "Structured dated results folders created automatically",
      "Strong demonstration of reproducible neuro-signal processing",
    ],
    lessons: [
      "Reproducibility matters even in small learning-scale projects.",
      "A report structure makes advanced signal work far easier to review.",
      "Clear pipeline design is what makes technical work presentable.",
    ],
  },
];

const timeline = [
  [
    "Dec 2025",
    "Started LifeReset deep-work buildout with Signals toolkit and Imaging baseline work.",
  ],
  [
    "Jan 2026",
    "Shifted from quick experiments to packaging, controlled tests, and GitHub-ready repos.",
  ],
  [
    "Feb 2026",
    "Expanded into EEG, MEG, and public epigenetics tumor typing with real datasets.",
  ],
  [
    "Mar 2026",
    "Consolidated reports, cleaned repos, and turned the work into portfolio-grade proof artifacts.",
  ],
];

const pillars = [
  {
    title: "Research-first build style",
    text: "Every project was run like a small lab: controlled changes, explicit metrics, saved artifacts, and post-run interpretation.",
  },
  {
    title: "Proof over hype",
    text: "Confusion matrices, PSDs, run logs, reports, and snapshots were treated as the actual product—not just code.",
  },
  {
    title: "From scripts to systems",
    text: "The work matured from one-off notebooks into reusable toolkits, runnable scripts, structured repos, and clean READMEs.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-7 text-slate-300">{subtitle}</p>
      )}
    </div>
  );
}

function SimpleCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-slate-800 bg-slate-900 shadow-xl shadow-black/10 ${className}`}
    >
      {children}
    </div>
  );
}

function BadgePill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200">
      {children}
    </span>
  );
}

function ButtonLink({ href = "#", children, dark = false }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noreferrer"
      className={`inline-flex items-center rounded-2xl px-5 py-3 text-sm font-medium transition ${
        dark
          ? "bg-slate-100 text-slate-950 hover:bg-slate-200"
          : "border border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800"
      }`}
    >
      {children}
    </a>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <SimpleCard className="overflow-hidden">
        <div className={`bg-gradient-to-r ${project.accent} p-6 text-white`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-3 inline-flex rounded-2xl bg-white/10 p-3 backdrop-blur">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-2 max-w-2xl text-sm text-white/85">
                {project.tagline}
              </p>
            </div>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white">
              {project.status}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <BadgePill key={item}>{item}</BadgePill>
            ))}
          </div>

          <div className="mt-5">
            <ButtonLink href={project.repo}>
              View repository <Github className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                What shipped
              </h4>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-6 text-slate-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Key wins
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {project.wins.map((win) => (
                    <li key={win}>• {win}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  What it taught me
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {project.lessons.map((lesson) => (
                    <li key={lesson}>• {lesson}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SimpleCard>
    </motion.div>
  );
}

export default function LifeResetPortfolioSite() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.10),transparent_30%),radial-gradient(circle_at_top_left,rgba(71,85,105,0.12),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div>
              <span className="inline-flex rounded-full border border-slate-700 bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-100">
                LifeReset Portfolio • Dec 2025 → Mar 2026
              </span>
              <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-100 sm:text-6xl">
                A portfolio of the systems, experiments, and proof artifacts I
                built while rebuilding from scratch.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                This is a structured body of work across medical imaging,
                biosignals, MEG, and public epigenetics—built with a research
                mindset, reproducible outputs, and visible evidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#projects" dark>
                  View project sections <ArrowRight className="ml-2 h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="https://github.com/auniyal26/">
                  GitHub profile <Github className="ml-2 h-4 w-4" />
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["4", "Core project tracks"],
                ["15+", "Weeks of logged deep work"],
                ["10+", "Runnable scripts / pipelines"],
                ["Dozens", "Saved proof artifacts"],
              ].map(([value, label]) => (
                <SimpleCard key={label}>
                  <div className="p-6">
                    <p className="text-3xl font-black text-slate-100">{value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {label}
                    </p>
                  </div>
                </SimpleCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="Core thesis"
          title="What this portfolio is really showing"
          subtitle="The common thread across these projects is not just code. It is the ability to frame a problem, design a sensible baseline, diagnose failure honestly, and ship evidence that the work happened."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <SimpleCard className="h-full">
                <div className="p-6">
                  <div className="mb-4 inline-flex rounded-2xl bg-slate-800 p-3">
                    {index === 0 ? (
                      <Microscope className="h-5 w-5" />
                    ) : index === 1 ? (
                      <ShieldCheck className="h-5 w-5" />
                    ) : (
                      <BarChart3 className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-100">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {pillar.text}
                  </p>
                </div>
              </SimpleCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="About"
          title="Who this portfolio belongs to"
          subtitle="I’m Alankar Uniyal, a Data Science graduate based in Erlangen, working at the intersection of biomedical signals, medical imaging, machine learning, and research engineering. My work focuses on building end-to-end analytical pipelines, diagnosing model behavior honestly, and turning experiments into reproducible systems."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <SimpleCard>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-100">Background</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>• MSc in Data Science, FAU Erlangen-Nürnberg</li>
                <li>• Thesis work in sEMG signal analysis and experimental modeling</li>
                <li>• Experience with PyTorch, scikit-learn, signal processing, and scientific ML workflows</li>
                <li>• IEEE publications in health and risk-prediction applications</li>
              </ul>
            </div>
          </SimpleCard>

          <SimpleCard>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-100">Links</h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <p>
                  <span className="font-semibold">GitHub:</span> github.com/auniyal26
                </p>
                <p>
                  <span className="font-semibold">Artifacts:</span> Google Drive project folder
                </p>
                <p>
                  <span className="font-semibold">Location:</span> Erlangen, Germany
                </p>
                <p>
                  <span className="font-semibold">Contact:</span> auniyal26@gmail.com
                </p>
              </div>
            </div>
          </SimpleCard>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Timeline"
            title="How the body of work evolved"
            subtitle="The progression moved from signal-processing foundations to cleaner repos, stronger baselines, and project-grade reporting."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {timeline.map(([date, text], index) => (
              <motion.div
                key={date}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <SimpleCard className="h-full">
                  <div className="p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {date}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-slate-300">{text}</p>
                  </div>
                </SimpleCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="Project breakdown"
          title="Everything built so far"
          subtitle="Each section below is written like a proof-of-work summary: what problem I tackled, what I actually shipped, and what that work taught me."
        />

        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="What makes this credible"
            title="Why this is stronger than a generic portfolio"
            subtitle="Most portfolios show polished claims. This one shows the chain from setup to diagnosis to iteration."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              "Controlled experiments instead of random tweaking",
              "Explicit failure modes documented, not hidden",
              "Metrics paired with confusion matrices, PSDs, and report artifacts",
              "Repos cleaned, packaged, and runnable from CLI",
              "Public dataset work included, not just toy examples",
              "Strong fit for research engineer and biomedical AI roles",
            ].map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <div className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl shadow-black/10">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900 px-8 py-12 text-slate-100 shadow-xl shadow-black/10 sm:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Summary
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-100 sm:text-4xl">
                Four projects. One research-minded way of building.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                These projects were built to show more than technical curiosity.
                They reflect a working style centered on structured
                experimentation, reproducible outputs, and systems that can be
                inspected, extended, and trusted.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                What carries across all four
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>• Clear problem framing before modeling</li>
                <li>• Baselines built before complexity</li>
                <li>• Visible artifacts instead of hidden claims</li>
                <li>• Reusable workflows over one-off experiments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
