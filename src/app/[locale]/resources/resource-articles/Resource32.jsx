import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[0];
const relatedResources = [resources[4], resources[5], resources[1]]; // Pick 3 related articles

const title = "Cheatsheet: Creating Killer Campaign Content";
const date = "24 April 2025";

// Article content for reading time calculation
const articleContent = [
  "The creator economy in Southeast Asia is expected to reach&nbsp; an estimated market size of 1,068 billion USD by 2028.",
  "That’s a lot of numbers.",
  "But what this means is that brands are seeing the effectiveness of creator marketing, and expectations for good, authentic content are at an all-time high. <br /> <br /> In this cheat sheet, we’ll unpack the must-dos in creating killer campaign content–from analysing brand guidelines and content strategy to ways you can authentically incorporate branding into your content, we’ve got it covered.",
  "Understanding campaign goals and target audience Campaign goals could be anything from increasing brand awareness, growing revenue, improving website traffic to creating an engaged community.",
  "Ensure that you’re incorporating content strategies and analysing metrics that align with the campaign objectives. <br /> <br /> When a brand taps you for a campaign, it’s because their target audience can be found in <i>your</i> audience.",
  "Keep this in mind as you strategise–you understand your followers best, after all, and you know what kind of content they like to see.",
  "Decoding brand brief and guidelines The brief is where expectations, boundaries, and guidelines are set.",
  "The typical key elements included are: Campaign goals (campaign overview, KPIs, target audience) Brand guidelines (tone of voice, visual branding, dos-and-don’ts) Key talking points (products to highlight, main messages, CTAs) Specs (post format, caption, hashtags) Campaign timeline (content approval dates, publishing dates) Study and understand the brand brief before producing content, so any misinterpretation can be handled effectively.",
  "Don’t shy away from asking for clarification and voicing your concerns.",
  "This is also when you ensure you’re on the same page when it comes to disclosures, like using the paid partnership label or using #ad #sponsored hashtags. <br /> <br /> You might feel like the brand has the upper hand, but as creators, you have just as much right in communicating your expectations to ensure a smooth campaign.",
  "Strategic content ideation and planning When presenting ideas to the brand, make sure that you have a strategy backing up your concept for the campaign.",
  "For example, negative, clickbait-y hooks always work best in your content and you want to implement the same strat in the campaign.",
  "Present stats like increased engagement rates that can support your claim. <br /> <br /> Now’s the time to whip out your content calendar, and plan out content schedule for the duration of the campaign.",
  "Figure out how you can seamlessly integrate campaign content with the rest of your content.",
  "Prioritising high-quality production High quality doesn’t necessarily mean fancy editing styles or super-HD cameras.",
  "It just means that there’s no room for errors like low-quality audio, typos, bad lighting, or deviating from pre-approved scripts.",
  "Brands expect you to be professional as you’re representing their products.",
  "Incorporating effective branding Brands go to content creators for authenticity, so you have to create campaign content that’s real <i>and</i> that sells. <br /> <br /> Integrate your daily life into the campaign content, so that you’re showing actual usage of the campaign product.",
  "For example, a skincare brand could seamlessly fit into your GRWM videos, or fitness apparel could be naturally featured in one of your workout routines. <br /> <br /> Review your past content that has performed well, and find out how you can incorporate that same style into your campaign content.",
  "For example, humorous storytelling or your aesthetically pleasing DITL content usually does well–integrating the branded product with your successful content styles could increase the chance of achieving killer results.",
];

const readTime = calculateReadingTimeFromContent(articleContent);

const keywords = [
    "Campaign content",
    "Brand deals",
    "Content strategy",
    "Content planning",
];

export const metadata = {
    title: title,
    description: "Learn how to create killer campaign content",
    keywords: keywords,
    openGraph: {
        images: [resource.image],
        title: title,
        description: "Learn how to create killer campaign content",
    },
    alternates: {
        canonical: resource.path,
    },
};

const Resource32 = async ({ params }) => {
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
                    The creator economy in Southeast Asia is expected to reach&nbsp;
                    <rp.a href="https://www.insg.co/en/influencer-marketing-southeast-asia/">
                    an estimated market size of 1,068 billion USD by 2028</rp.a>. 
                    That’s a lot of numbers. But what this means is that brands are seeing the effectiveness of creator marketing, 
                    and expectations for good, authentic content are at an all-time high.
                <br />
                <br />
                    In this cheat sheet, we’ll unpack the must-dos in creating killer 
                    campaign content–from analysing brand guidelines and content strategy to ways 
                    you can authentically incorporate branding into your content, we’ve got it covered.
                </rp.p>
                <rp.h2>
                    Understanding campaign goals and target audience
                </rp.h2>
                <rp.p>
                    Campaign goals could be anything from increasing brand awareness, growing revenue, 
                    improving website traffic to creating an engaged community. Ensure that you’re 
                    incorporating content strategies and analysing metrics that align with the campaign objectives.
                <br />
                <br />
                    When a brand taps you for a campaign, it’s because their target audience can be 
                    found in <i>your</i> audience. Keep this in mind as you strategise–you understand your followers best, 
                    after all, and you know what kind of content they like to see.
                </rp.p>
                <rp.h2>
                    Decoding brand brief and guidelines
                </rp.h2>
                <rp.p>
                    The brief is where expectations, boundaries, and guidelines are set. The typical key elements included are:
                </rp.p>
                <rp.ul>
                    <rp.li>
                        Campaign goals (campaign overview, KPIs, target audience)
                    </rp.li>
                    <rp.li>
                        Brand guidelines (tone of voice, visual branding, dos-and-don’ts) 
                    </rp.li>
                    <rp.li>
                        Key talking points (products to highlight, main messages, CTAs)
                    </rp.li>
                    <rp.li>
                        Specs (post format, caption, hashtags)
                    </rp.li>
                    <rp.li>
                        Campaign timeline (content approval dates, publishing dates)
                    </rp.li>
                </rp.ul>
                <rp.p>
                    Study and understand the brand brief before producing content, so any misinterpretation can be handled effectively. 
                    Don’t shy away from asking for clarification and voicing your concerns. This is also when you ensure you’re on the 
                    same page when it comes to disclosures, like using the paid partnership label or using #ad #sponsored hashtags.
                <br />
                <br />
                    You might feel like the brand has the upper hand, but as creators, you have just as much right in communicating 
                    your expectations to ensure a smooth campaign.
                </rp.p>
                <rp.h2>
                    Strategic content ideation and planning
                </rp.h2>
                <rp.p>
                    When presenting ideas to the brand, make sure that you have a strategy backing up your concept for the campaign. 
                    For example, negative, clickbait-y hooks always work best in your content and you want to implement the same 
                    strat in the campaign. Present stats like increased engagement rates that can support your claim.
                <br />
                <br />
                    Now’s the time to whip out your content calendar, and plan out content schedule for the duration of the campaign. 
                    Figure out how you can <rp.a href="https://www.cultcreativeasia.com/my/resources/balancing-personal-content-with-campaign-content">
                    seamlessly integrate campaign content with the rest of your content. </rp.a>
                </rp.p>
                <rp.h2>
                    Prioritising high-quality production
                </rp.h2>
                <rp.p>
                High quality doesn’t necessarily mean fancy editing styles or super-HD cameras. It just means that there’s no room for errors 
                like low-quality audio, typos, bad lighting, or deviating from pre-approved scripts. Brands expect you to be professional 
                as you’re representing their products.
                </rp.p>
                <rp.h2>
                    Incorporating effective branding
                </rp.h2>
                <rp.p>
                    Brands go to content creators for authenticity, so you have to create campaign content that’s real <i>and</i> that sells.
                <br />
                <br />
                    Integrate your daily life into the campaign content, so that you’re showing actual usage of the campaign product. 
                    For example, a skincare brand could seamlessly fit into your GRWM videos, or fitness apparel could be naturally 
                    featured in one of your workout routines. 
                <br />
                <br />
                Review your past content that has performed well, and find out how you can incorporate that same style into your 
                campaign content. For example, humorous storytelling or your aesthetically pleasing DITL content usually does well–integrating 
                the branded product with your successful content styles could increase the chance of achieving killer results.
                </rp.p>
            </rp.Page>
            
        </>
    );
};

export default Resource32;