import { aboutData } from "@/lib/data";
import { Skills } from "./Skills";

export default function SkillPage() {
  return <Skills techStack={aboutData.techStack} />;
}
