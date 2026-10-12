# Presentation Guide: My Portfolio

A guide for Cha-cha to present **The Cute Coding Atelier**, her own portfolio website. Everything you say is written in the first person ("I", "my").

- **Source code:** https://github.com/aibititsolutions/delightful-portfolio
- **Suggested length:** 5 to 7 minutes of talking, then questions

---

## Start here: the script to say out loud

Read this from top to bottom while you scroll the website. Replace the words in **[brackets]**. The lines in *(italics)* are actions, not words to say. The numbered sections after this script are your reference notes for details and questions.

### Opening

> "Good **[morning / afternoon]**, **[Sir / Ma'am]**, and good **[morning / afternoon]** everyone. My name is **Cha-Cha Festijo Bote**, and you can call me Cha-cha.
>
> Today I will present my portfolio website. I call it *The Cute Coding Atelier*.
>
> A portfolio website has one job: to introduce me as a developer, show my work, and make it easy to contact me. I will first show you the website, then explain how it was built, and then I will be happy to answer your questions."

### One honest note

> "Before I start, one note. My name and my photo are real. The projects, the work experience and the school on the page are sample data. I wrote them for this activity to show how my finished portfolio will look. I will replace them with my real work as I build it."

### The walkthrough

*(Show the top of the page.)*

> "This is the hero section, the first thing a visitor sees. It shows my photo, my name, and what I do: 'I build delightful digital experiences.' There are two buttons, one to see my projects and one to contact me.
>
> I also added small details to give the page personality. This terminal types by itself, and if I click the cat, it reacts."

*(Click the cat. Then scroll to About.)*

> "Next is the About section. It has a short introduction about me, and small notes about what I am building and what I enjoy."

*(Scroll to Projects. Open one case study, then close it.)*

> "This is the Projects section. Each project explains the problem, my role, the technologies used, and the technical decisions. The full details open in a popup like this."

*(Scroll through Skills, Journey and Process.)*

> "My skills are grouped by area, such as frontend, backend and databases. After that is a timeline for experience and education, and then the six steps of how I work: understand, plan, design, build, test and improve."

*(Scroll to Contact. Click the copy button.)*

> "Last is the Contact section. A visitor can send me an email, or copy my email address with one click."

*(Click the sun/moon button in the header.)*

> "My site also has a dark mode, and it remembers which one you chose."

*(Press F12, click the phone icon, and change the width.)*

> "And it is responsive. On a phone, the layout rearranges itself and the menu becomes a dropdown."

### How it was built

> "Now, how it was built. My website uses three main tools.
>
> First, **React**, a JavaScript library for building a page out of reusable pieces called components. Every section you saw is one component.
>
> Second, **TypeScript**, which is JavaScript with types. It catches mistakes before the site runs.
>
> Third, **Vite**, a build tool that packages the code into small, fast files.
>
> The design is written in plain CSS. There is no Bootstrap, no Tailwind, and no animation library.
>
> There are two ideas I want to point out. One: all the text of my site is stored in a single file, separate from the design, so when I want to update my portfolio I edit only that file. Two: all colours, fonts and spacing are saved as CSS variables, which keeps the design consistent and makes dark mode possible.
>
> This is a static website. It has no backend and no database, because a portfolio only shows fixed information."

### Quality

> "For quality, my site was tested on screen widths from a small phone up to a large monitor. It can be used with the keyboard only, the images have text descriptions for screen readers, and the animations turn off for people who prefer reduced motion."

### Closing

> "To summarize: this is my portfolio, a fast, responsive and accessible website built with React, TypeScript and plain CSS, with a design that shows my personality and still looks professional.
>
> The source code is on GitHub. That is the end of my presentation. Thank you for listening, and I am ready for your questions."

---

## 1. The one-sentence summary

> "This is my personal portfolio website. It is a single page built with React and TypeScript, designed with a soft pastel style, and it works on phones, tablets and desktops."

If you only remember one thing, remember that sentence.

---

## 2. Important: be honest about the content

Say this early, before the instructor asks:

> "My name and my photo are real. The projects, work experience and school on the page are **sample data** written for this class activity, to show how my finished portfolio will look."

This matters. The three projects (Bloom Notes, Pantry Pal, Campus Loop), the internship at Petalworks Studio and the school named Rosemont Institute of Technology do not exist. The email address and the GitHub and LinkedIn links are also placeholders. Do not present them as your real achievements.

---

## 3. What to say, section by section

A short version of the script, for quick review. Scroll the page slowly while you talk.

| Section | What to show | What to say |
|---|---|---|
| **Header** | The floating menu bar at the top | "The menu stays on top while scrolling and highlights the section you are reading. On a phone it becomes a dropdown menu." |
| **Hero** | The photo, the headline, the two buttons | "This is the first thing a visitor sees: who I am, what I do, and two buttons to see my work or contact me." |
| **Hero details** | Click the cat, watch the terminal type | "The small terminal types by itself and the cat reacts when I click it. These small details give my page personality." |
| **About** | The short bio and the sticky notes | "A short introduction about me, plus small notes about what I am building and what I like." |
| **Projects** | Click "case study" on one project | "Each project shows the problem, my role, the tools used and the technical decisions. The details open in a popup window." |
| **Skills** | The six groups | "My skills are grouped by area: frontend, backend, databases, APIs, DevOps and tools." |
| **Journey** | The timeline | "Experience and education shown as a timeline, newest first." |
| **Process** | The six steps | "How I work: understand, plan, design, build, test, improve." |
| **Contact** | Click "copy email" | "Visitors can send me an email or copy the address with one click." |
| **Dark mode** | Click the sun/moon button | "There is a light theme and a dark theme. The site remembers your choice." |

**Tip:** to show that it is responsive, press `F12` in Chrome, click the phone icon, and change the screen width. The layout rearranges itself.

---

## 4. How it was built (in simple words)

### The tools

| Tool | What it is | Why it was used |
|---|---|---|
| **React 19** | A JavaScript library for building user interfaces from small reusable pieces called *components* | Each section (Hero, About, Projects...) is its own component, so the code is organized and easy to change |
| **TypeScript** | JavaScript with *types* | It catches mistakes before the site runs, for example a project with a missing title |
| **Vite** | A build tool | It runs the site during development and packages it into small, fast files for publishing |
| **CSS** | The styling language of the web | All design and animation is plain CSS. No Bootstrap, no Tailwind, no animation library |

### The folder structure

```
src/
  content/site.ts     <- ALL the text and data of the site lives here
  components/         <- one file per section (Hero, About, Projects...)
  styles/tokens.css   <- colours, fonts, spacing (the "design system")
  styles/base.css     <- shared styles and animations
  hooks.ts            <- two small helpers for scroll behaviour
public/               <- images (portrait, project pictures, icon)
```

### Four ideas worth explaining

**1. Content is separated from design.**
All text (name, bio, projects, skills) is in one file, `src/content/site.ts`. To update the portfolio you edit that one file. You never have to touch the layout code.

**2. A design system with "tokens".**
Colours, fonts and spacing are saved once as CSS variables in `tokens.css`, for example `--accent` for the purple colour. Every component uses these variables. That is why the whole site looks consistent, and why dark mode works: dark mode just changes the values of the variables.

**3. Responsive design.**
The layout adapts to the screen size using CSS Grid, Flexbox, media queries and `clamp()`. It was tested from 320 pixels wide (a small phone) up to 1920 pixels (a large monitor).

**4. Pre-rendering.**
Normally a React site sends an empty page and builds the content in the browser. This site builds the HTML **ahead of time**, so the content appears immediately, works even if JavaScript fails to load, and is easier for search engines to read.

---

## 5. Quality: what was checked

- **Responsive:** tested at widths from 320px to 1920px with no sideways scrolling.
- **Accessibility:** works with the keyboard only (try the `Tab` key), has a "skip to content" link, readable colour contrast, and descriptions on images for screen readers.
- **Reduced motion:** if a visitor turns off animations in their device settings, the site stops its animations.
- **Performance:** fonts are stored in the project instead of loaded from another website, and the portrait is a small 35 KB WebP image.
- **Lighthouse** (Chrome's built-in audit tool): about 93 for performance on mobile and 100 on desktop, with 100 for accessibility, when it was tested.

**Tip:** you can run Lighthouse live in front of the instructor. Press `F12` in Chrome, open the **Lighthouse** tab, and click **Analyze page load**. Scores change a little on every run, so say "around" when you quote a number.

---

## 6. Possible questions and answers

The answers are written the way you would say them.

### About the project

**Q: What is the purpose of this website?**
A: "It is my portfolio. Its job is to introduce me as a developer, show my projects and skills, and give visitors an easy way to contact me."

**Q: Who is the target audience?**
A: "Recruiters, clients and instructors who want to quickly see what I can do."

**Q: Is the information on the site real?**
A: "My name and my photo are real. The projects, work experience and school are sample data made for this activity. I will replace them with my real work by editing one file."

**Q: Why this cute pastel design?**
A: "I wanted my portfolio to show my personality. Most developer portfolios are dark and look alike, so mine is easy to remember. It is still professional because the layout is clean, the text is readable and the content is organized."

### About the technology

**Q: Why React and not plain HTML, CSS and JavaScript?**
A: "React lets me split the page into reusable components. For example, the three project cards use the same component with different data. This means less repeated code and easier updates."

**Q: What is a component?**
A: "A reusable piece of the interface. `Hero`, `About` and `Projects` are components. Small ones can be combined into bigger ones, like building blocks."

**Q: What is TypeScript, and why use it?**
A: "It is JavaScript with types. I describe the shape of the data, for example 'a project must have a title, a summary and a list of technologies'. If something is missing or misspelled, the editor shows the error before the site runs."

**Q: What is Vite?**
A: "A build tool. During development it shows changes instantly in the browser. For publishing it compresses the code into small files."

**Q: Did you use a CSS framework such as Bootstrap or Tailwind?**
A: "No. The styling is hand-written CSS with CSS variables. This keeps the site small and gives full control over the design."

**Q: Did you use an animation library?**
A: "No. Animations use CSS keyframes and transitions. One small piece of JavaScript, a browser feature called `IntersectionObserver`, detects when a section scrolls into view and starts its animation."

**Q: Does it have a backend or a database?**
A: "No. It is a static website: only HTML, CSS and JavaScript files. A portfolio shows fixed information, so it does not need a server or a database. This also makes it fast, cheap to host and safer."

**Q: Then why does the page say "full-stack developer"?**
A: "That is the role my portfolio presents, not a description of this website. The portfolio itself is a frontend project. Backend skills are shown through the projects listed on the page, which are sample data for now."

**Q: How does the contact section work without a backend?**
A: "The email button uses a `mailto:` link, which opens the visitor's own email app. The copy button copies the address to the clipboard. No message is stored on any server."

### About design and quality

**Q: How did you make it responsive?**
A: "With CSS Grid and Flexbox for layout, media queries to change the layout at certain widths, and the `clamp()` function so text sizes grow and shrink smoothly with the screen."

**Q: How does dark mode work?**
A: "All colours are CSS variables. Clicking the button adds `data-theme="dark"` to the page, which switches the variables to the dark values. The choice is saved in the browser's `localStorage`, so it is remembered on the next visit."

**Q: What did you do for accessibility?**
A: "Semantic HTML, meaning real headings, buttons, navigation and lists. Also keyboard support, visible focus outlines, a skip link, alt text on images, enough colour contrast, and support for users who prefer reduced motion."

**Q: How was it tested?**
A: "By opening it at many screen sizes, by using it with the keyboard only, by running an automated script that clicks the menu, theme button, project popups and copy button, and by running Lighthouse."

**Q: What is pre-rendering, and why use it?**
A: "The HTML is generated when the site is built, not in the visitor's browser. The page shows content faster and search engines can read it more easily."

### About process

**Q: How is it deployed?**
A: "The `npm run build` command creates a `dist` folder with the finished files. Those files can be hosted on any static hosting service. For this demo it is served through a Cloudflare Tunnel, which gives a temporary public link to a site running on a server. The source code is on GitHub."

**Q: How would you update the content?**
A: "I edit `src/content/site.ts`, run `npm run build`, and publish again. No layout code needs to change."

**Q: Did you use AI to build this?**
A: Answer this truthfully, and change the wording to match what you really did. An AI coding assistant (Claude Code) was used to help write the code. A good way to say it: "Yes, an AI coding assistant helped write the code. The requirements and the design direction were given to it, the result was reviewed, and changes were requested, such as using my real photo in the hero, shortening the headline, and fixing the title label on mobile. I studied the code so I can explain how it works."

**Q: What was the hardest part?**
A: "Making the hero section look good on every screen size. My photo, the floating cards and the headline all compete for space on a small phone, so the cards had to shrink and move so they do not cover my face."

**Q: What would you improve next?**
A: "Replace the sample data with my real projects, add a downloadable résumé, add a working contact form, and host it on a permanent web address."

---

## 7. Words you should be able to explain

| Word | Simple meaning |
|---|---|
| **Frontend** | The part of a website the user sees and clicks |
| **Backend** | The server and database part that the user does not see |
| **Full-stack** | Someone who can build both frontend and backend |
| **Component** | A reusable piece of the user interface |
| **Responsive** | The layout adapts to any screen size |
| **Static site** | A site made only of files, with no server code or database |
| **Design token** | A saved design value (a colour, a font, a spacing) reused everywhere |
| **Accessibility** | Making the site usable for everyone, including people with disabilities |
| **Build** | Turning source code into optimized files ready to publish |
| **Deploy** | Putting the site online so others can open it |
| **Repository** | The project folder stored and tracked on GitHub |

---

## 8. Checklist before you present

- [ ] Open the site and confirm the link works. The Cloudflare link is temporary and stops if the server restarts.
- [ ] Have a backup: run `npm install` then `npm run dev` on a laptop, or prepare screenshots.
- [ ] Open the GitHub repository in a second tab.
- [ ] Practice the demo once: scroll, click the cat, open a case study, switch to dark mode, show the phone view.
- [ ] Read section 2 again, so you are ready to say which parts are sample data.
