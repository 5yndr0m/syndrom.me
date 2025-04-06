"use client"

import React from "react"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com",
    },
    {
      name: "X",
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com",
    },
  ]

  return (
    <TooltipProvider>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col gap-3 items-center bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-border">
          {socialLinks.map((link) => (
            <Tooltip key={link.name} delayDuration={300}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 transition-all duration-300"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    {link.icon}
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left" className="mr-2">
                {link.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}
