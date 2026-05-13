# 🎓 Yakut Akademi — Learning Management System

> "Start Learning from Scratch" — An online learning and teaching platform where you can improve your skills with 100+ courses.

---

## 🖥️ About the Project

Yakut Akademi is a modern LMS (Learning Management System) platform where students and instructors come together. Users can browse courses, purchase them, and access content, while instructors can create and manage their own courses.

---

## ✨ Features

- 🏠 **Home Page** — Platform introduction, popular courses, and student testimonials
- 📚 **Course Listing** — Category-based filterable course catalog (Web Development, Mobile Development, Accounting, Video Editing, Databases, Graphic Design...)
- 🔍 **Course Detail Page** — Course content, sections, preview video, and purchase
- 🛒 **Checkout System** — Secure course purchase with credit card (30-day money-back guarantee)
- 👤 **User Management** — Sign up, log in, and edit profile
- 📖 **My Learning** — Track purchased courses
- 🌙 **Dark Mode** — Theme toggle support
- 📱 **Responsive Design** — Mobile and desktop friendly interface
- ⚡ **Skeleton Loading** — Smooth loading animations for better user experience

---

## 🛠️ Tech Stack

| Technology | Description |
|-----------|----------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | Component-based UI library |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) | Client-side routing (SPA) |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Responsive styling framework |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Core programming language |
| ![Context API](https://img.shields.io/badge/Context_API-61DAFB?style=flat&logo=react&logoColor=black) | Global state management |

---

## 📁 Project Structure

```
E-learning-main/
├── public/
│   ├── images/          # Course images
│   ├── videos/          # Course preview videos
│   └── index.html
├── src/
│   ├── Assets/          # Icons and app visuals
│   ├── component/       # Reusable UI components
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── PopularCourses/
│   │   ├── StudentsSay/
│   │   ├── BecomeTeacher/
│   │   └── ...
│   ├── container/       # Page-level components
│   │   ├── Home/
│   │   ├── Courses/
│   │   ├── Course/      # Course detail page
│   │   ├── Learn/
│   │   ├── CheckOut/
│   │   ├── Profile/
│   │   ├── About/
│   │   └── Contact/
│   ├── Context/         # Global state providers
│   │   ├── AuthenticationContextProvider.jsx
│   │   ├── CategoriesContextProvider.jsx
│   │   └── CourseContextProvider.jsx
│   ├── Skeleton/        # Loading skeleton components
│   ├── useFetch.js      # Custom hook for API calls
│   └── index.js
├── tailwind.config.js
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/oznuryakut/e-learning-system.git

# Navigate to the project folder
cd e-learning-system

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |

---

## 🗄️ Data Source

The app fetches data from an external JSON repository via the `useFetch` custom hook:

- `courses.json` — Course list and details
- `categories.json` — Course categories
- `students.json` — Student testimonials
- `info.json` — Platform stats (150k+ learners, 200+ instructors, 800+ courses)

---

## 👩‍💻 Developer

**Öznur Yakut**  
[![GitHub](https://img.shields.io/badge/GitHub-oznuryakut-181717?style=flat&logo=github)](https://github.com/oznuryakut)

---

> This project was developed as part of the **Distance Learning Management System** course. © 2025 Yakut Akademi
