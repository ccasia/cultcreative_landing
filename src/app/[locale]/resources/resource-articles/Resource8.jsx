import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[24];
const relatedResources = [resources[23], resources[25], resources[26]];

const title = resource.title;
const date = "25 January 2024";

// Article content for reading time calculation
const articleContent = [
  "Consumer behaviours are changing.",
  "More and more people are turning to content creators when deciding whether to make a purchase.",
  "According to Nielsen , 80% of social media users in Asia are more likely to buy a product if it is recommended by a content creator or influencer.",
  "It comes as no surprise that businesses are eager to leverage the relatability and reach of content creators to boost their marketing needs.",
  "However, while working with content creators has its advantages, it also presents unique challenges that businesses must navigate to ensure successful collaborations.",
  "Some of those challenges include communication hurdles, striving for quality content, and keeping up with administrative processes.",
  "Overcoming Communication Hurdles Effective communication is the cornerstone of successful collaboration, yet it can become a significant challenge when working with freelance content creators.",
  "For one, most creators have full-time jobs and do content creation on the side, which means they can’t always reply to messages as soon as they should.",
  "Having to juggle between work and content creation also means that creators often fall into the habit of missing out on submission deadlines.",
  "As a result, businesses must go the extra mile to make sure that creators are submitting and uploading their videos on time.",
  "Having to constantly check-in with the creators can be time-consuming, and having to do so whilst running a business is simply exhausting.",
  "Maintaining Quality Content While we appreciate content creators for their individual creativity and personal styles, it can be quite challenging having to align these differences with the brand’s vision and identity.",
  "The varying level of expertise that creators bring to the table is also an element that could greatly affect the quality of the content produced.",
  "As such, it is important that businesses identify the type of content they want for their campaigns.",
  "Preparing clear and thorough campaign briefs can help guide the content-making process and remove the possibility of receiving low quality videos.",
  "But even then, poor videos are simply inevitable.",
  "You are bound to receive little nuggets of them here and there.",
  "Keeping Up with Administrative Processes It’s true, completing administrative tasks such as filing invoices, drafting agreements, and scheduling content are not as exciting as its creative counterparts.",
  "Not to mention that it can be very time-consuming too.",
  "It is no wonder then that many businesses are turned away from working with content creators.",
  "Shouldering this supplementary work buys into the precious time that could be spent on other pressing aspects of the business.",
  "If only there were a way to overcome all of this … Meet Cult Creative!",
  "At Cult Creative, our passionate and dedicated Client Success Managers are experienced social media whizzes who will help businesses work efficiently with content creators.",
  "Here are some of the magical stuff we’ve seen them do: Bridge businesses to the right creators for their campaigns.",
  "Help businesses prepare campaign briefs, so that creators understand what is expected of them for the gig.",
  "Ensure every piece of content that’s submitted is high in quality.",
  "Maintain constant communication with the creators to ensure that content is submitted and published on time.",
  "Draft contracts, schedule content, and making sure that creators get paid for their work.",
  "Ready to Simplify Creator Collaboration?",
  "Don't let administrative hurdles and communication challenges hold you back.",
  "Cult Creative handles all the complexities so you can focus on your core business.",
  "Join Cult Creative on Telegram",
];

const readTime = calculateReadingTimeFromContent(articleContent);


const keywords = [
  "Content creator collaboration",
  "Influencer marketing challenges",
  "Communication with content creators",
  "Quality content creation",
  "Administrative tasks in influencer campaigns",
];

export const metadata = {
  title: title,
  description:
    "Discover common challenges businesses face when working with content creators and learn practical solutions to optimize your collaborations effectively.",
  keywords: keywords,
  openGraph: {
    title: title,
    description:
      "Discover common challenges businesses face when working with content creators and learn practical solutions to optimize your collaborations effectively.",
    images: [resource.image],
  },
  alternates: {
    canonical: resource.path,
  },
};

const Resource8 = async ({ params }) => {
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
        <rp.p>Consumer behaviours are changing.</rp.p>
        <rp.p>
          More and more people are turning to content creators when deciding
          whether to make a purchase. According to{" "}
          <rp.a href="https://www.nielsen.com/news-center/2022/80-of-social-media-users-in-asia-who-follow-influencers-are-likely-to-purchase-products-recommended-by-the-influencers/#:~:text=different%20social%20strategy-,80%25%20of%20social%20media%20users%20in%20Asia%20who%20follow%20influencers,are%20recommended%20by%20those%20influencers">
            Nielsen
          </rp.a>
          , 80% of social media users in Asia are more likely to buy a product
          if it is recommended by a content creator or influencer.
        </rp.p>
        <rp.p>
          It comes as no surprise that businesses are eager to leverage the
          relatability and reach of content creators to boost their marketing
          needs. However, while working with content creators has its
          advantages, it also presents unique challenges that businesses must
          navigate to ensure successful collaborations.
        </rp.p>
        <rp.p>
          Some of those challenges include communication hurdles, striving for
          quality content, and keeping up with administrative processes.
        </rp.p>
        <rp.IgEmbed url="https://www.instagram.com/reel/C7BPiwRpTye/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />

        <rp.h2>Overcoming Communication Hurdles</rp.h2>
        <rp.p>
          Effective communication is the cornerstone of successful
          collaboration, yet it can become a significant challenge when working
          with freelance content creators.
        </rp.p>
        <rp.p>
          For one, most creators have full-time jobs and do content creation on
          the side, which means they can’t always reply to messages as soon as
          they should. Having to juggle between work and content creation also
          means that creators often fall into the habit of missing out on
          submission deadlines.
        </rp.p>
        <rp.p>
          As a result, businesses must go the extra mile to make sure that
          creators are submitting and uploading their videos on time. Having to
          constantly check-in with the creators can be time-consuming, and
          having to do so whilst running a business is simply exhausting.
        </rp.p>

        <rp.h2>Maintaining Quality Content</rp.h2>
        <rp.p>
          While we appreciate content creators for their individual creativity
          and personal styles, it can be quite challenging having to align these
          differences with the brand’s vision and identity. The varying level of
          expertise that creators bring to the table is also an element that
          could greatly affect the quality of the content produced.
        </rp.p>
        <rp.p>
          As such, it is important that businesses identify the type of content
          they want for their campaigns. Preparing clear and thorough campaign
          briefs can help guide the content-making process and remove the
          possibility of receiving low quality videos.
        </rp.p>
        <rp.p>
          But even then, poor videos are simply inevitable. You are bound to
          receive little nuggets of them here and there.
        </rp.p>

        <rp.h2>Keeping Up with Administrative Processes</rp.h2>
        <rp.p>
          It’s true, completing administrative tasks such as filing invoices,
          drafting agreements, and scheduling content are not as exciting as its
          creative counterparts. Not to mention that it can be very
          time-consuming too.
        </rp.p>
        <rp.p>
          It is no wonder then that many businesses are turned away from working
          with content creators. Shouldering this supplementary work buys into
          the precious time that could be spent on other pressing aspects of the
          business.
        </rp.p>
        <rp.p>If only there were a way to overcome all of this …</rp.p>

        <rp.h2>Meet Cult Creative!</rp.h2>
        <rp.p>
          At <rp.a href="/">Cult Creative</rp.a>, our passionate and dedicated
          Client Success Managers are experienced social media whizzes who will
          help businesses work efficiently with content creators.
        </rp.p>
        <rp.p>Here are some of the magical stuff we’ve seen them do:</rp.p>
        <rp.ul>
          <rp.li>
            Bridge businesses to the right creators for their campaigns.
          </rp.li>
          <rp.li>
            Help businesses prepare campaign briefs, so that creators understand
            what is expected of them for the gig.
          </rp.li>
          <rp.li>
            Ensure every piece of content that’s submitted is high in quality.
          </rp.li>
          <rp.li>
            Maintain constant communication with the creators to ensure that
            content is submitted and published on time.
          </rp.li>
          <rp.li>
            Draft contracts, schedule content, and making sure that creators get
            paid for their work.
          </rp.li>
        </rp.ul>
        <rp.h2>Ready to Simplify Creator Collaboration?</rp.h2>
        <rp.p>
          Don't let administrative hurdles and communication challenges hold you back. Cult Creative handles all the complexities so you can focus on your core business.
        </rp.p>
        <rp.a href="https://t.me/cultcreativeasia" className="cta-button">
          Join Cult Creative on Telegram
        </rp.a>
      </rp.Page>
    </>
  );
};

export default Resource8;