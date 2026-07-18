# Vasileios Barmpagiannos - Personal Portfolio

A modern, responsive personal portfolio website showcasing my experience, projects, and skills in data analysis, machine learning, and robotics.

## Features

- **Responsive Design:** Fully fluid layout that looks great on desktop, tablet, and mobile devices.
- **Dark/Light Mode:** Seamlessly switch between themes based on user preference with a persistent toggle.
- **Smooth Scrolling & Scroll Spy:** Interactive navigation that dynamically highlights the active section as you scroll through the page.
- **Project Showcase:** A clean and interactive way to display my work, research, and GitHub repositories.
- **Interactive UI:** Subtle animations, micro-interactions, and hover effects using Framer Motion and Tailwind CSS.

## Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Local Development

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:3000` (or the port specified in your terminal).

## Deployment (GitHub Pages)

This portfolio is configured to be easily deployed to GitHub Pages via GitHub Actions.

1. Ensure your `vite.config.ts` has the `base: "./"` property set.
2. Go to your repository **Settings > Pages**.
3. Under **Build and deployment**, change the **Source** to **GitHub Actions**.
4. Create a `.github/workflows/deploy.yml` workflow file. GitHub will automatically build and deploy the site upon every push to the `main` branch.

## License

Distributed under the MIT License. See `LICENSE` for more information.
