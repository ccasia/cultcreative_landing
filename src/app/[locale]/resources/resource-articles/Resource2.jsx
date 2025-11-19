import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[30];
const relatedResources = [resources[29], resources[31], resources[32]];
const title = resource.title;
const date = "25 October 2023";

// Article content for reading time calculation
const articleContent = [
  "Influencer and User-Generated Content (UGC) marketing is growing rapidly in Malaysia. Brands begin to recognise the power that social media users have in boosting their brand awareness, customer engagement, and ultimately, sales.",
  "This new form of marketing has become an integral part of the marketing strategy for many businesses. By leveraging the fame and reputation of popular social media figures such as TikTokers, YouTubers, and Instagrammers, brands tap into new audiences and create a sense of authenticity in their marketing campaigns.",
  "As a regular social media creator and content creator, you could take advantage of this growing marketing trend to secure your next brand deal.",
  "How Can You, as a Content Creator, Start Unlocking Brand Deals?",
  "It might be overwhelming to start. But firstly, begin small and identify your niche. If it's an area that you're an expert in or have a passion/interest in, then that's where you can find your place. Creators can then carry on by creating high quality and engaging content that resonates with followers.",
  "Secondly, as a content creator, work on building your reputation and credibility by consistently delivering valuable content and engaging with your audience.",
  "That means posting consistently and speaking to your audience. Engaging with them, answering comments and replies, and learning more from them about their needs and desires.",
  "Thirdly, you can also consider joining influencer marketing platforms or agencies that connect you with brands. These platforms provide opportunities for content creators to gain access to a wider range of brand collaborations, showcase your talents, and increase earning potential and a side income.",
  "How Do You Get Started on Cult Creative's Creator Platform?",
  "Cult Creative is just one of the platforms that can help you score your next brand deal with little to no fuss. And by fuss, we mean those pesky admin work that consumes so much of our time.",
  "Here's how it works: Opt into the platform by filling up this form. We match you to brand deals that fit your personal brand. You receive a brief of the campaign, which includes details of the client, product, and campaign. Get those creative juices pumping and start creating. Get paid!",
  "It's truly that simple.",
  "Those dreary tasks of dealing with clients and chasing them for payments can be a thing of the past because Cult Creative will do all of those things for you. So, you can focus on being creative and making money.",
  "Oh, and did I mention it's free to use?",
  "As the creator economy continues to boom, now is the perfect time for aspiring creators to jump onto the content creation train. Start your creator journey with Cult Creative and access all the best brand partnerships across various interests from fashion and beauty to lifestyle and food.",
  "Ready to Unlock Your Brand Deals?",
  "Join Cult Creative to connect with brands, secure partnerships, and monetize your influence. Our platform makes brand collaboration simple and rewarding.",
];

const readTime = calculateReadingTimeFromContent(articleContent);

const keywords = [
  "UGC marketing",
  "Influencer marketing",
  "Brand deals",
  "Content creator tips",
];

export const metadata = {
  title: title,
  description:
    "Unlock the power of influencer brand deals. Discover how to secure partnerships, leverage your platform, and drive impactful brand collaborations.",
  keywords: keywords,
  openGraph: {
    title: title,
    description:
      "Unlock the power of influencer brand deals. Discover how to secure partnerships, leverage your platform, and drive impactful brand collaborations.",
    images: [resource.image],
  },
  alternates: {
    canonical: resource.path,
  },
};

const Resource2 = async ({ params }) => {
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
      >
        <rp.h2>{title}</rp.h2>
        <rp.p>
          Influencer and User-Generated Content (UGC) marketing is growing
          rapidly in Malaysia. Brands begin to recognise the power that social
          media users have in boosting their brand awareness, customer
          engagement, and ultimately, sales.
        </rp.p>
        <rp.p>
          This new form of marketing has become an integral part of the
          marketing strategy for many businesses. By leveraging the fame and
          reputation of popular social media figures such as TikTokers,
          YouTubers, and Instagrammers, brands tap into new audiences and create
          a sense of authenticity in their marketing campaigns.
        </rp.p>
        <rp.p>
          As a regular social media creator and content creator, you could take
          advantage of this growing marketing trend to secure your next brand
          deal.
        </rp.p>

        <rp.h2>
          How Can You, as a Content Creator, Start Unlocking Brand Deals?
        </rp.h2>
        <rp.p>
          It might be overwhelming to start. But firstly, begin small and
          identify your niche. If it’s an area that you’re an expert in or have
          a passion/interest in, then that’s where you can find your place.
          Creators can then carry on by creating high quality and engaging
          content that resonates with followers.
        </rp.p>
        <rp.p>
          Secondly, as a content creator, work on building your reputation and
          credibility by consistently delivering valuable content and engaging
          with your audience.
        </rp.p>
        <rp.p>
          That means posting consistently and speaking to your audience.
          Engaging with them, answering comments and replies, and learning more
          from them about their needs and desires.
        </rp.p>
        <rp.p>
          Thirdly, you can also consider joining influencer marketing platforms
          or agencies that connect you with brands. These platforms provide
          opportunities for content creators to gain access to a wider range of
          brand collaborations, showcase your talents, and increase earning
          potential and a side income.
        </rp.p>

        <rp.h2>
          How Do You Get Started on Cult Creative’s Creator Platform?
        </rp.h2>
        <rp.p>
          Cult Creative is just one of the platforms that can help you score
          your next brand deal with little to no fuss. And by fuss, we mean
          those pesky admin work that consumes so much of our time.
        </rp.p>
        <rp.p>Here’s how it works:</rp.p>
        <rp.ol>
          <rp.li>
            Opt into the platform by filling up{" "}
            <rp.a href="https://airtable.com/appMK1DimSupLgFeU/shrc6kh4QsG1N0geq">
              this form
            </rp.a>
            .
          </rp.li>
          <rp.li>
            We match you to brand deals that fit your personal brand.
          </rp.li>
          <rp.li>
            You receive a brief of the campaign, which includes details of the
            client, product, and campaign.
          </rp.li>
          <rp.li>Get those creative juices pumping and start creating.</rp.li>
          <rp.li>Get paid!</rp.li>
        </rp.ol>
        <rp.p>It’s truly that simple.</rp.p>
        <rp.p>
          Those dreary tasks of dealing with clients and chasing them for
          payments can be a thing of the past because Cult Creative will do all
          of those things for you. So, you can focus on being creative and
          making money.
        </rp.p>
        <rp.p>
          Oh, and did I mention it’s <em>free</em> to use?
        </rp.p>
        <rp.p>
          As the creator economy continues to boom, now is the perfect time for
          aspiring creators to jump onto the content creation train. Start your
          creator journey with Cult Creative and access all the best brand partnerships
          across various interests from fashion and beauty to lifestyle and food.
        </rp.p>

        <rp.h2>Ready to Unlock Your Brand Deals?</rp.h2>
        <rp.p>
          Join Cult Creative to connect with brands, secure partnerships, and monetize your influence. Our platform makes brand collaboration simple and rewarding.
        </rp.p>
        <rp.a href="https://t.me/cultcreativeasia" className="cta-button">
          Join Cult Creative on Telegram
        </rp.a>
      </rp.Page>
    </>
  );
};

export default Resource2;