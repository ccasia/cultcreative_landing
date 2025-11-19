import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[19];
const relatedResources = [resources[18], resources[20], resources[21]];

const title = "Here's How You TikTok-ify Your Brand in 2024";
const date = "15 May 2024";

// Article content for reading time calculation
const articleContent = [
  "When was the last time you scrolled on TikTok?",
  "Or heard your Gen Z intern reference something from the platform?",
  "If we know our social culture well enough, we&apos;d say pretty recently, right?",
  "There is no denying the ubiquity of TikTok.",
  "Following the pandemic, the social platform has quickly evolved itself into a cultural asset, becoming part of our day-to-day lives and shaping the way we interact with media.",
  "Especially how we buy and sell online.",
  "With these mini billboards glued to our hands, now is the perfect time to explore just what the platform can do for your brand!",
  "Be brave to be great Contrary to popular belief, you don't have to be Gen Z to do well on the app.",
  "You just have to be brave.",
  "While it may seem intimidating at first, find the courage to experiment with your content by piquing global curiosities, flipping traditional story arcs, and deepening the trust between your brand and your audience.",
  "Being vulnerable and taking risks have never been cooler.",
  "People want answers, not ads And on TikTok, users are spoiled with a platitude of answers from a variety of perspectives, giving them the opportunity to discover something new at every scroll.",
  "As a result, users are increasingly treating TikTok like you would Google: a search engine.",
  "Whether you’re in F&B, fashion, beauty, or tech, you can leverage this exciting development by creating content that specifically addresses your communities’ interests and curiosities.",
  "Check out the video this creator did for Suisen. <b>What you should do:</b> 🔎 Brush up on your SEOs. 🔎 Feature fresh faces in your social media marketing campaigns. 🔎 Spotlight the unique nuances and USPs of your business in your content.",
  "Master storytelling with unconventional formats Forget about what they teach you in school.",
  "On TikTok, traditional rules of storytelling are constantly being bent as users find interest in unorthodox story arcs and disruptive narrative formats.",
  "Users watch videos 1.4x longer if the narrative structure is intriguing and unhinged.",
  "Get creative with your storytelling and invite your audience to build upon your story for a more engaging experience.",
  "Check out the video this creator did for Nonico. <b>What you should do:</b> ✍️ Explore experimental story arcs. ✍️ Start your videos with a fresh creative hook. ✍️ Encourage your audience to participate in the storytelling session by incorporating their suggestions and comments.",
  "Be human Often described as carefree and chaotic, TikTok gives brands the opportunity to connect with their audiences on a more personal level. 41% of viewers trust a brand more after seeing it on TikTok.",
  "The secret is authenticity and transparency.",
  "Keep updated on the latest trends and cultural moments.",
  "Learn the platform's lingo and use it authentically.",
  "Leverage creators to build relatability and influence within communities. <div> <a > TikTok-ify your brand with Cult Creative </a> </div>",
];

const readTime = calculateReadingTimeFromContent(articleContent);

const keywords = [
  "tiktok strategy",
  "brand marketing",
  "social media trends",
  "gen z marketing",
  "content creation",
];

export const metadata = {
  title: title,
  description: "Learn how to build your brand on TikTok with insights from TikTok's 2024 trend report and proven strategies.",
  keywords: keywords,
  openGraph: {
    images: [resource.image],
    title: title,
    description: "Learn how to build your brand on TikTok with insights from TikTok's 2024 trend report and proven strategies.",
  },
  alternates: {
    canonical: resource.path,
  },
};

const Resource14 = async ({ params }) => {
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
        <rp.p>
          When was the last time you scrolled on TikTok? Or heard your Gen Z
          intern reference something from the platform?
        </rp.p>
        <rp.p>
          If we know our social culture well enough, we&apos;d say pretty
          recently, right?
        </rp.p>
        <rp.p>
          There is no denying the ubiquity of TikTok. Following the pandemic,
          the social platform has quickly evolved itself into a cultural asset,
          becoming part of our day-to-day lives and shaping the way we interact
          with media.
        </rp.p>
        <rp.p>
          Especially how we buy and sell online. With these mini billboards
          glued to our hands, now is the perfect time to explore just what the
          platform can do for your brand!
        </rp.p>
        <rp.h2>Be brave to be great</rp.h2>
        <rp.p>
          Contrary to popular belief, you don't have to be Gen Z to do well on the app. You just have to be brave. While it may seem intimidating at first, find the courage to experiment with your content by piquing global curiosities, flipping traditional story arcs, and deepening the trust between your brand and your audience. Being vulnerable and taking risks have never been cooler.
        </rp.p>
        <rp.h2>People want answers, not ads</rp.h2>
        <rp.p>
          And on TikTok, users are spoiled with a platitude of answers from a
          variety of perspectives, giving them the opportunity to discover
          something new at every scroll.
        </rp.p>
        <rp.p>
          As a result, users are increasingly treating TikTok like you would
          Google: a search engine. Whether you’re in F&B, fashion, beauty, or
          tech, you can leverage this exciting development by creating content
          that specifically addresses your communities’ interests and
          curiosities.
        </rp.p>
        <rp.p>
          Check out the video this creator did for{" "}
          <rp.a href="https://www.instagram.com/p/C7isAZkJtZN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
            Suisen.
          </rp.a>
        </rp.p>
        <rp.p>
          <b>What you should do:</b> 🔎 Brush up on your SEOs. 🔎 Feature fresh
          faces in your social media marketing campaigns. 🔎 Spotlight the
          unique nuances and USPs of your business in your content.
        </rp.p>
        <rp.h2>Master storytelling with unconventional formats</rp.h2>
        <rp.p>
          Forget about what they teach you in school. On TikTok, traditional rules of storytelling are constantly being bent as users find interest in unorthodox story arcs and disruptive narrative formats.
        </rp.p>
        <rp.p>
          Users watch videos 1.4x longer if the narrative structure is intriguing and unhinged. Get creative with your storytelling and invite your audience to build upon your story for a more engaging experience.
        </rp.p>
        <rp.p>
          Check out the video this creator did for{" "}
          <rp.a href="https://www.instagram.com/p/C18mN36ptlO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
            Nonico.
          </rp.a>
        </rp.p>
        <rp.p>
          <b>What you should do:</b> ✍️ Explore experimental story arcs. ✍️
          Start your videos with a fresh creative hook. ✍️ Encourage your
          audience to participate in the storytelling session by incorporating
          their suggestions and comments.
        </rp.p>
        <rp.h2>Be human</rp.h2>
        <rp.p>
          Often described as carefree and chaotic, TikTok gives brands the opportunity to connect with their audiences on a more personal level. 41% of viewers trust a brand more after seeing it on TikTok. The secret is authenticity and transparency.
        </rp.p>
        <rp.ul>
          <rp.li>Keep updated on the latest trends and cultural moments.</rp.li>
          <rp.li>Learn the platform's lingo and use it authentically.</rp.li>
          <rp.li>Leverage creators to build relatability and influence within communities.</rp.li>
        </rp.ul>
        <div className="text-center mt-10">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-[#1340FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0f33c7]"
            href="https://app.cultcreativeasia.com/auth/jwt/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok-ify your brand with Cult Creative
          </a>
        </div>
      </rp.Page>
    </>
  );
};

export default Resource14;