// ============================================================
// 📸 PHOTO: Replace null with your image import or path
// Example:
import photo from './assets/sneha.jpg'
export const PHOTO_URL = photo
// ============================================================

// ============================================================
// 🔗 SOCIAL LINKS — update these
// ============================================================
export const LINKS = {
  github:   'https://github.com/Snehaa-1807',
  linkedin: 'https://www.linkedin.com/in/sneha-narwaria-18a56b291',
  email:    'mailTo: snehanarwaria2@gmail.com',
  resume:   '#', // link to your resume PDF
}

// ============================================================
// 🗂️ PROJECTS — replace `link` with your actual project URLs
// ============================================================
export const PROJECTS = [
  {
    icon: '📦',
    name: 'Inventory SaaS',
    desc: 'Full-stack inventory management platform with real-time tracking and analytics dashboard.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://inventory-saas-pfrd.vercel.app/', // ← YOUR LINK
  },
  {
    icon: '🤖',
    name: 'AI Portfolio Generator',
    desc: 'AI-powered portfolio generation tool that creates personalized portfolios from uploaded resumes.',
    tags: ['Node.js', 'Groq Ai', 'React', 'TailwindCSS', 'MongoDB'],
    link: 'https://ai-portfolio-generator-7r9n.vercel.app/',
  },
  {
    icon: '💬',
    name: 'Real-Time Chat App',
    desc: 'Firebase-based real-time messaging system with authentication and live presence updates.',
    tags: ['Firebase', 'React', 'Node.js'],
    link: 'https://chatly-the-chatapp.netlify.app/',
  },
  {
    icon: '🖼️',
    name: 'Imagino',
    desc: 'Image-focused web application for creative exploration and visual content management.',
    tags: ['React', 'APIs', 'TailwindCSS'],
    link: 'https://imagino-ai.netlify.app/',
  },
  {
    icon: '👗',
    name: 'E-commerce Clothes Store',
    desc: 'Modern clothing store frontend with dynamic product filtering and cart functionality.',
    tags: ['HTML', 'CSS', 'JS'],
    link: 'https://github.com/sneha-narwaria',
  },
  {
    icon: '🍎',
    name: 'Fruits Basket',
    desc: 'Simple shopping-style web page for fresh produce browsing and ordering.',
    tags: ['React', 'Node.js', 'TailwindCSS'],
    link: 'https://basket-fruit.netlify.app/',
  },
  {
    icon: '🛍️',
    name: 'Shopping Point',
    desc: 'Product browsing web app with clean UI and category-based navigation.',
    tags: ['React', 'TailwindCSS'],
    link: 'https://shopsiteshopping.netlify.app/',
  },
]

export const SKILLS = [
  { icon: '⚛️', cat: 'Full Stack',  tags: ['React', 'Node.js', 'Express', 'MongoDB', 'MySQL'] },
  { icon: '🔌', cat: 'IoT',         tags: ['ESP32', 'Raspberry Pi', 'Sensors', 'Embedded C/C++'] },
  { icon: '🧠', cat: 'AI / ML',     tags: ['Python', 'Data Processing', 'Model Integration'] },
  { icon: '🗣️', cat: 'Languages',   tags: ['Python', 'C++', 'Java', 'HTML', 'CSS', 'JavaScript'] },
  { icon: '🛠️', cat: 'Tools',       tags: ['Git', 'Firebase', 'REST APIs', 'Cloud Deployment'] },
]

export const SERVICES = [
  { emoji: '🌐', name: 'Full Stack Web Development',  desc: 'End-to-end web apps from database design to polished UI.' },
  { emoji: '🤖', name: 'IoT System Design',           desc: 'Smart embedded systems with sensors, MCUs, and cloud connectivity.' },
  { emoji: '📊', name: 'AI-Integrated Applications',  desc: 'ML model integration and intelligent automation in production.' },
  { emoji: '⚙️', name: 'Backend APIs & Databases',   desc: 'Robust, scalable REST APIs and optimized database architectures.' },
  { emoji: '🎨', name: 'Dashboards & UI Integration', desc: 'Real-time data dashboards with clean, interactive interfaces.' },
]

export const TIMELINE = [
  { year: '2023',   title: 'Started Full Stack & IoT Development',      desc: 'Began the journey into web engineering and embedded systems, building foundational skills across the full stack.' },
  { year: '2024',   title: 'Built Multiple Web + IoT Projects',          desc: 'Delivered production-grade web apps and IoT prototypes. Gained depth in React, Node.js, and hardware integration.' },
  { year: '2025',   title: 'Focused on AI-Integrated & SaaS Systems',   desc: 'Shifting toward scalable SaaS products and AI-powered tooling. Building systems that think.' },
  { year: 'Future', title: 'Research, Innovation & Product Engineering', desc: 'Pursuing deep research in IoT–AI convergence and building tools that create real-world difference.' },
]
