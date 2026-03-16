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
      "4-class MRI classification pipeline focused on robustness under dataset shift.",
    stack: [
      "PyTorch",
      "ResNet18",
      "Stratified Split",
      "Confusion Matrix",
      "Threshold Tuning",
    ],
    status: "Baseline + controlled experiments shipped",
    accent: "from-slate-900 to-slate-700",
    highlights: [
      "Built a ResNet18 baseline on 4-class brain tumor MRI data with train/val/test evaluation and saved proof artifacts.",
      "Diagnosed strong test-set domain shift instead of blaming class imbalance, using split diagnostics and majority-baseline checks.",
      "Designed a two-stage pipeline: Stage A (tumor vs no_tumor gate) and Stage B (glioma / meningioma / pituitary subtype classifier).",
      "Ran controlled one-lever experiments: threshold calibration, robustness augmentation, and class-weighted cross-entropy.",
      "Best controlled improvement lifted Stage AB test performance to macro F1 0.6056 and balanced accuracy 0.6342 with weighted CE.",
    ],
    wins: [
      "Baseline test accuracy: 0.693",
      "Best Stage AB test macro F1: 0.6056",
      "Clear shift diagnosis through val vs test gap",
      "Repo packaged, documented, and shipped to GitHub",
    ],
    lessons: [
      "Validation success can hide brittle out-of-distribution behavior.",
      "Threshold rules and loss design matter when one class becomes a gatekeeper.",
      "Proof artifacts are as important as raw scores for research credibility.",
    ],
  },
  {
    title: "Signals Toolkit (ECG + EEG)",
    icon: Activity,
    tagline:
      "Signal-processing mini-lab for filtering, PSD analysis, peak detection, and reusable tooling.",
    stack: [
      "NumPy",
      "SciPy",
      "Bandpass Filter",
      "Welch PSD",
      "Peak Detection",
      "Toolkit Design",
    ],
    status: "Reusable toolkit + runnable demo shipped",
    accent: "from-emerald-900 to-emerald-700",
    highlights: [
      "Started with a minimal synthetic ECG pipeline: bandpass filtering, moving RMS, Welch PSD, and peak-based BPM extraction.",
      "Fixed early double-counting failure in peak detection by enforcing positive-peak logic and distance constraints.",
      "Packaged core methods into a reusable toolkit including ecg_peaks_hr(), welch_psd(), and rhythm metrics.",
      "Upgraded the detector to a more robust QRS-envelope method using 5–15 Hz filtering, abs, moving RMS, adaptive prominence, and RR filtering.",
      "Expanded the project into EEG by shipping a synthetic alpha-rhythm script and result artifact.",
    ],
    wins: [
      "Synthetic ECG estimate matched injected rhythm at ~72 BPM",
      "Robust detector fixed T-wave / extra-peak failure cases",
      "One-command repo demo with plots and BPM / RR metrics",
      "Clean README, LICENSE, RESULTS committed",
    ],
    lessons: [
      "PSD is useful for structure and quality, but HR should come from peaks, not assumed PSD maxima.",
      "Robustness beats pretty demos; edge cases expose whether the pipeline is real.",
      "Small reusable functions turn experiments into a toolkit.",
    ],
  },
  {
    title: "MEG Pipeline",
    icon: Waves,
    tagline:
      "MNE-based MEG workflow from raw signal inspection to epoching, TFR, ICA, and report generation.",
    stack: ["MNE-Python", "Filtering", "Epoching", "Evoked Analysis", "TFR", "ICA"],
    status: "Standalone repo + consolidated report pipeline shipped",
    accent: "from-indigo-900 to-indigo-700",
    highlights: [
      "Used the MNE sample dataset to build a full MEG learning pipeline from raw traces and PSDs to event-locked evoked responses.",
      "Added notch + bandpass filtering and compared raw vs filtered outputs using PSD and RMS-over-channels visual evidence.",
      "Extended the work into time-frequency analysis with Morlet TFR and artifact handling with ICA.",
      "Consolidated the workflow into a single entrypoint that writes structured report folders with numbered figures and a summary file.",
      "Split MEG into its own standalone repository to keep the project clean and presentation-ready.",
    ],
    wins: [
      "Raw/filtered, epoch, TFR, ICA, and bad-channel checks all shipped",
      "One-command report generation pipeline",
      "Repo split and cleaned for independent presentation",
      "Artifacts structured as reproducible reports",
    ],
    lessons: [
      "Neuro-signal work gets clearer when every step leaves visual proof.",
      "Cleaning the repo is part of the scientific workflow, not an afterthought.",
      "A single entrypoint is what turns scattered scripts into a portfolio-grade project.",
    ],
  },
  {
    title: "Epigenetics Tumor Typing",
    icon: Dna,
    tagline:
      "Public methylation-based CNS tumor typing baseline built on GSE90496.",
    stack: [
      "GEO",
      "DNA Methylation",
      "LinearSVC",
      "LogReg (saga)",
      "Feature Selection",
      "Error Analysis",
    ],
    status: "Public-data baseline report closed out",
    accent: "from-rose-900 to-rose-700",
    highlights: [
      "Selected and profiled GSE90496, confirming 2801 samples and 91 methylation classes from public GEO metadata.",
      "Built a streamed variance-based feature-selection baseline to handle large beta-value matrices without brute-force loading everything at once.",
      "Trained and compared LinearSVC and LogisticRegression(saga) baselines with rare-class grouping for cleaner macro-metric behavior.",
      "Best model reached balanced accuracy 0.9751 and macro F1 0.9688 after grouping classes with support under 20 into OTHER.",
      "Added confound checks for material type (FFPE vs Frozen), repo cleanup, and compact error-analysis artifacts for research-style reporting.",
    ],
    wins: [
      "2801-sample public cohort profiled and documented",
      "Best macro F1: 0.9688",
      "Low material confound risk in current baseline",
      "Baseline report v1 shipped as onboarding proof",
    ],
    lessons: [
      "Interpretability and error analysis matter more than a giant unreadable confusion matrix.",
      "Class grouping can stabilize macro metrics when the tail is too sparse.",
      "A compact public-data baseline is enough to prove method fluency.",
    ],
  },
];

const timeline = [
  ["Dec 2025", "Started LifeReset deep-work buildout with Signals toolkit and Imaging baseline work."],
  ["Jan 2026", "Shifted from quick experiments to packaging, controlled tests, and GitHub-ready repos."],
  ["Feb 2026", "Expanded into EEG, MEG, and public epigenetics tumor typing with real datasets."],
  ["Mar 2026", "Consolidated reports, cleaned repos, and turned the work into portfolio-grade proof artifacts."],
];

const pillars = [
  {
    title: "Research-first build style",
    text: "Every project was run like a small lab: controlled changes, explicit metrics, saved artifacts, and post-run interpretation.",
  },
  {
    title: "Proof over hype",
    text: "Confusion matrices, PSDs, run logs, reports, and screenshots were treated as the actual product—not just code.",
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
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>
      )}
    </div>
  );
}

function SimpleCard({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function BadgePill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 ${className}`}
    >
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
          ? "bg-slate-900 text-white hover:bg-slate-800"
          : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
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

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                What shipped
              </h4>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-slate-50 p-5">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Key wins
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  {project.wins.map((win) => (
                    <li key={win}>• {win}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  What it taught me
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
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
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_30%),radial-gradient(circle_at_top_left,rgba(100,116,139,0.08),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div>
              <span className="inline-flex rounded-full bg-slate-900 px-4 py-1.5 text-sm font-medium text-white">
                LifeReset Portfolio • Dec 2025 → Mar 2026
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
                A portfolio site for the systems, experiments, and proof artifacts I built while rebuilding from scratch.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                This is not a random collection of mini-projects. It is a structured body of work across medical imaging, biosignals, MEG, and public epigenetics—built with a research mindset, reproducible outputs, and visible evidence.
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
                    <p className="text-3xl font-black text-slate-950">{value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{label}</p>
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
          subtitle="The common thread across all projects is not just code. It is the ability to frame a problem, design a sensible baseline, diagnose failure honestly, and ship evidence that the work happened."
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
                  <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3">
                    {index === 0 ? (
                      <Microscope className="h-5 w-5" />
                    ) : index === 1 ? (
                      <ShieldCheck className="h-5 w-5" />
                    ) : (
                      <BarChart3 className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{pillar.text}</p>
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
              <h3 className="text-xl font-bold text-slate-950">Background</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>• MSc in Data Science, FAU Erlangen-Nürnberg</li>
                <li>• Thesis work in EMG signal analysis and experimental modeling</li>
                <li>• Experience with PyTorch, scikit-learn, signal processing, and scientific ML workflows</li>
                <li>• IEEE publications in health and risk-prediction applications</li>
              </ul>
            </div>
          </SimpleCard>

          <SimpleCard>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-950">Links</h3>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <p><span className="font-semibold">GitHub:</span> github.com/auniyal26</p>
                <p><span className="font-semibold">Artifacts:</span> Google Drive project folder</p>
                <p><span className="font-semibold">Location:</span> Erlangen, Germany</p>
                <p><span className="font-semibold">Contact:</span> auniyal26@gmail.com</p>
              </div>
            </div>
          </SimpleCard>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Timeline"
            title="How the body of work evolved"
            subtitle="The progression went from quick signal-processing foundations to cleaner repos, more serious baselines, and project-grade reporting."
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
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {date}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-slate-700">{text}</p>
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
          subtitle="Each section below is written like a proof-of-work summary: what problem I tackled, what I actually shipped, what worked, what broke, and what that taught me."
        />

        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
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
              "Metrics paired with confusion matrices / PSD / figures",
              "Repos cleaned, packaged, and runnable from CLI",
              "Public dataset work included, not just toy examples",
              "Strong fit for research engineer / translational AI / biomedical data roles",
            ].map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-12 text-white sm:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Next step
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Turn this into the final public-facing portfolio.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Add your real project screenshots, a CV download button, LinkedIn, and direct repo buttons for each project. After that, this becomes a serious portfolio homepage.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-bold">Best final additions</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>• Direct repo buttons for Imaging, Signals, MEG, and Epigenetics</li>
                <li>• 1 screenshot per project</li>
                <li>• Download CV button and LinkedIn link</li>
                <li>• Custom domain later if you want it to look fully professional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}