// Edit everything about your portfolio here. No need to touch App.jsx.
export const profile = {
  firstName: "Digant",
  lastName: "Joshi",
  role: "Aspiring product manager and business analyst with a computer science background.",
  lead: "I turn messy data and user signals into clear product decisions.",
  about:
    "B.Tech in Computer Science from SRM Institute of Science and Technology, Chennai (2022 to 2026, CGPA 9.30). I worked as a business analyst intern at an AI startup, and I am now building a career in product management and business analytics.",
  openTo: "Open to product management and business analytics roles.",
  email: "digantjoshi27@gmail.com",
  github: "https://github.com/DigantJ",
  linkedin: "https://www.linkedin.com/in/digant-joshi-737784250/",
  resume: "/Digant_Joshi_Resume.pdf", // put the PDF in the public folder
  photo: "/profile.jpg", // put your photo in the public folder
  initials: "DJ",
};

export const experience = [
  {
    time: "Mar to Aug 2026",
    title: "Business / Growth Analyst Intern, Talentronaut",
    points: [
      "Tracked and analyzed key metrics across client projects, including timelines, engagement and business performance indicators.",
      "Ran market research and competitor analysis to support consulting and client strategy work.",
      "Prepared analytical reports, presentations and business insights for internal and client needs.",
      "Built basic dashboards and performance reports in Excel and Power BI.",
      "Supported leadership and project teams with data-driven insights and progress reporting.",
    ],
  },
  {
    time: "Dec 2025 to Jan 2026",
    title: "Marketing Intern, Tanayanand Private Limited",
    text: "Worked in the Marketing Department supporting marketing initiatives and documentation, including the company's presence at WINGS INDIA 2026. Received a letter of appreciation from the Managing Director for professionalism and dedication.",
  },
];

export const projects = [
  {
    name: "Book Scraper & Viewer",
    what: "A data pipeline that scrapes book data from BooksToScrape.com, converts prices to INR with a live exchange rate, stores it in MySQL and serves it in a searchable Streamlit app with CSV export.",
    stack: "Python, MySQL, Streamlit",
    link: "#", // optional: GitHub or live link, shown as a button inside the popup
    images: [
      { src: "/projects/book-scraper-1.png", caption: "Streamlit app with title search, showing 100 scraped books with prices in GBP and live-converted INR, availability and rating" },
      { src: "/projects/book-scraper-2.png", caption: "Scrollable results table with a Download CSV button for exporting the data" },
    ],
  },
  {
    name: "TradingBot Pro",
    what: "A Chrome extension that overlays options chain data directly on TradingView charts.",
    stack: "JavaScript, Chrome extension APIs",
    link: "#",
    images: [
      { src: "/projects/tradingbot-1.png", caption: "Signal panel on TradingView: spot vs max pain, expiry countdown, RSI-based signal and multi-timeframe status" },
      { src: "/projects/tradingbot-2.png", caption: "Options chain view: ITM, ATM and OTM strikes for calls and puts, with a volume bias gauge" },
    ],
  },
];

export const credentials = [
  { name: "Generative AI Professional", by: "Oracle, 2025" },
  { name: "Data Science and Analytics", by: "HP LIFE, 2026" },
  { name: "Data Analytics and Visualization Job Simulation", by: "Deloitte, 2024" },
  { name: "AI and Business Strategy", by: "LinkedIn Learning, 2025" },
];

export const skills = [
  "Product management",
  "Business analytics",
  "Data analysis",
  "Data visualization",
  "Excel",
  "Power BI",
  "Market research",
  "Python",
  "SQL / MySQL",
  "Streamlit",
  "JavaScript",
  "Generative AI",
];

export const education = [
  {
    time: "2022 to 2026",
    title: "B.Tech, Computer Science and Engineering",
    text: "SRM Institute of Science and Technology, Chennai. CGPA 9.30.",
  },
];
