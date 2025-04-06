import { aboutData } from "@/lib/data"
import { Education } from "./Education"

export default function EducationPage() {
  return <Education education={aboutData.education} />
}