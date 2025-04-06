import { SocialLinks } from "@/components/common/social-links";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
      <Avatar className="w-32 h-32 md:h-40 mb-6">
        <AvatarImage src="/me.jpg" alt="Avatar" height="160" width="160" />
        <AvatarFallback>SD</AvatarFallback>
      </Avatar>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        Senal Dilanjana
      </h1>

      <p className="text-xl text-muted-foreground max-w-md mb-8">
        Developer and Security enthusiest passionate about building secure
        efficient applications
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/about">
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link href="/projects">View my work</Link>
        </Button>
      </div>

      <SocialLinks />
    </div>
  );
}
