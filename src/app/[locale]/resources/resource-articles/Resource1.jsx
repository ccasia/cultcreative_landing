import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[31];
const relatedResources = [resources[30], resources[32], resources[0]];

const title = resource.title;
const date = "18 October 2023";

// Article content for reading time calculation
const articleContent = [
  "Content creators have become a pivotal part of social media marketing and entertainment.",
  "With the creator economy booming, they now have a higher chance at earning money and popularity through brand deals and partnership, bringing both the creators and businesses more visibility, credibility, and financial success.",
  "But navigating the world of content creation isn’t always easy and securing brand deals is even harder, so here’s a guide on how you can land your next brand deal.",
  "Taking on Brand Deals There’s nothing sweeter than earning your first brand deal.",
  "You’ll get to monetise your content (yay, more money!), collaborate with your dream brands, and even reach larger audiences.",
  "By following these tips, you can make the most out of your future brand deals. <b>Authenticity is key.</b> Your audience trusts you for your authenticity, so it’s important to collaborate with brands that align with your values and that resonate with your audience. <b>Transparency in disclosure.</b> No one likes a liar and no one likes to get sued either.",
  "Always be transparent about your content by adhering to relevant advertising guidelines and clearly disclosing when a content is sponsored. <b>Quality over quantity.</b> Instead of pursuing numerous brand deals, prioritise the ones that will allow you to produce engaging and authentic content that adds value to both the brand and your audience. <b>Negotiation and contracts.</b> Familiarise yourself with negotiation tactics and remember to always navigate contracts with caution.",
  "Make sure the terms of the contract aligns with your brand and audience, and don’t hesitate to seek legal guidance when necessary. <b>Consistent brand alignment.</b> Maintain a consistent brand image and messaging across all your brand deals.",
  "This ensures cohesive and authentic representation of your brand and values.",
  "Stick to this guide when approaching brand deals, so you can establish yourself as a credible and sought-after content creator whilst also maintaining the trust of your audience.",
  "How Do You Get Brand Deals on Cult Creative?",
  "Scoring your first (or second or third) brand deal just got easier thanks to Cult Creative’s creator platform .",
  "Whether you’re into fashion and beauty, tech and finance, or maybe you’re an explorer who’s ready to seize any opportunity that comes your way, we’ll connect you to amazing brands across Southeast Asia when you become a CC creator.",
  "Did I mention it’s free to use?",
  "Yup, it is!",
  "Simply fill out this form and you’re on your way to securing your next brand deal. </p> </Link> </div> </div> ))} </div> </div> */} Ready to Secure Your Next Brand Deal?",
  "Join Cult Creative on Telegram",
];

const readTime = calculateReadingTimeFromContent(articleContent);

const keywords = [
  "Creator economy in Malaysia",
  "Brand deals for creators",
  "Content creator tips",
  "Authentic brand collaborations",
  "Negotiating brand contracts",
];

export const metadata = {
  title: title,
  description:
    "Your starter's guide to securing brand deals as a content creator in Malaysia. Learn authentic strategies, negotiation tips, and how to build a sustainable creator career.",
  keywords: keywords,
  openGraph: {
    title: title,
    description:
      "Your starter's guide to securing brand deals as a content creator in Malaysia. Learn authentic strategies, negotiation tips, and how to build a sustainable creator career.",
    images: [resource.image],
  },
  alternates: {
    canonical: resource.path,
  },
};

const Resource1 = async ({ params }) => {
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
          Content creators have become a pivotal part of social media marketing
          and entertainment. With the creator economy booming, they now have a
          higher chance at earning money and popularity through brand deals and
          partnership, bringing both the creators and businesses more
          visibility, credibility, and financial success.
        </rp.p>
        <rp.p>
          But navigating the world of content creation isn’t always easy and
          securing brand deals is even harder, so here’s a guide on how you can
          land your next brand deal.
        </rp.p>

        <rp.h2>Taking on Brand Deals</rp.h2>
        <rp.p>
          There’s nothing sweeter than earning your first brand deal. You’ll get
          to monetise your content (yay, more money!), collaborate with your
          dream brands, and even reach larger audiences. By following these
          tips, you can make the most out of your future brand deals.
        </rp.p>
        <rp.ol>
          <rp.li>
            <b>Authenticity is key.</b> Your audience trusts you for your
            authenticity, so it’s important to collaborate with brands that
            align with your values and that resonate with your audience.
          </rp.li>
          <rp.li>
            <b>Transparency in disclosure.</b> No one likes a liar and no one
            likes to get sued either. Always be transparent about your content
            by adhering to relevant advertising guidelines and clearly
            disclosing when a content is sponsored.
          </rp.li>
          <rp.li>
            <b>Quality over quantity.</b> Instead of pursuing numerous brand
            deals, prioritise the ones that will allow you to produce engaging
            and authentic content that adds value to both the brand and your
            audience.
          </rp.li>
          <rp.li>
            <b>Negotiation and contracts.</b> Familiarise yourself with
            negotiation tactics and remember to always navigate contracts with
            caution. Make sure the terms of the contract aligns with your brand
            and audience, and don’t hesitate to seek legal guidance when
            necessary.
          </rp.li>
          <rp.li>
            <b>Consistent brand alignment.</b> Maintain a consistent brand image
            and messaging across all your brand deals. This ensures cohesive and
            authentic representation of your brand and values.
          </rp.li>
        </rp.ol>
        <rp.p>
          Stick to this guide when approaching brand deals, so you can establish
          yourself as a credible and sought-after content creator whilst also
          maintaining the trust of your audience.
        </rp.p>

        <rp.h2>How Do You Get Brand Deals on Cult Creative?</rp.h2>
        <rp.p>
          Scoring your first (or second or third) brand deal just got easier
          thanks to{" "}
          <rp.a href="https://www.instagram.com/cultcreativeasia/">
            Cult Creative’s creator platform
          </rp.a>
          . Whether you’re into fashion and beauty, tech and finance, or maybe
          you’re an explorer who’s ready to seize any opportunity that comes
          your way, we’ll connect you to amazing brands across Southeast Asia
          when you become a CC creator.
        </rp.p>
        <rp.p>Did I mention it’s free to use? Yup, it is!</rp.p>
        <rp.p>
          Simply fill out{" "}
          this form{" "}
          and you’re on your way to securing your next brand deal.
        </rp.p>

        {/* <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">You’ll Also Like</h3>
          <div className="flex flex-wrap gap-4">
            {relatedResources.map((relatedResource) => (
              <div key={relatedResource.path} className="flex-shrink-0 w-60">
                <Link href={relatedResource.path}>
                  <div className="relative w-full h-32 cursor-pointer overflow-hidden">
                    <Image
                      src={relatedResource.image}
                      alt={relatedResource.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                </Link>
                <div className="flex flex-col justify-center mt-2">
                  <Link href={relatedResource.path} passHref>
                    <p className="text-sm font-medium text-black no-underline cursor-pointer">
                      {relatedResource.title}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <rp.h2>Ready to Secure Your Next Brand Deal?</rp.h2>
        <rp.a href="https://t.me/cultcreativeasia" className="cta-button">
          Join Cult Creative on Telegram
        </rp.a>
      </rp.Page>
    </>
  );
};

export default Resource1;