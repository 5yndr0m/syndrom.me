import { aboutData } from "@/lib/data";
import { Certificates } from "./certificates/Certificates";
import { Education } from "./education/Education";
import { Experience } from "./experience/Experience";
import { Skills } from "./skills/Skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        <div className="max-w-2xl">
          <p className="text-muted-foreground">
            I'm an undergraduate student passionate about web development,
            cybersecurity, and DevOps. With experience in both development and
            system administration, I bring a holistic approach to building
            secure and efficient applications. Currently seeking opportunities
            to apply my skills in real-world projects.
          </p>
        </div>
      </section>

      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="experience" className="mt-6">
          <Experience experiences={aboutData.experiences} />
        </TabsContent>

        <TabsContent value="education" className="mt-6">
          <Education education={aboutData.education} />
        </TabsContent>

        <TabsContent value="certificates" className="mt-6">
          <Certificates certificates={aboutData.certificates} />
        </TabsContent>

        <TabsContent value="skills" className="mt-6">
          <Skills techStack={aboutData.techStack} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
