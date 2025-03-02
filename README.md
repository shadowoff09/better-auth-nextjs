# BetterAuth + Next.js Template

> This is a template contains only a basic setup for a Next.js app using BetterAuth for authentication.

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/shadowoff09/better-auth-nextjs.git
```

2. Install dependencies

```bash
npm install
```

3. Copy the `.env.example` file to `.env` and add your environment variables:

```bash
cp .env.example .env
```

4. Generate the Better-Auth Secret Key

```bash
npx @better-auth/cli@latest secret
```

5. Generate the Prisma Client

```bash
npx prisma generate
```

6. Push the Prisma Schema to the Database

```bash
npx prisma db push
```

7. Start the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Features

- [x] Next.js 15 App Router
- [x] TypeScript
- [x] Tailwind CSS
- [x] BetterAuth
- [x] Prisma
- [x] Email/Password Authentication
