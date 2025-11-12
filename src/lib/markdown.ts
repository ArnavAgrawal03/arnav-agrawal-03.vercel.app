import fs from "fs";
import path from "path";

export function getMarkdownContent(filename: string) {
  const fullPath = path.join(process.cwd(), "content", filename);
  return fs.readFileSync(fullPath, "utf8");
}
