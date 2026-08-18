import { Project, SkillCategory, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: "Srikanth B",
  role: "Python Full Stack Developer",
  tagline: "Building modern web applications with Python, Django, React, and TypeScript.",
  bio: "I build practical full-stack applications using Python, Django, React, TypeScript, JavaScript, Node.js, Vite, Tailwind CSS, and Supabase. My work covers frontend development, backend APIs, authentication, database integration, and responsive UI development.",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91 6380764806",
  email: "sri262085@gmail.com",
  github: "https://github.com/iblamesrix",
  resumeUrl: "/assets/Resume.pdf",
  profileImage: "/assets/profile-optimized.jpg",
  availability: "Available for Full Stack Developer Roles",
};

export const KNOWN_LANGUAGES = [
  {
    name: "Python",
    title: "Python",
    category: "Backend",
    description: "Backend development, scripting, APIs, automation, and application logic.",
    iconSlug: "python",
    iconColor: "#3776AB",
  },
  {
    name: "Django",
    title: "Django",
    category: "Backend",
    description: "Python web development, ORM, authentication, routing, and REST APIs.",
    iconSlug: "django",
    iconColor: "#092E20",
  },
  {
    name: "React",
    title: "React",
    category: "Frontend",
    description: "Component-based frontend development and interactive web applications.",
    iconSlug: "react",
    iconColor: "#61DAFB",
  },
  {
    name: "TypeScript",
    title: "TypeScript",
    category: "Frontend",
    description: "Type-safe JavaScript development for scalable frontend applications.",
    iconSlug: "typescript",
    iconColor: "#3178C6",
  },
  {
    name: "JavaScript",
    title: "JavaScript",
    category: "Frontend",
    description: "Modern ES6+ JavaScript, asynchronous programming, APIs, and application logic.",
    iconSlug: "javascript",
    iconColor: "#F7DF1E",
  },
  {
    name: "Node.js",
    title: "Node.js",
    category: "Backend",
    description: "Server-side JavaScript, APIs, backend tooling, and application services.",
    iconSlug: "nodedotjs",
    iconColor: "#5FA04E",
  },
  {
    name: "Vite",
    title: "Vite",
    category: "Tooling",
    description: "Fast development tooling and modern frontend build infrastructure.",
    iconSlug: "vite",
    iconColor: "#646CFF",
  },
  {
    name: "Tailwind CSS",
    title: "Tailwind CSS",
    category: "Frontend",
    description: "Responsive utility-first styling and modern interface development.",
    iconSlug: "tailwindcss",
    iconColor: "#06B6D4",
  },
  {
    name: "Supabase",
    title: "Supabase",
    category: "Backend / Database",
    description: "PostgreSQL database, authentication, storage, and backend services.",
    iconSlug: "supabase",
    iconColor: "#3ECF8E",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "hype-house-events",
    title: "Hype House Events",
    subtitle: "Full Stack Event Management Platform",
    category: "Full Stack",
    shortDescription: "A complete event management platform for event discovery, gallery management, user authentication, and booking workflows.",
    fullDescription: "Hype House Events is a responsive full-stack web application connecting a modern frontend with backend services, authentication, database functionality, and event management workflows. Built to allow users to discover events, view galleries, and interact with booking processes.",
    problem: "Event businesses need a centralized platform where users can discover events, view galleries, authenticate securely, and interact with booking workflows.",
    solution: "Built a responsive full-stack web application connecting a modern frontend with backend services, authentication, database functionality, and event management workflows.",
    myContribution: [
      "Designed the frontend architecture and built responsive interfaces",
      "Implemented event discovery pages and gallery experiences",
      "Integrated user authentication and session management",
      "Connected application data through REST API endpoints",
      "Built reusable UI components and responsive layouts",
      "Worked on deployment and production configuration",
    ],
    architectureDetails: [
      "React frontend with responsive component-based architecture.",
      "Django REST Framework backend with PostgreSQL database.",
      "Supabase for authentication and database services.",
      "Tailwind CSS for responsive interface design.",
      "Deployed on Render (backend) and connected to production domain.",
    ],
    keyFeatures: [
      "Event discovery and browsing",
      "Event gallery experiences",
      "User authentication and session management",
      "Responsive design across all devices",
      "Booking-related workflows",
      "Database integration",
      "Production deployment",
    ],
    keyMetrics: [
      { label: "Live Domain", value: "hypehouseevents.in" },
      { label: "Role", value: "Full Stack Developer" },
    ],
    image: "/assets/profile-optimized.jpg",
    tags: ["Python", "Django", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/iblamesrix",
    liveUrl: "https://www.hypehouseevents.in/",
    featured: true,
    role: "Full Stack Developer"
  },
  {
    id: "smart-soil-ai",
    title: "SmartSoilAI",
    subtitle: "Machine Learning Agricultural Recommendation System",
    category: "Machine Learning & AI",
    shortDescription: "A machine learning system that processes soil parameters and produces crop and fertilizer recommendations.",
    fullDescription: "SmartSoilAI is a machine-learning based system that processes soil-related parameters including NPK levels, pH, moisture, and humidity to produce agricultural crop and fertilizer recommendations. Built with a Python ML backend and a React frontend.",
    problem: "Farmers need practical recommendations based on soil and environmental parameters to optimize crop selection and fertilizer usage.",
    solution: "Built a machine-learning based system that processes soil-related parameters and produces agricultural recommendations using a trained classification model.",
    myContribution: [
      "Data preprocessing and feature engineering",
      "Model experimentation and training with Scikit-learn",
      "Backend API integration with Flask",
      "Prediction workflow implementation",
      "Input validation and error handling",
      "Recommendation interface and result presentation",
    ],
    architectureDetails: [
      "Python backend with Flask serving the ML model inference.",
      "Scikit-learn classification model trained on soil parameter dataset.",
      "React frontend for parameter input and recommendation display.",
      "Pandas for data preprocessing and feature engineering.",
      "Model evaluated using classification accuracy on a train/test split.",
    ],
    keyFeatures: [
      "Soil parameter input interface",
      "ML model prediction pipeline",
      "Crop recommendation workflow",
      "Fertilizer recommendation",
      "Data preprocessing",
      "Result presentation",
    ],
    keyMetrics: [
      { label: "Model Accuracy", value: "~88%" },
      { label: "Evaluation", value: "Train/Test Split" },
    ],
    image: "/assets/profile-optimized.jpg",
    tags: ["Python", "Scikit-learn", "Flask", "React", "Pandas", "Machine Learning"],
    githubUrl: "https://github.com/iblamesrix/SmartSoilAI",
    featured: true,
    role: "ML Developer"
  },
  {
    id: "aerovision-ai",
    title: "AeroVision-AI",
    subtitle: "Computer Vision Aerial Object Detection",
    category: "Computer Vision",
    shortDescription: "A computer vision pipeline for processing aerial images and detecting objects using deep learning techniques.",
    fullDescription: "AeroVision-AI is a computer-vision pipeline for processing aerial images and detecting relevant objects using CNN-based deep learning. Built with Python, TensorFlow, and OpenCV, the project involves image preprocessing, dataset preparation, model training, and evaluation.",
    problem: "Analyzing large volumes of aerial imagery manually is time-consuming and error-prone.",
    solution: "Built a computer-vision pipeline for processing aerial images and detecting relevant objects using CNN-based deep learning techniques.",
    myContribution: [
      "Image preprocessing and dataset preparation",
      "CNN model architecture implementation with TensorFlow",
      "Model training and hyperparameter experimentation",
      "Evaluation and accuracy measurement",
      "OpenCV integration for image processing pipeline",
      "Python implementation throughout",
    ],
    architectureDetails: [
      "Convolutional Neural Network (CNN) architecture built with TensorFlow.",
      "OpenCV for image preprocessing, filtering, and augmentation.",
      "Model trained and evaluated on annotated aerial image dataset.",
      "Python implementation with NumPy for array operations.",
    ],
    keyFeatures: [
      "Image preprocessing pipeline",
      "CNN-based object detection",
      "Dataset preparation and annotation",
      "Model evaluation and accuracy measurement",
      "Computer vision workflow",
    ],
    keyMetrics: [
      { label: "Detection Accuracy", value: "~85%" },
      { label: "Evaluation", value: "Train/Test Split" },
    ],
    image: "/assets/profile-optimized.jpg",
    tags: ["Python", "TensorFlow", "OpenCV", "CNN", "Computer Vision", "Deep Learning"],
    githubUrl: "https://github.com/iblamesrix/AeroVision-AI",
    featured: true,
    role: "ML Developer"
  },
  {
    id: "litwear-ecommerce",
    title: "LitWear",
    subtitle: "Full Stack E-Commerce Application",
    category: "Full Stack",
    shortDescription: "A modern e-commerce application focused on product browsing, shopping cart workflows, and responsive interface design.",
    fullDescription: "LitWear is a full-stack e-commerce application built with React on the frontend and Python/Django on the backend. It features product catalogue browsing, shopping cart management, wishlist functionality, user authentication, and database integration via Supabase.",
    problem: "Online clothing stores require intuitive product discovery, shopping workflows, responsive interfaces, and reliable data handling.",
    solution: "Built a modern e-commerce application focused on product browsing and shopping workflows with a clean, responsive interface.",
    myContribution: [
      "Frontend development with React and JavaScript",
      "Component design and responsive layouts",
      "Shopping cart and wishlist implementation",
      "Backend integration with Django REST API",
      "Database integration with Supabase",
      "Authentication implementation",
      "UI/UX design and implementation",
    ],
    architectureDetails: [
      "React frontend with component-based architecture.",
      "Django REST Framework backend with RESTful endpoints.",
      "Supabase for database and authentication services.",
      "Tailwind CSS for responsive styling.",
      "Product catalogue, cart, and wishlist state management.",
    ],
    keyFeatures: [
      "Product catalogue and browsing",
      "Product detail pages",
      "Shopping cart management",
      "Wishlist functionality",
      "Responsive UI design",
      "User authentication",
      "Database integration",
    ],
    keyMetrics: [
      { label: "Role", value: "Full Stack Developer" },
      { label: "Live Site", value: "Netlify" },
    ],
    image: "/assets/profile-optimized.jpg",
    tags: ["React", "JavaScript", "Python", "Django", "Supabase", "Tailwind CSS"],
    githubUrl: "https://github.com/iblamesrix/LitWear",
    liveUrl: "https://litwear-app.netlify.app/",
    featured: true,
    role: "Full Stack Developer"
  },
  {
    id: "anpr-system",
    title: "ANPR",
    subtitle: "Automatic Number Plate Recognition",
    category: "Computer Vision",
    shortDescription: "An image-processing and OCR workflow for detecting and extracting vehicle license plate information.",
    fullDescription: "The ANPR system is an image-processing and OCR pipeline for detecting and extracting vehicle license plate text from images. Built using Python, OpenCV for image processing, and OCR libraries for text extraction.",
    problem: "Manual vehicle identification from surveillance footage is inefficient and time-consuming.",
    solution: "Built an image-processing and OCR workflow for detecting and extracting vehicle license plate information from images.",
    myContribution: [
      "Image preprocessing pipeline with OpenCV",
      "License plate region detection using contour analysis",
      "OCR integration for text extraction",
      "Image analysis and filtering",
      "Vehicle identification workflow",
      "Python implementation throughout",
    ],
    architectureDetails: [
      "OpenCV for image preprocessing, filtering, and contour detection.",
      "OCR library integration for character recognition.",
      "Flask backend for API endpoint exposure.",
      "Multi-stage image processing pipeline.",
    ],
    keyFeatures: [
      "Image preprocessing and filtering",
      "License plate region detection",
      "OCR text extraction",
      "Image analysis pipeline",
      "Vehicle identification workflow",
    ],
    keyMetrics: [
      { label: "Role", value: "Backend Developer" },
    ],
    image: "/assets/profile-optimized.jpg",
    tags: ["Python", "OpenCV", "OCR", "Flask", "Image Processing"],
    githubUrl: "https://github.com/iblamesrix",
    featured: true,
    role: "Backend Developer"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    iconName: "Layout",
    description: "Building responsive, component-based web interfaces with modern frameworks and tools.",
    skills: [
      {
        name: "React",
        level: "Proficient",
        years: "Active Use",
        description: "Component-based frontend development, hooks, state management, and interactive web applications.",
        codeSnippet: "const EventCard: React.FC<EventCardProps> = ({ event }) => {\n  const [isBooked, setIsBooked] = useState(false);\n  return (\n    <div className=\"card\">\n      <h3>{event.title}</h3>\n      <button onClick={() => setIsBooked(true)}>\n        {isBooked ? 'Booked!' : 'Book Now'}\n      </button>\n    </div>\n  );\n};"
      },
      {
        name: "TypeScript",
        level: "Proficient",
        years: "Active Use",
        description: "Type-safe JavaScript development, interfaces, generics, and scalable frontend applications.",
      },
      {
        name: "JavaScript (ES6+)",
        level: "Proficient",
        years: "Active Use",
        description: "Async/await, closures, DOM manipulation, event handling, and modern JavaScript patterns.",
      },
      {
        name: "Tailwind CSS",
        level: "Proficient",
        years: "Active Use",
        description: "Responsive utility-first styling, custom design systems, and modern interface development.",
      },
    ]
  },
  {
    title: "Backend Development",
    iconName: "Server",
    description: "Building REST APIs, authentication systems, and backend services with Python.",
    skills: [
      {
        name: "Python",
        level: "Proficient",
        years: "Active Use",
        description: "Backend development, scripting, automation, data processing, and application logic.",
        codeSnippet: "class EventViewSet(viewsets.ModelViewSet):\n    queryset = Event.objects.all()\n    serializer_class = EventSerializer\n    permission_classes = [IsAuthenticatedOrReadOnly]\n\n    def get_queryset(self):\n        return self.queryset.filter(is_active=True)"
      },
      {
        name: "Django & Django REST Framework",
        level: "Proficient",
        years: "Active Use",
        description: "Python web development, ORM, authentication, routing, REST APIs, and full-stack application development.",
      },
      {
        name: "Node.js",
        level: "Familiar",
        years: "Project Use",
        description: "Server-side JavaScript, API endpoints, backend tooling, and application services.",
      },
      {
        name: "Flask",
        level: "Proficient",
        years: "Project Use",
        description: "Lightweight Python framework used for ML model serving and API endpoints in AI projects.",
      }
    ]
  },
  {
    title: "AI & Machine Learning",
    iconName: "BrainCircuit",
    description: "Building, training, and evaluating machine learning models and computer vision pipelines.",
    skills: [
      {
        name: "Scikit-learn",
        level: "Proficient",
        years: "Project Use",
        description: "Supervised learning, classification models, data preprocessing, and model evaluation.",
        codeSnippet: "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\nclf = RandomForestClassifier(n_estimators=100)\nclf.fit(X_train, y_train)\nscore = accuracy_score(y_test, clf.predict(X_test))"
      },
      {
        name: "TensorFlow & CNN",
        level: "Familiar",
        years: "Project Use",
        description: "Convolutional Neural Networks for image classification and computer vision tasks.",
      },
      {
        name: "OpenCV",
        level: "Proficient",
        years: "Project Use",
        description: "Image preprocessing, filtering, contour detection, and computer vision pipeline development.",
      },
      {
        name: "Pandas & NumPy",
        level: "Proficient",
        years: "Project Use",
        description: "Data cleaning, manipulation, feature engineering, and numerical computation.",
      }
    ]
  },
  {
    title: "Database & Services",
    iconName: "Database",
    description: "Working with relational databases, cloud backend services, and modern database tooling.",
    skills: [
      {
        name: "Supabase",
        level: "Proficient",
        years: "Active Use",
        description: "PostgreSQL-backed database, authentication, storage, and backend services for full-stack apps.",
      },
      {
        name: "PostgreSQL",
        level: "Proficient",
        years: "Active Use",
        description: "Relational database design, SQL queries, schema management, and data migrations.",
      },
      {
        name: "Git & GitHub",
        level: "Proficient",
        years: "Active Use",
        description: "Version control, branching, pull requests, and collaborative development workflows.",
      },
      {
        name: "Vite",
        level: "Proficient",
        years: "Active Use",
        description: "Fast development tooling, module bundling, and modern frontend build configuration.",
      }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "besant-internship",
    role: "Python Full Stack Developer Intern",
    organization: "Besant Technologies",
    location: "Chennai, Tamil Nadu, India",
    period: "2024 — Present",
    type: "Internship",
    summary: "Focused on full-stack web development using Python, Django, REST APIs, and React. Built responsive UI components and backend services across practical project work.",
    highlights: [
      "Built full-stack applications using Django and React.",
      "Designed SQL database schemas and RESTful API endpoints.",
      "Implemented user authentication and role-based access workflows.",
      "Developed responsive frontend interfaces with HTML, CSS, and JavaScript.",
      "Worked on debugging, testing, and code optimization tasks.",
    ],
    techStack: ["Python", "Django", "React", "REST API", "SQL", "JavaScript", "HTML/CSS"]
  },
  {
    id: "academic-degree",
    role: "Bachelor of Science in Computer Science",
    organization: "Bishop Heber College",
    location: "Tiruchirappalli, Tamil Nadu, India",
    period: "Graduated",
    type: "Project Engineering",
    summary: "Academic training in core Computer Science fundamentals including Python, data structures, algorithms, database systems, software engineering, machine learning, and computer vision.",
    highlights: [
      "Completed capstone projects in Machine Learning (SmartSoilAI) and Computer Vision (AeroVision-AI).",
      "Studied Data Structures, Algorithm Design, Database Systems, and Software Engineering.",
      "Gained practical programming experience in Python and foundational web development.",
    ],
    techStack: ["Python", "Data Structures", "Algorithms", "Database Systems", "Machine Learning", "Software Engineering"]
  }
];
