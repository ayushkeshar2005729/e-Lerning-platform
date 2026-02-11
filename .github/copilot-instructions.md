# E-Learn Platform - Copilot Instructions

## Project Overview

E-Learn is a **full-featured, client-side e-learning platform** for digital printing education. It's a static HTML/CSS/JavaScript site with no backend or build system, featuring 4 professional courses with multiple lessons each, dynamic routing, progress tracking, bookmarks, and search functionality.

**Key Features:**
- 4 complete courses with 3+ lessons each
- Dynamic content loading from `js/data.js`
- URL-based routing: `lessons.html?course=1`, `lesson.html?course=1&lesson=2`
- Progress tracking & course completion stats (localStorage)
- Bookmarking system for lessons
- Search & category filtering
- Professional Udemy-style design
- Fully responsive & accessible

## Architecture

### Data Structure (`js/data.js`)

All course and lesson data is stored in a centralized `courses` array:

```javascript
const courses = [
  {
    id: 1,
    title: "Digital Printing Basics",
    description: "...",
    instructor: "John Doe",
    category: "Printing Technology",
    level: "Beginner",
    rating: 4.8,
    students: 2450,
    image: "📘",
    duration: "3 hours",
    lessons: [
      {
        id: 1,
        title: "Introduction to Inkjet Printing",
        description: "...",
        videoId: "qz0aGYrrlhU",  // YouTube video ID only
        duration: "12 min",
        content: "<h2>HTML content here</h2>..."  // Rich HTML lesson content
      }
    ]
  }
]
```

**Helper functions in data.js:**
- `getCourseById(courseId)` - Get course object
- `getLessonById(courseId, lessonId)` - Get lesson object
- `getAllCourses()` - Get all courses
- `getCategories()` - Get unique category names

### Page Flow & Routing

1. **index.html** (Homepage)
   - Displays all courses as cards with progress bars
   - Category filtering buttons
   - Search bar for finding courses
   - Click course card → `goToCourse(courseId)` → `lessons.html?course=1`

2. **lessons.html** (Course Page)
   - Shows course header (title, instructor, duration, rating)
   - Lists all lessons as clickable cards with completion badges
   - Click lesson → `goToLesson(courseId, lessonId)` → `lesson.html?course=1&lesson=2`

3. **lesson.html** (Lesson Page)
   - Embedded YouTube video player
   - Rich lesson content (HTML with images, tables, lists)
   - Previous/Next navigation buttons
   - Progress bar showing course completion
   - Mark complete button (saves to localStorage)
   - Bookmark button for saving important lessons

### Navigation Functions (js/script.js)

All navigation uses URL parameters (not hash routing):

```javascript
goToCourse(courseId)              // → lessons.html?course=1
goToLesson(courseId, lessonId)    // → lesson.html?course=1&lesson=2
getUrlParameter(param)            // Extract ?param=value from URL
```

**Do NOT use:**
- `window.location.hash`
- Direct hardcoded links like `href="lessons.html"` (breaks when selecting specific courses)
- Form submissions

## File Structure & Responsibilities

### HTML Files
- **index.html**: Homepage with course grid, filters, search bar
- **lessons.html**: Course overview + lesson list (single template, populated via `?course=ID`)
- **lesson.html**: Individual lesson player (single template, populated via `?course=ID&lesson=ID`)

**Key constraint:** All pages share the same HTML structure across the platform but are populated dynamically via JavaScript.

### JavaScript Files
- **js/data.js** (400+ lines)
  - Course/lesson data definitions
  - Helper functions: `getCourseById()`, `getLessonById()`, `getCategories()`
  
- **js/script.js** (350+ lines)
  - **Homepage:** `initializeHomepage()`, `renderAllCourses()`, `renderCategoryFilters()`, `setupSearchFunctionality()`
  - **Lessons page:** `initializeLessonsPage()`, `renderLessons()`
  - **Lesson page:** `initializeLessonPage()`, `setupLessonNavigation()`, `markLessonComplete()`
  - **Progress tracking:** `getUserCourseProgress()`, `setLessonCompleted()`, `isLessonCompleted()`
  - **Bookmarks:** `toggleBookmark()`, `isLessonBookmarked()`, `getBookmarkedLessons()`
  - **Navigation:** `goToCourse()`, `goToLesson()`, `goToNextLesson()`, `goToPreviousLesson()`

### CSS File
- **css/style.css** (600+ lines)
  - **Header & navigation** (sticky, gradient blue)
  - **Hero section** (purple gradient, CTA button)
  - **Course cards** (grid layout, hover effects, progress bars)
  - **Lesson page** (video container with responsive aspect ratio, content styling)
  - **Responsive design** (breakpoint at 768px for mobile)
  - **Color scheme:** Primary #1e90ff (blue), Secondary #667eea (purple), Backgrounds #f8f9fa (light gray)

## Common Workflows

### Adding a New Course

1. Open `js/data.js`
2. Add new object to `courses` array with:
   - Unique `id` (increment from highest existing)
   - `title`, `description`, `instructor`, `category`, `level`, `rating`, `students`, `image`, `duration`
   - `lessons` array with lesson objects
3. Each lesson requires: `id`, `title`, `description`, `videoId` (YouTube only), `duration`, `content` (HTML string)

**Example:**
```javascript
{
  id: 5,
  title: "Advanced Color Management",
  instructor: "Maria Lopez",
  category: "Design & Prepress",
  lessons: [
    {
      id: 1,
      title: "ICC Profiles and Color Spaces",
      videoId: "abc123xyz",
      content: `<h2>Color Management</h2><p>...</p>`
    }
  ]
}
```

### Adding Lessons to Existing Course

1. Find course in `js/data.js`
2. Add lesson object to its `lessons` array
3. Increment `id` from highest existing lesson in that course
4. YouTube `videoId` is the part after `?v=` in the URL

### Modifying Styling

- **Header color:** `css/style.css` → `.header { background: linear-gradient(...) }`
- **Card hover effects:** `.course-card:hover`, `.lesson-card:hover`
- **Progress bar color:** `.progress-fill { background: linear-gradient(...) }`
- **Responsive breakpoints:** Search `@media (max-width: 768px)` section

### Video Embedding

YouTube videos are embedded as iframes. To change a lesson's video:

1. Go to YouTube video → copy video ID from URL (e.g., `youtube.com/watch?v=**qz0aGYrrlhU**`)
2. In `js/data.js`, update lesson's `videoId` field
3. HTML generates: `<iframe src="https://www.youtube.com/embed/qz0aGYrrlhU">`

**Do NOT include the full URL** — only the video ID.

### Adding Lesson Content

Lesson content is HTML stored as a string. Supports rich formatting:

```javascript
content: `
  <h2>Lesson Title</h2>
  <p>Introduction paragraph</p>
  <h3>Key Concepts:</h3>
  <ul>
    <li>Point 1</li>
    <li>Point 2</li>
  </ul>
  <h3>Advanced Topics</h3>
  <table>
    <tr><th>Header</th></tr>
    <tr><td>Data</td></tr>
  </table>
`
```

CSS automatically styles: `h2`, `h3`, `ul`, `ol`, `li`, `p`, `table` elements.

## Data Persistence (LocalStorage)

### Progress Tracking

Stored as: `course_[ID]_progress` → `{ courseId: 1, completedLessons: 2, completed: [1, 2] }`

**Functions:**
- `setLessonCompleted(courseId, lessonId)` - Mark lesson complete
- `isLessonCompleted(courseId, lessonId)` - Check if complete
- `getUserCourseProgress(courseId)` - Get completion count

### Bookmarks

Stored as: `bookmarkedLessons` → `[{ courseId: 1, lessonId: 2 }, ...]`

**Functions:**
- `toggleBookmark()` - Add/remove bookmark
- `isLessonBookmarked(courseId, lessonId)` - Check if bookmarked
- `getBookmarkedLessons()` - Get all bookmarks

## Code Style & Comments

- **Comprehensive comments** for all functions explaining parameters and return values
- **Utility functions** prefixed with `get` (getters), `set` (setters), `is` (booleans)
- **Page initialization** via `DOMContentLoaded` event listeners
- **HTML injection** for dynamic content (no build step, no frameworks)

## Frequently Modified Files

| Task | File | Function |
|------|------|----------|
| Add course | `js/data.js` | Append to `courses` array |
| Add lesson | `js/data.js` | Append to course's `lessons` array |
| Update course title | `js/data.js` | Modify `course.title` |
| Change header color | `css/style.css` | `.header { background: ... }` |
| Add search feature | `js/script.js` | Extend `setupSearchFunctionality()` |
| Modify card styling | `css/style.css` | `.course-card`, `.lesson-card` |
| Update progress bar | `js/script.js` | `updateLessonProgress()` |

## No Build System

- All changes are **live** on refresh
- No transpilation, bundling, or minification
- No external dependencies except embedded YouTube
- Compatible with any static file server

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design optimized for desktop (mobile breakpoint at 768px)
- Uses ES6 syntax (modern JavaScript)

## Future Enhancements (Optional)

1. **User Authentication** - Login system with cloud-synced progress
2. **Certificates** - Generate completion certificates
3. **Discussion Forum** - Lesson-specific Q&A threads
4. **Downloadable Resources** - PDFs, code files per lesson
5. **Quizzes** - Knowledge checks with scoring
6. **Analytics Dashboard** - Admin view of course performance

