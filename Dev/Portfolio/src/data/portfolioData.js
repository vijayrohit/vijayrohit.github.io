export const portfolioData = {
  name: "Sai Vijay Rohit Pantam",
  title: "Lead Software Engineer",
  email: "pantamrohit@gmail.com",
  location: "Tampa, FL 33541",
  links: {
    github: "http://vijayrohit.github.io",
    linkedin: "https://www.linkedin.com/in/rohitpantam"
  },
  summary: "Lead Software Engineer specializing in GenAI, Azure, and .NET. Building intelligent systems that solve complex problems.",
  skills: [
    { category: "Languages & Frameworks", items: ["C#", ".NET 8", "Python", "TypeScript", "React", "Node.js"] },
    { category: "AI & Cloud", items: ["Azure OpenAI (GPT-4)", "MCP", "Azure", "AWS", "CI/CD"] },
    { category: "Data & Monitoring", items: ["SQL Server", "Entity Framework", "New Relic"] }
  ],
  experience: [
    {
      id: "zelis-lead-engineer",
      company: "Zelis",
      location: "United States",
      role: "Lead Software Engineer",
      period: "Nov 2025 – Present",
      colorTheme: "linear-gradient(90deg, #3b82f6, #10b981)",
      technologies: ["Azure", ".NET", "React", "OpenAI", "SQL"],
      story: {
        title: "The AI Revolution: Taming Complexity with GPT-4",
        challenge: "Application support teams were drowning in manual triage, sifting through disparate monitoring tools (New Relic, SQL Sentry, etc.) to diagnose performance issues in our complex payment applications. Mean Time To Resolution (MTTR) was too high, leading to escalated costs and engineer burnout.",
        solution: "I architected and led the development of the AI Application Support Assistant, a full-stack generative AI agent. This wasn't just a chatbot; it was an integrated intelligence layer. Leveraging Azure OpenAI (GPT-4), .NET 8, and React, I created the Model Context Protocol (MCP), a proprietary middleware that standardized interaction across 17 different monitoring tools. This system allowed support staff to simply ask a question ('Why is ZAPP slow for User X?'), and the AI would correlate New Relic APM data, SQL Server diagnostics, and logs in real-time, streaming the root cause directly to their browser.",
        impact: "The result was transformative. We introduced a natural language monitoring interface that dramatically reduced the diagnostic workload, slashing support team MTTR by 60% and lowering Tier 1 escalations by 43%. Furthermore, I validated the long-term strategic value by proving that new data sources could be integrated in 2 weeks, down from a 3-month traditional development cycle, yielding a projected $575K annual ROI."
      }
    },
    {
      id: "zelis-se-iii",
      company: "Zelis",
      location: "United States",
      role: "Software Engineer III",
      period: "May 2024 – Nov 2025",
      colorTheme: "linear-gradient(90deg, #3b82f6, #6366f1)",
      technologies: ["C#", "Angular", "SQL", "Azure", "Sentry"],
      story: {
        title: "The Stability Architect: Fortifying Core Payment Systems",
        challenge: "As our ZAPP web applications grew in user base and feature complexity, maintaining consistent, high-performance stability became a critical mandate. We needed to shift from reactive fixes to proactive architectural strengthening.",
        solution: "I transitioned into a leadership role focused on long-term operational health. My work centered on full-stack optimization, from refining front-end rendering performance to tuning backend services and database query plans. I initiated and championed several measures for proactive stability, using monitoring tools to predict load spikes and failure points before they impacted users. I also drove significant contributions to the full-stack SDLC for key feature deliveries.",
        impact: "Through diligent performance engineering and optimization, I ensured the seamless, continuous operation of high-volume payment applications. This period established the robust foundation that ultimately made the subsequent AI integration initiative possible, proving the stability required for future high-complexity systems."
      }
    },
    {
      id: "zelis-se-ii",
      company: "Zelis",
      location: "United States",
      role: "Software Engineer II",
      period: "Jan 2023 – May 2024",
      colorTheme: "linear-gradient(90deg, #0ea5e9, #22d3ee)",
      technologies: [".NET", "SQL", "Dynatrace", "TeamCity"],
      story: {
        title: "The Technical Mentor: Defining Excellence and Driving Standards",
        challenge: "Our rapid growth meant an influx of talented, but less experienced, engineers. To maintain code quality and architectural integrity across the expanding team, we needed formalized standards and confident technical guidance.",
        solution: "I stepped up as a key technical mentor, moving beyond feature development to focus on team enablement and process maturity. I took ownership of determining project feasibility and sizing, ensuring all new features were scope-controlled and technically sound. I led reviews and workshops, embedding robust architectural patterns, comprehensive documentation, and rigorous coding standards into the team's DNA. I also contributed directly to the maintenance of core payment applications.",
        impact: "By establishing clear documentation and coaching junior engineers, I significantly increased the team’s overall efficiency and code quality. This foundational work ensured that the growing codebase remained maintainable, scalable, and aligned with enterprise best practices."
      }
    },
    {
      id: "amazon-sde",
      company: "Amazon",
      location: "United States",
      role: "Software Development Engineer",
      period: "Nov 2022 – Jan 2023",
      colorTheme: "linear-gradient(90deg, #f59e0b, #eab308)",
      technologies: ["Java", "AWS", "DynamoDB", "Lambda"],
      story: {
        title: "Hyper-Scalability: Designing Solutions for Global Traffic",
        challenge: "Working within Amazon’s colossal infrastructure demands that every solution is inherently scalable, capable of handling exponential traffic growth without performance degradation, specifically within the Amazonian Experience Tech group.",
        solution: "I focused intensely on architectural design, analyzing complex business requirements to conceptualize scalable, high-performance services. My primary focus was on efficiency, contributing to system architecture discussions and implementing solutions that leveraged cloud-native patterns to manage massive data throughput and user concurrency.",
        impact: "I successfully designed and developed systems that maintained high performance and reliability under peak global load, solidifying my expertise in distributed systems and performance engineering—a crucial skillset later applied to high-volume healthcare systems."
      }
    },
    {
      id: "zelis-junior-se",
      company: "Zelis",
      location: "St. Petersburg, FL",
      role: "Junior Software Engineer",
      period: "Jun 2021 – Nov 2022",
      colorTheme: "linear-gradient(90deg, #94a3b8, #cbd5e1)",
      technologies: ["C#", "SQL", "JavaScript"],
      story: {
        title: "The Foundations: Rapid Problem Solving and Initial Impact",
        challenge: "Transitioning from academic study to a fast-paced production environment required quickly absorbing existing architectures and immediately contributing to the delivery pipeline.",
        solution: "As a junior member of the team, I focused on executing development tasks across the full-stack, applying theoretical knowledge of systems flow and data usage to real-world code. This was my proving ground in rapid problem-solving, where I tackled and successfully resolved multiple technical issues, ranging from low-risk defects to high-risk production bugs, ensuring minimal user disruption.",
        impact: "This initial tenure established a robust professional foundation. By consistently delivering solutions and quickly resolving critical technical debt, I demonstrated the ability to make immediate, tangible contributions to the team’s success and prepared for subsequent growth within the organization."
      }
    }
  ],
  education: [
    {
      degree: "Master of Science (MS) in Computer Science",
      institution: "University of South Florida, Tampa, FL",
      year: "2021"
    },
    {
      degree: "Bachelor of Technology (BTech) in Information Technology",
      institution: "SRM University, India",
      year: "2019"
    }
  ],
  patentsAndHonors: [
    "Patent: A System for Dynamically Managing the Counterweight of an Elevator",
    "Honors: Best Major Project 2019, Best Working Model Tech Know'15",
    "Certifications: Programming Foundations: Algorithms, Programming Foundations: Object-Oriented Design"
  ]
};
