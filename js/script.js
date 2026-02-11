/**
 * E-Learn Platform Main Script
 * 
 * Handles navigation, course/lesson display, progress tracking, and user interactions.
 * Uses URL parameters for routing: ?course=1 and ?lesson=1
 * LocalStorage for user progress and bookmarks
 */

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Get URL parameter by name
 * Example: if URL is "lesson.html?course=1&lesson=2", getCourseId() returns "1"
 */
function getUrlParameter(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

/**
 * Navigate to courses page for a specific course
 */
function goToCourse(courseId) {
  window.location.href = `lessons.html?course=${courseId}`;
}

/**
 * Navigate to a specific lesson
 */
function goToLesson(courseId, lessonId) {
  window.location.href = `lesson.html?course=${courseId}&lesson=${lessonId}`;
}

/**
 * Scroll smoothly to courses section on homepage
 */
function scrollToCourses() {
  const coursesSection = document.querySelector('.courses-section');
  if (coursesSection) {
    coursesSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// ========================================
// HOMEPAGE INITIALIZATION
// ========================================

/**
 * Initialize homepage: render all courses, categories, and set up search
 */
function initializeHomepage() {
  renderAllCourses();
  renderCategoryFilters();
  updateStats();
  setupSearchFunctionality();
}

/**
 * Render all courses as cards in the grid
 */
function renderAllCourses(filter = null) {
  const coursesGrid = document.getElementById('coursesGrid');
  if (!coursesGrid) return;

  coursesGrid.innerHTML = ''; // Clear existing content
  
  const coursesToDisplay = filter ? courses.filter(c => c.category === filter) : courses;

  coursesToDisplay.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.className = 'course-card';
    courseCard.onclick = () => goToCourse(course.id);

    const progress = getUserCourseProgress(course.id);
    const progressPercent = course.lessons.length > 0 
      ? (progress.completedLessons / course.lessons.length) * 100 
      : 0;

    courseCard.innerHTML = `
      <div class="course-image">${course.image}</div>
      <div class="course-card-content">
        <h3>${course.title}</h3>
        <p>${course.description.substring(0, 80)}...</p>
        <div class="course-card-meta">
          <span class="course-rating">★ ${course.rating}</span>
          <span>${course.students.toLocaleString()} students</span>
          <span>${course.lessons.length} lessons</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progressPercent}%"></div>
        </div>
        <div style="font-size: 12px; color: #999; margin-top: 5px;">${Math.round(progressPercent)}% complete</div>
      </div>
    `;

    coursesGrid.appendChild(courseCard);
  });
}

/**
 * Render category filter buttons
 */
function renderCategoryFilters() {
  const filterContainer = document.getElementById('categoryFilters');
  if (!filterContainer) return;

  const categories = getCategories();
  
  // Add "All Courses" button
  const allBtn = document.createElement('button');
  allBtn.className = 'category-btn active';
  allBtn.textContent = 'All Courses';
  allBtn.onclick = () => {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    allBtn.classList.add('active');
    renderAllCourses();
  };
  filterContainer.appendChild(allBtn);

  // Add category buttons
  categories.forEach(category => {
    const btn = document.createElement('button');
    btn.className = 'category-btn';
    btn.textContent = category;
    btn.onclick = () => {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAllCourses(category);
    };
    filterContainer.appendChild(btn);
  });
}

/**
 * Update stats section (total courses)
 */
function updateStats() {
  const totalCoursesEl = document.getElementById('totalCourses');
  if (totalCoursesEl) {
    totalCoursesEl.textContent = courses.length;
  }
}

/**
 * Setup search functionality for courses
 */
function setupSearchFunctionality() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const coursesGrid = document.getElementById('coursesGrid');
    const courseCards = coursesGrid.querySelectorAll('.course-card');

    courseCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();
      
      if (title.includes(query) || description.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

// ========================================
// LESSONS PAGE INITIALIZATION
// ========================================

/**
 * Initialize lessons page: load course data and render lessons
 */
function initializeLessonsPage() {
  const courseId = getUrlParameter('course');
  
  if (!courseId) {
    alert('Course not found');
    window.location.href = 'index.html';
    return;
  }

  const course = getCourseById(courseId);
  if (!course) {
    alert('Course not found');
    window.location.href = 'index.html';
    return;
  }

  // Populate course information
  document.getElementById('courseTitle').textContent = course.title;
  document.getElementById('courseInstructor').textContent = `Instructor: ${course.instructor}`;
  document.getElementById('courseDuration').textContent = `Duration: ${course.duration}`;
  document.getElementById('courseLevel').textContent = `Level: ${course.level}`;
  document.getElementById('courseRating').innerHTML = `Rating: ${'★'.repeat(Math.round(course.rating))} (${course.rating})`;
  document.getElementById('courseDescription').textContent = course.description;

  // Render all lessons for this course
  renderLessons(course);
}

/**
 * Render lesson cards for a course
 */
function renderLessons(course) {
  const lessonsList = document.getElementById('lessonsList');
  if (!lessonsList) return;

  lessonsList.innerHTML = ''; // Clear existing content

  course.lessons.forEach((lesson, index) => {
    const isCompleted = isLessonCompleted(course.id, lesson.id);
    const lessonCard = document.createElement('div');
    lessonCard.className = `lesson-card ${isCompleted ? 'completed' : ''}`;
    lessonCard.onclick = () => goToLesson(course.id, lesson.id);

    lessonCard.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: start;">
        <div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="lesson-badge">Lesson ${index + 1}</span>
            ${isCompleted ? '<span class="lesson-badge" style="background: #c8e6c9; color: #2e7d32;">✓ Completed</span>' : ''}
          </div>
          <h4>${lesson.title}</h4>
          <p>${lesson.description}</p>
        </div>
      </div>
      <div class="lesson-card-meta">
        <span>⏱️ ${lesson.duration}</span>
      </div>
    `;

    lessonsList.appendChild(lessonCard);
  });
}

// ========================================
// LESSON PAGE INITIALIZATION
// ========================================

/**
 * Initialize lesson page: load and display specific lesson content
 */
function initializeLessonPage() {
  const courseId = getUrlParameter('course');
  const lessonId = getUrlParameter('lesson');

  if (!courseId || !lessonId) {
    alert('Lesson not found');
    window.location.href = 'index.html';
    return;
  }

  const course = getCourseById(courseId);
  const lesson = getLessonById(courseId, lessonId);

  if (!course || !lesson) {
    alert('Lesson not found');
    window.location.href = 'index.html';
    return;
  }

  // Set back button to return to course lessons
  document.getElementById('backBtn').href = `lessons.html?course=${courseId}`;

  // Populate lesson information
  document.getElementById('lessonTitle').textContent = lesson.title;
  document.getElementById('lessonDuration').textContent = `Duration: ${lesson.duration}`;
  document.getElementById('lessonNumber').textContent = `Lesson ${course.lessons.findIndex(l => l.id === lesson.id) + 1}`;
  document.getElementById('lessonContent').innerHTML = lesson.content;

  // Set video
  const videoId = lesson.videoId;
  document.getElementById('lessonVideo').src = `https://www.youtube.com/embed/${videoId}`;

  // Set up lesson navigation
  setupLessonNavigation(course, lesson);

  // Update progress
  updateLessonProgress(courseId, course.lessons.length);

  // Check if lesson is already completed
  if (isLessonCompleted(courseId, lesson.id)) {
    document.getElementById('completeBtn').classList.add('completed');
    document.getElementById('completeBtn').textContent = '✓ Completed';
  }

  // Set up bookmark functionality
  updateBookmarkButton(courseId, lesson.id);
}

/**
 * Setup navigation between lessons (prev/next buttons)
 */
function setupLessonNavigation(course, currentLesson) {
  const currentIndex = course.lessons.findIndex(l => l.id === currentLesson.id);
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Previous lesson
  if (currentIndex > 0) {
    const prevLesson = course.lessons[currentIndex - 1];
    prevBtn.disabled = false;
    prevBtn.onclick = () => goToLesson(course.id, prevLesson.id);
  } else {
    prevBtn.disabled = true;
  }

  // Next lesson
  if (currentIndex < course.lessons.length - 1) {
    const nextLesson = course.lessons[currentIndex + 1];
    nextBtn.disabled = false;
    nextBtn.onclick = () => goToLesson(course.id, nextLesson.id);
  } else {
    nextBtn.disabled = true;
  }
}

/**
 * Update progress bar and text
 */
function updateLessonProgress(courseId, totalLessons) {
  const progress = getUserCourseProgress(courseId);
  const progressPercent = (progress.completedLessons / totalLessons) * 100;
  
  document.getElementById('progressFill').style.width = progressPercent + '%';
  document.getElementById('progressText').textContent = 
    `${progress.completedLessons} of ${totalLessons} lessons completed`;
}

/**
 * Mark current lesson as complete and update progress
 */
function markLessonComplete() {
  const courseId = getUrlParameter('course');
  const lessonId = getUrlParameter('lesson');
  const course = getCourseById(courseId);

  if (!course) return;

  // Mark lesson as completed in localStorage
  setLessonCompleted(courseId, lessonId);

  // Update UI
  const completeBtn = document.getElementById('completeBtn');
  completeBtn.classList.add('completed');
  completeBtn.textContent = '✓ Completed';

  // Update progress
  updateLessonProgress(courseId, course.lessons.length);
}

/**
 * Navigate to next lesson
 */
function goToNextLesson() {
  const courseId = getUrlParameter('course');
  const lessonId = getUrlParameter('lesson');
  const course = getCourseById(courseId);
  const currentLesson = getLessonById(courseId, lessonId);

  if (!course || !currentLesson) return;

  const currentIndex = course.lessons.findIndex(l => l.id === currentLesson.id);
  if (currentIndex < course.lessons.length - 1) {
    const nextLesson = course.lessons[currentIndex + 1];
    goToLesson(courseId, nextLesson.id);
  }
}

/**
 * Navigate to previous lesson
 */
function goToPreviousLesson() {
  const courseId = getUrlParameter('course');
  const lessonId = getUrlParameter('lesson');
  const course = getCourseById(courseId);
  const currentLesson = getLessonById(courseId, lessonId);

  if (!course || !currentLesson) return;

  const currentIndex = course.lessons.findIndex(l => l.id === currentLesson.id);
  if (currentIndex > 0) {
    const prevLesson = course.lessons[currentIndex - 1];
    goToLesson(courseId, prevLesson.id);
  }
}

// ========================================
// LOCALSTORAGE: PROGRESS TRACKING
// ========================================

/**
 * Get all completed lessons for a course
 * Returns: { courseId: 1, completedLessons: 2, completed: [1, 2] }
 */
function getUserCourseProgress(courseId) {
  const progressKey = `course_${courseId}_progress`;
  const defaultProgress = { courseId, completedLessons: 0, completed: [] };
  
  const stored = localStorage.getItem(progressKey);
  return stored ? JSON.parse(stored) : defaultProgress;
}

/**
 * Check if a specific lesson is completed
 */
function isLessonCompleted(courseId, lessonId) {
  const progress = getUserCourseProgress(courseId);
  return progress.completed.includes(parseInt(lessonId));
}

/**
 * Mark a lesson as completed and update progress
 */
function setLessonCompleted(courseId, lessonId) {
  const progressKey = `course_${courseId}_progress`;
  const progress = getUserCourseProgress(courseId);

  if (!progress.completed.includes(parseInt(lessonId))) {
    progress.completed.push(parseInt(lessonId));
    progress.completedLessons = progress.completed.length;
  }

  localStorage.setItem(progressKey, JSON.stringify(progress));
}

/**
 * Get all bookmarked lessons
 */
function getBookmarkedLessons() {
  const bookmarks = localStorage.getItem('bookmarkedLessons');
  return bookmarks ? JSON.parse(bookmarks) : [];
}

/**
 * Check if lesson is bookmarked
 */
function isLessonBookmarked(courseId, lessonId) {
  const bookmarks = getBookmarkedLessons();
  return bookmarks.some(b => b.courseId === parseInt(courseId) && b.lessonId === parseInt(lessonId));
}

/**
 * Add or remove bookmark
 */
function toggleBookmark() {
  const courseId = getUrlParameter('course');
  const lessonId = getUrlParameter('lesson');
  const bookmarks = getBookmarkedLessons();
  const bookmarkIndex = bookmarks.findIndex(
    b => b.courseId === parseInt(courseId) && b.lessonId === parseInt(lessonId)
  );

  if (bookmarkIndex > -1) {
    bookmarks.splice(bookmarkIndex, 1);
  } else {
    bookmarks.push({ courseId: parseInt(courseId), lessonId: parseInt(lessonId) });
  }

  localStorage.setItem('bookmarkedLessons', JSON.stringify(bookmarks));
  updateBookmarkButton(courseId, lessonId);
}

/**
 * Update bookmark button appearance
 */
function updateBookmarkButton(courseId, lessonId) {
  const bookmarkBtn = document.getElementById('bookmarkBtn');
  if (!bookmarkBtn) return;

  if (isLessonBookmarked(courseId, lessonId)) {
    bookmarkBtn.classList.add('bookmarked');
    bookmarkBtn.textContent = '🔖 Bookmarked';
    bookmarkBtn.style.background = '#ff9800';
  } else {
    bookmarkBtn.classList.remove('bookmarked');
    bookmarkBtn.textContent = '🔖 Bookmark';
    bookmarkBtn.style.background = '';
  }
}
