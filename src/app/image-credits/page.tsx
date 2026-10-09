import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { imageCredits } from "@/constants/imageCredits";
import { getBaseUrl, siteConfig } from "@/constants/site";

const BASE_URL = getBaseUrl();
const PAGE_URL = `${BASE_URL}/image-credits`;

export const metadata: Metadata = {
  title: `Image Credits | ${siteConfig.name}`,
  description: `Attribution for the openly licensed photographs used on the ${siteConfig.name} website.`,
  alternates: { canonical: PAGE_URL },
  robots: { index: false, follow: true },
};

export default function ImageCreditsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 min-h-screen bg-[#f9f9ff]">
        <section className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-16 text-start">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">Image Credits</h1>
          <p className="text-base md:text-lg text-secondary max-w-3xl leading-relaxed mb-10">
            Photographs on this website are used under open licenses. We thank the photographers and
            institutions listed below. Licenses link to their official terms.
          </p>
          <div className="overflow-x-auto bg-white rounded-2xl border border-outline-variant shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-surface-container-high text-primary">
                <tr>
                  <th className="text-start px-4 py-3 font-bold">Image</th>
                  <th className="text-start px-4 py-3 font-bold">Title</th>
                  <th className="text-start px-4 py-3 font-bold">Author</th>
                  <th className="text-start px-4 py-3 font-bold">Source</th>
                  <th className="text-start px-4 py-3 font-bold">License</th>
                </tr>
              </thead>
              <tbody>
                {imageCredits.map((c) => (
                  <tr key={c.file} className="border-t border-outline-variant/40 align-top">
                    <td className="px-4 py-3 font-mono text-xs text-secondary whitespace-nowrap">{c.file}</td>
                    <td className="px-4 py-3 text-on-surface">{c.title}</td>
                    <td className="px-4 py-3 text-on-surface">{c.author}</td>
                    <td className="px-4 py-3">
                      <a
                        href={c.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:underline"
                      >
                        {c.source}
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={c.licenseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:underline whitespace-nowrap"
                      >
                        {c.license}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
