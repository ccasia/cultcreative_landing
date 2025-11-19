import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[13];
const relatedResources = [resources[11], resources[12], resources[14]];

const title = "How To: TikTok Creator Search Insights";
const date = "8 January 2025";

// Article content for reading time calculation
const articleContent = [
  "Turn search data into scroll stopping content TikTok Creator Search Insights shows you what the platform wants more of.",
  "When you understand the keywords people are typing into the search bar, you can craft videos that line up with those queries and increase your discoverability.",
  "Use this feature to sharpen your hooks, validate ideas before filming, and position yourself in categories TikTok is actively promoting.",
  "Step 1: Access the insights dashboard Open TikTok and search for your niche or primary keyword.",
  "Tap the filter icon and select “Creator Search Insights” to view trending terms linked to that topic.",
  "The dashboard highlights the exact questions viewers want answered right now.",
  "Switch between global and local results to understand regional nuances.",
  "Bookmark relevant keywords so you can revisit them when planning your content calendar.",
  "Screenshot the results to track how demand shifts week to week.",
  "Step 2: Analyse intent behind the keywords Look beyond the surface phrase.",
  "Identify whether viewers are looking for tutorials, product comparisons, or inspiration.",
  "That intent determines the format and call to action you should use. “How to…” searches call for step by step breakdowns with on screen captions. “Best…” or “Top…” signals list style videos with quick cuts and social proof. “Ideas for…” invites storytelling or behind the scenes clips that showcase your process.",
  "Step 3: Optimise your scripts and metadata Mirror the wording from search insights in your hook, captions, and text overlays so TikTok recognises your video as a match.",
  "Pair your keywords with clear visuals that demonstrate the answer quickly.",
  "Mention the key phrase in the first three seconds to boost relevance.",
  "Add supporting keywords in your caption and pin a comment with additional context or links.",
  "Use auto captions so the algorithm and viewers can follow along even with sound off.",
  "Step 4: Measure and iterate Track how videos optimised for search perform against your usual uploads.",
  "Review watch time, profile visits, and new followers to see which angles resonate.",
  "When a keyword delivers results, double down with a series or follow up explainer.",
  "Repurpose winning scripts into carousels or YouTube Shorts to extend the lifespan of the idea.",
  "Share your learnings with brand partners so they understand the demand you can capture together.",
  "Search insights bridge the gap between what you want to create and what audiences are actively asking for.",
  "Keep refining your keywords, and you will stay ahead of trends while serving your community better with every upload. <div> <a > Unlock Creator Search briefs on Cult Creative </a> </div>",
];

const readTime = calculateReadingTimeFromContent(articleContent);

const keywords = [
    "tiktok search",
    "creator insights",
    "content analytics",
    "audience research",
    "short form video",
];

export const metadata = {
    title: title,
    description: "Learn how to use TikTok Creator Search Insights to refine your content, hooks, and posting strategy.",
    keywords: keywords,
    openGraph: {
        images: [resource.image],
        title: title,
        description: "Learn how to use TikTok Creator Search Insights to refine your content, hooks, and posting strategy.",
    },
    alternates: {
        canonical: resource.path,
    },
};

const Resource20 = async ({ params }) => {
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
                <rp.h2>
                    Turn search data into scroll stopping content
                </rp.h2>
                <rp.p>
                    TikTok Creator Search Insights shows you what the platform wants more of. When you understand the keywords people
                    are typing into the search bar, you can craft videos that line up with those queries and increase your discoverability.
                </rp.p>
                <rp.p>
                    Use this feature to sharpen your hooks, validate ideas before filming, and position yourself in categories TikTok is actively
                    promoting.
                </rp.p>
                <rp.h3>
                    Step 1: Access the insights dashboard
                </rp.h3>
                <rp.p>
                    Open TikTok and search for your niche or primary keyword. Tap the filter icon and select “Creator Search Insights” to view
                    trending terms linked to that topic. The dashboard highlights the exact questions viewers want answered right now.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        Switch between global and local results to understand regional nuances.
                    </rp.li>
                    <rp.li>
                        Bookmark relevant keywords so you can revisit them when planning your content calendar.
                    </rp.li>
                    <rp.li>
                        Screenshot the results to track how demand shifts week to week.
                    </rp.li>
                </rp.ul>
                <rp.h3>
                    Step 2: Analyse intent behind the keywords
                </rp.h3>
                <rp.p>
                    Look beyond the surface phrase. Identify whether viewers are looking for tutorials, product comparisons, or inspiration. That
                    intent determines the format and call to action you should use.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        “How to…” searches call for step by step breakdowns with on screen captions.
                    </rp.li>
                    <rp.li>
                        “Best…” or “Top…” signals list style videos with quick cuts and social proof.
                    </rp.li>
                    <rp.li>
                        “Ideas for…” invites storytelling or behind the scenes clips that showcase your process.
                    </rp.li>
                </rp.ul>
                <rp.h3>
                    Step 3: Optimise your scripts and metadata
                </rp.h3>
                <rp.p>
                    Mirror the wording from search insights in your hook, captions, and text overlays so TikTok recognises your video as a match.
                    Pair your keywords with clear visuals that demonstrate the answer quickly.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        Mention the key phrase in the first three seconds to boost relevance.
                    </rp.li>
                    <rp.li>
                        Add supporting keywords in your caption and pin a comment with additional context or links.
                    </rp.li>
                    <rp.li>
                        Use auto captions so the algorithm and viewers can follow along even with sound off.
                    </rp.li>
                </rp.ul>
                <rp.h3>
                    Step 4: Measure and iterate
                </rp.h3>
                <rp.p>
                    Track how videos optimised for search perform against your usual uploads. Review watch time, profile visits, and new followers to see
                    which angles resonate. When a keyword delivers results, double down with a series or follow up explainer.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        Repurpose winning scripts into carousels or YouTube Shorts to extend the lifespan of the idea.
                    </rp.li>
                    <rp.li>
                        Share your learnings with brand partners so they understand the demand you can capture together.
                    </rp.li>
                </rp.ul>
                <rp.p>
                    Search insights bridge the gap between what you want to create and what audiences are actively asking for. Keep refining your keywords,
                    and you will stay ahead of trends while serving your community better with every upload.
                </rp.p>
                <div className="text-center mt-10">
                    <a
                        className="inline-flex items-center gap-2 rounded-full bg-[#1340FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0f33c7]"
                        href="https://app.cultcreativeasia.com/auth/jwt/register"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Unlock Creator Search briefs on Cult Creative
                    </a>
                </div>
            </rp.Page>
        </>
    );
};

export default Resource20;