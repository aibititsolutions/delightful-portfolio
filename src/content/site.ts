/**
 * ✿ Everything personal on the site lives in this one file. ✿
 *
 * NOTE: the name and portrait are real; the bio, projects, employers and school
 * below are FICTIONAL sample
 * data written for a class presentation. Swap in real details before using
 * this as an actual portfolio.
 *
 * Optional fields (marked with `?` in the types) can simply be deleted —
 * the matching button, link or card disappears instead of showing a gap.
 */

export type Tint = 'lavender' | 'pink' | 'peach' | 'periwinkle' | 'butter'

export interface SiteImage {
  /** Put the file in /public and reference it as "/my-image.webp". */
  src: string
  alt: string
  width: number
  height: number
}

export interface SocialLink {
  label: string
  url: string
  icon: 'github' | 'linkedin' | 'link'
}

export interface Project {
  title: string
  year?: string
  summary: string
  /** The problem or need the project addresses. */
  problem: string
  /** Your role and contribution. */
  role: string
  stack: string[]
  features: string[]
  /** Technical decisions or architecture notes. */
  decisions: string[]
  /** Only fill this in with outcomes you can verify. */
  outcome?: string
  liveUrl?: string
  sourceUrl?: string
  /** A real screenshot. Without one, an obvious placeholder is drawn. */
  image?: SiteImage
  tint: Tint
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface JourneyEntry {
  kind: 'Experience' | 'Internship' | 'Education' | 'Certification' | 'Open source' | 'Achievement'
  title: string
  organization: string
  period: string
  description: string
  highlights?: string[]
}

export interface ProcessStep {
  title: string
  description: string
}

export interface SiteContent {
  isPlaceholder: boolean
  name: string
  displayName: string
  title: string
  /** Used for the meta description and social previews. */
  description: string
  email?: string
  /** e.g. "/resume.pdf" (file placed in /public). Hidden when missing. */
  resumeUrl?: string
  /** A cut-out photo (transparent background) for the hero. Without one, the desk illustration is shown. */
  portrait?: SiteImage
  socials: SocialLink[]
  hero: {
    /** The highlighted word gets the italic + squiggle treatment. */
    headline: { before: string; highlight: string; after: string }
    intro: string
    /** Decorative mini terminal: a command and what it "prints". */
    terminal: { command: string; output: string }[]
    note: string
  }
  about: {
    paragraphs: string[]
    notes: { label: string; text: string }[]
  }
  projects: Project[]
  skills: SkillGroup[]
  journey: JourneyEntry[]
  process: ProcessStep[]
}

export const site: SiteContent = {
  isPlaceholder: false,

  name: 'Cha-Cha Festijo Bote',
  displayName: 'Cha-cha',
  title: 'Full-Stack Developer & Software Engineer',
  description:
    'Portfolio of Cha-Cha Festijo Bote, a full-stack developer and software engineer who builds thoughtful, useful and beautifully crafted software.',

  email: 'cha.bote@example.com',
  // resumeUrl: '/resume.pdf',
  portrait: {
    src: '/portrait.webp',
    alt: 'Portrait of Cha-cha, smiling, wearing round glasses and a dark blazer.',
    width: 720,
    height: 720,
  },
  socials: [
    { label: 'GitHub', url: 'https://github.com/', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/', icon: 'linkedin' },
  ],

  hero: {
    headline: {
      before: 'I build',
      highlight: 'delightful',
      after: 'digital experiences.',
    },
    intro:
      'I’m a full-stack developer who loves building thoughtful, useful, and beautifully crafted software.',
    terminal: [
      { command: 'whoami', output: 'full-stack developer ♡' },
      { command: 'npm run build', output: '✓ built with care' },
    ],
    note: 'today: make something lovely',
  },

  about: {
    paragraphs: [
      'I wrote my first line of code to customise a blog theme when I was fifteen, and I’ve been happily stuck ever since. Today I build web apps end to end: tidy React interfaces on the front, dependable Node.js APIs and PostgreSQL behind them.',
      'I care about the small things — clear names, helpful error messages, layouts that feel calm on a phone. I like to ask “who is this for?” before I ask “how do I build it?”, and I’d rather ship something small and solid than something big and wobbly.',
    ],
    notes: [
      { label: 'Currently building', text: 'Offline sync for Bloom Notes, so studying works on the train.' },
      { label: 'Always curious about', text: 'Accessibility, database design, and why some interfaces just feel kind.' },
      { label: 'Favorite part of development', text: 'The moment a messy idea becomes a clean, working first version.' },
      { label: 'Outside the editor', text: 'Film photography, matcha lattes and very slow Sunday bakes.' },
    ],
  },

  projects: [
    {
      title: 'Bloom Notes',
      year: '2026',
      summary:
        'A study-notes app that turns your own notes into spaced-repetition flashcards, so revising happens a little every day instead of all at once.',
      problem:
        'My classmates and I kept writing good notes and then never opening them again. Flashcard tools existed, but copying notes into them by hand was a chore nobody kept up.',
      role: 'Solo project — design, frontend, API and database.',
      stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
      features: [
        'Markdown notes organised into notebooks, with code blocks and tags.',
        'Highlight any sentence to turn it into a flashcard in one click.',
        'A daily review queue scheduled with a spaced-repetition algorithm.',
        'Study streaks and a gentle “you’re done for today” screen.',
      ],
      decisions: [
        'Stored review history as an append-only table, so the scheduling algorithm can be changed later without losing anyone’s progress.',
        'Chose PostgreSQL full-text search over a separate search service — one less thing to run for a project this size.',
        'Wrote the scheduler as a pure function with unit tests, since it is the part that must never be wrong.',
      ],
      outcome:
        'Used by 38 classmates through one exam season; the feedback I heard most was “I finally reread my notes.”',
      image: {
        src: '/projects/bloom-notes.svg',
        alt: 'Bloom Notes showing a notebook list, a note about binary search trees and a flashcard review panel.',
        width: 800,
        height: 500,
      },
      tint: 'lavender',
    },
    {
      title: 'Pantry Pal',
      year: '2025',
      summary:
        'A meal planner that suggests recipes from what is already in your kitchen, and builds a shopping list for only what’s missing.',
      problem:
        'Shared student kitchens waste a lot of food. Most recipe apps start from the recipe; I wanted one that starts from the half-bag of spinach you already have.',
      role: 'Team of three — I led the backend and the recipe-matching logic.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST'],
      features: [
        'Add pantry items by typing or by scanning a barcode.',
        'Recipes ranked by how many ingredients you already own.',
        'One tap to send missing ingredients to a shared shopping list.',
        'Dietary filters that apply across search, plans and lists.',
      ],
      decisions: [
        'Normalised ingredient names (“tomatoes”, “tomato”, “cherry tomato”) at write time so matching stays a fast set comparison.',
        'Designed the REST API first and documented it, which let the three of us build frontend and backend in parallel.',
      ],
      outcome: 'Awarded best team project in our second-year software engineering module.',
      image: {
        src: '/projects/pantry-pal.svg',
        alt: 'Pantry Pal showing pantry ingredient chips and three recipe cards ranked by ingredients already owned.',
        width: 800,
        height: 500,
      },
      tint: 'pink',
    },
    {
      title: 'Campus Loop',
      year: '2025',
      summary:
        'An events board for student clubs: one place to post events, manage RSVPs and waitlists, and see what’s happening this week.',
      problem:
        'Club events were scattered across group chats and posters, so people missed them and organisers never knew how many would turn up.',
      role: 'Full-stack developer in a team of four; I owned RSVPs, waitlists and deployment.',
      stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Docker'],
      features: [
        'Clubs publish events with capacity limits and categories.',
        'RSVP, cancel and automatic promotion from the waitlist.',
        'A personal “your RSVPs” view and reminders by email.',
        'Keyboard-friendly, screen-reader-tested event forms.',
      ],
      decisions: [
        'Handled RSVPs inside a database transaction with a row lock, so two people can never take the last seat.',
        'Containerised the app with Docker so every teammate — and the grader — ran exactly the same environment.',
      ],
      image: {
        src: '/projects/campus-loop.svg',
        alt: 'Campus Loop showing this week’s club events with seat counts and RSVP buttons.',
        width: 800,
        height: 500,
      },
      tint: 'periwinkle',
    },
  ],

  skills: [
    { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'] },
    { title: 'Backend', items: ['Node.js', 'Express', 'Python'] },
    { title: 'Databases', items: ['PostgreSQL', 'MongoDB'] },
    { title: 'APIs & integrations', items: ['REST', 'GraphQL', 'JWT auth'] },
    { title: 'DevOps & deployment', items: ['Git', 'Docker', 'GitHub Actions'] },
    { title: 'Tools & workflow', items: ['VS Code', 'Figma', 'Vitest', 'Postman'] },
  ],

  journey: [
    {
      kind: 'Internship',
      title: 'Full-Stack Developer Intern',
      organization: 'Petalworks Studio',
      period: 'Jun — Sep 2026',
      description:
        'Worked in a five-person product team building booking tools for small local businesses.',
      highlights: [
        'Built the appointment-rescheduling flow in React and Express, from design hand-off to release.',
        'Added API tests that caught two regressions before they shipped.',
        'Ran an accessibility pass on the booking form and fixed its keyboard traps.',
      ],
    },
    {
      kind: 'Experience',
      title: 'Peer Tutor, Intro to Programming',
      organization: 'Rosemont Institute of Technology',
      period: '2025 — 2026',
      description:
        'Held weekly drop-in sessions for first-year students learning JavaScript — and learned how to explain things simply.',
    },
    {
      kind: 'Education',
      title: 'BSc Computer Science',
      organization: 'Rosemont Institute of Technology',
      period: '2023 — Present',
      description:
        'Focus on web engineering and databases. Final-year project: offline-first sync for note-taking apps.',
    },
    {
      kind: 'Certification',
      title: 'Full-Stack Web Development Certificate',
      organization: 'CodeGarden Academy',
      period: '2024',
      description: 'A twelve-week evening programme covering React, Node.js, SQL and deployment.',
    },
  ],

  process: [
    { title: 'Understand', description: 'Clarify the problem, the people it’s for, and what “done” looks like.' },
    { title: 'Plan', description: 'Choose an architecture that fits the problem — no bigger than it needs to be.' },
    { title: 'Design', description: 'Shape a clear, usable experience before writing the heavy code.' },
    { title: 'Build', description: 'Implement in small, readable pieces that are easy to change later.' },
    { title: 'Test', description: 'Verify behavior, accessibility and reliability — not just the happy path.' },
    { title: 'Improve', description: 'Refine performance and usability, then listen and iterate.' },
  ],
}
