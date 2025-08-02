# FOSS Official Website 🐧

The official website of the Free & Open Source Software Community at the University of Kelaniya (FOSSUOK). Built with Next.js and Mantine UI.


## Purpose

FOSSUOK connects Sri Lankan students with real-world open source. This site:

- Showcases our identity, events and blog
- Acts as a gateway for builders, newbies, and collaborators

---

## Tech Stack

- **Next.js** – React-based SSR/SSG framework
- **Mantine UI** – Component library for styling
- **TypeScript**, **CSS**, **JavaScript**

---

## Getting Started

1. **Clone repository**
   ```bash
   git clone https://github.com/fossuok/FOSS_Official_Website.git
   cd FOSS_Official_Website
   
   git checkout dev        # Important: switch to dev branch
   
   npm install
   npm run dev

2. **How to Contribute**

   Fork & clone (or clone directly if inside the org)

   Create a branch based on dev branch
    ```bash
    git checkout -b feature/your-descriptive-name
    
    Make your changes
    ```

   Commit and push
    ```bash
    git add .
    git commit -m "Brief but descriptive commit message"
    git push origin feature/your-branch
    ```
   Open a pull request to dev [!important] on GitHub 

---

## Project Structure

```bash
├── public/              # Static assets
├── src/                 # Components, pages, logic
├── theme.ts             # Mantine theme config
├── next.config.ts       # Next.js settings
├── postcss.config.cjs
└── env-sample           # Template for env variables
