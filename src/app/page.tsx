import HeroSection from "@/components/hero";
import { getMarkdownContent } from "@/lib/markdown";

export default function Home() {
  const heroMarkdown = getMarkdownContent("home.md");

  return (
    <>
      <HeroSection introMarkdown={heroMarkdown} />
      {/* Archive moved to /archive */}
      {/* Contact section removed */}
    </>
  )
}
