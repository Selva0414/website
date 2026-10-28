export const PARTNER_LOGOS = [
  { name: "Tata", text: "Tata", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg" },
  { name: "Pickmyad", text: "pickmy ad" },
  { name: "Resulticks", text: "Resultickś" },
  { name: "Eurofins", text: "eurofins" },
  { name: "Handbuilt Apps", text: "Handbuilt Apps" },
  { name: "7 Eagles", text: "7 Eagles" }
];

export const HERO_STATS = [
  { value: "5000+", label: "Impact on student" },
  { value: "1.5M+", label: "Digitally Reached" },
  { value: "47M+", label: "Viewers Globally" },
  { value: "15LPA", label: "Highest CTC" }
];

export const PROGRAMS = [
  {
    id: "ai-fullstack",
    type: "ai-bootcamp",
    badges: ["NEW · AI POWERED", "Startup Incubated"],
    title: "AI Full Stack Developer Bootcamp",
    description: "A 4-month + 1-month internship AI Full Stack Engineering Bootcamp, designed by a start-up to take you from Frontend, Backend, Database and AI to Deployment.",
    skills: ["React", "Next.js", "Node.js", "PostgreSQL", "AI Integration", "Stripe", "Docker", "Deployment"],
    features: [
      { icon: "live", text: "Live Classes" },
      { icon: "calendar", text: "4 Months + 1 Month Internship" },
      { icon: "briefcase", text: "Placement Assistance" },
      { icon: "mentor", text: "Live Mentor Support" }
    ],
    techLogos: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "Node.js", icon: "node" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "OpenAI", icon: "openai" }
    ],
    theme: "dark-purple",
    ctaText: "Enroll Now"
  },
  {
    id: "fsd-offline",
    type: "offline-bootcamp",
    badge: "CLASSROOM PROGRAM",
    title: "Full Stack Web Development Bootcamp (Offline)",
    description: "Classroom-based Full Stack Training with in-person mentors and hands-on projects, built to launch your developer career. Classes Mon, Wed & Fri and Sunday, 4:00 PM - 5:30 PM.",
    skills: [
      { name: "HTML", color: "#fef3c7" },
      { name: "CSS", color: "#e0f2fe" },
      { name: "JavaScript", color: "#fef9c3" },
      { name: "TailwindCSS", color: "#cffafe" },
      { name: "ReactJS", color: "#dbeafe" },
      { name: "NodeJS", color: "#dcfce7" },
      { name: "ExpressJS", color: "#e2e8f0" },
      { name: "MongoDB", color: "#bbf7d0" }
    ],
    features: [
      { icon: "offline", text: "Offline" },
      { icon: "calendar", text: "4 Months" },
      { icon: "briefcase", text: "Placement Assistance" },
      { icon: "mentor", text: "Live Mentor Support" }
    ],
    techIcons: ["node", "express", "react", "mongo"],
    theme: "cream-card",
    ctaText: "Enroll Now"
  },
  {
    id: "devops-aws",
    type: "cloud-bootcamp",
    badge: "DEVOPS CLOUD",
    title: "DevOps with AWS Cloud Bootcamp",
    description: "DevOps with AWS Cloud Bootcamp offers industry-led training to fast-track your shift into high-demand cloud and automation roles.",
    skills: [
      { name: "AWS", color: "#cffafe" },
      { name: "CI/CD", color: "#f3e8ff" },
      { name: "Docker", color: "#ffedd5" },
      { name: "Jenkins", color: "#fef3c7" },
      { name: "Cloud Computing", color: "#e0f2fe" },
      { name: "Grafana", color: "#e0e7ff" },
      { name: "Linux", color: "#ffe4e6" },
      { name: "Prometheus", color: "#fef9c3" }
    ],
    features: [
      { icon: "live", text: "Live Classes" },
      { icon: "calendar", text: "3 Months" },
      { icon: "briefcase", text: "Placement Assistance" },
      { icon: "mentor", text: "Live Mentor Support" }
    ],
    techIcons: ["aws", "cicd", "docker", "jenkins"],
    theme: "light-cyan-card",
    ctaText: "Enroll Now"
  }
];

export const RECOGNITIONS = [
  "International Organization for Standardization",
  "Promising Tech Educator",
  "Youtube Awards",
  "Creator for change",
  "by MIT Anna University"
];

export const WHY_US_CARDS = [
  {
    title: "Simplified Teaching:",
    text: "90% of our students love our easy-to-understand teaching methods.",
    bg: "#bbf7d0", // soft pastel green
    border: "#86efac"
  },
  {
    title: "24/7 Doubt Support",
    text: "Get your doubts cleared anytime through various channels.",
    bg: "#fef08a", // soft pastel yellow
    border: "#fde047"
  },
  {
    title: "Experienced Educators",
    text: "Learn from experts who've worked at top companies like Zoho, Accenture, and Infosys.",
    bg: "#bfdbfe", // soft pastel blue
    border: "#93c5fd"
  },
  {
    title: "Placement Assistance:",
    text: "Our programs include mock interviews, quizzes, internships, and live projects to prepare you for job placement.",
    bg: "#ddd6fe", // soft pastel violet
    border: "#c4b5fd"
  }
];

export const REVIEWS = [
  {
    text: "Detailed explanation helps to understand the concept clearly ❤️",
    author: "Praveen M",
    source: "Rated by @Google",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
  },
  {
    text: "Good Learning Platform",
    author: "Pandiarajan",
    source: "Rated by @Trust Pilot",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
  },
  {
    text: "It's really helpful in many ways and we gained more knowledge in this event .We are eagerly waiting for second event 🫶",
    author: "Kannan S",
    source: "Rated by @Google",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
  },
  {
    text: "gave some useful tips and tricks for Resume Building and also how to crack the Interview. They trained us with some hands-on projects which much much better way to practice and make us as skilled. So, I seriously recommend guys who were new to coding world😉 . But, the one bitter thing I faced when I was go through this course is the duration. I feel the duration for this course need some extra time. You need some extra time & effort to this.",
    author: "Jai Pravin",
    source: "Rated by @Trustpilot",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=80"
  },
  {
    text: "Really I love your teaching way.Clear explanation Unga video's paathu thaan enakku coding Naa enna nu theriyum Thank you very much 🤗",
    author: "Reshma Banu",
    source: "Rated by @Google",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
  },
  {
    text: "Recently watched a fantastic tutorial on Git and GitHub by Agnel John at Error Makes Clever on YouTube. 🚀 It's incredibly helpful and easy to grasp, making it a valuable investment of time. Highly recommend checking it out! #Git #GitHub #CodingTips #ErrorMakesCleverAcademy #YouTube #AgnelJohn",
    author: "Avanti Kumari",
    source: "Rated by @Google",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
  },
  {
    text: "Error makes clever conducted event is such a 10xvalue worth I have learned so many takeaways from industry experts.",
    author: "Sam",
    source: "Rated by @Google",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80"
  },
  {
    text: "Thrilled to share my EMC Academy experience ! from Zero coding knowledge to working in a US Startup after completing their full stack web development course. With over 10 Projects and internships under my belt, EMC is a must for career growth seekers",
    author: "Syed Imran",
    source: "Rated by @Google",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80"
  },
  {
    text: "Being a co-mentor at EMC has been such a rewarding journey. The support, guidance, and collaboration here are truly top-notch. EMC's commitment to high standards and its welcoming environment makes it a great place. It feels like a community that's dedicated to learning, growing, and helping each other succeed.",
    author: "Mohana Priya",
    source: "Rated by @Google",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
  }
];

export const FOOTER_DATA = {
  freeCourses: [
    "FullStack", "FrontEnd", "Backend", "Python", "Java", "GitHub", "Html", "CSS", "JavaScript"
  ],
  quickLinks: [
    "Home", "Full Stack", "Devops", "Crash Courses", "Master DSA", "Master AWS", "Blogs"
  ],
  companyLinks: [
    "Contact", "Privacy Policy", "Refund Policy", "Terms Of Use", "Student Reviews", "Careers"
  ]
};
