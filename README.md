# Muqadas Akram — Portfolio

Modern, recruiter-ready personal portfolio for a Computer Science final-year student — built with **React**, **Tailwind CSS**, **Framer Motion**, and **React Icons**.

## Features

- Dark AI/tech theme with glassmorphism and gradient accents
- Fully responsive (mobile-first)
- Smooth scroll navigation with active section highlighting
- Scroll-triggered animations (Framer Motion)
- Typing animation in hero section
- Contact form via EmailJS (falls back to `mailto:` if not configured)
- SEO-friendly meta tags
- Ready for [Vercel](https://vercel.com) deployment

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Resume

Place your resume PDF at `public/resume.pdf` for the **Download Resume** button to work.

## EmailJS Setup

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Add a service and email template
3. Copy `.env.example` to `.env` and fill in your keys:

```env
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

4. Ensure your template uses these field names: `from_name`, `from_email`, `subject`, `message`

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Add environment variables (`VITE_EMAILJS_*`) in project settings
4. Deploy — build command: `npm run build`, output: `dist`

## Customize

Edit content in `src/data/portfolioData.js` — name, experience, projects, skills, links, etc.

Update GitHub/LinkedIn URLs in `personalInfo` if needed.

## Tech Stack

- React 18 + Vite 6
- Tailwind CSS 3
- Framer Motion
- React Icons
- EmailJS (optional)
