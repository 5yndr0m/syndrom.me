import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Laptop, Monitor, Smartphone, Headphones, Code, Cloud } from "lucide-react"

export default function UsesPage() {
  const hardware = [
    {
      category: "Computer",
      icon: <Laptop className="h-5 w-5" />,
      items: [
        {
          name: "MacBook Pro 16-inch (2023)",
          description: "M2 Pro, 32GB RAM, 1TB SSD",
          details: "My main development machine for both mobile and web development.",
        },
        {
          name: "Custom PC Build",
          description: "AMD Ryzen 9 5900X, 64GB RAM, RTX 3080, 2TB NVMe",
          details: "Used for virtualization, security testing, and occasional gaming.",
        },
      ],
    },
    {
      category: "Displays",
      icon: <Monitor className="h-5 w-5" />,
      items: [
        {
          name: 'Dell UltraSharp 27" 4K',
          description: "U2720Q",
          details: "Primary monitor for coding and design work.",
        },
        {
          name: 'LG 34" UltraWide',
          description: "34WN80C-B",
          details: "Secondary monitor for multitasking and documentation.",
        },
      ],
    },
    {
      category: "Mobile Devices",
      icon: <Smartphone className="h-5 w-5" />,
      items: [
        {
          name: "iPhone 14 Pro",
          description: "256GB",
          details: "Primary phone and iOS testing device.",
        },
        {
          name: "Google Pixel 7",
          description: "128GB",
          details: "Android development and testing.",
        },
        {
          name: 'iPad Pro 12.9" (2022)',
          description: "256GB with Apple Pencil",
          details: "Note-taking, sketching UI designs, and testing.",
        },
      ],
    },
    {
      category: "Accessories",
      icon: <Headphones className="h-5 w-5" />,
      items: [
        {
          name: "Keychron K3",
          description: "Low-profile mechanical keyboard with brown switches",
          details: "My daily driver for typing.",
        },
        {
          name: "Logitech MX Master 3",
          description: "Wireless mouse",
          details: "Comfortable for long coding sessions.",
        },
        {
          name: "Sony WH-1000XM4",
          description: "Noise-cancelling headphones",
          details: "Essential for focusing in noisy environments.",
        },
      ],
    },
  ]

  const software = [
    {
      category: "Development",
      icon: <Code className="h-5 w-5" />,
      items: [
        {
          name: "Visual Studio Code",
          description: "Primary code editor",
          details: "With extensions for React, TypeScript, Python, and more.",
        },
        {
          name: "JetBrains Suite",
          description: "WebStorm, PyCharm, Android Studio",
          details: "Used for specific language development and mobile apps.",
        },
        {
          name: "Docker Desktop",
          description: "Container management",
          details: "For creating consistent development environments.",
        },
        {
          name: "Git & GitHub Desktop",
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
        {
          name: "Adobe Creative Cloud",
          description: "Photoshop, Illustrator",
          details: "For image editing and graphic design.",
        },
      ],
    },
    {
      category: "Productivity",
      icon: <Code className="h-5 w-5" />,
      items: [
        {
          name: "Notion",
          description: "Note-taking and project management",
          details: "For organizing projects, notes, and documentation.",
        },
        {
          name: "Slack & Discord",
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

  const services = [
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
          name: "Firebase",
          description: "Backend as a Service",
          details: "For authentication, database, and hosting mobile app backends.",
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
          name: "1Password",
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

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Uses</h1>
        <p className="text-muted-foreground mt-2">Hardware, software, and services I use daily.</p>
      </div>

      <Tabs defaultValue="hardware" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="hardware">Hardware</TabsTrigger>
          <TabsTrigger value="software">Software</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
        </TabsList>

        <TabsContent value="hardware" className="mt-6 space-y-6">
          {hardware.map((category, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                {category.icon} {category.category}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {category.items.map((item, i) => (
                  <Card key={i}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="software" className="mt-6 space-y-6">
          {software.map((category, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                {category.icon} {category.category}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {category.items.map((item, i) => (
                  <Card key={i}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="services" className="mt-6 space-y-6">
          {services.map((category, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                {category.icon} {category.category}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {category.items.map((item, i) => (
                  <Card key={i}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

