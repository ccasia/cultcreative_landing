import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[23];
const relatedResources = [resources[22], resources[24], resources[25]];

const title = resource.title;
const date = "10 February 2024";

// Article content for reading time calculation
const articleContent = [
  "The digital landscape is rapidly changing, and so is our relationship with social media.",
  "What was once a mere act of self-expression, content creation has now evolved into a money-making endeavour thanks to the growing popularity of user-generated content (UGC).",
  "From social-media platforms like Instagram and TikTok to blogs, UGC has become ubiquitous, profoundly impacting industries, businesses, and individuals alike.",
  "But what exactly is UGC?",
  "To put simply, UGC includes any form of content made by consumers about a product, service or business.",
  "So, for example, a video you post of your new shoes on Instagram is a form of UGC.",
  "Other forms include testimonials, comments, photos and blog posts.",
  "We’re certain you’ve produced UGC without even realising it!",
  "But it doesn’t end there.",
  "As mentioned above, UGC has emerged as a form of business.",
  "So, if we dive deeper, we’ll find that there are two types of UGC: organic UGC and paid UGC.",
  "Organic UGC These are content created voluntarily by the consumers, simply because they feel inspired to share a good word about the business with their followers.",
  "Paid UGC As the name suggests, paid UGC is where a person is paid to create content for a business.",
  "A popular example are brand deals where businesses pay content creators to make videos about their products or services.",
  "However, just the fact that someone is paid to talk about a product does not make their content any less credible or genuine.",
  "If anything, people are more likely to buy a product if it has been recommended by someone they know and trust.",
  "Indeed, INSG has reported that 34% of Malaysian online shoppers consider suggestions from influencers and content creators before buying a product .",
  "So, it can be quite an effective marketing strategy to convert views into sales.",
  "It comes as no surprise, then, that more and more businesses in Southeast Asia are investing in UGCs.",
  "It is certainly not surprising that many Internet users are leveraging their content-creation skills to become UGC creators too .",
  "Ready to Leverage UGC for Your Brand?",
  "Whether you're looking to create authentic connections with your audience or scale your marketing efforts, UGC is a powerful strategy.",
  "Partner with Cult Creative to access talented UGC creators.",
  "Join Cult Creative on Telegram",
];

const readTime = calculateReadingTimeFromContent(articleContent);

const keywords = [
  "User-generated content",
  "UGC marketing",
  "Organic UGC",
  "Paid UGC",
  "UGC strategy",
];

export const metadata = {
  title: title,
  description:
    "Understand what user-generated content (UGC) is and how it has evolved from personal expression to a powerful strategic business tool. Explore organic and paid UGC today.",
  keywords: keywords,
  openGraph: {
    title: title,
    description:
      "Understand what user-generated content (UGC) is and how it has evolved from personal expression to a powerful strategic business tool. Explore organic and paid UGC today.",
    images: [resource.image],
  },
  alternates: {
    canonical: resource.path,
  },
};

const Resource9 = async ({ params }) => {
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
          The digital landscape is rapidly changing, and so is our relationship
          with social media. What was once a mere act of self-expression,
          content creation has now evolved into a money-making endeavour thanks
          to the growing popularity of user-generated content (UGC).
        </rp.p>
        <rp.p>
          From social-media platforms like Instagram and TikTok to blogs, UGC
          has become ubiquitous, profoundly impacting industries, businesses,
          and individuals alike. But what exactly is UGC?
        </rp.p>
        <rp.p>
          To put simply, UGC includes any form of content made by consumers
          about a product, service or business. So, for example, a video you
          post of your new shoes on Instagram is a form of UGC. Other forms
          include testimonials, comments, photos and blog posts.
        </rp.p>
        <rp.p>
          We’re certain you’ve produced UGC without even realising it!
        </rp.p>
        <rp.p>
          But it doesn’t end there. As mentioned above, UGC has emerged as a
          form of business. So, if we dive deeper, we’ll find that there are two
          types of UGC: organic UGC and paid UGC.
        </rp.p>
        <rp.IgEmbed url="https://www.instagram.com/p/C58GxEOpKRU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />

        <rp.h2>Organic UGC</rp.h2>
        <rp.p>
          These are content created voluntarily by the consumers, simply because
          they feel inspired to share a good word about the business with their
          followers.
        </rp.p>

        <rp.h2>Paid UGC</rp.h2>
        <rp.p>
          As the name suggests, paid UGC is where a person is paid to create
          content for a business. A popular example are brand deals where
          businesses pay content creators to make videos about their products or
          services. However, just the fact that someone is paid to talk about a
          product does not make their content any less credible or genuine.
        </rp.p>
        <rp.p>
          If anything, people are more likely to buy a product if it has been
          recommended by someone they know and trust. Indeed, INSG has reported
          that{" "}
          <rp.a href="https://www.insg.co/en/influencer-marketing-malaysia/">
            34% of Malaysian online shoppers consider suggestions from
            influencers and content creators before buying a product
          </rp.a>
          . So, it can be quite an effective marketing strategy to convert views
          into sales.
        </rp.p>
        <rp.p>
          It comes as no surprise, then, that more and more businesses in
          Southeast Asia are investing in UGCs. It is certainly not surprising
          that{" "}
          <rp.a href="/creators/contact">
            many Internet users are leveraging their content-creation skills to
            become UGC creators too
          </rp.a>
          .
        </rp.p>
        <rp.h2>Ready to Leverage UGC for Your Brand?</rp.h2>
        <rp.p>
          Whether you're looking to create authentic connections with your audience or scale your marketing efforts, UGC is a powerful strategy. Partner with Cult Creative to access talented UGC creators.
        </rp.p>
        <rp.a href="https://t.me/cultcreativeasia" className="cta-button">
          Join Cult Creative on Telegram
        </rp.a>
      </rp.Page>
    </>
  );
};

export default Resource9;