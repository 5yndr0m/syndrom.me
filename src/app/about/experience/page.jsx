import { aboutData } from "@/lib/data"
import { Experience } from "./Experience"

export default function ExperiencePage() {
  return <Experience experiences={aboutData.experiences} />
}