import { SocialLinks } from "@/components/common/social-links";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-8rem)] md:pl-30">
      <div className="flex flex-col justify-center h-full">
        <div className="flex flex-col gap-6">
          <Avatar className="w-40 h-40 md:w-48 md:h-48">
            <AvatarImage src="/me.jpg" alt="Avatar" height="192" width="192" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
          
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Building secure & efficient solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Developer and security enthusiast with a passion for creating robust applications 
              that prioritize both performance and protection.
            </p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Senal Dilanjana
            </h1>
            
            <Button 
              className="relative group  hover:bg-green-700 w-fit"
              size="lg"
            >
              {/* Blinking dot */}
              <div className="absolute left-3 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              
              {/* Flare effect */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent animate-flare" />
              </div>
              
              <span className="ml-4">Open for Hire</span>
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}