import Navbar from "@/components/navbar";
import { getWritingContent, getWritingSlugs } from "@/lib/markdown";
import { Inria_Serif, EB_Garamond } from "next/font/google";
import ReactMarkdown from "react-markdown";

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return getWritingSlugs().map((slug) => ({ slug }));
}

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getWritingContent(slug);

  return (
    <>
      <Navbar />
      <article
        className="pt-32 pb-20 px-4 sm:px-6 md:px-8 min-h-screen"
        style={{ backgroundColor: "#CCF1F5" }}
      >
        <div className="max-w-3xl mx-auto">
          <ReactMarkdown
            className={`space-y-6 text-gray-800 ${ebGaramond.className}`}
            components={{
              h1: ({ ...props }) => (
                <h1
                  className={`${inriaSerif.className} text-3xl sm:text-4xl font-bold text-gray-900 mb-8`}
                  {...props}
                />
              ),
              h2: ({ ...props }) => (
                <h2
                  className={`${inriaSerif.className} text-2xl sm:text-3xl font-bold text-gray-900`}
                  {...props}
                />
              ),
              h3: ({ ...props }) => (
                <h3
                  className={`${inriaSerif.className} text-xl sm:text-2xl font-medium text-gray-900`}
                  {...props}
                />
              ),
              p: ({ ...props }) => (
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  {...props}
                />
              ),
              a: ({ ...props }) => (
                <a className="underline hover:text-blue-600" {...props} />
              ),
              ul: ({ ...props }) => (
                <ul className="list-disc pl-6 space-y-2" {...props} />
              ),
              ol: ({ ...props }) => (
                <ol className="list-decimal pl-6 space-y-2" {...props} />
              ),
              li: ({ ...props }) => (
                <li
                  className="text-base sm:text-lg leading-relaxed"
                  {...props}
                />
              ),
              blockquote: ({ ...props }) => (
                <blockquote
                  className="border-l-4 border-black pl-4 italic text-gray-600"
                  {...props}
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </>
  );
}
