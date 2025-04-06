import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "SecureChat",
      description: "End-to-end encrypted messaging application with focus on privacy and security.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React Native", "Node.js", "Encryption", "MongoDB"],
      status: "Completed",
      github: "https://github.com/alexchen/securechat",
      live: "https://securechat-demo.vercel.app",
    },
    {
      title: "DevOps Dashboard",
      description: "Centralized dashboard for monitoring CI/CD pipelines, deployments, and server health.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "TypeScript", "Docker", "Kubernetes"],
      status: "In Progress",
      github: "https://github.com/alexchen/devops-dashboard",
      live: null,
    },
    {
      title: "Network Scanner",
      description: "Automated network vulnerability scanner with detailed reporting and remediation suggestions.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Python", "Security", "Networking"],
      status: "Completed",
      github: "https://github.com/alexchen/network-scanner",
      live: null,
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with Next.js and Tailwind CSS.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      status: "Completed",
      github: "https://github.com/alexchen/portfolio",
      live: "https://alexchen.dev",
    },
    {
      title: "Smart Home Hub",
      description: "Centralized control system for IoT devices with custom automation rules.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Node.js", "IoT", "MQTT"],
      status: "In Progress",
      github: "https://github.com/alexchen/smart-home-hub",
      live: null,
    },
    {
      title: "Expense Tracker",
      description: "Mobile app for tracking personal expenses with budget planning and analytics.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Flutter", "Firebase", "Charts"],
      status: "Completed",
      github: "https://github.com/alexchen/expense-tracker",
      live: "https://play.google.com/store/apps/expensetracker",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground mt-2">A collection of my personal and professional projects.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{project.title}</CardTitle>
                <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2 mt-auto">
              <Button variant="outline" size="sm" asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" /> GitHub
                </Link>
              </Button>
              {project.live && (
                <Button size="sm" asChild>
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

