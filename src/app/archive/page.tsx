import ProjectsSection from "@/components/project";
import Navbar from "@/components/navbar";
import { getMarkdownContent } from "@/lib/markdown";

export default function ArchivePage() {
  const archiveMarkdown = getMarkdownContent("archive.md");

  return (
    <>
      <Navbar />
      <ProjectsSection introMarkdown={archiveMarkdown} />
    </>
  );
}
