import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[18];
const relatedResources = [resources[17], resources[19], resources[20]];

const title = "WTF Is Marc Jacobs Doing on TikTok?";
const date = "10 July 2024";

// Article content for reading time calculation
const articleContent = [
  "Why Marc Jacobs is winning on TikTok Marc Jacobs' marketing team is winning.",
  "Known for luxury goods, the fashion label recently pivoted its strategy to capture Gen Z buyers.",
  "With younger generations gaining purchasing power each year, the brand needed to engage with Zoomers to remain relevant.",
  "How?",
  "With the help of creators, of course.",
  "Scrolling through the brand's TikTok account, you'll notice something unusual: no supermodels, celebrities, or editorial photoshoots.",
  "Instead, the platform's most viral personalities create their signature content, except now they're wearing Marc Jacobs pieces.",
  "So why is this working?",
  "Let's break down the genius of Marc Jacobs' creator marketing strategy and what you can learn from the brand.",
  "Creator marketing delivers results Despite increased adoption, many brands remain sceptical of creator marketing.",
  "Yet it has been proven to drive conversions and deliver strong ROI.",
  "Look at Marc Jacobs' creator-led videos.",
  "They've consistently gained hundreds of thousands of views, with Nara Smith's \"The Tote Bag From Scratch\" leading at 15.9 million views and 2.4 million likes to date.",
  "If Marc Jacobs is doing it and it's working, you should consider giving it a shot too.",
  "Know your platform Marc Jacobs' viral success stems partly from their platform choice.",
  "Understanding that TikTok is Gen Z's preferred platform, the brand quickly established a presence to market to their target consumers.",
  "Their content thrived because it aligned with the platform's audiences and algorithm.",
  "Unlike Instagram, unpolished and casual content performs better on TikTok, so the brand leaned into this with their creator partnerships.",
  "Trust your creators No one knows audiences and algorithms better than full-time content creators.",
  "Marc Jacobs understood this and gave their creators the space to be creative, no matter how chaotic or absurd their ideas.",
  "By doing so, they produced authentic content true to each creator's personal brand, which appeals to Gen Z users.",
  "To outsiders, this approach may seem bizarre.",
  "But to Gen Z, this is the content and humour they consume: relatable, genuine, unpolished, and unhinged. <div> <a > Connect with creators on Cult Creative </a> </div>",
];

const readTime = calculateReadingTimeFromContent(articleContent);

const keywords = [
  "marc jacobs",
  "gen z marketing",
  "tiktok strategy",
  "creator partnerships",
  "luxury branding",
];

export const metadata = {
  title: title,
  description: "Discover how Marc Jacobs cracked the Gen Z code with TikTok creator partnerships and authenticity-first marketing.",
  keywords: keywords,
  openGraph: {
    images: [resource.image],
    title: title,
    description: "Discover how Marc Jacobs cracked the Gen Z code with TikTok creator partnerships and authenticity-first marketing.",
  },
  alternates: {
    canonical: resource.path,
  },
};

const Resource15 = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <rp.Page
        title={title}
        date={date}
        readTime={readTime}
        keywords={keywords}
        relatedResources={relatedResources}
        image={resource.image}
      >
        <rp.h2>Why Marc Jacobs is winning on TikTok</rp.h2>
        <rp.p>
          Marc Jacobs' marketing team is winning. Known for luxury goods, the fashion label recently pivoted its strategy to capture Gen Z buyers. With younger generations gaining purchasing power each year, the brand needed to engage with Zoomers to remain relevant. How? With the help of creators, of course.
        </rp.p>
        <rp.p>
          Scrolling through the brand's TikTok account, you'll notice something unusual: no supermodels, celebrities, or editorial photoshoots. Instead, the platform's most viral personalities create their signature content, except now they're wearing Marc Jacobs pieces.
        </rp.p>
        <rp.p>
          So why is this working? Let's break down the genius of Marc Jacobs' creator marketing strategy and what you can learn from the brand.
        </rp.p>
        <rp.h2>Creator marketing delivers results</rp.h2>
        <rp.p>
          Despite increased adoption, many brands remain sceptical of creator marketing. Yet it has been proven to drive conversions and deliver strong ROI. Look at Marc Jacobs' creator-led videos. They've consistently gained hundreds of thousands of views, with Nara Smith's "The Tote Bag From Scratch" leading at 15.9 million views and 2.4 million likes to date.
        </rp.p>
        <rp.p>
          If Marc Jacobs is doing it and it's working, you should consider giving it a shot too.
        </rp.p>
        <rp.h2>Know your platform</rp.h2>
        <rp.p>
          Marc Jacobs' viral success stems partly from their platform choice. Understanding that TikTok is Gen Z's preferred platform, the brand quickly established a presence to market to their target consumers. Their content thrived because it aligned with the platform's audiences and algorithm. Unlike Instagram, unpolished and casual content performs better on TikTok, so the brand leaned into this with their creator partnerships.
        </rp.p>
        <rp.h2>Trust your creators</rp.h2>
        <rp.p>
          No one knows audiences and algorithms better than full-time content creators. Marc Jacobs understood this and gave their creators the space to be creative, no matter how chaotic or absurd their ideas. By doing so, they produced authentic content true to each creator's personal brand, which appeals to Gen Z users.
        </rp.p>
        <rp.p>
          To outsiders, this approach may seem bizarre. But to Gen Z, this is the content and humour they consume: relatable, genuine, unpolished, and unhinged.
        </rp.p>
        <div className="text-center mt-10">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-[#1340FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0f33c7]"
            href="https://app.cultcreativeasia.com/auth/jwt/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with creators on Cult Creative
          </a>
        </div>
      </rp.Page>
    </>
  );
};

export default Resource15;