import { Award } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Certificates({ certificates }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <Award className="h-5 w-5" /> Certificates
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {certificates.map((cert, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h3 className="font-semibold">{cert.name}</h3>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <Badge variant="secondary">{cert.date}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}