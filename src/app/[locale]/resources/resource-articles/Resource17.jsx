import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[15];
const relatedResources = [resources[14], resources[16], resources[17]];

const title = "Balancing Personal Content with Campaign Content";
const date = "5 February 2025";

// Article content for reading time calculation
const articleContent = [
  "Staying true to your identity while creating campaign content Brand deals are central to the creator economy and are the main pillar of monetisation for many content creators.",
  "Getting to that stage where brands respond to your cold emails or–even better–reach out to you first is an exciting milestone as a content creator.",
  "Having said that, it’s important to balance campaign content with your personal and organic content.",
  "Finding a middle ground is the key to ensuring that your overall identity as a content creator doesn’t get drowned out by campaign posts and brand shoutouts.",
  "Stay consistent with your identity Stay consistent with your identity by working with brands that align with your personal and visual values.",
  "You should be able to seamlessly integrate them with the rest of your content, making it easier for you to maintain a balance.",
  "But don’t be afraid to think outside the box.",
  "For example, you’re a food content creator and you get approached by a beauty brand you like.",
  "If you have the time and resources to research ideas for creating good campaign content that aligns with your branding and theirs—why not go for it?",
  "But you should center your campaign content around your organic content—not the other way around.",
  "If you’re just starting out, don’t rush by saying yes to every brand.",
  "Take your time to figure out what works.",
  "Sprinkle personal anecdotes in campaign content This one’s a win-win situation, but you’ll have to make it believable for your audience.",
  "Integrating a product or a service into your storytelling content could help you strike that balance, but the content must make sense.",
  "If it doesn’t–don’t force it.",
  "Be transparent When producing campaign content, be direct about what it is.",
  "Clarify to your audience whether it’s an ad, a collaboration, or a sponsorship.",
  "Doing this also means that you’re adhering to social media guidelines and regulations.",
  "Being transparent with your audience is a good way to foster a sense of community, and it allows you to maintain a good balance in your content.",
  "Include your followers on your journey of working on a campaign, and how excited you are to share the end result with them.",
  "Develop a content calendar and content pillars A content calendar can help you keep track of your organic posts and campaign posts.",
  "It’ll let you determine posting frequencies and timing, so you can figure out the best way to sandwich your campaign content between your personal content.",
  "Content pillars also provide clarity.",
  "It could be made up of educational (tutorials), inspirational (personal stories), entertaining (trends, challenges), and, of course, promotional (campaigns, ads, paid reviews).",
  "Stick to a ratio–70:30 is a safe bet.",
  "You should also adapt to the season–you’ll likely get more brand deals during festive seasons, so you should amp up your personal content to maintain that ratio.",
  "Analyse metrics When in doubt, look at engagement numbers like shares, saves, and comments.",
  "Compare how your personal content and campaign content perform.",
  "You might discover that your audience interacts well with your branded content, which should encourage you to further explore brand deals. <div> <a > Balance your portfolio with Cult Creative </a> </div>",
];

const readTime = calculateReadingTimeFromContent(articleContent);

const keywords = [
    "branded content",
    "campaign strategy",
    "creator authenticity",
    "brand partnerships",
    "content balance",
];

export const metadata = {
    title: title,
    description: "Learn how to maintain your authentic voice while creating campaign content and building sustainable brand partnerships.",
    keywords: keywords,
    openGraph: {
        images: [resource.image],
        title: title,
        description: "Learn how to maintain your authentic voice while creating campaign content and building sustainable brand partnerships.",
    },
    alternates: {
        canonical: resource.path,
    },
};

const Resource18 = async ({ params }) => {
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
                <rp.h2>Staying true to your identity while creating campaign content</rp.h2>
                <rp.p>
                    Brand deals are central to the creator economy and are the main pillar of monetisation for many content creators. Getting
                    to that stage where brands respond to your cold emails or–even better–reach out to you first is an exciting milestone as a content creator.
                </rp.p>
                <rp.p>
                    Having said that, it’s important to balance campaign content with your personal and organic content.
                    Finding a middle ground is the key to ensuring that your overall identity as a content creator doesn’t get drowned out by campaign
                    posts and brand shoutouts.
                </rp.p>
                <rp.h3>Stay consistent with your identity</rp.h3>
                <rp.p>
                    Stay consistent with your identity by working with brands that align with your personal and visual values.
                    You should be able to seamlessly integrate them with the rest of your content, making it easier for you to maintain a balance.
                </rp.p>
                <rp.p>
                    But don’t be afraid to think outside the box. For example, you’re a food content creator and you get approached by a
                    beauty brand you like. If you have the time and resources to research ideas for creating good campaign content that
                    aligns with your branding and theirs—why not go for it?
                </rp.p>
                <rp.p>
                    But you should center your campaign content around your organic content—not the other way around.
                    If you’re just starting out, <rp.a href="https://youtu.be/E36AKM3tiJc?si=3t_CiGfHsH87oXMp&t=881"> don’t rush by saying yes to every brand</rp.a>. Take your time to figure out what works.
                </rp.p>

                <rp.h3>
                    Sprinkle personal anecdotes in campaign content
                </rp.h3>
                <rp.p>
                    This one’s a win-win situation, but you’ll have to make it believable for your audience.
                </rp.p>
                <rp.p>
                    Integrating a product or a service into your storytelling content could help you strike
                    that balance, but the content must make sense. If it doesn’t–don’t force it.
                </rp.p>
                <rp.h3>
                    Be transparent
                </rp.h3>
                <rp.p>
                    When producing campaign content, be direct about what it is. Clarify
                    to your audience whether it’s an ad, a collaboration, or a sponsorship.
                    Doing this also means that you’re adhering to social media guidelines and regulations.
                </rp.p>
                <rp.p>
                    Being transparent with your audience is a good way to foster a sense of community, and it allows
                    you to maintain a good balance in your content.
                    Include your followers on your journey of working on a campaign, and how excited you are to
                    share the end result with them.
                </rp.p>

                <rp.h3>
                    Develop a content calendar and content pillars
                </rp.h3>
                <rp.p>
                    A content calendar can help you keep track of your organic posts and campaign posts.
                    It’ll let you determine posting frequencies and timing, so you can figure out the best
                    way to sandwich your campaign content between your personal content.
                </rp.p>
                <rp.p>
                    Content pillars also provide clarity. It could be made up of educational (tutorials), inspirational
                    (personal stories), entertaining (trends, challenges), and, of course, promotional (campaigns, ads, paid reviews).
                </rp.p>
                <rp.p>
                    Stick to a ratio–70:30 is a safe bet. You should also adapt to the season–you’ll likely get more brand deals
                    during festive seasons, so you should amp up your personal content to maintain that ratio.
                </rp.p>
                <rp.h3>
                    Analyse metrics
                </rp.h3>
                <rp.p>When in doubt, look at engagement numbers like shares, saves, and comments. Compare how your personal content and campaign content perform.</rp.p>
                <rp.p>
                    You might discover that your audience interacts well with your branded content, which should encourage you to further explore brand deals.
                </rp.p>
                <div className="text-center mt-10">
                    <a
                        className="inline-flex items-center gap-2 rounded-full bg-[#1340FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0f33c7]"
                        href="https://app.cultcreativeasia.com/auth/jwt/register"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Balance your portfolio with Cult Creative
                    </a>
                </div>
            </rp.Page>
        </>
    );
};

export default Resource18;