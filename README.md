# Rishabh Kumar Portfolio

A modular, full-screen portfolio built with React, Vite, Tailwind CSS v4, Motion, Lucide React, HLS video playback, Express.js, and MongoDB.

## Stack

- React + Vite
- Tailwind CSS v4 + `@tailwindcss/vite`
- Motion (`motion/react`)
- Lucide React icons
- `hls.js` for the Mux background stream
- Node.js + Express.js API
- MongoDB for lead capture storage

## Local development

1. Install dependencies.
2. Copy `.env.example` to `.env` and add `MONGODB_URI` if you want persistence.
3. Run `npm run dev`.

The client runs on Vite and proxies `/api` requests to the Express server on port `3001`.

## Build

Run `npm run build` to produce the production client bundle.

## Deploy to Vercel

- Set the environment variables in Vercel.
- Deploy the repository as a Vite project with the `api/[...all].js` serverless function.
- Add `MONGODB_URI` in Vercel if you want the email capture form to persist to MongoDB.
