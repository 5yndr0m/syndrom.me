"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import {
  HardwareContent,
  SoftwareContent,
  ServicesContent,
} from "@/components/uses/uses-content";

export default function UsesPage() {
  const [activeTab, setActiveTab] = useState("hardware");

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && ["hardware", "software", "services"].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Uses</h1>
        <p className="text-muted-foreground mt-2">
          Hardware, software, and services I use daily.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="hardware">Hardware</TabsTrigger>
          <TabsTrigger value="software">Software</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
        </TabsList>

        <HardwareContent />
        <SoftwareContent />
        <ServicesContent />
      </Tabs>
    </div>
  );
}