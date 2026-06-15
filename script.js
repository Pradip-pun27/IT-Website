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
    title: "FreeComputerBooks",
    type: "ebook",
    icon: "ebook",
    description: "Free computer, programming, math, and technical book links organized by subject.",
    tags: ["Computer Books", "Programming", "Math", "Free"],
    url: "https://freecomputerbooks.com/",
    programs: ["csit", "bim", "bca", "extra"]
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
    url: "https://cs.ossu.dev/",
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
  },
  {
    title: "Saylor Academy Computer Science",
    type: "course",
    icon: "course",
    description: "Free self-paced CS courses with optional certificates: programming, networking, data structures, and software engineering.",
    tags: ["CS", "Self-paced", "Certificate", "Free"],
    url: "https://www.saylor.org/learn/computer-science/",
    programs: ["csit", "bca"]
  },
  {
    title: "OpenLearn Cyber Security",
    type: "course",
    icon: "course",
    description: "Free Open University course introducing cyber security, privacy, threats, and basic defensive thinking.",
    tags: ["Security", "Cybersecurity", "Beginner"],
    url: "https://www.open.edu/openlearn/science-maths-technology/introduction-cyber-security/content-section-overview",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Operating Systems: Three Easy Pieces",
    type: "ebook",
    icon: "ebook",
    description: "Free OS textbook covering processes, concurrency, memory, file systems, and virtualization with clear explanations.",
    tags: ["OS", "Textbook", "CSIT", "Advanced"],
    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
    programs: ["csit", "bca"]
  },
  {
    title: "Computer Networking: A Top-Down Approach",
    type: "ebook",
    icon: "ebook",
    description: "Official companion site with free slides, Wireshark labs, and learning material for networking courses.",
    tags: ["Networking", "Slides", "Labs", "CSIT"],
    url: "https://gaia.cs.umass.edu/kurose_ross/index.php",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Postman Academy",
    type: "tool",
    icon: "tool",
    description: "Learn APIs using Postman with free lessons, workspaces, and collections. Very useful for web projects.",
    tags: ["API", "Testing", "Backend", "Projects"],
    url: "https://academy.postman.com/",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Canva for Education",
    type: "tool",
    icon: "tool",
    description: "Create presentations, posters, reports, CVs, and social graphics quickly with free design templates.",
    tags: ["Design", "Presentation", "CV", "Productivity"],
    url: "https://www.canva.com/education/",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Nepal Open University OER",
    type: "website",
    icon: "web",
    description: "Open educational resources from Nepal Open University for local academic support and reference material.",
    tags: ["Nepal", "OER", "Study Material"],
    url: "https://nou.edu.np/",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "DevDocs",
    type: "website",
    icon: "web",
    description: "Fast offline-capable documentation browser for HTML, CSS, JS, Python, Django, React, Node, and more.",
    tags: ["Documentation", "Reference", "Offline", "Fast"],
    url: "https://devdocs.io/",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "Kaggle Learn",
    type: "practice",
    icon: "practice",
    description: "Short free micro-courses on Python, pandas, SQL, ML, data visualization, and competitions.",
    tags: ["Data Science", "Python", "SQL", "ML"],
    url: "https://www.kaggle.com/learn",
    programs: ["csit", "bim"]
  },
  {
    title: "TryHackMe Free Rooms",
    type: "practice",
    icon: "practice",
    description: "Hands-on cybersecurity labs and beginner paths with many free rooms for networking and security practice.",
    tags: ["Security", "Networking", "Labs", "Hands-on"],
    url: "https://tryhackme.com/",
    programs: ["csit", "bca"]
  },
  {
    title: "Tech Interview Handbook",
    type: "github",
    icon: "github",
    description: "Practical interview preparation guide with DSA patterns, behavioral questions, resume tips, and checklists.",
    tags: ["Interview", "DSA", "Resume", "Career"],
    url: "https://github.com/yangshun/tech-interview-handbook",
    programs: ["csit", "bim", "bca"]
  },
  {
    title: "papers-we-love",
    type: "github",
    icon: "github",
    description: "Classic CS papers with community explanations — great for curious students who want deeper computer science context.",
    tags: ["Research", "CS Theory", "Advanced", "Reading"],
    url: "https://github.com/papers-we-love/papers-we-love",
    programs: ["csit"]
  },

  // ── EXTRA HELPFUL SITES ──
  {
    title: "Planet eBook",
    type: "ebook",
    icon: "ebook",
    description: "Free classic literature e-books in clean PDF, EPUB, and Kindle formats; useful for English reading and general knowledge.",
    tags: ["Classic Books", "PDF", "EPUB", "Legal"],
    url: "https://www.planetebook.com/",
    programs: ["extra"]
  },
  {
    title: "Free-eBooks.net",
    type: "ebook",
    icon: "ebook",
    description: "Free e-books across fiction, academic, career, business, and tech topics; sign-up may be required for downloads.",
    tags: ["E-books", "Career", "Business", "Free"],
    url: "https://www.free-ebooks.net/",
    programs: ["extra"]
  },
  {
    title: "ManyBooks",
    type: "ebook",
    icon: "ebook",
    description: "Large catalog of free and discounted e-books, especially public-domain classics and indie books.",
    tags: ["E-books", "Classics", "Fiction", "Free"],
    url: "https://manybooks.net/",
    programs: ["extra"]
  },
  {
    title: "LibriVox",
    type: "ebook",
    icon: "ebook",
    description: "Free public-domain audiobooks read by volunteers; helpful when you prefer listening instead of reading.",
    tags: ["Audiobooks", "Public Domain", "Listening"],
    url: "https://librivox.org/",
    programs: ["extra"]
  },
  {
    title: "Internet Archive",
    type: "ebook",
    icon: "ebook",
    description: "Massive digital library for public-domain books, old texts, media, and archived web pages.",
    tags: ["Digital Library", "Books", "Archive", "Research"],
    url: "https://archive.org/",
    programs: ["extra"]
  },
  {
    title: "BookBub Free eBooks",
    type: "ebook",
    icon: "ebook",
    description: "Find limited-time free and discounted e-book deals; good for discovering new reading material legally.",
    tags: ["E-book Deals", "Reading", "Free"],
    url: "https://www.bookbub.com/ebook-deals/free-ebooks",
    programs: ["extra"]
  },
  {
    title: "Open Library",
    type: "ebook",
    icon: "ebook",
    description: "Internet Archive project where you can borrow and read digital books online like a library.",
    tags: ["Library", "Borrow Books", "Research"],
    url: "https://openlibrary.org/",
    programs: ["extra"]
  },
  {
    title: "Bookboon",
    type: "ebook",
    icon: "ebook",
    description: "Student-friendly textbooks and business e-books covering study skills, career, management, and technical topics.",
    tags: ["Textbooks", "Business", "Students"],
    url: "https://bookboon.com/",
    programs: ["extra"]
  },
  {
    title: "Feedbooks",
    type: "ebook",
    icon: "ebook",
    description: "Public-domain and original e-books with simple browsing by genre; useful for legal reading material.",
    tags: ["E-books", "Public Domain", "Reading"],
    url: "https://www.feedbooks.com/",
    programs: ["extra"]
  },
  {
    title: "Smashwords",
    type: "ebook",
    icon: "ebook",
    description: "Indie e-book store with many free titles; useful for discovering authors and different genres.",
    tags: ["Indie Books", "E-books", "Free"],
    url: "https://www.smashwords.com/",
    programs: ["extra"]
  },
  {
    title: "Project Gutenberg",
    type: "ebook",
    icon: "ebook",
    description: "Trusted library of 70,000+ free public-domain e-books in HTML, EPUB, Kindle, and plain text formats.",
    tags: ["Public Domain", "Classics", "EPUB", "Legal"],
    url: "https://www.gutenberg.org/",
    programs: ["extra"]
  },
  {
    title: "Google Books",
    type: "ebook",
    icon: "ebook",
    description: "Search book previews, references, and public-domain scans; useful for finding book details and citations.",
    tags: ["Book Search", "Preview", "Research"],
    url: "https://books.google.com/",
    programs: ["extra"]
  },
  {
    title: "PDFBooksWorld",
    type: "ebook",
    icon: "ebook",
    description: "Public-domain PDF books formatted for reading; good for classic novels and older reference books.",
    tags: ["PDF", "Public Domain", "Classic Books"],
    url: "https://www.pdfbooksworld.com/",
    programs: ["extra"]
  },
  {
    title: "FreeTechBooks",
    type: "ebook",
    icon: "ebook",
    description: "Directory of free computer science, engineering, programming, math, and technical books.",
    tags: ["Tech Books", "Programming", "CS", "Math"],
    url: "https://www.freetechbooks.com/",
    programs: ["extra"]
  },
  {
    title: "Bookyards",
    type: "ebook",
    icon: "ebook",
    description: "Online book directory historically used for free e-books and educational reading resources.",
    tags: ["Book Directory", "E-books", "Reference"],
    url: "https://www.bookyards.com/",
    programs: ["extra"]
  },
  {
    title: "GetFreeEBooks",
    type: "ebook",
    icon: "ebook",
    description: "Curated posts about free e-books, reading lists, and downloadable book collections.",
    tags: ["E-books", "Curated", "Reading Lists"],
    url: "https://getfreeebooks.com/",
    programs: ["extra"]
  },
  {
    title: "eBookLobby",
    type: "ebook",
    icon: "ebook",
    description: "Directory-style collection of free e-books by category; useful for quick book discovery.",
    tags: ["E-books", "Directory", "Categories"],
    url: "https://www.ebooklobby.com/",
    programs: ["extra"]
  },
  {
    title: "iLovePDF",
    type: "tool",
    icon: "tool",
    description: "Online PDF toolkit to merge, split, compress, convert, rotate, unlock, and organize PDF files.",
    tags: ["PDF", "Convert", "Compress", "Merge"],
    url: "https://www.ilovepdf.com/",
    programs: ["extra"]
  },
  {
    title: "EZGIF Resize",
    type: "tool",
    icon: "tool",
    description: "Resize, crop, optimize, convert, and edit GIFs, images, and short video files directly in the browser.",
    tags: ["GIF", "Image Resize", "Optimize", "Convert"],
    url: "https://ezgif.com/resize",
    programs: ["extra"]
  },
  {
    title: "PDF24 Tools",
    type: "tool",
    icon: "tool",
    description: "Free browser-based PDF tools for compressing, merging, converting, editing, signing, and OCR.",
    tags: ["PDF", "OCR", "Convert", "Free Tools"],
    url: "https://tools.pdf24.org/",
    programs: ["extra"]
  },
  {
    title: "Squoosh",
    type: "tool",
    icon: "tool",
    description: "Google's free image compression tool; reduce image size before uploading assignments or websites.",
    tags: ["Image Compress", "Web", "Performance"],
    url: "https://squoosh.app/",
    programs: ["extra"]
  },
  {
    title: "TinyPNG",
    type: "tool",
    icon: "tool",
    description: "Compress PNG, JPG, and WebP images while keeping quality high; useful for projects and websites.",
    tags: ["Image Compress", "PNG", "JPG", "WebP"],
    url: "https://tinypng.com/",
    programs: ["extra"]
  },
  {
    title: "Standard Ebooks",
    type: "ebook",
    icon: "ebook",
    description: "Carefully proofread public-domain e-books with beautiful formatting and reliable EPUB/Kindle downloads.",
    tags: ["Public Domain", "EPUB", "Classics", "Legal"],
    url: "https://standardebooks.org/",
    programs: ["extra"]
  },
  {
    title: "Directory of Open Access Books",
    type: "ebook",
    icon: "ebook",
    description: "Academic open-access books from verified publishers; useful for research and assignments.",
    tags: ["Academic", "Open Access", "Research"],
    url: "https://www.doabooks.org/",
    programs: ["extra"]
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
      { name: "KIMI-AI", desc: "Moonshoot's official Kimi k2", emoji: "💬", url: "https://www.kimi.com/" },
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
      { name: "Krea AI Enhancer", desc: "AI image enhancement & generation", emoji: "🎨", url: "https://www.krea.ai/enhancer" },
      { name: "AI-Edge-Gallery", desc: "Run AI on ph offline", emoji: ":)", url: "https://play.google.com/store/search?q=AI%20edge%20Gallery&c=apps" },
      { name: "NotebookLm", desc: "Chat with yrs docs and ytbe videos and get answers in diff. format", emoji: "🔍", url: "https://play.google.com/store/search?q=notebooklm&c=apps" },
      { name: "Meta-AI", desc: "Dedicated AI site by Fb", emoji: "🤖", url: "https://meta.ai/" },
      
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

  // Set initial max-height for categories that start open
  accordion.querySelectorAll('.app-category.open .category-body').forEach(body => {
    body.style.maxHeight = body.scrollHeight + 'px';
  });
}

function toggleCategory(el) {
  const body = el.querySelector('.category-body');
  const isOpen = el.classList.toggle('open');
  if (isOpen) {
    body.style.maxHeight = body.scrollHeight + 'px';
  } else {
    body.style.maxHeight = '0';
  }
}

// ===== STATE =====
let activeFilter = 'all';
let activeProgram = 'all';
let searchQuery = '';
let showBookmarksOnly = false;
const bookmarkKey = 'itStudyHubBookmarks';
let savedBookmarks = JSON.parse(localStorage.getItem(bookmarkKey) || '[]');

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
    const matchBookmark = !showBookmarksOnly || savedBookmarks.includes(r.url);
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q) || r.tags.some(t => t.toLowerCase().includes(q));
    return matchFilter && matchProgram && matchBookmark && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  grid.innerHTML = filtered.map(r => `
    <div class="resource-card" data-url="${r.url}">
      <div class="resource-header">
        <div class="resource-icon icon-${getIconClass(r.type)}">
          ${r.type === 'youtube' ? '▶' : r.type === 'website' ? '🌐' : r.type === 'ebook' ? '📖' : r.type === 'practice' ? '⚡' : r.type === 'tool' ? '🔧' : r.type === 'github' ? '⭐' : '🎓'}
        </div>
        <div class="resource-info">
          <h3>${r.title}</h3>
          <span class="resource-type">${r.type}</span>
        </div>
        <button class="bookmark-btn${savedBookmarks.includes(r.url) ? ' saved' : ''}" data-bookmark="${r.url}" type="button" aria-label="Save ${r.title}">★</button>
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
  if (!e.target.classList.contains('filter-tag') || !e.target.dataset.filter) return;
  document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  activeFilter = e.target.dataset.filter;
  showBookmarksOnly = false;
  document.getElementById('bookmarksOnlyBtn')?.classList.remove('active');
  renderResources();
});

document.querySelector('.programs-section').addEventListener('click', e => {
  if (!e.target.classList.contains('program-tab')) return;
  document.querySelectorAll('.program-tab').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  activeProgram = e.target.dataset.program;
  if (activeProgram === 'extra') {
    activeFilter = 'all';
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    document.querySelectorAll('.filter-tag').forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
  }
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
    if (prog === 'extra') {
      activeFilter = 'all';
      searchQuery = '';
      document.getElementById('searchInput').value = '';
      document.querySelectorAll('.filter-tag').forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
    }
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
  const isOpen = mobileMenu.classList.toggle('open');
  mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
});

// ===== MOBILE MENU LINKS =====
document.getElementById('mobileMenu').addEventListener('click', e => {
  const link = e.target.closest('.mobile-menu-link');
  if (!link) return;
  e.preventDefault();

  const filter = link.dataset.mobileFilter;
  const program = link.dataset.mobileProgram;
  const goto = link.dataset.mobileGoto;

  mobileMenu.classList.remove('open');
  mobileMenuBtn.setAttribute('aria-expanded', 'false');

  if (goto === 'apps') {
    document.getElementById('apps').scrollIntoView({ behavior: 'smooth' });
    return;
  }

  if (program) {
    activeProgram = program;
    activeFilter = 'all';
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    document.querySelectorAll('.program-tab').forEach(b => {
      b.classList.toggle('active', b.dataset.program === program);
    });
    document.querySelectorAll('.filter-tag').forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
    document.getElementById('programs').scrollIntoView({ behavior: 'smooth' });
    renderResources();
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

// ===== CSIT SEMESTER LEARNING PATHS =====
const materialTypeLabels = {
  youtube: 'YouTube Videos',
  ebooksNotes: 'E-books and Notes',
  tools: 'Useful Tools'
};

const csitData = {
  '1st Semester': {
    focusPlan: [
      'Build strong basics in C programming, digital logic, mathematics, physics, and IT fundamentals because later semesters depend on them.',
      'Practice C programs by hand first, then run them in a compiler. Focus on loops, arrays, functions, pointers, and file handling.',
      'For theory subjects, make short definition sheets and draw diagrams for gates, number systems, networks, and computer generations.',
      'Do weekly numerical practice for Mathematics I and Physics instead of waiting for exam week.',
      'Avoid copying lab reports blindly; understand input, process, output, and explain your own code.'
    ],
    materials: {
      youtube: [
        { subject: 'Introduction to IT', title: 'Neso Academy: Computer Fundamentals', url: 'https://www.youtube.com/@nesoacademy/search?query=computer%20fundamentals', description: 'Clear English playlists for basic computer and IT concepts.' },
        { subject: 'C Programming', title: 'CodeWithHarry C Language Course', url: 'https://www.youtube.com/@CodeWithHarry/search?query=c%20language', description: 'Beginner-friendly Hindi C programming lessons with examples.' },
        { subject: 'Digital Logic', title: 'Gate Smashers Digital Logic', url: 'https://www.youtube.com/@GateSmashers/search?query=digital%20logic', description: 'Good for number systems, gates, K-map, and Boolean algebra.' },
        { subject: 'Mathematics I', title: 'Khan Academy Calculus', url: 'https://www.khanacademy.org/math/calculus-1', description: 'Free structured calculus lessons and practice.' },
        { subject: 'Physics', title: 'The Organic Chemistry Tutor Physics', url: 'https://www.youtube.com/@TheOrganicChemistryTutor/search?query=physics', description: 'Step-by-step physics problem explanations.' }
      ],
      ebooksNotes: [
        { subject: 'Introduction to IT', title: 'LibreTexts Computer Science', url: 'https://eng.libretexts.org/Bookshelves/Computer_Science', description: 'Free open textbooks for computing foundations.' },
        { subject: 'C Programming', title: 'Programiz C Tutorial', url: 'https://www.programiz.com/c-programming', description: 'Simple notes, examples, and explanations for C.' },
        { subject: 'Digital Logic', title: 'Digital Circuits - TutorialsPoint', url: 'https://www.tutorialspoint.com/digital_circuits/index.htm', description: 'Readable notes for gates, combinational, and sequential circuits.' },
        { subject: 'Mathematics I', title: 'OpenStax Calculus Volume 1', url: 'https://openstax.org/details/books/calculus-volume-1', description: 'Legal free calculus textbook with examples.' },
        { subject: 'Physics', title: 'OpenStax University Physics', url: 'https://openstax.org/details/books/university-physics-volume-1', description: 'Free physics textbook for university-level concepts.' }
      ],
      tools: [
        { subject: 'Introduction to IT', title: 'GCFGlobal Computer Basics', url: 'https://edu.gcfglobal.org/en/computerbasics/', description: 'Interactive beginner-friendly computer basics.' },
        { subject: 'C Programming', title: 'OnlineGDB C Compiler', url: 'https://www.onlinegdb.com/online_c_compiler', description: 'Run and debug C code directly in the browser.' },
        { subject: 'Digital Logic', title: 'CircuitVerse', url: 'https://circuitverse.org/simulator', description: 'Build and simulate logic circuits visually.' },
        { subject: 'Mathematics I', title: 'Desmos Graphing Calculator', url: 'https://www.desmos.com/calculator', description: 'Visualize functions, limits, and graphs.' },
        { subject: 'Physics', title: 'PhET Simulations', url: 'https://phet.colorado.edu/', description: 'Interactive physics simulations for core concepts.' }
      ]
    }
  },
  '2nd Semester': {
    focusPlan: [
      'Focus on object-oriented programming and discrete structures because they directly support DSA, software engineering, and algorithms.',
      'Write Java or C++ OOP examples for class, object, inheritance, polymorphism, exception handling, and file handling.',
      'Practice discrete math proofs, relations, functions, recurrence, and graph basics with many small problems.',
      'For microprocessor, draw pin diagrams, architecture blocks, instruction formats, and timing concepts repeatedly.',
      'Avoid only memorizing code; explain why each OOP concept is useful in real software.'
    ],
    materials: {
      youtube: [
        { subject: 'Discrete Structure', title: 'TrevTutor Discrete Math', url: 'https://www.youtube.com/@TrevTutor/search?query=discrete%20math', description: 'Clear discrete mathematics explanations in short lessons.' },
        { subject: 'Object Oriented Programming', title: 'Telusko OOP Java', url: 'https://www.youtube.com/@Telusko/search?query=object%20oriented%20programming%20java', description: 'Practical OOP explanations with Java examples.' },
        { subject: 'Microprocessor', title: 'Neso Academy Microprocessor 8085', url: 'https://www.youtube.com/@nesoacademy/search?query=8085%20microprocessor', description: 'Strong playlist for 8085 architecture and instructions.' },
        { subject: 'Mathematics II', title: 'Khan Academy Multivariable Calculus', url: 'https://www.khanacademy.org/math/multivariable-calculus', description: 'Helpful for advanced calculus topics.' },
        { subject: 'Statistics I', title: 'StatQuest Statistics Fundamentals', url: 'https://www.youtube.com/@statquest/search?query=statistics%20fundamentals', description: 'Simple explanations of probability and statistics concepts.' }
      ],
      ebooksNotes: [
        { subject: 'Discrete Structure', title: 'Discrete Mathematics: An Open Introduction', url: 'https://discrete.openmathbooks.org/dmoi3.html', description: 'Free open textbook with exercises.' },
        { subject: 'Object Oriented Programming', title: 'Java Notes by Eck', url: 'https://math.hws.edu/javanotes/', description: 'Free Java/OOP textbook available online.' },
        { subject: 'Microprocessor', title: 'GeeksforGeeks Microprocessor Tutorial', url: 'https://www.geeksforgeeks.org/computer-organization-architecture/microprocessor-tutorials/', description: 'Topic-wise notes for microprocessor basics.' },
        { subject: 'Mathematics II', title: 'OpenStax Calculus Volume 2', url: 'https://openstax.org/details/books/calculus-volume-2', description: 'Free calculus textbook for integration and series topics.' },
        { subject: 'Statistics I', title: 'OpenIntro Statistics', url: 'https://www.openintro.org/book/os/', description: 'Free statistics book with examples.' }
      ],
      tools: [
        { subject: 'Discrete Structure', title: 'WolframAlpha', url: 'https://www.wolframalpha.com/', description: 'Check sets, graphs, relations, equations, and probability results.' },
        { subject: 'Object Oriented Programming', title: 'JDoodle Java Compiler', url: 'https://www.jdoodle.com/online-java-compiler/', description: 'Quick online Java compiler for OOP practice.' },
        { subject: 'Microprocessor', title: '8085 Simulator', url: 'https://www.sim8085.com/', description: 'Write and test 8085 assembly programs online.' },
        { subject: 'Mathematics II', title: 'GeoGebra 3D Calculator', url: 'https://www.geogebra.org/3d', description: 'Visualize vectors, planes, and 3D graphs.' },
        { subject: 'Statistics I', title: 'StatCrunch Free Applets', url: 'https://www.statcrunch.com/applets/', description: 'Interactive statistics applets for probability and distributions.' }
      ]
    }
  },
  '3rd Semester': {
    focusPlan: [
      'Give maximum practical time to Data Structures and Algorithms; it helps exams, projects, and internships.',
      'For numerical methods, write formulas, solve hand examples, then implement algorithms in code.',
      'Computer architecture needs diagrams: CPU, memory hierarchy, instruction cycle, pipelining, and I/O organization.',
      'Computer graphics becomes easier when you practice transformations and draw algorithms visually.',
      'Avoid skipping lab work; DSA and graphics concepts become clear only after implementation.'
    ],
    materials: {
      youtube: [
        { subject: 'Data Structures and Algorithms', title: 'Jenny\'s Lectures DSA', url: 'https://www.youtube.com/@JennyslecturesCSIT/search?query=data%20structures', description: 'Student-friendly DSA explanations with diagrams.' },
        { subject: 'Numerical Method', title: 'Dr. Gajendra Purohit Numerical Methods', url: 'https://www.youtube.com/@gajendrapurohit/search?query=numerical%20methods', description: 'Clear numerical method problem solving in Hindi.' },
        { subject: 'Computer Architecture', title: 'Neso Academy Computer Organization', url: 'https://www.youtube.com/@nesoacademy/search?query=computer%20organization', description: 'Good for architecture diagrams and concepts.' },
        { subject: 'Computer Graphics', title: 'Neso Academy Computer Graphics', url: 'https://www.youtube.com/@nesoacademy/search?query=computer%20graphics', description: 'Covers graphics algorithms and transformations.' },
        { subject: 'Statistics II', title: 'StatQuest Hypothesis Testing', url: 'https://www.youtube.com/@statquest/search?query=hypothesis%20testing', description: 'Easy explanations for inference and statistical testing.' }
      ],
      ebooksNotes: [
        { subject: 'Data Structures and Algorithms', title: 'Open Data Structures', url: 'https://opendatastructures.org/', description: 'Free data structures book with code-based explanations.' },
        { subject: 'Numerical Method', title: 'Numerical Methods with Python', url: 'https://pythonnumericalmethods.berkeley.edu/notebooks/Index.html', description: 'Free online book connecting methods with code.' },
        { subject: 'Computer Architecture', title: 'Computer Organization and Design Resources', url: 'https://pages.cs.wisc.edu/~remzi/Classes/354/Fall2012/Handouts/', description: 'Public course handouts for architecture concepts.' },
        { subject: 'Computer Graphics', title: 'Scratchapixel Computer Graphics', url: 'https://www.scratchapixel.com/', description: 'Free graphics learning material with visual explanations.' },
        { subject: 'Statistics II', title: 'OpenIntro Statistics', url: 'https://www.openintro.org/book/os/', description: 'Free statistics reference for inference and regression.' }
      ],
      tools: [
        { subject: 'Data Structures and Algorithms', title: 'VisuAlgo', url: 'https://visualgo.net/en', description: 'Visualizes sorting, trees, graphs, hashing, and more.' },
        { subject: 'Numerical Method', title: 'Google Colab', url: 'https://colab.research.google.com/', description: 'Implement numerical methods in Python notebooks.' },
        { subject: 'Computer Architecture', title: 'Ripes Simulator', url: 'https://ripes.me/', description: 'Visual RISC-V processor and pipeline simulator.' },
        { subject: 'Computer Graphics', title: 'WebGL Fundamentals', url: 'https://webglfundamentals.org/', description: 'Interactive browser-based graphics learning.' },
        { subject: 'Statistics II', title: 'Seeing Theory', url: 'https://seeing-theory.brown.edu/', description: 'Beautiful interactive probability and statistics visuals.' }
      ]
    }
  },
  '4th Semester': {
    focusPlan: [
      'Prioritize DBMS, Operating Systems, Computer Networks, Theory of Computation, and AI with separate theory and practical notes.',
      'For DBMS, practice ER diagrams, normalization, SQL queries, transactions, and relational algebra regularly.',
      'For OS and Networks, draw diagrams and compare concepts like scheduling, deadlock, paging, routing, TCP/IP, and OSI layers.',
      'For TOC, solve automata, grammar, PDA, and Turing machine problems step-by-step instead of only reading theory.',
      'Build a small database-backed project and revise AI search basics with examples before exams.'
    ],
    materials: {
      youtube: [
        { subject: 'Database Management System', title: 'Gate Smashers DBMS', url: 'https://www.youtube.com/@GateSmashers/search?query=dbms', description: 'Excellent DBMS explanations for ERD, normalization, SQL, and transactions.' },
        { subject: 'Operating System', title: 'Neso Academy Operating System', url: 'https://www.youtube.com/@nesoacademy/search?query=operating%20system', description: 'Structured OS videos with diagrams and examples.' },
        { subject: 'Computer Networks', title: 'Gate Smashers Computer Networks', url: 'https://www.youtube.com/@GateSmashers/search?query=computer%20networks', description: 'Good for OSI, TCP/IP, routing, and exam-style explanations.' },
        { subject: 'Theory of Computation', title: 'Neso Academy Theory of Computation', url: 'https://www.youtube.com/@nesoacademy/search?query=theory%20of%20computation', description: 'Clear videos for automata, grammar, PDA, and Turing machines.' },
        { subject: 'Artificial Intelligence', title: 'Gate Smashers Artificial Intelligence', url: 'https://www.youtube.com/@GateSmashers/search?query=artificial%20intelligence', description: 'Useful for AI search, knowledge representation, and basics.' }
      ],
      ebooksNotes: [
        { subject: 'Database Management System', title: 'Database System Concepts Slides', url: 'https://www.db-book.com/slides-dir/index.html', description: 'Official free slides from the classic DBMS textbook.' },
        { subject: 'Operating System', title: 'Operating Systems: Three Easy Pieces', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/', description: 'Free trusted OS textbook for processes, memory, and file systems.' },
        { subject: 'Computer Networks', title: 'Computer Networking: A Top-Down Approach Resources', url: 'https://gaia.cs.umass.edu/kurose_ross/index.php', description: 'Free slides, labs, and learning material for networking.' },
        { subject: 'Theory of Computation', title: 'Automata Theory - Stanford Lagunita Notes Archive', url: 'https://web.stanford.edu/class/archive/cs/cs103/cs103.1156/', description: 'Public notes and handouts for logic, automata, and computation foundations.' },
        { subject: 'Artificial Intelligence', title: 'AIMA Resources', url: 'https://aima.cs.berkeley.edu/', description: 'Official resources for Artificial Intelligence: A Modern Approach.' }
      ],
      tools: [
        { subject: 'Database Management System', title: 'SQLZoo', url: 'https://sqlzoo.net/', description: 'Interactive SQL practice from basic SELECT to JOINs.' },
        { subject: 'Operating System', title: 'OS Scheduling Simulator', url: 'https://boonsuen.com/process-scheduling-solver', description: 'Practice CPU scheduling and compare waiting/turnaround time.' },
        { subject: 'Computer Networks', title: 'Cisco Packet Tracer', url: 'https://www.netacad.com/courses/packet-tracer', description: 'Free network simulation tool from Cisco Networking Academy.' },
        { subject: 'Theory of Computation', title: 'JFLAP', url: 'https://www.jflap.org/', description: 'Create and test automata, grammars, PDA, and Turing machines.' },
        { subject: 'Artificial Intelligence', title: 'AIMA Python Code', url: 'https://github.com/aimacode/aima-python', description: 'Python implementations of classic AI algorithms.' }
      ]
    }
  },
  '5th Semester': {
    focusPlan: [
      'This semester is career-important: combine algorithms, web technology, SAD, cryptography, and simulation with projects.',
      'Practice algorithm design patterns and complexity analysis until you can explain why an approach is efficient.',
      'For web technology, build real pages with forms, API calls, validation, and responsive design.',
      'Use diagrams heavily for SAD: DFD, ERD, UML, use case, activity, and sequence diagrams.',
      'Avoid treating cryptography as only formulas; understand use cases, attacks, keys, hashing, and protocols.'
    ],
    materials: {
      youtube: [
        { subject: 'Design and Analysis of Algorithms', title: 'Abdul Bari Algorithms', url: 'https://www.youtube.com/@abdul_bari/search?query=algorithm', description: 'Classic algorithm explanations with complexity analysis.' },
        { subject: 'System Analysis and Design', title: 'Education 4u SAD', url: 'https://www.youtube.com/@Education4u/search?query=system%20analysis%20and%20design', description: 'Useful for software diagrams and system development concepts.' },
        { subject: 'Cryptography', title: 'Computerphile Cryptography', url: 'https://www.youtube.com/@Computerphile/search?query=cryptography', description: 'Intuitive explanations of security and cryptographic ideas.' },
        { subject: 'Simulation and Modeling', title: 'Neso Academy Simulation and Modeling', url: 'https://www.youtube.com/@nesoacademy/search?query=simulation%20modeling', description: 'Good conceptual videos for simulation basics.' },
        { subject: 'Web Technology', title: 'Traversy Media Web Development', url: 'https://www.youtube.com/@TraversyMedia/search?query=web%20development', description: 'Project-based HTML, CSS, JavaScript, and backend lessons.' }
      ],
      ebooksNotes: [
        { subject: 'Design and Analysis of Algorithms', title: 'Algorithms by Jeff Erickson', url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/', description: 'Free algorithms book and notes.' },
        { subject: 'System Analysis and Design', title: 'SEBoK System Design Knowledge', url: 'https://www.sebokwiki.org/wiki/System_Design', description: 'Trusted systems engineering and design reference.' },
        { subject: 'Cryptography', title: 'Crypto 101', url: 'https://www.crypto101.io/', description: 'Free introductory cryptography book.' },
        { subject: 'Simulation and Modeling', title: 'SimPy Documentation', url: 'https://simpy.readthedocs.io/', description: 'Free simulation modeling docs with Python examples.' },
        { subject: 'Web Technology', title: 'MDN Web Docs', url: 'https://developer.mozilla.org/', description: 'Best free reference for HTML, CSS, JavaScript, and web APIs.' }
      ],
      tools: [
        { subject: 'Design and Analysis of Algorithms', title: 'Algorithm Visualizer', url: 'https://algorithm-visualizer.org/', description: 'Visualize algorithms step by step.' },
        { subject: 'System Analysis and Design', title: 'diagrams.net', url: 'https://app.diagrams.net/', description: 'Free tool for UML, ERD, DFD, and flowcharts.' },
        { subject: 'Cryptography', title: 'CyberChef', url: 'https://gchq.github.io/CyberChef/', description: 'Practice encoding, hashing, encryption, and data transforms.' },
        { subject: 'Simulation and Modeling', title: 'NetLogo Web', url: 'https://www.netlogoweb.org/', description: 'Browser-based agent simulation environment.' },
        { subject: 'Web Technology', title: 'CodePen', url: 'https://codepen.io/', description: 'Quickly test and share frontend code snippets.' }
      ]
    }
  },
  '6th Semester': {
    focusPlan: [
      'Connect theory with real software: compiler, software engineering, e-governance, network-centric apps, and technical writing.',
      'For compiler design, practice lexical analysis, parsing, syntax trees, and grammar examples regularly.',
      'For software engineering, learn requirement analysis, testing, design patterns, and documentation with real project examples.',
      'Improve technical writing by preparing clean reports, citations, diagrams, abstracts, and presentations.',
      'Avoid weak documentation; final-year and internship work becomes easier if you learn professional reporting now.'
    ],
    materials: {
      youtube: [
        { subject: 'Software Engineering', title: 'Neso Academy Software Engineering', url: 'https://www.youtube.com/@nesoacademy/search?query=software%20engineering', description: 'Clear videos for SDLC, testing, requirements, and models.' },
        { subject: 'Compiler Design', title: 'Gate Smashers Compiler Design', url: 'https://www.youtube.com/@GateSmashers/search?query=compiler%20design', description: 'Useful for lexical analysis, parsing, and compiler phases.' },
        { subject: 'E-Governance', title: 'E-Governance Lectures', url: 'https://www.youtube.com/results?search_query=e+governance+lectures', description: 'Search results with public lectures on e-governance concepts.' },
        { subject: 'NET Centric Computing', title: 'REST API Full Course', url: 'https://www.youtube.com/@freecodecamp/search?query=rest%20api', description: 'Practical API and network-centric application learning.' },
        { subject: 'Technical Writing', title: 'Technical Writing Course', url: 'https://www.youtube.com/results?search_query=technical+writing+course+for+students', description: 'Helpful lessons for reports, docs, and academic writing.' }
      ],
      ebooksNotes: [
        { subject: 'Software Engineering', title: 'SWEBOK Guide', url: 'https://www.computer.org/education/bodies-of-knowledge/software-engineering', description: 'IEEE Computer Society reference for software engineering knowledge areas.' },
        { subject: 'Compiler Design', title: 'Crafting Interpreters', url: 'https://craftinginterpreters.com/', description: 'Free online book for understanding interpreters and language implementation.' },
        { subject: 'E-Governance', title: 'UN E-Government Knowledgebase', url: 'https://publicadministration.un.org/egovkb/en-us/', description: 'Trusted official resources and reports on e-government.' },
        { subject: 'NET Centric Computing', title: 'REST API Tutorial', url: 'https://restfulapi.net/', description: 'Free reference for REST principles and API design.' },
        { subject: 'Technical Writing', title: 'Google Technical Writing Courses', url: 'https://developers.google.com/tech-writing', description: 'Free practical writing course from Google.' }
      ],
      tools: [
        { subject: 'Software Engineering', title: 'GitHub Projects', url: 'https://github.com/features/issues', description: 'Track software tasks, issues, and project work.' },
        { subject: 'Compiler Design', title: 'Regex101', url: 'https://regex101.com/', description: 'Practice regular expressions for lexical analysis concepts.' },
        { subject: 'E-Governance', title: 'Google Public Data Explorer', url: 'https://www.google.com/publicdata/directory', description: 'Explore public datasets and governance-related indicators.' },
        { subject: 'NET Centric Computing', title: 'Postman', url: 'https://www.postman.com/', description: 'Test APIs and document network-centric services.' },
        { subject: 'Technical Writing', title: 'ZoteroBib', url: 'https://zbib.org/', description: 'Create citations quickly for reports and research writing.' }
      ]
    }
  },
  '7th Semester': {
    focusPlan: [
      'Start thinking like a professional: advanced Java, data warehousing/mining, management, electives, and project planning matter a lot.',
      'For Advanced Java, build GUI, JDBC, servlet/JSP, or Spring-style small applications depending on your syllabus/lab.',
      'For data warehousing and mining, focus on ETL, OLAP, classification, clustering, association rules, and evaluation metrics.',
      'Use project work to solve a real problem; prepare proposal, scope, timeline, database design, and GitHub repository early.',
      'Avoid last-minute project ideas; weak planning creates stress in final year and internship.'
    ],
    materials: {
      youtube: [
        { subject: 'Advanced Java', title: 'Java Full Course - freeCodeCamp', url: 'https://www.youtube.com/@freecodecamp/search?query=java%20full%20course', description: 'Complete Java learning resources with practical examples.' },
        { subject: 'Data Warehousing and Mining', title: 'DWDM Gate Smashers', url: 'https://www.youtube.com/@GateSmashers/search?query=data%20warehousing%20data%20mining', description: 'Good exam-oriented explanations for warehousing and mining.' },
        { subject: 'Principles of Management', title: 'Principles of Management Lectures', url: 'https://www.youtube.com/results?search_query=principles+of+management+lectures', description: 'Public lectures for management basics and functions.' },
        { subject: 'Project Work', title: 'How to Plan a Software Project', url: 'https://www.youtube.com/results?search_query=software+project+planning+for+students', description: 'Useful guidance for planning and presenting projects.' },
        { subject: 'Elective / Specialization', title: 'MIT OpenCourseWare CS', url: 'https://www.youtube.com/@mitocw/search?query=computer%20science', description: 'High-quality lectures for advanced CS topics.' }
      ],
      ebooksNotes: [
        { subject: 'Advanced Java', title: 'Oracle Java Tutorials', url: 'https://docs.oracle.com/javase/tutorial/', description: 'Official Java tutorials for language and APIs.' },
        { subject: 'Data Warehousing and Mining', title: 'Mining of Massive Datasets', url: 'http://www.mmds.org/', description: 'Free book for data mining concepts.' },
        { subject: 'Principles of Management', title: 'OpenStax Principles of Management', url: 'https://openstax.org/details/books/principles-management', description: 'Free management textbook.' },
        { subject: 'Project Work', title: 'GitHub Docs: About READMEs', url: 'https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes', description: 'Learn to document projects clearly.' },
        { subject: 'Elective / Specialization', title: 'OSSU Computer Science', url: 'https://github.com/ossu/computer-science', description: 'Free CS curriculum for deeper study.' }
      ],
      tools: [
        { subject: 'Advanced Java', title: 'JetBrains Academy Java', url: 'https://www.jetbrains.com/academy/', description: 'Project-based Java practice platform.' },
        { subject: 'Data Warehousing and Mining', title: 'Kaggle', url: 'https://www.kaggle.com/', description: 'Datasets, notebooks, and ML/data mining practice.' },
        { subject: 'Principles of Management', title: 'Canva Presentations', url: 'https://www.canva.com/presentations/', description: 'Create clean management presentations and reports.' },
        { subject: 'Project Work', title: 'Trello', url: 'https://trello.com/', description: 'Plan project tasks with simple Kanban boards.' },
        { subject: 'Elective / Specialization', title: 'roadmap.sh', url: 'https://roadmap.sh/', description: 'Choose a specialization roadmap such as backend, AI, DevOps, or cybersecurity.' }
      ]
    }
  },
  '8th Semester': {
    focusPlan: [
      'Focus on internship, final project, specialization subjects, documentation, presentation, and job readiness.',
      'Turn your final project into a portfolio piece with live demo, screenshots, README, and clear problem statement.',
      'Revise core CS subjects for interviews: DSA, DBMS, OS, CN, OOP, web basics, and software engineering.',
      'Prepare CV, LinkedIn, GitHub, and a simple portfolio website before internship applications.',
      'Avoid submitting only code; evaluation improves when documentation, testing, UI, deployment, and presentation are strong.'
    ],
    materials: {
      youtube: [
        { subject: 'Internship Preparation', title: 'Apna College Placement Preparation', url: 'https://www.youtube.com/@ApnaCollegeOfficial/search?query=placement%20preparation', description: 'Hindi guidance for interview and placement preparation.' },
        { subject: 'Final Year Project', title: 'Project Presentation Tips', url: 'https://www.youtube.com/results?search_query=final+year+project+presentation+computer+science', description: 'Helps with demo, slides, and viva preparation.' },
        { subject: 'Advanced Database / Elective', title: 'Database Design Course', url: 'https://www.youtube.com/@freecodecamp/search?query=database%20design', description: 'Practical database design and SQL learning.' },
        { subject: 'Cloud / DevOps Elective', title: 'AWS Cloud Practitioner FreeCodeCamp', url: 'https://www.youtube.com/@freecodecamp/search?query=aws%20cloud%20practitioner', description: 'Free cloud fundamentals useful for modern projects.' },
        { subject: 'Interview Revision', title: 'CS Interview Prep', url: 'https://www.youtube.com/@NeetCode/search?query=interview', description: 'Good DSA interview explanations and patterns.' }
      ],
      ebooksNotes: [
        { subject: 'Internship Preparation', title: 'Tech Interview Handbook', url: 'https://www.techinterviewhandbook.org/', description: 'Free structured interview, resume, and coding prep guide.' },
        { subject: 'Final Year Project', title: 'GitHub Docs: Project Documentation', url: 'https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes', description: 'Use for professional README and project documentation.' },
        { subject: 'Advanced Database / Elective', title: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/', description: 'Official free database documentation.' },
        { subject: 'Cloud / DevOps Elective', title: 'AWS Skill Builder', url: 'https://skillbuilder.aws/', description: 'Free official cloud learning resources.' },
        { subject: 'Interview Revision', title: 'Coding Interview University', url: 'https://github.com/jwasham/coding-interview-university', description: 'Complete free CS interview study plan.' }
      ],
      tools: [
        { subject: 'Internship Preparation', title: 'LinkedIn', url: 'https://www.linkedin.com/', description: 'Build profile, search internships, and connect professionally.' },
        { subject: 'Final Year Project', title: 'GitHub Pages', url: 'https://pages.github.com/', description: 'Host portfolio or project documentation for free.' },
        { subject: 'Advanced Database / Elective', title: 'DB Fiddle', url: 'https://www.db-fiddle.com/', description: 'Test SQL queries and schemas online.' },
        { subject: 'Cloud / DevOps Elective', title: 'Render Free Hosting', url: 'https://render.com/', description: 'Deploy small web apps and APIs on a free tier.' },
        { subject: 'Interview Revision', title: 'LeetCode', url: 'https://leetcode.com/', description: 'Practice DSA questions for interviews.' }
      ]
    }
  }
};

let selectedSemester = '4th Semester';
let selectedMaterialType = 'youtube';

function updateHeroStats() {
  document.getElementById('resourceCount').textContent = `${resources.length}+`;
  document.getElementById('programCount').textContent = '4';
  document.getElementById('categoryCount').textContent = new Set(resources.map(r => r.type)).size + 2;
}

function renderCsitSemesterPath() {
  const panel = document.getElementById('pathPanel');
  if (!panel) return;
  const semester = csitData[selectedSemester];
  const materialItems = semester.materials[selectedMaterialType] || [];

  panel.innerHTML = `
    <div class="focus-plan-card">
      <p class="eyebrow">Focus plan</p>
      <h3>CSIT ${selectedSemester} Focus Plan</h3>
      <p class="path-intro">Short, practical guidance for studying this semester without confusion.</p>
      <div class="path-steps">
        ${semester.focusPlan.map((tip, i) => `<div class="path-step"><strong>${i + 1}</strong><span>${tip}</span></div>`).join('')}
      </div>
    </div>
    <div class="path-materials csit-materials-card">
      <div class="materials-head">
        <div>
          <p class="eyebrow">Recommended materials</p>
          <h4>${materialTypeLabels[selectedMaterialType]}</h4>
        </div>
        <label class="material-select-label" for="materialTypeSelect">Material Type</label>
        <select id="materialTypeSelect" class="material-select" aria-label="Select material type">
          <option value="youtube" ${selectedMaterialType === 'youtube' ? 'selected' : ''}>YouTube Videos</option>
          <option value="ebooksNotes" ${selectedMaterialType === 'ebooksNotes' ? 'selected' : ''}>E-books and Notes</option>
          <option value="tools" ${selectedMaterialType === 'tools' ? 'selected' : ''}>Useful Tools</option>
        </select>
      </div>
      <div class="materials-list">
        ${materialItems.map(item => `
          <article class="material-card">
            <span class="material-subject">${item.subject}</span>
            <a href="${item.url}" target="_blank" rel="noopener">${item.title} →</a>
            <p>${item.description}</p>
          </article>
        `).join('')}
      </div>
    </div>
  `;

  document.getElementById('materialTypeSelect')?.addEventListener('change', e => {
    selectedMaterialType = e.target.value;
    renderCsitSemesterPath();
  });
}

function setupEnrichedFeatures() {
  updateHeroStats();
  renderCsitSemesterPath();

  mobileMenuBtn.setAttribute('aria-expanded', 'false');
  window.addEventListener('resize', () => {
    document.querySelectorAll('.app-category.open .category-body').forEach(body => {
      body.style.maxHeight = body.scrollHeight + 'px';
    });
  });

  document.getElementById('semesterSelect')?.addEventListener('change', e => {
    selectedSemester = e.target.value;
    selectedMaterialType = 'youtube';
    renderCsitSemesterPath();
  });

  document.getElementById('resourcesGrid')?.addEventListener('click', e => {
    const btn = e.target.closest('[data-bookmark]');
    if (!btn) return;
    const url = btn.dataset.bookmark;
    savedBookmarks = savedBookmarks.includes(url) ? savedBookmarks.filter(item => item !== url) : [...savedBookmarks, url];
    localStorage.setItem(bookmarkKey, JSON.stringify(savedBookmarks));
    renderResources();
  });

  document.getElementById('bookmarksOnlyBtn')?.addEventListener('click', e => {
    showBookmarksOnly = !showBookmarksOnly;
    e.currentTarget.classList.toggle('active', showBookmarksOnly);
    renderResources();
  });

  document.getElementById('randomResourceBtn')?.addEventListener('click', () => {
    const pool = resources.filter(r => (activeFilter === 'all' || r.type === activeFilter) && (activeProgram === 'all' || r.programs.includes(activeProgram)));
    const pick = pool[Math.floor(Math.random() * pool.length)] || resources[0];
    searchQuery = pick.title;
    document.getElementById('searchInput').value = pick.title;
    showBookmarksOnly = false;
    renderResources();
    setTimeout(() => document.querySelector(`[data-url="${pick.url}"]`)?.classList.add('highlight'), 30);
    document.getElementById('resources').scrollIntoView({ behavior: 'smooth' });
  });
}

// ===== INITIAL RENDER =====
document.addEventListener('DOMContentLoaded', () => { renderResources(); renderApps(); setupEnrichedFeatures(); });
