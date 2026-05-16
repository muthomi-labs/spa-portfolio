# Personal Project Showcase App

A single-page application (SPA) built with React that displays a portfolio of projects, allows adding new ones dynamically via a form, and supports live search filtering.


## Features

- **Project Gallery** — displays all projects as clean, clickable cards
- **Add Project Form** — dynamically adds new projects to the list without a page reload
- **Live Search** — filters projects in real time by title or description
- **Clickable Cards** — each card opens the project's GitHub repo in a new tab
- **Tech Tags** — each project shows its tech stack as labels
- **Responsive Design** — works on mobile, tablet, and desktop
- **Empty State** — friendly message when no projects match the search

---

## Tech Stack

- React 18
- Vite
- CSS (custom properties, no framework)
- Jest + React Testing Library

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/muthomi-labs/spa-portfolio.git

# 2. Navigate into the project folder
cd spa-portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open your browser and go to **http://localhost:5173**

---

## Usage

### Adding a Project
1. Fill in the **Title** and **Description** fields in the "Add Project" form
2. Optionally add a comma-separated **Tech Stack** (e.g. `React, Node.js, CSS`)
3. Click **+ Add Project** — it appears instantly at the top of the list

### Searching Projects
- Type in the **Search Projects** input box
- The list filters in real time by project title or description
- Click the **✕** button to clear the search

### Viewing a Project
- Click anywhere on a project card to open its GitHub repo in a new tab
- Or click the **↗** arrow in the top right of the card

---

## Project Structure

```
src/
  components/
    Header.jsx          # Site header with logo and title
    ProjectForm.jsx     # Controlled form to add new projects
    ProjectList.jsx     # Search bar + project grid
    ProjectCard.jsx     # Individual clickable project card
    SearchBar.jsx       # Search input with clear button
  data/
    projects.js         # Initial project data — edit this with your real projects
  assets/
    hero.png            # Logo / hero image
  App.jsx               # Root component — owns all state
  main.jsx              # Entry point
  index.css             # Global styles
```

---

## How to Add Your Real Projects

Open `src/data/projects.js` and update the array:

```js
{
  id: 1,
  title: "Your Project Name",
  description: "What it does and what you learned building it.",
  tech: ["React", "Node.js", "CSS"],
  link: "https://github.com/your-username/your-repo",
}
```

> **Tip:** Use the regular GitHub repo URL, not the `.git` clone URL.

---

## Running Tests

```bash
npm test
```

Tests are located in `src/__tests__/` and cover:
- Component rendering
- Form submission and validation
- Search filtering
- Empty state display

---

## Known Limitations

- **No data persistence** — adding a project only lasts until the page is refreshed. A backend or localStorage would be needed to save projects permanently.
- **No edit or delete** — projects cannot be edited or removed once added (can be added in a future version).
- **No image upload** — project cards do not support custom images or screenshots.
- **GitHub links only** — the link field is designed for GitHub URLs; live deployment links also work but there is no dedicated field for both.

---

## Future Improvements

- Add localStorage so new projects persist after refresh
- Add edit and delete functionality per project
- Deploy to Vercel or Netlify for a live URL
- Add a dark/light mode toggle

---

## Author

**Muthomi** — [@muthomi-labs](https://github.com/muthomi-labs)

---

## License

This project was built as part of the Moringa School React module.