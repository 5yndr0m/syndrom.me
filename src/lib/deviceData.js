import {
  Laptop,
  Monitor,
  Smartphone,
  Headphones,
  Code,
  Cloud,
} from "lucide-react";

export const hardware = [
  {
    category: "Computer",
    icon: <Laptop className="h-5 w-5" />,
    items: [
      {
        name: "HP EliteBook 840 G3",
        description: "Intel i5 6th gen, 16GB RAM, 128GB Nvme, 256GB SSD",
        details: "My main development machine.",
      },
      {
        name: "Custom PC Build",
        description: "Intel i5 8th gen, 16GB RAM, GTX 690, 512GB SSD, 1TBHDD",
        details:
          "Used as my home-lab environment setuped for virtualization, security testing, and occasional gaming.",
      },
    ],
  },
  {
    category: "Displays",
    icon: <Monitor className="h-5 w-5" />,
    items: [
      {
        name: "DDell 22 Monitor - E2225H",
        description: "E2225H",
        details: "Primary monitor.",
      },
    ],
  },
  {
    category: "Mobile Devices",
    icon: <Smartphone className="h-5 w-5" />,
    items: [
      {
        name: "Samsung F05 2024",
        description: "4GB 64GB",
        details: "Primary phone.",
      },
      {
        name: "Huawei Nova 3i",
        description: "6GB 128GB",
        details: "Android development and testing.",
      },
    ],
  },
  {
    category: "Accessories",
    icon: <Headphones className="h-5 w-5" />,
    items: [
      {
        name: "Dell Multimedia Keyboard - KB216 - UK (QWERTY)",
        description:
          "Multimedia Keyboard provides a convenient keyboard solution for everyday home or office computing uses.",
        details: "My daily driver for typing.",
      },
      {
        name: "FanTech HELIOS UX3",
        description: "Wired mouse",
        details: "Comfortable for long coding sessions.",
      },
      {
        name: "Fantech ALTO",
        description: "Multi-Platform Gaming Headset ",
        details: "Essential for focusing in noisy environments.",
      },
    ],
  },
];

export const software = [
  {
    category: "Operating System",
    icon: <Code className="h-5 w-5" />,
    items: [
      {
        name: "Archlinux",
        description: "Daily driver",
        details: "With Hyprland as WM and bunch ot tweaks to meet my requirements.",
      },
      {
        name: "Debian",
        description: "Used as home-labs OS",
        details: "Used for quick changes on the go.",
      },
      {
        name: "Windows 10",
        description: "Virtual machine",
        details: "For mandetory Windows work and some light gaming.",
      },
      {
        name: "Kali Linux",
        description: "security testing",
        details: "For learing and testing.",
      },
    ],
  },
  {
    category: "Development",
    icon: <Code className="h-5 w-5" />,
    items: [
      {
        name: "Zed editor",
        description: "Primary code editor",
        details: "With essential extensions.",
      },
      {
        name: "NeoVim",
        description: "Secondary code editor",
        details: "Used for quick changes on the go.",
      },
      {
        name: "Docker Desktop",
        description: "Container management",
        details: "For creating consistent development environments.",
      },
      {
        name: "Git, GitHub and lazygit",
        description: "Version control",
        details: "For managing code repositories and collaboration.",
      },
    ],
  },
  {
    category: "Design",
    icon: <Code className="h-5 w-5" />,
    items: [
      {
        name: "Figma",
        description: "UI/UX design",
        details: "For creating wireframes and mockups.",
      },
    ],
  },
  {
    category: "Productivity",
    icon: <Code className="h-5 w-5" />,
    items: [
      {
        name: "Discord",
        description: "Communication",
        details: "For team collaboration and community engagement.",
      },
      {
        name: "Obsidian",
        description: "Knowledge management",
        details: "For personal notes and knowledge base.",
      },
    ],
  },
]

export const services = [
  {
    category: "Hosting & Deployment",
    icon: <Cloud className="h-5 w-5" />,
    items: [
      {
        name: "Vercel",
        description: "Frontend deployment",
        details: "For hosting Next.js applications and static sites.",
      },
      {
        name: "AWS",
        description: "Cloud infrastructure",
        details: "EC2, S3, Lambda, and RDS for backend services.",
      },
      {
        name: "Render",
        description: "Backend deployment",
        details: "For hosting backends of various projects.",
      },
      {
        name: "Firebase/Superbase",
        description: "Backend as a Service",
        details: "For authentication, database, and hosting mobile app backends.",
      },
      {
        name: "MongoDB Atlas",
        description: "Cloud Database",
        details: "For cloud based storage and backup.",
      },
      {
        name: "GitHub Actions",
        description: "CI/CD",
        details: "For automated testing and deployment.",
      },
    ],
  },
  {
    category: "Monitoring & Analytics",
    icon: <Cloud className="h-5 w-5" />,
    items: [
      {
        name: "Google Analytics",
        description: "Website analytics",
        details: "For tracking user behavior and site performance.",
      },
      {
        name: "Sentry",
        description: "Error tracking",
        details: "For monitoring and fixing application errors.",
      },
      {
        name: "Datadog",
        description: "Infrastructure monitoring",
        details: "For server and application performance monitoring.",
      },
    ],
  },
  {
    category: "Security",
    icon: <Cloud className="h-5 w-5" />,
    items: [
      {
        name: "Bitwarden",
        description: "Password manager",
        details: "For secure credential storage and sharing.",
      },
      {
        name: "NordVPN",
        description: "VPN service",
        details: "For secure connections when working remotely.",
      },
      {
        name: "Burp Suite",
        description: "Web security testing",
        details: "For security assessments and penetration testing.",
      },
    ],
  },
]
