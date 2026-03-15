export const categories = [
  {
    id: "ai-tools",
    name: "AI Tools",
    description:
      "Harness the power of artificial intelligence for writing, image generation, coding, and more.",
    icon: "🤖",
    color: "#7C3AED",
    gradient: "from-violet-500 to-purple-700",
    count: 5,
    featured: true,
  },
  {
    id: "developer-tools",
    name: "Developer Tools",
    description:
      "Essential tools for software engineers — from version control to API testing and deployment.",
    icon: "⚙️",
    color: "#2563EB",
    gradient: "from-blue-500 to-indigo-700",
    count: 4,
    featured: true,
  },
  {
    id: "design-tools",
    name: "Design Tools",
    description:
      "Create stunning visuals, UI/UX designs, and graphics with professional design platforms.",
    icon: "🎨",
    color: "#DB2777",
    gradient: "from-pink-500 to-rose-700",
    count: 3,
    featured: true,
  },
  {
    id: "productivity-tools",
    name: "Productivity Tools",
    description:
      "Boost your efficiency with note-taking, project management, and workflow automation tools.",
    icon: "⚡",
    color: "#059669",
    gradient: "from-emerald-500 to-teal-700",
    count: 3,
    featured: true,
  },
  {
    id: "video-content-tools",
    name: "Video & Content",
    description:
      "Create, edit, and distribute video content and multimedia with next-gen AI-powered tools.",
    icon: "🎬",
    color: "#DC2626",
    gradient: "from-red-500 to-orange-600",
    count: 2,
    featured: true,
  },
  {
    id: "learning-tools",
    name: "Learning Tools",
    description:
      "Upskill and expand your knowledge with online courses, interactive platforms, and educational resources.",
    icon: "🎓",
    color: "#D97706",
    gradient: "from-amber-500 to-orange-600",
    count: 2,
    featured: true,
  },
];

export const getCategoryById = (id) => categories.find((c) => c.id === id);
