import { Code } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Server, Shield, Smartphone } from "lucide-react";

export function Skills({ techStack }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <Code className="h-5 w-5" /> Tech Stack
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((tech, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h3 className="font-semibold flex items-center gap-2 mb-3">
                {tech.category === "Frontend" && <Code className="h-4 w-4" />}
                {tech.category === "Backend" && <Server className="h-4 w-4" />}
                {tech.category === "Mobile" && (
                  <Smartphone className="h-4 w-4" />
                )}
                {tech.category === "DevOps" && (
                  <Briefcase className="h-4 w-4" />
                )}
                {tech.category === "Security" && <Shield className="h-4 w-4" />}
                {tech.category === "Admin" && <Server className="h-4 w-4" />}
                {tech.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
