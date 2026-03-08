import fs from "fs";
import path from "path";

export function getMarkdownContent(filename: string) {
  const fullPath = path.join(process.cwd(), "content", filename);
  return fs.readFileSync(fullPath, "utf8");
}

export interface WritingEntry {
  slug: string;
  title: string;
  lastUpdated: string;
}

export function getWritingEntries(): WritingEntry[] {
  const writingDir = path.join(process.cwd(), "content", "writing");
  if (!fs.existsSync(writingDir)) return [];
  const files = fs.readdirSync(writingDir).filter((f) => f.endsWith(".md"));

  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const fullPath = path.join(writingDir, file);
    const content = fs.readFileSync(fullPath, "utf8");
    const stat = fs.statSync(fullPath);

    // Extract title from first # heading
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : slug;

    const lastUpdated = stat.mtime.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return { slug, title, lastUpdated };
  });
}

export function getWritingContent(slug: string): string {
  return getMarkdownContent(`writing/${slug}.md`);
}

export function getWritingSlugs(): string[] {
  const writingDir = path.join(process.cwd(), "content", "writing");
  if (!fs.existsSync(writingDir)) return [];
  return fs
    .readdirSync(writingDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
