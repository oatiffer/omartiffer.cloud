# omartiffer.cloud

This is the source code for my personal website: [omartiffer.cloud](https://omartiffer.cloud).
<br /><br />
[![Netlify Status](https://api.netlify.com/api/v1/badges/072bc60c-5ab6-486b-a4d6-50e704fab1f4/deploy-status)](https://app.netlify.com/sites/omartiffer/deploys)

![Screenshot](/public/screenshot.png)

## 🛠️ Tech stack

<table>
  <tr>
    <td align="center">
      <a href="https://astro.build" target="_blank">
        <img src="src/assets/icons//astro.svg" width="36" style="padding: 0 20px"/><br/>Astro
      </a>
    </td>
    <td align="center">
      <a href="https://www.typescriptlang.org" target="_blank">
        <img src="src/assets/icons/typescript.svg" width="36" style="padding: 0 20px"/><br/>TypeScript
      </a>
    </td>
    <td align="center">
      <a href="https://tailwindcss.com" target="_blank">
        <img src="src/assets/icons/tailwindcss.svg" width="40" style="padding: 0 20px"/><br/>Tailwind
      </a>
    </td>
    <td align="center">
      <a href="https://www.cloudflare.com" target="_blank">
        <img src="src/assets/icons/cloudflare.svg" width="38" style="padding: 0 10px"/><br/>Cloudflare <br /> (Domain hosting)
      </a>
    </td>
    <td align="center">
      <a href="https://www.netlify.com" target="_blank">
        <img src="src/assets/icons/netlify.svg" width="38" style="padding: 0 10px"/><br/>Netlify <br /> (Site hosting)
      </a>
    </td>
  </tr>
</table>

## 📂 Project Structure

```text
/
├── public/                     # Static assets (images, icons, etc.)
├── src/
│   ├── components/             # Shared components
│   ├── config/                 # Config files (menu and social icons)
│   ├── content/                # Content collection for all pages
│   ├── layouts/                # Shared layout components
│   ├── pages/                  # Site pages (e.g., index.astro)
│   └── content.config.ts       # Collection definitions
├── .gitignore                  # Files to ignore in Git
├── .prettierrc                 # Code formatting
├── .tmxsrc                     # Tmux sessionizer bootstraper
├── README.md                   # This readme
├── astro.config.mjs            # Astro project config
├── eslint.config.js            # Linting rules
├── package.json                # Dependencies and scripts
└── tsconfig.json               # TypeScript settings
```

## 🚀 Want to try it locally?

You will need `node` and `npm` installed on your machine. You can install them by
following the instructions [here](https://nodejs.org/en/download).

### 1. Clone the repo

```bash
git clone https://github.com/oatiffer/omartiffer.cloud.git
```

### 2. Go into the project directory

```bash
cd omartiffer.cloud
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

#### Then open [`http://localhost:4321`](http://localhost:4321) in your browser

## Attributions

- Some component HTML structure was modified from [HyperUI](https://www.hyperui.dev/)
- Timeline HTML structure modified from [Preline UI](https://www.preline.co/)
- Dark/Light themes were generated using [daisyUI](https://daisyui.com/theme-generator)
