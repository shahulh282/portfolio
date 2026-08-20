export const personalInfo = {
  name: "M. Shahul Hameed",
  degree: "MCA",
  fullName: "M. Shahul Hameed MCA",
  title: "Full Stack Web Application Developer",
  experienceYears: "5+",
  tagline: "Building scalable backend architectures, high-performance RESTful APIs, and modern dynamic web applications.",
  email: "shahulh282@gmail.com",
  phone: "+91 90920 52320",
  whatsappNumber: "919092052320",
  location: "Kodambakkam, Chennai, Tamil Nadu, India",
  hometown: "Vadakarai, Tenkasi, Tamil Nadu - 627 812",
  linkedin: "https://www.linkedin.com/in/shahul-hameed-m-54ab3793/",
  github: "https://github.com",
  status: "Available for Full-time Roles & High-Impact Projects",
  summary: `Results-driven Full Stack Web Application Developer with over 5 years of experience architecting and delivering high-performance web applications, scalable RESTful APIs, and mission-critical enterprise systems. Strong expertise in PHP frameworks (Laravel, CodeIgniter), Node.js, modern React integrations, and relational database design with MySQL. Proven track record in building government platforms (TN Forest Department, TN DET), real-time QR-based airport feedback systems, hierarchical appraisal workflows, and statutory EPF calculation engines. Proficient in implementing advanced backend mechanisms including Cron Jobs, Queue Workers, Role-Based Access Control (RBAC), and multi-tier third-party integrations (SMS, Email, Payment Gateways).`
};

export const stats = [
  { label: "Years Experience", value: "5+", icon: "Briefcase" },
  { label: "Completed Projects", value: "15+", icon: "Code" },
  { label: "Live Websites", value: "7+", icon: "Globe" },
  { label: "Client Satisfaction", value: "100%", icon: "Award" },
];

export const skillsData = {
  backend: [
    { name: "Laravel & Livewire", level: 95, icon: "Server" },
    { name: "PHP (OOP & MVC)", level: 95, icon: "Cpu" },
    { name: "CodeIgniter", level: 90, icon: "Layers" },
    { name: "Node.js & Express", level: 85, icon: "Zap" },
    { name: "RESTful API Architecture", level: 95, icon: "Network" },
    { name: "Queue & Cron Jobs", level: 90, icon: "Clock" },
  ],
  frontend: [
    { name: "React.js", level: 85, icon: "Code2" },
    { name: "JavaScript (ES6+)", level: 90, icon: "FileCode" },
    { name: "HTML5 & Semantic UI", level: 95, icon: "Layout" },
    { name: "CSS3 & Modern Animations", level: 90, icon: "Palette" },
    { name: "Tailwind CSS", level: 90, icon: "Wind" },
    { name: "Bootstrap & jQuery", level: 90, icon: "Boxes" },
  ],
  database: [
    { name: "MySQL & Query Optimization", level: 95, icon: "Database" },
    { name: "Eloquent ORM", level: 95, icon: "Table" },
    { name: "Database Schema Design", level: 90, icon: "Workflow" },
    { name: "Data Migration & Seeding", level: 90, icon: "RefreshCw" },
    { name: "Caching & Performance", level: 85, icon: "Gauge" },
  ],
  architecture: [
    { name: "Role-Based Access (RBAC)", level: 95, icon: "ShieldCheck" },
    { name: "QR Code Workflow Systems", level: 90, icon: "QrCode" },
    { name: "SMS / Email / Payment Gateways", level: 95, icon: "CreditCard" },
    { name: "Git & GitHub Version Control", level: 90, icon: "GitBranch" },
    { name: "Server Deployment (VPS/cPanel)", level: 85, icon: "Cloud" },
  ]
};

export const experiences = [
  {
    id: "in22labs",
    role: "Full Stack Developer",
    company: "IN22LABS",
    location: "Chennai, Tamil Nadu",
    period: "June 2025 — Present",
    current: true,
    description: "Leading the development of mission-critical government digital portals, state-wide departmental workflow systems, and responsive public portals.",
    achievements: [
      "Architected and deployed enterprise web solutions for TN Forest Department ensuring data security and high availability.",
      "Developed web management portal for TN Directorate of Education and Training (DET) for institutional tracking.",
      "Created the official TN Forest Website with dynamic content management, high accessibility, and optimized SEO.",
      "Optimized query performance and database indexing for large-scale public data sets."
    ],
    tech: ["Laravel", "PHP", "MySQL", "React", "REST APIs", "Tailwind CSS", "Govt IT Compliance"]
  },
  {
    id: "cygnus",
    role: "Full Stack Developer & API Developer",
    company: "Cygnus a Technologies",
    location: "Chennai, Tamil Nadu",
    period: "Oct 2023 — May 2025",
    current: false,
    description: "Spearheaded complex web application architecture, airport management systems, workflow automation, and custom API integrations.",
    achievements: [
      "Developed a real-time Feedback Management System for Chennai Airport using dynamic QR code passenger input, automated notifications, and real-time resolution dashboards.",
      "Engineered an automated EPF Calculation Application for employers, saving dozens of manual calculation hours and ensuring statutory compliance.",
      "Independently designed and built an Appraisal Management System featuring a multi-level hierarchical approval workflow with audit logging.",
      "Maintained scalable backend APIs and secure multi-tenant admin dashboards with Laravel and Eloquent ORM.",
      "Integrated third-party APIs including SMS gateways, transactional Email servers, and secure payment processing."
    ],
    tech: ["Laravel", "Livewire", "RESTful APIs", "MySQL", "Cron Jobs", "Queue Jobs", "SMS/Payment Gateways"]
  },
  {
    id: "adivinar",
    role: "Backend Developer",
    company: "Adivinar Technologies",
    location: "Thiruvananthapuram, Kerala",
    period: "Apr 2023 — Sep 2023",
    current: false,
    description: "Engineered scalable backend infrastructure and e-commerce transactional systems for international enterprise clients.",
    achievements: [
      "Built resilient backend architecture using Laravel for a high-volume Saudi-based e-commerce platform.",
      "Engineered product inventory management, coupon calculation rules, order workflows, and payment verification.",
      "Implemented API caching and database query optimization to support peak shopping traffic."
    ],
    tech: ["Laravel", "PHP MVC", "MySQL", "REST APIs", "E-Commerce Architecture", "Postman"]
  },
  {
    id: "pearls",
    role: "Backend Developer",
    company: "Pearls Technologies",
    location: "Chennai, Tamil Nadu",
    period: "Oct 2021 — Aug 2022",
    current: false,
    description: "Designed core backend services and micro-APIs for enterprise mobile client integrations.",
    achievements: [
      "Developed comprehensive backend APIs for a Mobile-based Attendance Management System as a cornerstone project.",
      "Enabled real-time biometric and geo-tagged attendance logging with synchronized mobile app communication.",
      "Built admin reporting modules with automated shifts, overtime, and leave calculations."
    ],
    tech: ["PHP", "CodeIgniter", "MySQL", "API Development", "JWT Authentication", "Mobile App Backend"]
  },
  {
    id: "techface",
    role: "Website Developer",
    company: "Techface Soft Solution",
    location: "Chennai, Tamil Nadu",
    period: "Aug 2020 — Sep 2021",
    current: false,
    description: "Constructed bespoke, responsive websites and client-tailored admin control panels.",
    achievements: [
      "Developed multiple dynamic websites equipped with custom CMS admin panels for diverse business verticals.",
      "Implemented responsive frontends with HTML5, CSS3, jQuery, and Bootstrap.",
      "Managed end-to-end deployment, DNS configuration, and client training."
    ],
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "cPanel Deployment", "CMS Development"]
  }
];

export const projects = [
  {
    id: "chennai-airport-feedback",
    title: "Chennai Airport QR Feedback Management System",
    category: "enterprise",
    categoryName: "Enterprise / Real-time",
    tagline: "Instant passenger feedback capture & automated multi-department resolution workflow",
    company: "Cygnus a Technologies",
    featured: true,
    thumbnail: "qr-airport",
    gradient: "from-blue-600 to-cyan-500",
    overview: "A production-grade QR-code driven passenger feedback platform deployed across terminal checkpoints at Chennai International Airport. Passengers scan localized QR codes on their smartphones to submit instant feedback, which triggers real-time alerts, department routing, and SLA tracking.",
    problemStatement: "Airport authorities required a touchless, frictionless method for passengers to log feedback across terminals, baggage claim, restrooms, and lounges, with instant notification routing to facility supervisors and measurable resolution SLAs.",
    solution: "Designed dynamic QR codes mapped to specific terminal zones. Built an instantaneous mobile web form (no app install required) paired with a real-time Laravel backend that dispatches SMS/email alerts to on-duty supervisors and populates a live monitoring dashboard for airport management.",
    keyFeatures: [
      "Location-Aware Dynamic QR Codes for seamless zone tracking (Terminals, Restrooms, Gates).",
      "Instant SMS & Email alerting system dispatching to on-duty duty managers.",
      "Automated Ticket Lifecycle: Open -> In-Progress -> Resolved with supervisor proof attachment.",
      "Analytical Dashboard displaying CSAT trends, response latency, and terminal satisfaction scores.",
      "Role-Based Access Control (RBAC) for airport executives, maintenance teams, and terminal leads."
    ],
    architecture: [
      "Backend: Laravel 10 REST API with Eloquent ORM",
      "Frontend: Dynamic Mobile-Optimized Web UI + Responsive Admin Console",
      "Database: MySQL with optimized indexing on terminal IDs and timestamped feedback logs",
      "Services: Real-time notification worker, SMS Gateway integration, Automated daily PDF reports"
    ],
    techStack: ["Laravel", "PHP", "MySQL", "QR Code Generation", "RESTful API", "SMS Gateway", "Bootstrap", "Chart.js"],
    metrics: [
      { label: "Response Time", value: "< 5 mins" },
      { label: "Checkpoints Covered", value: "50+ Zones" },
      { label: "User Friction", value: "Zero App Install" }
    ]
  },
  {
    id: "tn-govt-forest-det",
    title: "Tamil Nadu Government Digital Portals (Forest Dept & DET)",
    category: "government",
    categoryName: "Government",
    tagline: "Official state government web infrastructure for Tamil Nadu Forest Dept & DET",
    company: "IN22LABS",
    featured: true,
    thumbnail: "tn-forest",
    gradient: "from-emerald-600 to-teal-500",
    overview: "Comprehensive state government web platforms and administrative systems for the Tamil Nadu Forest Department and Directorate of Education and Training (DET), providing citizens, researchers, and administrators with secure digital access to state schemes, institutional management, and forestry resources.",
    problemStatement: "Government departments required secure, high-traffic capable, WCAG-compliant web portals to manage public schemes, educational certifications, institutional directory records, and forest department public initiatives.",
    solution: "Engineered scalable web portals following stringent government compliance and security protocols. Implemented role-based admin consoles for district-level officials, secure document repositories, and interactive public informational modules.",
    keyFeatures: [
      "Secure Citizen Portal for online applications, queries, and circular downloads.",
      "Institutional Directory & Course Management for TN Directorate of Education and Training (DET).",
      "Forest Conservation & Eco-Tourism showcase portal with multimedia resource centers.",
      "High-security admin dashboards with multi-level role hierarchies and audit trail logs.",
      "Bilingual Content Management support and mobile-responsive layout for rural/statewide access."
    ],
    architecture: [
      "Backend: Laravel & PHP MVC structured for high concurrent citizen traffic",
      "Frontend: Responsive Blade / React dynamic components with accessibility compliance",
      "Database: MySQL with relational state/district hierarchies and parameterized queries",
      "Security: CSRF protection, SQL injection prevention, strict input sanitization, automated backups"
    ],
    techStack: ["Laravel", "PHP", "MySQL", "React", "Tailwind CSS", "Security Hardening", "WCAG A11y"],
    metrics: [
      { label: "Audience", value: "Statewide Public" },
      { label: "Security", value: "Govt Compliant" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  {
    id: "epf-auto-calculation",
    title: "EPF Statutory Auto-Calculation & Compliance Engine",
    category: "enterprise",
    categoryName: "Enterprise / FinTech",
    tagline: "Automated provident fund calculation, wage ceiling caps, and employer statutory filing",
    company: "Cygnus a Technologies",
    featured: true,
    thumbnail: "epf-engine",
    gradient: "from-purple-600 to-indigo-500",
    overview: "A specialized financial calculation engine that automates employee provident fund (EPF) deductions, employer contributions, pension scheme (EPS) caps, and administrative charges in compliance with Indian statutory payroll norms.",
    problemStatement: "Manual EPF calculation across hundreds of employees with varying basic pay, wage ceilings, voluntary contributions (VPF), and complex employer splits was prone to human error and compliance penalties.",
    solution: "Engineered an automated rule-based calculation module capable of bulk-processing payroll spreadsheets, validating salary structures against statutory slabs, and generating instant employer contribution reports and ECR filing summaries.",
    keyFeatures: [
      "Automated Employee (12%) and Employer (3.67% EPF + 8.33% EPS capped) split calculations.",
      "Configurable Statutory Wage Ceiling handling (e.g. ₹15,000 threshold capping).",
      "Bulk Excel / CSV payroll data importer with instant error validation.",
      "Detailed breakdown generation with printable pay slips and statutory monthly ECR file exports.",
      "Historical audit logs for annual salary revisions and arrears calculations."
    ],
    architecture: [
      "Backend: Laravel modular calculation service engine",
      "Database: MySQL with precision decimal storage for financial accuracy",
      "Data Processing: Background Queue workers handling bulk employee payroll datasets",
      "Export Engine: Automated Excel (Maatwebsite/Laravel-Excel) and PDF generation"
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Queue Workers", "Excel Exporters", "Financial Algorithms"],
    metrics: [
      { label: "Accuracy", value: "100% Statutory" },
      { label: "Processing Speed", value: "Bulk < 3s" },
      { label: "Manual Effort", value: "-90% Saved" }
    ]
  },
  {
    id: "appraisal-management-system",
    title: "Hierarchical Appraisal & Performance Management System",
    category: "enterprise",
    categoryName: "Enterprise / HR Tech",
    tagline: "Multi-tier employee performance evaluation with dynamic approval matrix & KPI scoring",
    company: "Cygnus a Technologies",
    featured: true,
    thumbnail: "appraisal-system",
    gradient: "from-amber-500 to-rose-500",
    overview: "An enterprise-grade performance evaluation platform independently built to streamline quarterly and annual appraisals. Features self-assessment scoring, manager reviews, skip-level approvals, HR calibration, and automated promotion/increment recommendations.",
    problemStatement: "Organizations faced disjointed appraisal cycles with email chains, missed deadlines, lack of objective KPI scoring, and no centralized audit trail for executive review.",
    solution: "Architected a state-machine driven workflow engine where appraisal cycles progress through predefined hierarchy levels (Employee -> Line Manager -> Department Head -> HR Director) with automated reminder cron jobs and SLA escalations.",
    keyFeatures: [
      "Dynamic Multi-Level Approval Hierarchy with configurable org-chart routing.",
      "Weighted KPI & Competency Scoring engine with bell-curve calibration tools.",
      "Automated Email & In-App Reminders driven by Laravel Cron / Scheduled Tasks.",
      "Confidential 360-degree feedback module with anonymized reviewer comments.",
      "Complete versioned revision history preventing unauthorized score alterations."
    ],
    architecture: [
      "Backend: Laravel state-machine architecture with Event/Listener triggers",
      "Security: Granular Role-Based Access Control (RBAC) ensuring confidential salary & rating visibility",
      "Scheduled Tasks: Cron jobs monitoring deadline milestones and triggering supervisor reminders",
      "Reporting: Executive analytics on department ratings, talent distribution, and increment budgets"
    ],
    techStack: ["Laravel", "Livewire", "MySQL", "Cron Jobs", "RBAC", "Dynamic Workflow Engine"],
    metrics: [
      { label: "Workflow Tiers", value: "Up to 5 Levels" },
      { label: "Cycle Completion", value: "2x Faster" },
      { label: "Data Integrity", value: "100% Audited" }
    ]
  },
  {
    id: "saudi-ecommerce-backend",
    title: "High-Scale Saudi E-Commerce Backend & Order Processing",
    category: "ecommerce",
    categoryName: "E-Commerce",
    tagline: "High-throughput e-commerce backend with multi-currency, coupon engines, and logistics APIs",
    company: "Adivinar Technologies",
    featured: false,
    thumbnail: "ecommerce-backend",
    gradient: "from-pink-600 to-rose-600",
    overview: "Scalable backend architecture developed for a major retail e-commerce client in Saudi Arabia, handling high-volume product catalogs, flash sale traffic spikes, automated inventory reservation, and payment gateway webhooks.",
    problemStatement: "The client needed a resilient backend capable of handling high concurrency during regional festive sales, multi-warehouse inventory sync, and seamless integration with regional Middle Eastern payment processors.",
    solution: "Engineered a clean REST API backend in Laravel utilizing repository patterns, Redis caching, database indexing, and asynchronous webhook handling for payment gateways (Mada, Visa, Apple Pay).",
    keyFeatures: [
      "High-performance Product Catalog with faceted search and category hierarchy.",
      "Dynamic Promotional & Discount Coupon engine supporting basket threshold rules.",
      "Cart & Checkout pipeline with temporary stock reservation to avoid overselling.",
      "Real-time integration with shipping and courier APIs for AWB tracking generation.",
      "Multi-currency and bilingual (Arabic/English) localized response formatting."
    ],
    architecture: [
      "Backend: Laravel REST API with Clean Architecture / Repository Pattern",
      "Database: MySQL with normalized catalog tables, partition indexing, and transaction locks",
      "Payments: Webhook listeners with idempotency keys preventing double-charges"
    ],
    techStack: ["Laravel", "PHP", "MySQL", "REST APIs", "Payment Webhooks", "Redis Caching"],
    metrics: [
      { label: "Target Market", value: "Saudi Arabia (KSA)" },
      { label: "API Latency", value: "< 120ms" },
      { label: "Transactions", value: "Zero Loss" }
    ]
  },
  {
    id: "mobile-attendance-api",
    title: "Mobile-Based Real-time Attendance & Geo-Fencing API",
    category: "mobile-backend",
    categoryName: "Mobile Backend & IoT",
    tagline: "Synchronized attendance tracking backend with geo-coordinate verification and shift rules",
    company: "Pearls Technologies",
    featured: false,
    thumbnail: "attendance-api",
    gradient: "from-cyan-600 to-blue-600",
    overview: "Full backend API suite powering enterprise mobile apps for staff attendance check-ins, geo-location boundaries, shift scheduling, and automated overtime calculations.",
    problemStatement: "Organizations required a reliable system for field staff and office employees to check in with real-time GPS coordinate verification, eliminating proxy attendance.",
    solution: "Designed high-speed RESTful endpoints in PHP with JWT authentication, geo-distance calculation algorithms (Haversine formula), and automated daily attendance summaries.",
    keyFeatures: [
      "JWT Secure Authentication with token refresh mechanisms for mobile apps.",
      "Geo-fence radius calculation checking employee GPS coordinates against office locations.",
      "Shift management engine supporting rotational shifts, grace periods, and late penalties.",
      "Automated daily Cron scripts calculating total working hours and overtime flags."
    ],
    architecture: [
      "Backend: CodeIgniter / PHP RESTful API engine",
      "Database: MySQL with optimized geo-spatial and daily punch tables",
      "Security: JWT bearer tokens with device ID fingerprinting"
    ],
    techStack: ["PHP", "CodeIgniter", "MySQL", "REST APIs", "JWT", "Geo-Location Math"],
    metrics: [
      { label: "Accuracy", value: "Geo-Verified" },
      { label: "Sync Latency", value: "< 200ms" },
      { label: "Uptime", value: "99.8%" }
    ]
  }
];

export const liveWebsites = [
  {
    id: "scieng",
    title: "Scieng Publications",
    category: "Academic & Journal Publishing",
    url: "https://sciengpublications.com",
    displayUrl: "sciengpublications.com",
    description: "Dynamic academic research publication portal featuring journal archiving, online article submissions, and author citation management.",
    tech: ["PHP", "MySQL", "JavaScript", "Custom CMS", "Responsive Design"],
    highlights: "Peer-reviewed journal publishing system with author dashboard and indexing integration."
  },
  {
    id: "techface",
    title: "Techface Solutions",
    category: "Corporate & Technology Agency",
    url: "https://www.techface.in",
    displayUrl: "techface.in",
    description: "Modern technology agency web presence showcasing enterprise IT services, software consulting, portfolio case studies, and client lead funnels.",
    tech: ["PHP", "HTML5/CSS3", "Bootstrap", "Interactive UI", "SEO Optimization"],
    highlights: "Corporate branding with high-converting inquiry forms and dynamic service catalogs."
  },
  {
    id: "manickam-mahal",
    title: "Manickam Mahal",
    category: "Hospitality & Event Venue",
    url: "https://manickammahal.com",
    displayUrl: "manickammahal.com",
    description: "Premium convention center and wedding venue portal featuring virtual photo tours, date availability inquiry, amenities showcase, and event booking management.",
    tech: ["PHP", "MySQL", "jQuery", "Responsive UI", "Admin Panel"],
    highlights: "Interactive venue showcase with automated booking inquiries and event date scheduling."
  },
  {
    id: "vishwam",
    title: "Vishwam Foundation",
    category: "NGO & Non-Profit Organization",
    url: "https://www.vishwamfoundation.net",
    displayUrl: "vishwamfoundation.net",
    description: "Non-profit foundation web platform highlighting social initiatives, community welfare programs, volunteer onboarding, and dynamic project donation galleries.",
    tech: ["PHP", "Bootstrap", "MySQL", "Payment Integration", "Custom CMS"],
    highlights: "Transparency reporting, program gallery, and community volunteer registration portal."
  },
  {
    id: "kavins-korner",
    title: "Kavin's Korner",
    category: "Retail & Lifestyle Brand",
    url: "https://www.kavinskorner.com",
    displayUrl: "kavinskorner.com",
    description: "E-commerce and boutique lifestyle showcase offering curated product catalogs, customer reviews, and integrated inquiry channels.",
    tech: ["PHP", "MySQL", "JavaScript", "E-Commerce", "Admin Dashboard"],
    highlights: "Product showcase with categories, customer engagement tools, and dynamic inventory."
  },
  {
    id: "sypa-education",
    title: "Sypa Education",
    category: "EdTech & Academy Portal",
    url: "https://www.sypaiie.education",
    displayUrl: "sypaiie.education",
    description: "Educational academy portal offering curriculum listings, student enrollment forms, faculty profiles, and dynamic notification bulletins.",
    tech: ["PHP", "MySQL", "Bootstrap", "Student Portal", "Lead Capture"],
    highlights: "Course catalog, online admission requests, and institutional announcement boards."
  },
  {
    id: "janatha-dental",
    title: "Janatha Dental Clinic",
    category: "Healthcare & Dental Care",
    url: "https://www.janathadental.com",
    displayUrl: "janathadental.com",
    description: "Comprehensive healthcare portal for multi-specialty dental clinic featuring appointment booking requests, doctor schedules, treatment guides, and patient testimonials.",
    tech: ["PHP", "HTML5/CSS3", "JavaScript", "Appointment System", "Medical UI"],
    highlights: "Online appointment booking workflow, patient before/after treatment gallery."
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Bharathiar University, Coimbatore",
    year: "2016",
    details: "Postgraduate degree focusing on advanced software architecture, database management systems, data structures, and enterprise web application development."
  },
  {
    degree: "Bachelor of Science in Computer Science (B.Sc. CS)",
    institution: "Manonmaniam Sundaranar (MS) University, Tirunelveli",
    year: "2013",
    details: "Undergraduate degree establishing core foundations in programming, algorithmic logic, computer networks, and relational database systems."
  }
];
