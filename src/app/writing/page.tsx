import Navbar from "@/components/navbar";
import { getWritingEntries } from "@/lib/markdown";
import { Inria_Serif, EB_Garamond } from "next/font/google";
import Link from "next/link";

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
});

export default function WritingPage() {
  const entries = getWritingEntries();

  return (
    <>
      <Navbar />
      <section
        className="pt-32 pb-20 px-4 sm:px-6 md:px-8 min-h-screen"
        style={{ backgroundColor: "#CCF1F5" }}
      >
        <div className="max-w-3xl mx-auto">
          <h1
            className={`${inriaSerif.className} text-3xl sm:text-4xl font-bold text-gray-900 mb-3`}
          >
            Writing
          </h1>
          <p
            className={`${ebGaramond.className} text-base sm:text-lg text-gray-600 mb-12`}
          >
            Updated as my views evolve.
          </p>

          <div className="flex flex-col gap-6">
            {entries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/writing/${entry.slug}`}
                className="block border-2 border-black rounded-2xl bg-[#CCF1F5] px-6 py-5 shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
              >
                <h2
                  className={`${inriaSerif.className} text-xl sm:text-2xl font-medium text-gray-900`}
                >
                  {entry.title}
                </h2>
                <p
                  className={`${ebGaramond.className} text-sm text-gray-500 mt-1`}
                >
                  Last updated {entry.lastUpdated}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
