// ===== RESOURCE DATA =====
const resources = [
  // ── YOUTUBE CHANNELS ──
  {
    title: "freeCodeCamp",
    type: "youtube",
    icon: "yt",
    description: "Full university-level courses on Python, JavaScript, DSA, databases, and more. 10+ hour tutorials.",
    tags: ["Programming", "Web Dev", "Python", "All Levels"],
    url: "https://www.youtube.com/@freecodecamp",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "CS Dojo",
    type: "youtube",
    icon: "yt",
    description: "Clear explanations of data structures, algorithms, and Python programming. Great for DSA beginners.",
    tags: ["DSA", "Python", "Beginners"],
    url: "https://www.youtube.com/@CSDojo",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Traversy Media",
    type: "youtube",
    icon: "yt",
    description: "Web development crash courses — HTML, CSS, JS, React, Node.js, PHP. Project-based learning.",
    tags: ["Web Dev", "JavaScript", "Projects"],
    url: "https://www.youtube.com/@TraversyMedia",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Net Ninja",
    type: "youtube",
    icon: "yt",
    description: "Structured playlists on modern web dev, Flutter, Node.js, and Firebase. Beginner-friendly series.",
    tags: ["Web Dev", "Flutter", "Node.js", "Series"],
    url: "https://www.youtube.com/@NetNinja",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Krish Naik",
    type: "youtube",
    icon: "yt",
    description: "Data science, ML, deep learning tutorials in Hindi/English. Perfect for CSIT AI electives.",
    tags: ["ML", "Data Science", "AI", "Hindi"],
    url: "https://www.youtube.com/@krishnaik06",
    programs: ["csit"]
  },
  {
    title: "CampusX",
    type: "youtube",
    icon: "yt",
    description: "Data science, ML, deep learning tutorials in Hindi. Perfect for CSIT AI electives.",
    tags: ["ML", "Data Science", "AI", "Hindi"],
    url: "https://www.youtube.com/@campusx-official",
    programs: ["csit"]
  },
  {
    title: "CodeWithHarry",
    type: "youtube",
    icon: "yt",
    description: "Full programming courses in Hindi — Python, C, C++, Java, web dev, DSA. Very beginner-friendly.",
    tags: ["Hindi", "Python", "C/C++", "Web Dev", "Beginners"],
    url: "https://www.youtube.com/@CodeWithHarry",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Apna College",
    type: "youtube",
    icon: "yt",
    description: "DSA, web development, and placement preparation in Hindi. Great for coding interview prep.",
    tags: ["DSA", "Placement", "Hindi", "Web Dev"],
    url: "https://www.youtube.com/@ApnaCollegeOfficial",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "The Organic Chemistry Tutor",
    type: "youtube",
    icon: "yt",
    description: "Covers calculus, linear algebra, physics, and discrete math — essential for CSIT math courses.",
    tags: ["Math", "Calculus", "Physics", "Discrete Math"],
    url: "https://www.youtube.com/@TheOrganicChemistryTutor",
    programs: ["csit"]
  },
  {
    title: "3Blue1Brown",
    type: "youtube",
    icon: "yt",
    description: "Beautiful animated math explainers — linear algebra, calculus, neural networks. Intuition-first.",
    tags: ["Math", "Linear Algebra", "Calculus", "Visual"],
    url: "https://www.youtube.com/@3blue1brown",
    programs: ["csit", "bim"]
  },
  {
    title: "Computerphile",
    type: "youtube",
    icon: "yt",
    description: "University of Nottingham professors explain CS concepts — algorithms, security, AI theory.",
    tags: ["CS Theory", "Algorithms", "Security", "Advanced"],
    url: "https://www.youtube.com/@Computerphile",
    programs: ["csit"]
  },
  {
    title: "Accounting Stuff",
    type: "youtube",
    icon: "yt",
    description: "Clear accounting and finance tutorials. Essential for BIM students taking accounting courses.",
    tags: ["Accounting", "Finance", "Beginners", "BIM"],
    url: "https://www.youtube.com/@AccountingStuff",
    programs: ["bim"]
  },
  {
    title: "MIT OpenCourseWare",
    type: "youtube",
    icon: "yt",
    description: "Full MIT lectures on CS, math, algorithms. Top-tier university content, completely free.",
    tags: ["University", "Algorithms", "Math", "Advanced"],
    url: "https://www.youtube.com/@mitocw",
    programs: ["csit", "bim", "bca"]
  },

  // ── WEBSITES ──
  {
    title: "MDN Web Docs",
    type: "website",
    icon: "web",
    description: "The definitive reference for HTML, CSS, and JavaScript. Mozilla-maintained, always up-to-date.",
    tags: ["Web Dev", "Reference", "Documentation"],
    url: "https://developer.mozilla.org",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "W3Schools",
    type: "website",
    icon: "web",
    description: "Beginner-friendly tutorials with live code editors. Covers web dev, SQL, Python, Java, and more.",
    tags: ["Web Dev", "SQL", "Beginners", "Interactive"],
    url: "https://www.w3schools.com",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "GeeksforGeeks",
    type: "website",
    icon: "web",
    description: "Massive library of articles on DSA, programming languages, system design, and interview prep.",
    tags: ["DSA", "Interview", "All Languages"],
    url: "https://www.geeksforgeeks.org",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Programiz",
    type: "website",
    icon: "web",
    description: "Learn Python, C, C++, Java, DSA step-by-step with built-in code editor. Great for absolute beginners.",
    tags: ["Python", "C/C++", "Java", "Beginners"],
    url: "https://www.programiz.com",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "TutorialsPoint",
    type: "website",
    icon: "web",
    description: "Free tutorials on programming, databases, OS, networking, and software engineering topics.",
    tags: ["Programming", "DBMS", "OS", "Networking"],
    url: "https://www.tutorialspoint.com",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Khan Academy",
    type: "website",
    icon: "web",
    description: "Interactive math courses — calculus, linear algebra, statistics. Plus computing and economics.",
    tags: ["Math", "Statistics", "Calculus", "Interactive"],
    url: "https://www.khanacademy.org",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "CS50 by Harvard",
    type: "website",
    icon: "web",
    description: "Harvard's legendary intro to CS course. Available free on edX. Covers C, Python, SQL, web dev.",
    tags: ["CS Intro", "C", "Python", "SQL", "Harvard"],
    url: "https://cs50.harvard.edu",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "JavaTpoint",
    type: "website",
    icon: "web",
    description: "Simple tutorials for Java, Python, SQL, Android, Selenium, and many more technologies.",
    tags: ["Java", "Python", "SQL", "Android"],
    url: "https://www.javatpoint.com",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "SQLZoo",
    type: "website",
    icon: "web",
    description: "Interactive SQL tutorial — write queries and see results instantly. Covers JOINs, subqueries, aggregation.",
    tags: ["SQL", "DBMS", "Interactive"],
    url: "https://sqlzoo.net",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "The Odin Project",
    type: "website",
    icon: "web",
    description: "Full-stack web development curriculum. Project-based, completely free, community-driven.",
    tags: ["Web Dev", "Full Stack", "Projects", "Ruby"],
    url: "https://www.theodinproject.com",
    programs: ["csit", "bca"]
  },
  {
    title: "roadmap.sh",
    type: "website",
    icon: "web",
    description: "Community-driven developer roadmaps for frontend, backend, DevOps, DSA, AI, and more. Visual learning paths.",
    tags: ["Roadmaps", "Career", "Full Stack", "DevOps"],
    url: "https://roadmap.sh",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Hacker News",
    type: "website",
    icon: "web",
    description: "Y Combinator's tech news aggregator. Stay updated with programming, startups, and CS research discussions.",
    tags: ["Tech News", "Community", "Startups", "Daily"],
    url: "https://news.ycombinator.com",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "There's An AI For That",
    type: "website",
    icon: "web",
    description: "Massive curated database of AI tools for every task. Discover free AI tools for coding, writing, design, and learning.",
    tags: ["AI Tools", "Directory", "Productivity", "Free"],
    url: "https://theresanaiforthat.com",
    programs: ["csit", "bim", "bca"]
  },

  // ── PRACTICE PLATFORMS ──
  {
    title: "LeetCode",
    type: "practice",
    icon: "practice",
    description: "The gold standard for DSA practice and coding interview prep. 3000+ problems with solutions.",
    tags: ["DSA", "Interview", "All Levels"],
    url: "https://leetcode.com",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "HackerRank",
    type: "practice",
    icon: "practice",
    description: "Practice coding problems by topic — warmup, DSA, math, databases, regex. Badge system for motivation.",
    tags: ["DSA", "SQL", "Python", "C++"],
    url: "https://www.hackerrank.com",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Codecademy (Free Tier)",
    type: "practice",
    icon: "practice",
    description: "Interactive coding lessons with built-in editor. Free courses on Python, JS, SQL, and more.",
    tags: ["Interactive", "Python", "JS", "SQL"],
    url: "https://www.codecademy.com/catalog/subject/all/free",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Exercism",
    type: "practice",
    icon: "practice",
    description: "Practice 70+ programming languages with mentor-reviewed exercises. Great for learning new languages.",
    tags: ["All Languages", "Mentoring", "Practice"],
    url: "https://exercism.org",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Codewars",
    type: "practice",
    icon: "practice",
    description: "Gamified coding challenges (kata) across many languages. Compete and learn from community solutions.",
    tags: ["Gamified", "All Languages", "Community"],
    url: "https://www.codewars.com",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Frontend Mentor",
    type: "practice",
    icon: "practice",
    description: "Real-world HTML/CSS/JS challenges with design files. Build portfolio-worthy frontend projects.",
    tags: ["Frontend", "Projects", "Portfolio"],
    url: "https://www.frontendmentor.io",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Coding Ninjas (Free)",
    type: "practice",
    icon: "practice",
    description: "Free DSA practice problems, MCQs, and interview experiences. Good for placement prep.",
    tags: ["DSA", "Interview", "MCQ"],
    url: "https://www.codingninjas.com/studio/problems",
    programs: ["csit", "bim", "bca"]
  },

  // ── E-BOOKS & NOTES ──
  {
    title: "Python Notes (CSIT)",
    type: "ebook",
    icon: "ebook",
    description: "Comprehensive Python notes covering CSIT first-semester syllabus. Examples and exercises included.",
    tags: ["Python", "CSIT Sem 1", "Notes", "Nepali"],
    url: "https://www.programiz.com/python-programming",
    programs: ["csit"]
  },
  {
    title: "OpenStax Textbooks",
    type: "ebook",
    icon: "ebook",
    description: "Free university-level textbooks — calculus, physics, statistics, economics. Peer-reviewed quality.",
    tags: ["Math", "Physics", "Statistics", "University"],
    url: "https://openstax.org/subjects",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "GoalKicker Free Programming Books",
    type: "ebook",
    icon: "ebook",
    description: "Free PDF books for Python, C, C++, Java, SQL, Linux, Git, and 50+ more topics. Concise notes style.",
    tags: ["PDF", "All Languages", "Quick Reference"],
    url: "https://books.goalkicker.com",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Automate the Boring Stuff with Python",
    type: "ebook",
    icon: "ebook",
    description: "Free online book teaching practical Python automation. Read online or buy print. Beginner-friendly.",
    tags: ["Python", "Automation", "Beginners"],
    url: "https://automatetheboringstuff.com",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "C Programming Notes (IOE)",
    type: "ebook",
    icon: "ebook",
    description: "C programming notes following Nepali university syllabus. Covers pointers, structs, file handling.",
    tags: ["C", "IOE/CSIT", "Notes", "Nepali"],
    url: "https://www.programiz.com/c-programming",
    programs: ["csit"]
  },
  {
    title: "Free Computer Books",
    type: "ebook",
    icon: "ebook",
    description: "Directory of free online CS books — algorithms, OS, networking, databases, AI, and more.",
    tags: ["CS Theory", "OS", "Networking", "AI"],
    url: "https://github.com/EbookFoundation/free-programming-books",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Database System Concepts (Slides)",
    type: "ebook",
    icon: "ebook",
    description: "Free lecture slides from the classic DBMS textbook. Perfect supplement for CSIT/BIM DBMS course.",
    tags: ["DBMS", "SQL", "Slides", "University"],
    url: "https://www.db-book.com/slides-dir/index.html",
    programs: ["csit", "bim"]
  },
  {
    title: "Discrete Mathematics Notes",
    type: "ebook",
    icon: "ebook",
    description: "Free discrete math textbook with problems sets. Covers logic, sets, graphs, combinatorics.",
    tags: ["Discrete Math", "Logic", "Graphs", "CSIT Sem 2"],
    url: "https://discrete.openmathbooks.org/dmoi3.html",
    programs: ["csit"]
  },
  {
    title: "Management & Economics Notes (BIM)",
    type: "ebook",
    icon: "ebook",
    description: "Free resources for BIM management courses — principles of management, micro/macroeconomics.",
    tags: ["Management", "Economics", "BIM"],
    url: "https://open.umn.edu/opentextbooks/subjects/management",
    programs: ["bim"]
  },

  // ── TOOLS ──
  {
    title: "GitHub Student Developer Pack",
    type: "tool",
    icon: "tool",
    description: "Free GitHub Pro, Canva, GitHub Copilot, and 100+ tools for students. Just sign up with college email.",
    tags: ["GitHub", "Free Tools", "Students"],
    url: "https://education.github.com/pack",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "VS Code",
    type: "tool",
    icon: "tool",
    description: "Free, powerful code editor. Extensions for every language. Lightweight and fast. Industry standard.",
    tags: ["Editor", "All Languages", "Extensions"],
    url: "https://code.visualstudio.com",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Replit",
    type: "tool",
    icon: "tool",
    description: "Online IDE supporting 50+ languages. Code from your browser, no setup needed. Free tier is generous.",
    tags: ["Online IDE", "Browser", "All Languages"],
    url: "https://replit.com",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Overleaf",
    type: "tool",
    icon: "tool",
    description: "Online LaTeX editor — perfect for CSIT math assignments, project reports, and research papers.",
    tags: ["LaTeX", "Reports", "Math"],
    url: "https://www.overleaf.com",
    programs: ["csit"]
  },
  {
    title: "Figma (Free)",
    type: "tool",
    icon: "tool",
    description: "UI/UX design tool. Free for students. Design websites, apps, and prototypes. Essential for BCA design courses.",
    tags: ["Design", "UI/UX", "Prototyping"],
    url: "https://www.figma.com",
    programs: ["csit", "bca"]
  },
  {
    title: "DB Fiddle",
    type: "tool",
    icon: "tool",
    description: "Online SQL playground supporting MySQL, PostgreSQL, SQLite. Test queries without installing anything.",
    tags: ["SQL", "DBMS", "Browser"],
    url: "https://www.db-fiddle.com",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Draw.io",
    type: "tool",
    icon: "tool",
    description: "Free diagramming tool for flowcharts, ER diagrams, UML, network diagrams. Saves to Google Drive/GitHub.",
    tags: ["Diagrams", "Flowcharts", "UML", "ERD"],
    url: "https://app.diagrams.net",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Google Colab",
    type: "tool",
    icon: "tool",
    description: "Free cloud Jupyter notebooks with GPU access. Run Python/ML code in browser. No setup needed.",
    tags: ["Python", "ML", "GPU", "Jupyter"],
    url: "https://colab.research.google.com",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Python Tutor",
    type: "tool",
    icon: "tool",
    description: "Visualize Python, Java, C, C++, JavaScript, and Ruby code execution step-by-step. Debug and understand code flow.",
    tags: ["Visualizer", "Debug", "Python", "All Languages"],
    url: "https://pythontutor.com",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "DocsBot AI Prompt Generator",
    type: "tool",
    icon: "tool",
    description: "Generate optimized AI prompts for coding, writing, and learning. Helps craft better ChatGPT/Claude queries.",
    tags: ["AI", "Prompts", "Productivity", "Free"],
    url: "https://docsbot.ai/tools/prompt/ai-prompt-generator",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Notion",
    type: "tool",
    icon: "tool",
    description: "All-in-one workspace for notes, project management, wikis, and databases. Free student plan available.",
    tags: ["Notes", "Productivity", "Collaboration", "Wiki"],
    url: "https://www.notion.com",
    programs: ["csit", "bim", "bca"]
  },

  // ── GITHUB REPOS ──
  {
    title: "free-programming-books",
    type: "github",
    icon: "github",
    description: "The ultimate collection of free programming books, courses, podcasts, and cheat sheets. 330K+ stars.",
    tags: ["Books", "All Languages", "Curated", "Essential"],
    url: "https://github.com/EbookFoundation/free-programming-books",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "coding-interview-university",
    type: "github",
    icon: "github",
    description: "Complete computer science study plan to become a software engineer. Used by thousands preparing for FAANG.",
    tags: ["Interview", "DSA", "CS Degree", "Study Plan"],
    url: "https://github.com/jwasham/coding-interview-university",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "build-your-own-x",
    type: "github",
    icon: "github",
    description: "Master programming by recreating your favorite tech — build a git client, database, blockchain, Redis, and more.",
    tags: ["Projects", "From Scratch", "Advanced", "Hands-on"],
    url: "https://github.com/codecrafters-io/build-your-own-x",
    programs: ["csit", "bca"]
  },
  {
    title: "public-apis",
    type: "github",
    icon: "github",
    description: "Collective list of free APIs for projects — weather, finance, AI, games, and more. Build without a backend.",
    tags: ["APIs", "Projects", "Free", "Dev Resources"],
    url: "https://github.com/public-apis/public-apis",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "system-design-primer",
    type: "github",
    icon: "github",
    description: "Learn large-scale system design. Covers scalability, caching, load balancing, database sharding, and microservices.",
    tags: ["System Design", "Interview", "Architecture", "Advanced"],
    url: "https://github.com/donnemartin/system-design-primer",
    programs: ["csit", "bim"]
  },
  {
    title: "javascript-algorithms",
    type: "github",
    icon: "github",
    description: "Algorithms and data structures implemented in JavaScript with explanations. Great for learning DSA visually.",
    tags: ["DSA", "JavaScript", "Examples", "Visual"],
    url: "https://github.com/trekhleb/javascript-algorithms",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "project-based-learning",
    type: "github",
    icon: "github",
    description: "Curated list of programming tutorials where you build applications from scratch. All languages and frameworks.",
    tags: ["Projects", "Tutorials", "All Languages", "Hands-on"],
    url: "https://github.com/practical-tutorials/project-based-learning",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "awesome (sindresorhus)",
    type: "github",
    icon: "github",
    description: "The mother of all awesome lists — curated resources on every CS topic: JS, Python, databases, security, and more.",
    tags: ["Curated", "All Topics", "Essential", "Mega-list"],
    url: "https://github.com/sindresorhus/awesome",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "free-for-dev",
    type: "github",
    icon: "github",
    description: "Massive list of free SaaS, PaaS, and IaaS tools for developers. Cloud, hosting, CI/CD, monitoring — all free tiers.",
    tags: ["DevOps", "Cloud", "Free Tools", "SaaS"],
    url: "https://github.com/ripienaar/free-for-dev",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "You-Dont-Know-JS",
    type: "github",
    icon: "github",
    description: "Deep dive into JavaScript's core mechanisms. Read online free. Essential for any JS/frontend developer.",
    tags: ["JavaScript", "Deep Dive", "Book", "Frontend"],
    url: "https://github.com/getify/You-Dont-Know-JS",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "computer-science (OSSU)",
    type: "github",
    icon: "github",
    description: "Path to a free self-taught CS education. Full curriculum mirroring an undergraduate CS degree from top universities.",
    tags: ["CS Degree", "Curriculum", "Self-taught", "Complete"],
    url: "https://github.com/ossu/computer-science",
    programs: ["csit", "bca"]
  },
  {
    title: "developer-roadmap",
    type: "github",
    icon: "github",
    description: "Interactive roadmaps for frontend, backend, DevOps, AI/ML, and more. Know exactly what to learn next.",
    tags: ["Roadmaps", "Career", "Guide", "Visual"],
    url: "https://github.com/kamranahmedse/developer-roadmap",
    programs: ["csit", "bim", "bca"]
  },

  // ── FREE COURSES ──
  {
    title: "CS50: Intro to Computer Science",
    type: "course",
    icon: "course",
    description: "Harvard's legendary CS intro. 11 weeks of lectures, problem sets, and a final project. Life-changing.",
    tags: ["CS Intro", "Harvard", "C", "Python", "SQL"],
    url: "https://cs50.harvard.edu/x",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Full Stack Open",
    type: "course",
    icon: "course",
    description: "University of Helsinki's modern web dev course. React, Node.js, GraphQL, TypeScript. Deep and practical.",
    tags: ["Web Dev", "React", "Node.js", "TypeScript"],
    url: "https://fullstackopen.com/en/",
    programs: ["csit", "bca"]
  },
  {
    title: "Python for Everybody (PY4E)",
    type: "course",
    icon: "course",
    description: "University of Michigan's intro Python course. Covers basics through databases and web data.",
    tags: ["Python", "Beginner", "Databases"],
    url: "https://www.py4e.com",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "AWS Cloud Practitioner (Free Course)",
    type: "course",
    icon: "course",
    description: "Free AWS training for cloud fundamentals. Good starting point for cloud computing knowledge.",
    tags: ["Cloud", "AWS", "Fundamentals"],
    url: "https://aws.amazon.com/training/digital/",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "OSSU: Open Source CS Degree",
    type: "course",
    icon: "course",
    description: "Complete CS curriculum built from free courses. Equivalent to an undergraduate CS degree.",
    tags: ["CS Degree", "Self-paced", "Complete"],
    url: "https://github.com/ossu/computer-science",
    programs: ["csit", "bca"]
  },
  {
    title: "NPTEL CS & IT Courses",
    type: "course",
    icon: "course",
    description: "IIT professor-led courses on CS, programming, DBMS, OS, networks. Free certification exam option.",
    tags: ["IIT", "CS", "DBMS", "OS", "Certification"],
    url: "https://nptel.ac.in/course.html",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Microsoft Learn",
    type: "course",
    icon: "course",
    description: "Free Microsoft courses on C#, .NET, Azure, Power BI. Great for BIM students interested in Microsoft stack.",
    tags: ["Microsoft", "C#", "Azure", "Power BI"],
    url: "https://learn.microsoft.com/en-us/training/",
    programs: ["bim"]
  },
  {
    title: "Google Data Analytics Certificate (Free via Aid)",
    type: "course",
    icon: "course",
    description: "Professional certificate on Coursera. Apply for financial aid to get it free. 6-month curriculum.",
    tags: ["Data Analytics", "SQL", "Excel", "Professional"],
    url: "https://www.coursera.org/professional-certificates/google-data-analytics",
    programs: ["bim", "csit"]
  }
];

// ===== USEFUL APPS DATA =====
const appCategories = [
  {
    id: "ai-tools",
    title: "AI & Tech Tools",
    icon: "ai",
    emoji: "🤖",
    apps: [
      { name: "Learn-AI + AI Tools", desc: "AI basics, ML, prompt engineering", emoji: "🧠", url: "https://play.google.com/store/apps/details?id=com.learnaibasic.app" },
      { name: "ChatGPT", desc: "OpenAI's official ChatGPT app", emoji: "💬", url: "https://play.google.com/store/apps/details?id=com.openai.chatgpt" },
      { name: "Claude by Anthropic", desc: "AI assistant for deep work & coding", emoji: "✨", url: "https://play.google.com/store/apps/details?id=com.anthropic.claude" },
      { name: "Microsoft Copilot", desc: "AI chat with GPT-4, free", emoji: "🧩", url: "https://play.google.com/store/apps/details?id=com.microsoft.copilot" },
      { name: "Perplexity", desc: "AI-powered search & research", emoji: "🔍", url: "https://play.google.com/store/search?q=perplexity&c=apps" },
      { name: "Google Gemini", desc: "Google's AI assistant", emoji: "🌟", url: "https://play.google.com/store/apps/details?id=com.google.android.apps.bard" },
      { name: "Poe by Quora", desc: "Chat with multiple AI models", emoji: "🎯", url: "https://play.google.com/store/apps/details?id=com.poe.android" },
      { name: "Z.AI Chat", desc: "Free AI chat with advanced models", emoji: "🤖", url: "https://chat.z.ai/" },
      { name: "Qwen Chat", desc: "Alibaba's Qwen AI models", emoji: "🧠", url: "https://chat.qwen.ai/" },
      { name: "Grok", desc: "xAI's conversational AI by Elon Musk", emoji: "⚡", url: "https://grok.com/" },
      { name: "DuckDuckGo AI Chat", desc: "Private AI chat, no tracking", emoji: "🦆", url: "https://duck.ai/chat?ia=chat&duckai=1" },
      { name: "Mistral Chat", desc: "European open-weight AI models", emoji: "💨", url: "https://chat.mistral.ai/chat" },
      { name: "CharacterAI", desc: "Chat with AI personalities & bots", emoji: "🎭", url: "https://character.ai/" },
      { name: "Napkin AI", desc: "Text-to-visual diagrams & graphics", emoji: "📊", url: "https://www.napkin.ai/" },
      { name: "Google AI Studio", desc: "Prototype with Gemini models", emoji: "🧪", url: "https://aistudio.google.com/apps" },
      { name: "Lovable", desc: "Build apps with AI, no code needed", emoji: "❤️", url: "https://lovable.dev/" },
      { name: "Stitch by Google", desc: "AI-powered creative prototyping", emoji: "🧵", url: "https://stitch.withgoogle.com/" },
      { name: "Emergent", desc: "AI agent orchestration platform", emoji: "🚀", url: "https://app.emergent.sh/home" },
      { name: "Krea AI Enhancer", desc: "AI image enhancement & generation", emoji: "🎨", url: "https://www.krea.ai/enhancer" }
    ]
  },
  {
    id: "programming",
    title: "Programming & Coding",
    icon: "code",
    emoji: "👨‍💻",
    apps: [
      { name: "SoloLearn", desc: "Learn Python, Java, C++, web dev", emoji: "📱", url: "https://play.google.com/store/apps/details?id=com.sololearn" },
      { name: "Programming Hub", desc: "30+ languages, interactive lessons", emoji: "📚", url: "https://play.google.com/store/apps/details?id=com.freeit.java" },
      { name: "Mimo", desc: "Coding for beginners, byte-sized", emoji: "🎮", url: "https://play.google.com/store/apps/details?id=com.getmimo" },
      { name: "Enki", desc: "Daily coding workouts & challenges", emoji: "🏋️", url: "https://play.google.com/store/apps/details?id=com.enki.insights" }
    ]
  },
  {
    id: "online-learning",
    title: "Online Learning",
    icon: "learn",
    emoji: "🎓",
    apps: [
      { name: "Khan Academy", desc: "Full courses — math, CS, science", emoji: "🏫", url: "https://play.google.com/store/apps/details?id=org.khanacademy.android" },
      { name: "Coursera", desc: "University courses & certificates", emoji: "📜", url: "https://play.google.com/store/apps/details?id=org.coursera.android" },
      { name: "edX", desc: "Harvard, MIT courses for free", emoji: "🏛️", url: "https://play.google.com/store/apps/details?id=org.edx.mobile" },
      { name: "LinkedIn Learning", desc: "Professional skill courses", emoji: "💼", url: "https://play.google.com/store/search?q=linkedin+learning&c=apps" },
      { name: "Brilliant", desc: "Interactive math, logic, CS problems", emoji: "🧮", url: "https://play.google.com/store/apps/details?id=org.brilliant.android" },
      { name: "Khan Academy Kids", desc: "Free educational app for younger", emoji: "🧒", url: "https://play.google.com/store/apps/details?id=org.khankids.android" }
    ]
  },
  {
    id: "productivity",
    title: "Productivity & Notes",
    icon: "prod",
    emoji: "📋",
    apps: [
      { name: "Notion", desc: "Notes, wikis, databases, projects", emoji: "📝", url: "https://play.google.com/store/apps/details?id=notion.id" },
      { name: "GitHub", desc: "Repos, issues, PRs on mobile", emoji: "🐙", url: "https://play.google.com/store/apps/details?id=com.github.android" },
      { name: "Trello", desc: "Kanban boards for project management", emoji: "📌", url: "https://play.google.com/store/apps/details?id=com.trello" },
      { name: "Google Keep", desc: "Quick notes, lists, reminders", emoji: "🗒️", url: "https://play.google.com/store/apps/details?id=com.google.android.keep" },
      { name: "Microsoft To Do", desc: "Task manager, daily planner", emoji: "✅", url: "https://play.google.com/store/apps/details?id=com.microsoft.todos" },
      { name: "Evernote", desc: "Powerful note-taking & organization", emoji: "🐘", url: "https://play.google.com/store/apps/details?id=com.evernote" }
    ]
  }
];

// ===== RENDER APPS ACCORDION =====
function renderApps() {
  const accordion = document.getElementById('appsAccordion');
  if (!accordion) return;

  accordion.innerHTML = appCategories.map((cat, i) => `
    <div class="app-category${i === 0 ? ' open' : ''}" data-category="${cat.id}">
      <div class="category-header" onclick="toggleCategory(this.parentElement)">
        <h3>
          <span class="cat-icon ${cat.icon}">${cat.emoji}</span>
          ${cat.title}
        </h3>
        <svg class="category-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
      <div class="category-body">
        <div class="apps-grid">
          ${cat.apps.map(app => `
            <a href="${app.url}" class="app-card" target="_blank" rel="noopener" title="${app.desc}">
              <span class="app-card-emoji">${app.emoji}</span>
              <span class="app-card-info">
                <span class="app-name">${app.name}</span>
                <span class="app-desc">${app.desc}</span>
              </span>
              <span class="app-card-badge">FREE</span>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function toggleCategory(el) {
  el.classList.toggle('open');
}

// ===== STATE =====
let activeFilter = 'all';
let activeProgram = 'all';
let searchQuery = '';

// ===== DARK MODE =====
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ===== RENDER RESOURCES =====
function getIconClass(type) {
  const map = { youtube: 'yt', website: 'web', ebook: 'ebook', practice: 'practice', tool: 'tool', course: 'course', github: 'github' };
  return map[type] || 'web';
}

function renderResources() {
  const grid = document.getElementById('resourcesGrid');
  const noResults = document.getElementById('noResults');

  const filtered = resources.filter(r => {
    const matchFilter = activeFilter === 'all' || r.type === activeFilter;
    const matchProgram = activeProgram === 'all' || r.programs.includes(activeProgram);
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q) || r.tags.some(t => t.toLowerCase().includes(q));
    return matchFilter && matchProgram && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  grid.innerHTML = filtered.map(r => `
    <div class="resource-card">
      <div class="resource-header">
        <div class="resource-icon icon-${getIconClass(r.type)}">
          ${r.type === 'youtube' ? '▶' : r.type === 'website' ? '🌐' : r.type === 'ebook' ? '📖' : r.type === 'practice' ? '⚡' : r.type === 'tool' ? '🔧' : r.type === 'github' ? '⭐' : '🎓'}
        </div>
        <div class="resource-info">
          <h3>${r.title}</h3>
          <span class="resource-type">${r.type}</span>
        </div>
      </div>
      <p>${r.description}</p>
      <div class="resource-tags">
        ${r.tags.map(t => `<span class="resource-tag">${t}</span>`).join('')}
      </div>
      <a href="${r.url}" class="resource-link" target="_blank" rel="noopener">
        Visit Resource
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
      </a>
    </div>
  `).join('');
}

// ===== FILTERS =====
document.getElementById('filterTags').addEventListener('click', e => {
  if (!e.target.classList.contains('filter-tag')) return;
  document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  activeFilter = e.target.dataset.filter;
  renderResources();
});

document.querySelector('.programs-section').addEventListener('click', e => {
  if (!e.target.classList.contains('program-tab')) return;
  document.querySelectorAll('.program-tab').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  activeProgram = e.target.dataset.program;
  renderResources();
});

// ===== SEARCH =====
document.getElementById('searchInput').addEventListener('input', e => {
  searchQuery = e.target.value;
  renderResources();
});

// ===== QUICK LINK SEARCH =====
document.querySelector('.quick-links').addEventListener('click', e => {
  const link = e.target.closest('.ql-link');
  if (!link) return;
  e.preventDefault();
  const term = link.dataset.search;
  document.getElementById('searchInput').value = term;
  searchQuery = term;
  document.getElementById('resources').scrollIntoView({ behavior: 'smooth' });
  renderResources();
});

// ===== USEFUL APPS TAG =====
document.getElementById('usefulAppsTag').addEventListener('click', () => {
  document.getElementById('apps').scrollIntoView({ behavior: 'smooth' });
});

// ===== FOOTER LINKS =====
document.querySelector('.footer').addEventListener('click', e => {
  const filterLink = e.target.closest('[data-filter-link]');
  const programLink = e.target.closest('[data-program-filter]');

  if (filterLink) {
    e.preventDefault();
    const filter = filterLink.dataset.filterLink;
    activeFilter = filter;
    document.querySelectorAll('.filter-tag').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === filter);
    });
    document.getElementById('resources').scrollIntoView({ behavior: 'smooth' });
  }

  if (programLink) {
    e.preventDefault();
    const prog = programLink.dataset.programFilter;
    activeProgram = prog;
    document.querySelectorAll('.program-tab').forEach(b => {
      b.classList.toggle('active', b.dataset.program === prog);
    });
    document.getElementById('resources').scrollIntoView({ behavior: 'smooth' });
  }

  renderResources();
});

// ===== MOBILE MENU TOGGLE =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// ===== MOBILE MENU LINKS =====
document.getElementById('mobileMenu').addEventListener('click', e => {
  const link = e.target.closest('.mobile-menu-link');
  if (!link) return;
  e.preventDefault();

  const filter = link.dataset.mobileFilter;
  const goto = link.dataset.mobileGoto;

  mobileMenu.classList.remove('open');

  if (goto === 'apps') {
    document.getElementById('apps').scrollIntoView({ behavior: 'smooth' });
    return;
  }

  if (filter) {
    activeFilter = filter;
    document.querySelectorAll('.filter-tag').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === filter);
    });
    document.getElementById('resources').scrollIntoView({ behavior: 'smooth' });
    renderResources();
  }
});

// ===== FLOATING CARD CLICKS =====
document.querySelector('.hero-visual').addEventListener('click', e => {
  const card = e.target.closest('.floating-card');
  if (!card) return;

  const map = { 'YouTube': 'youtube', 'Websites': 'website', 'E-Books': 'ebook', 'Tools': 'tool' };
  const filter = map[card.textContent.trim()];
  if (!filter) return;

  activeFilter = filter;
  document.querySelectorAll('.filter-tag').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === filter);
  });
  document.getElementById('resources').scrollIntoView({ behavior: 'smooth' });
  renderResources();
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 10) {
    navbar.style.boxShadow = 'var(--shadow-md)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ===== INITIAL RENDER =====
document.addEventListener('DOMContentLoaded', () => { renderResources(); renderApps(); });
