# E-Learn Copilot Instructions

## Project Overview
E-Learn is a lightweight, client-side e-learning platform for digital printing education. It's a static HTML/CSS/JavaScript site with no backend, build system, or external dependencies beyond embedded YouTube videos.

## Architecture

### Page Structure
- **index.html**: Landing/home page with course overview and entry point (`goToLessons()` onclick handler)
- **lessons.html**: Lesson listing page with clickable lesson cards (`openLesson()` onclick handler)
- **lesson.html**: Individual lesson detail page with embedded video and content

**Data Flow**: User clicks course → `goToLessons()` → lessons.html → clicks lesson → `openLesson()` → lesson.html

### Navigation Pattern
All navigation uses `window.location.href` in `js/script.js`. Navigation links are hardcoded in HTML headers, not dynamically generated. Back buttons use conditional links (e.g., `lessons.html` back button links to `index.html`).

### Styling Convention
- **Color scheme**: Primary blue (#1e90ff) in headers, light gray (#f4f4f4) background
- **Card-based UI**: `.course-card` and `.lesson-card` share hover effects (light blue background #eaf3ff)
- **Layout**: Flexbox for header alignment (`justify-content: space-between`), padding-based spacing
- **No responsive breakpoints**: Assumes desktop viewing (embed iframes are width: 100%)

## Key Files & Responsibilities
- `css/style.css`: All styling; centralizes UI patterns (cards, hover states, header)
- `js/script.js`: Minimal navigation logic; extends as needed for interactivity
- `index.html`, `lessons.html`, `lesson.html`: Each page is self-contained with full HTML boilerplate

## Common Patterns

### Adding New Pages
1. Create new `.html` file with full boilerplate (DOCTYPE, meta charset, CSS link, script link)
2. Include header with logo link + back button (copy from `lessons.html` structure)
3. Add navigation function to `script.js` if needed

### Adding New Lessons
1. Duplicate lesson card in `lessons.html`: `<div class="lesson-card" onclick="openLesson()">...`
2. Update lesson title in the card
3. (Future enhancement: Implement lesson routing or parameterized URLs)

### Styling New Elements
- Add CSS to `style.css` bottom
- Reuse existing classes (`.container`, `.back-btn`) rather than creating duplicates
- Maintain 0.3s transitions for interactive elements (see `.back-btn:hover`)

## Development Notes

- **No build step**: Direct HTML file serving; all changes are live
- **No lesson routing**: Currently, all lessons link to the same `lesson.html`. Future versions should implement URL parameters (e.g., `lesson.html?id=1`) or dynamic content loading
- **Content is static**: Course descriptions, lesson titles, and lesson content are hardcoded in HTML
- **Video embedding**: Uses iframe with YouTube embed URLs; adjust src for different videos

## Common Tasks

| Task | Location |
|------|----------|
| Update course title | `index.html` `<h1>` tag |
| Change header color | `css/style.css` `.header { background: ... }` |
| Add navigation | `js/script.js` function, update onclick handlers |
| Add lesson content | `lesson.html` `<main>` section |
| Modify card styling | `css/style.css` `.course-card, .lesson-card` |
