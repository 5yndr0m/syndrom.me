import { aboutData } from "@/lib/data"
import { Certificates } from "./Certificates"

export default function CertificatePage() {
  return <Certificates certificates={aboutData.certificates} />
}