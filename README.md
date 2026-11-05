# Full-Stack Inventory App

A modern, fast, and responsive full-stack web application that fetches and displays a catalog of items from a real database. Built to demonstrate clean architecture using Next.js App Router and Prisma ORM.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Glassmorphism UI)
- **Database ORM:** Prisma
- **Database:** SQLite

## Features

- **Real-time Data Fetching:** Data is fetched dynamically from a SQLite database via a custom Next.js API Route (`/api/items`).
- **Database Seeding:** Includes a ready-to-use seed script to populate the database with categorized sample data.
- **Modern UI/UX:** Responsive grid layout with hover effects, gradient text, and categorized color badges.
- **Suspense & Streaming:** Uses React Suspense to provide a smooth loading state while data is being fetched.

## Getting Started

Follow these steps to run the project locally on your machine.

### 1. Clone the repository
```bash
git clone [https://github.com/moffahmii/Full-Stack-App.git](https://github.com/moffahmii/Full-Stack-App.git)
cd Full-Stack-App