This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Overview
This platform is designed as a social media-inspired space for software engineering and product design projects. 

It allows users to share the stories behind their projects, providing a unique platform for those involved in diverse and creative work. 

The project was an exploration of NextJS's extensive capabilities in frontend, backend API, and database integration.

## Key Features
- Dashboard: Highlights recent projects in software engineering and product design.
- Project Pages: Dedicated pages for both software engineering and product design projects.
- Profile Page: Showcases personal experiences and expertise.

## Unique Points:
- Developed a unique social media-like platform tailored for sharing project stories.
- Explored and utilized NextJS for both frontend and backend capabilities.
- Implemented a clean and responsive design using Tailwind CSS, enhancing user experience.

## Admin credentials

Admin login uses the **user** table (email + bcrypt password). If you forget your password:

1. Add a reset secret to `.env.local`:
   ```bash
   ADMIN_RESET_SECRET=your-secret-string-here
   ```
2. Call the reset API (from your machine or Postman):
   ```bash
   curl -X POST http://localhost:3000/api/users/reset-password \
     -H "Content-Type: application/json" \
     -d '{"email":"your@email.com","newPassword":"your-new-password","secret":"your-secret-string-here"}'
   ```
3. Log in at `/Login` with that email and the new password.
4. Remove or change `ADMIN_RESET_SECRET` after resetting.

If you don’t know your admin email, check the **user** table in your database (e.g. via your DB provider’s console or a local script that queries it).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
