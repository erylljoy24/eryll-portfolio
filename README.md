# Eryll Joy Salamanes — Portfolio

A personal developer portfolio built with **Next.js 14**, **TypeScript**, and **CSS Modules**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
eryll-portfolio/
├── app/
│   ├── globals.css          # CSS variables & Google Fonts import
│   ├── layout.tsx           # Root layout + page metadata
│   ├── page.tsx             # Home page — composes all sections
│   └── page.module.css      # Top-level layout styles
├── components/
│   ├── Hero.tsx             # Name, role, summary, contact tags
│   ├── Stats.tsx            # "At a glance" numbers grid
│   ├── Experience.tsx       # Work history cards
│   ├── Projects.tsx         # Personal project cards
│   ├── Skills.tsx           # Skills chip grid
│   ├── Education.tsx        # Education cards
│   ├── Footer.tsx           # Bottom bar
│   └── SectionLabel.tsx     # Shared section heading component
└── lib/
    └── data.ts              # ✏️  All your content lives here
```

## Customizing Your Content

**Everything is in `lib/data.ts`.** You never need to touch the components to update your info.

### Update your profile

```ts
export const profile = {
  name: "Eryll Joy Salamanes",
  firstName: "Eryll Joy",   // displayed on line 1 of hero
  lastName: "Salamanes",    // displayed italic on line 2
  tag: "Portfolio / Mobile & Full-Stack Developer",
  roles: ["Flutter", "Laravel", "React", "Android"],
  summary: "Your summary here...",
  contact: {
    email: "you@example.com",
    phone: "...",
    location: "Davao City, PH",
    languages: "English · Tagalog",
  },
};
```

### Add your real projects

Replace the placeholder entries in the `projects` array:

```ts
export const projects: Project[] = [
  {
    name: "My Cool App",
    stack: "Next.js · Supabase · Tailwind",
    description: "A tool that does X for Y kind of users.",
    status: "done",           // "inprogress" | "done" | "placeholder"
    liveUrl: "https://mycoolapp.vercel.app",
    githubUrl: "https://github.com/eryllsalamanes/my-cool-app",
  },
];
```

### Mark skills as highlighted

Set `hot: true` on any skill to give it the orange background treatment:

```ts
{ name: "Next.js", hot: true },
```

## Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deploys on every push.

## Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
- [DM Serif Display + DM Mono + Outfit](https://fonts.google.com/) via Google Fonts
