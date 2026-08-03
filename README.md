
# Franklin Eke Portfolio

Personal portfolio website for Eke Franklin, a fullstack developer. The site presents work history, skills, selected projects, writing, and a contact form.

Live purpose: showcase experience, approach, and projects in a single-page layout with section-based navigation.

## Overview

This is a static personal site built with HTML, CSS, and JavaScript. It uses a section-switching interface rather than traditional multi-page routing. Dark mode is the default; light mode can be toggled and is remembered in local storage.

## Features

- Single-page layout with animated section transitions
- Side navigation for Home, Profile, Portfolio, Media, and Contact
- Light and dark theme toggle with local storage persistence
- Downloadable resume (PDF)
- Skill stack organized by Frontend, Backend, Database, and tooling
- Experience timeline with role details
- Project cards linking to GitHub repositories
- Blog and article cards linking to external writing
- Contact form configured for Netlify Forms
- Social links (X, GitHub, Hashnode)
- Responsive layout for desktop, tablet, and mobile

## Sections

| Section | Content |
|---------|---------|
| Home | Introduction and CV download |
| Profile | Approach, stats, skill stack, experience timeline |
| Portfolio | Project cards (TalentBridge, Beacon, Terco) |
| Media | Selected articles and technical writing |
| Contact | Contact details and Netlify form |

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox, media queries)
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts (Poppins)
- Netlify Forms (for contact submissions)

## Project Structure

```
frankez_main_site/
├── index.html        # Main page and all sections
├── portfolio.css     # Styles, theme variables, responsive rules
├── portfolio.js      # Section navigation and theme toggle
├── profileme.jpg     # Profile image
└── resume.pdf        # Downloadable CV
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Frankez75/frankez_main_site.git
cd frankez_main_site
```

2. Open the site locally:

- Double-click `index.html`, or
- Serve with a simple local server, for example:

```bash
# Python
python -m http.server 8000

# Node (if npx is available)
npx serve .
```

3. Visit `http://localhost:8000` (or the port shown by your server).

No build step or package install is required.

## Deployment

The site is static and can be deployed to any static host.

### Netlify

1. Connect the GitHub repository to Netlify, or drag the project folder into the Netlify deploy UI.
2. Publish directory: project root (where `index.html` lives).
3. The contact form uses `data-netlify="true"` and a honeypot field, so form submissions work automatically once the site is hosted on Netlify.

### GitHub Pages

1. Enable GitHub Pages on the repository.
2. Set the source to the `main` branch and root.
3. Note: Netlify form handling will not work on GitHub Pages; use a different form backend if needed.

## Customization

- **Colors and theme:** CSS variables in `portfolio.css` under `:root` and `body.light-mode`
- **Content:** Edit text, links, and sections directly in `index.html`
- **Resume:** Replace `resume.pdf` and keep the same filename, or update the download links in `index.html`
- **Profile image:** Replace `profileme.jpg`

## Browser Support

Works in modern browsers that support CSS custom properties, CSS Grid, and ES6 JavaScript.

## Author

**Eke Franklin**

- GitHub: [Frankez75](https://github.com/Frankez75)
- X: [InnovationAce15](https://x.com/InnovationAce15)
- Hashnode: [Frankez75](https://hashnode.com/@Frankez75)

## License

Available for personal and portfolio use. Add a formal license file if you want to define redistribution terms more clearly.
