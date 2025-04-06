import { Briefcase } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience({ experiences }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <Briefcase className="h-5 w-5" /> Work Experience
      </h2>
      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <Badge
                  variant="outline"
                  className="md:self-start self-start md:ml-0 w-fit"
                >
                  {exp.period}
                </Badge>
              </div>
              <p className="mt-2 text-muted-foreground">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
