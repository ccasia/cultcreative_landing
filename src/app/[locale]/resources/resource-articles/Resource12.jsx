import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[20];
const relatedResources = [resources[19], resources[21], resources[22]];

const title = "The Creator Economy: What Is It and Why Should Malaysian Businesses Pay Attention to It?";
const date = "22 April 2024";

// Article content for reading time calculation
const articleContent = [
  "Why company accounts alone are no longer enough Hear us out: solely posting from a company account is not going to do your brand justice.",
  "As social media integrates into our daily lives and platforms become marketing mediums, every post is now an opportunity to collaborate with brands and make money.",
  "This shift has carved out its own market slice: the \"creator economy\".",
  "This phenomenon has grown significantly since the pandemic, creating a market opportunity termed the \"creator economy\".",
  "With younger internet users eager to participate, this market continues to expand.",
  "The creator economy in Asia Pacific alone is predicted to reach US$52.17 billion by 2030.",
  "What is the creator economy?",
  "In short, the creator economy is a digital ecosystem where individuals create, distribute, and monetise their content on social media.",
  "The mechanics of monetisation differs from platform to platform, of course, but the principles are the same: you post a video and you get paid.",
  "The most popular form of monetisation are brand deals and partnerships.",
  "It’s not hard to see why: creators get paid and a platform to boost their following, whilst businesses get to drive their engagements and sales by leveraging the creativity of these creators.",
  "Not to mention the pool of loyal followers they could market to!",
  "It’s a win-win solution.",
  "Hence why Malaysian businesses need to start paying attention to the value of creator marketing.",
  "As the internet becomes oversaturated with content, competing for the attention of social media users will only get tougher and tougher.",
  "So, surviving on a company account alone is not going to cut it anymore.",
  "Should businesses give up their company accounts then?",
  "Absolutely not!",
  "An official company account remains an important tool to prove legitimacy and communicate with consumers.",
  "Many online users follow company accounts for product updates and promotions.",
  "However, relying solely on company accounts is not enough to stand out in today's content landscape.",
  "What's more, younger consumers prefer taking recommendations from creators over brands.",
  "Instead of competing with creators, businesses should leverage these talents to promote their brand.",
  "Platforms like Cult Creative offer creator marketing solutions that fit any budget and campaign needs. <div> <a > Kickstart your creator marketing today </a> </div>",
];

const readTime = calculateReadingTimeFromContent(articleContent);

const keywords = [
  "creator economy",
  "influencer marketing",
  "brand partnerships",
  "content monetization",
  "creator marketing",
];

export const metadata = {
  title: title,
  description: "Discover the creator economy in Asia Pacific and why Malaysian businesses should leverage creator marketing to boost brand visibility.",
  keywords: keywords,
  openGraph: {
    images: [resource.image],
    title: title,
    description: "Discover the creator economy in Asia Pacific and why Malaysian businesses should leverage creator marketing to boost brand visibility.",
  },
  alternates: {
    canonical: resource.path,
  },
};

const Resource12 = async ({ params }) => {
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
        <rp.h2>Why company accounts alone are no longer enough</rp.h2>
        <rp.p>
          Hear us out: solely posting from a company account is not going to do your brand justice. As social media integrates into our daily lives and platforms become marketing mediums, every post is now an opportunity to collaborate with brands and make money. This shift has carved out its own market slice: the "creator economy".
        </rp.p>
        <rp.p>
          This phenomenon has grown significantly since the pandemic, creating a market opportunity termed the "creator economy". With younger internet users eager to participate, this market continues to expand. The creator economy in Asia Pacific alone is predicted to reach US$52.17 billion by 2030.
        </rp.p>
        <rp.h2>What is the creator economy?</rp.h2>
        <rp.p>
          In short, the creator economy is a digital ecosystem where individuals
          create, distribute, and monetise their content on social media. The
          mechanics of monetisation differs from platform to platform, of
          course, but the principles are the same: you post a video and you get
          paid.
        </rp.p>
        <rp.IgEmbed url="https://www.instagram.com/p/C8v9acmpxva/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        <rp.p>
          The most popular form of monetisation are brand deals and
          partnerships. It’s not hard to see why: creators get paid and a
          platform to boost their following, whilst{" "}
          <rp.a href="https://www.cultcreativeasia.com/brands">
            businesses get to drive their engagements and sales{" "}
          </rp.a>
          by leveraging the creativity of these creators. Not to mention the
          pool of loyal followers they could market to! It’s a win-win solution.
        </rp.p>
        <rp.p>
          Hence why Malaysian businesses need to start paying attention to the
          value of creator marketing. As the internet becomes oversaturated with
          content, competing for the attention of social media users will only
          get tougher and tougher. So, surviving on a company account alone is
          not going to cut it anymore.
        </rp.p>
        <rp.h2>Should businesses give up their company accounts then?</rp.h2>
        <rp.p>
          Absolutely not! An official company account remains an important tool to prove legitimacy and communicate with consumers. Many online users follow company accounts for product updates and promotions. However, relying solely on company accounts is not enough to stand out in today's content landscape.
        </rp.p>
        <rp.p>
          What's more, younger consumers prefer taking recommendations from creators over brands. Instead of competing with creators, businesses should leverage these talents to promote their brand. Platforms like Cult Creative offer creator marketing solutions that fit any budget and campaign needs.
        </rp.p>
        <div className="text-center mt-10">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-[#1340FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0f33c7]"
            href="https://app.cultcreativeasia.com/auth/jwt/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kickstart your creator marketing today
          </a>
        </div>
      </rp.Page>
    </>
  );
};

export default Resource12;