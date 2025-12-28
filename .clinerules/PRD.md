# PRD: Dark Mode Professional Resume (i18n Edition)

## 1. Project Overview

A high-quality, dark-themed personal resume website for Zhenwei Xu, built with Next.js. The site supports multi-language (ZH/EN) and features a premium aesthetic with smooth animations.

## 2. Core Requirements

- **Dark Theme**: Deep background colors (Slate-900/950), light text, and subtle accents.
- **i18n Support**: Toggle between Traditional Chinese (zh) and English (en).
- **Conditional Photo**: Display `my-photo.webp` in ZH mode; hide it in EN mode.
- **Data-Driven**: Content is managed via `zh.json` and `en.json`.
- **Responsive Design**: Mobile-first approach.
- **Animations**: Use Framer Motion for entrance and interaction effects.

## 3. Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Utilities**: clsx, tailwind-merge

## 4. Content Structure

- **Hero**: Name, Tagline, Qualities, Social Links, Photo (ZH only).
- **Skills**: Categorized technical skills.
- **Experience**: Professional work history with bullet points.
- **Portfolio**: Project showcase with links and tech tags.
- **Footer**: Copyright and tech info.

## 5. Design Guidelines

- **Background**: `bg-slate-950`
- **Primary Text**: `text-slate-100`
- **Secondary Text**: `text-slate-400`
- **Accent**: `text-blue-400` or `text-emerald-400`
- **Cards**: `bg-slate-900/50` with `border-slate-800`
