import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[26];
const relatedResources = [resources[25], resources[27], resources[28]];

const title = resource.title;
const date = "22 November 2023";

// Article content for reading time calculation
const articleContent = [
  "UGC (user-generated content) has been on the rise as brands begin to embrace it as a valuable marketing tool.",
  "This has led to a growing interest among younger generations to explore content creation as means of income.",
  "A UGC creator is an individual who actively participates in the creation and sharing of content on their social media platforms or websites.",
  "Some may do it as a side hustle to earn some extra cash, whilst many others are doing it full-time, branding themselves as a UGC creator.",
  "Either way you swing on the creator spectrum, getting there involves several steps.",
  "It includes: Having a Passion or Niche If you want to become a creator, choose a topic or area that you are truly interested in and passionate about.",
  "This would help you target the right audience for your content.",
  "Examples of different pillars you could tap into include fashion, travel, food, gaming, parenting, fitness, and beauty.",
  "Invest in the Right Equipment Having the right type of equipment is key to ensuring high quality content.",
  "You should start with a good-quality phone camera, microphone, and editing software (free ones are just as good too!) and inspiration boards to enhance the quality of your content.",
  "Start with a Content Strategy Define your end goals (“Is it brand deals?",
  "Money?",
  "PR boxes?",
  "A build-up of following?”), target audience, and the type of content you want to be known for.",
  "These should tie closely with your online persona and personal branding.",
  "Then, plan out your posts and how often you want your photos, Reels, TikToks, and videos to go out.",
  "Remember, consistency is key.",
  "If you consistently share content that aligns with your chosen niche, it is more likely that the algorithm will push your videos to the audience.",
  "So, be sure to routinely dedicate time and effort on your content creation endeavour.",
  "Examples of UGC Content That Works Brands are leaning into the new wave of creator marketing.",
  "We have identified a number of UGC formats that track well on social media.",
  "They are: <b>Social media reviews of products and services.</b> We’ve all been influenced to buy something because someone online told us to.",
  "Product reviews is an easy form of UGC content that you can get started with.",
  "However, always be authentic and genuine in your reviews or you might risk losing your followers’ trust and support.",
  "Just ask yourself, would you believe a person who is paid to say that a product is good?",
  "Probably not right. <b>Unboxing videos.</b> Haul videos and unboxing videos have always been a famous and easy form of UGC.",
  "Most times, you don’t even need a script or elaborate effects and transitions.",
  "Simply sit down in front of your camera and give the audience a breakdown of what you’ve bought/received.",
  "It’s a really great way to generate excitement and anticipation among your followers as well as to showcase the products in action. <b>Get Ready with Me and/or soft-selling a product.</b> Incorporating a product into a video showcasing your daily routines can be a subtle yet effective way to promote a brand without coming across as overly promotional. <b>Walkthroughs and tutorials.</b> Providing step-by-step guides and tutorials on how to use a product or accomplish a specific task can be highly valuable to your audience and drive engagement.",
  "This is especially great when showcasing products such as make-up, apps, and electronics.",
  "Ready to Launch Your Creator Journey?",
  "Join Cult Creative to unlock brand deals and monetize your creative talents.",
  "Connect with top brands and grow your content creation career.",
  "Join Cult Creative on Telegram",
];

const readTime = calculateReadingTimeFromContent(articleContent);

const keywords = [
  "UGC marketing guide",
  "Content creation tips",
  "Brand deals for creators",
  "Creator economy in Malaysia",
];

export const metadata = {
  title: title,
  description:
    "Unlock your UGC creativity with practical tips, examples, and strategies. Learn how to create engaging user-generated content that drives brand results.",
  keywords: keywords,
  openGraph: {
    title: title,
    description:
      "Unlock your UGC creativity with practical tips, examples, and strategies. Learn how to create engaging user-generated content that drives brand results.",
    images: [resource.image],
  },
  alternates: {
    canonical: resource.path,
  },
};

const Resource6 = async ({ params }) => {
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
          UGC (user-generated content) has been on the rise as brands begin to
          embrace it as a valuable marketing tool. This has led to a growing
          interest among younger generations to explore content creation as
          means of income.
        </rp.p>
        <rp.p>
          A UGC creator is an individual who actively participates in the
          creation and sharing of content on their social media platforms or
          websites. Some may do it as a side hustle to earn some extra cash,
          whilst many others are doing it full-time, branding themselves as a
          UGC creator.
        </rp.p>
        <rp.p>
          Either way you swing on the creator spectrum, getting there involves
          several steps. It includes:
        </rp.p>

        <rp.h2>Having a Passion or Niche</rp.h2>
        <rp.p>
          If you want to become a creator, choose a topic or area that you are
          truly interested in and passionate about. This would help you target
          the right audience for your content.
        </rp.p>
        <rp.p>
          Examples of different pillars you could tap into include fashion,
          travel, food, gaming, parenting, fitness, and beauty.
        </rp.p>

        <rp.h2>Invest in the Right Equipment</rp.h2>
        <rp.p>
          Having the right type of equipment is key to ensuring high quality
          content.
        </rp.p>
        <rp.p>
          You should start with a good-quality phone camera, microphone, and
          editing software (free ones are just as good too!) and inspiration
          boards to enhance the quality of your content.
        </rp.p>

        <rp.h2>Start with a Content Strategy</rp.h2>
        <rp.p>
          Define your end goals (“Is it brand deals? Money? PR boxes? A build-up
          of following?”), target audience, and the type of content you want to
          be known for. These should tie closely with your online persona and
          personal branding.
        </rp.p>
        <rp.p>
          Then, plan out your posts and how often you want your photos, Reels,
          TikToks, and videos to go out. Remember, consistency is key.
        </rp.p>
        <rp.p>
          If you consistently share content that aligns with your chosen niche,
          it is more likely that the algorithm will push your videos to the
          audience. So, be sure to routinely dedicate time and effort on your
          content creation endeavour.
        </rp.p>

        <rp.h2>Examples of UGC Content That Works</rp.h2>
        <rp.p>
          Brands are leaning into the new wave of creator marketing. We have
          identified a number of UGC formats that track well on social media.
          They are:
        </rp.p>
        <rp.ol>
          <rp.li>
            <b>Social media reviews of products and services.</b> We’ve all been
            influenced to buy something because someone online told us to.
            Product reviews is an easy form of UGC content that you can get
            started with. However, always be authentic and genuine in your
            reviews or you might risk losing your followers’ trust and support.
            Just ask yourself, would you believe a person who is paid to say
            that a product is good? Probably not right.
          </rp.li>
          <rp.li>
            <b>Unboxing videos.</b> Haul videos and unboxing videos have always
            been a famous and easy form of UGC. Most times, you don’t even need
            a script or elaborate effects and transitions. Simply sit down in
            front of your camera and give the audience a breakdown of what
            you’ve bought/received. It’s a really great way to generate
            excitement and anticipation among your followers as well as to
            showcase the products in action.
          </rp.li>
          <rp.li>
            <b>Get Ready with Me and/or soft-selling a product.</b>{" "}
            Incorporating a product into a video showcasing your daily routines
            can be a subtle yet effective way to promote a brand without coming
            across as overly promotional.
          </rp.li>
          <rp.li>
            <b>Walkthroughs and tutorials.</b> Providing step-by-step guides and
            tutorials on how to use a product or accomplish a specific task can
            be highly valuable to your audience and drive engagement. This is
            especially great when showcasing products such as make-up, apps, and
            electronics.
          </rp.li>
        </rp.ol>
        <rp.h2>Ready to Launch Your Creator Journey?</rp.h2>
        <rp.p>
          Join Cult Creative to unlock brand deals and monetize your creative talents. Connect with top brands and grow your content creation career.
        </rp.p>
        <rp.a href="https://t.me/cultcreativeasia" className="cta-button">
          Join Cult Creative on Telegram
        </rp.a>
      </rp.Page>
    </>
  );
};

export default Resource6;