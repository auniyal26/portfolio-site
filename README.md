# Portfolio v7.7 — Responsive stacked chapters

A small, targeted patch to v7.6. **Home is unchanged.** About and Work panels now use natural heights based on their content, with an adaptive sticky offset so long chapters can scroll fully before the next chapter covers them. Short sections no longer take an entire viewport just to hold a few lines.

Everything else (copy, images, Light/Dark themes, hobbies, quote carousel, navigation) is unchanged.

## Install

Extract this ZIP into the root of the existing Next.js portfolio project, preserving `.git` and any `.env*` files. Then run:

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm install
npm run build
npm run dev
```

If dependencies cannot be fetched, complete the build when npm connectivity is restored.
