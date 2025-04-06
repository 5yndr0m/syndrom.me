"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Laptop,
  Monitor,
  Smartphone,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Hire", href: "/hire" },
    { name: "Uses", href: "/uses" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="container flex h-16 items-center justify-between md:pl-7 pl-3 pr-3">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-black text-4xl font-sans">
            Syndrom.
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 pr-30">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[95vw] max-w-[350px] gap-3 p-4 md:w-[400px] md:grid-cols-2">
                    <li className="row-span-2">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/about"
                        >
                          <GraduationCap className="h-6 w-6 text-primary" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            About Me
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Learn about my background, experience, and skills as
                            a developer.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/about/experience"
                      title="Experience"
                      icon={<Briefcase className="h-4 w-4 mr-2" />}
                    >
                      My professional work history
                    </ListItem>
                    <ListItem
                      href="/about/education"
                      title="Education"
                      icon={<GraduationCap className="h-4 w-4 mr-2" />}
                    >
                      Academic background and qualifications
                    </ListItem>
                    <ListItem
                      href="/about/certificates"
                      title="Certificates"
                      icon={<Award className="h-4 w-4 mr-2" />}
                    >
                      Professional certifications and achievements
                    </ListItem>
                    <ListItem
                      href="/about/skills"
                      title="Skills"
                      icon={<Code className="h-4 w-4 mr-2" />}
                    >
                      Technical skills and competencies
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Uses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/uses"
                        >
                          <Laptop className="h-6 w-6 text-primary" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            My Setup
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Hardware, software, and services I use for
                            development and productivity.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/uses"
                      title="Hardware"
                      icon={<Monitor className="h-4 w-4 mr-2" />}
                    >
                      Computers, displays, and accessories
                    </ListItem>
                    <ListItem
                      href="/uses"
                      title="Software"
                      icon={<Code className="h-4 w-4 mr-2" />}
                    >
                      Development tools and productivity apps
                    </ListItem>
                    <ListItem
                      href="/uses"
                      title="Services"
                      icon={<Smartphone className="h-4 w-4 mr-2" />}
                    >
                      Cloud platforms and online services
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/hire" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Hire
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-6 pl-2">
                <Link href="/" className="font-bold text-xl">
                  Syndrom.
                </Link>

                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center py-2 px-4 rounded-md transition-colors",
                        pathname === item.href
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2 px-4">
                      About Sections
                    </h3>
                    <div className="flex flex-col gap-1 pl-4">
                      <Link
                        href="/about"
                        className="text-sm text-muted-foreground py-1 px-4 hover:text-foreground"
                      >
                        Experience
                      </Link>
                      <Link
                        href="/about"
                        className="text-sm text-muted-foreground py-1 px-4 hover:text-foreground"
                      >
                        Education
                      </Link>
                      <Link
                        href="/about"
                        className="text-sm text-muted-foreground py-1 px-4 hover:text-foreground"
                      >
                        Certificates
                      </Link>
                      <Link
                        href="/about"
                        className="text-sm text-muted-foreground py-1 px-4 hover:text-foreground"
                      >
                        Skills
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2 px-4">
                      Uses Categories
                    </h3>
                    <div className="flex flex-col gap-1 pl-4">
                      <Link
                        href="/uses"
                        className="text-sm text-muted-foreground py-1 px-4 hover:text-foreground"
                      >
                        Hardware
                      </Link>
                      <Link
                        href="/uses"
                        className="text-sm text-muted-foreground py-1 px-4 hover:text-foreground"
                      >
                        Software
                      </Link>
                      <Link
                        href="/uses"
                        className="text-sm text-muted-foreground py-1 px-4 hover:text-foreground"
                      >
                        Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none flex items-center">
              {icon}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
