import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[12];
const relatedResources = [resources[10], resources[11], resources[13]];

const title = "4 Ways to Tap Into Your Target Audience";
const date = "15 January 2025";

// Article content for reading time calculation
const articleContent = [
  "Know exactly who you are speaking to Viral moments are great, but sustained growth comes from understanding the people who come back for every upload.",
  "When you study their routines, pain points, and goals, you can tailor content that feels like it was made just for them.",
  "Use these four tactics to get closer to your target audience and build a feedback loop that evolves with them. 1.",
  "Audit the signals you already have Start with the data sitting inside your dashboards.",
  "Platform analytics reveal the basics: age ranges, locations, retention drop-offs, and the posts that triggered follows.",
  "Combine those numbers with the qualitative clues in your DMs and comments.",
  "Export monthly analytics and highlight the top performers by watch time or saves.",
  "Log the questions viewers repeat so you can prioritise content that answers them.",
  "Track which collaborations sent the most new followers your way and why they converted. 2.",
  "Listen where your community hangs out Your audience is talking even when they are not on your profile.",
  "Join the subreddits, Facebook groups, and Discord servers where they swap tips or vent frustrations.",
  "Those conversations surface the topics you should cover next.",
  "Set up keyword alerts for your niche so you get notified when new threads pop up.",
  "Host casual community polls to confirm assumptions before building a new series.",
  "Capture the exact words your audience uses so your scripts mirror their language. 3.",
  "Test formats with purpose A clear hypothesis makes experimentation useful.",
  "Try new hooks, video lengths, or storytelling styles with a specific goal in mind, then review the metrics that connect to that goal.",
  "Run A and B versions of the same tip: one as a rapid fire list, the other as a deeper case study.",
  "Compare retention graphs to see which version held attention longer.",
  "Repurpose the winning format across other platforms to confirm it resonates elsewhere. 4.",
  "Collaborate with creators who share your audience Partnering with creators who already speak to your ideal audience accelerates trust.",
  "Look for hosts, podcast guests, or co creators whose values align with yours so the introduction feels organic.",
  "Create joint content that solves a problem from two perspectives.",
  "Share audience insights after the collaboration to understand what resonated for both sides.",
  "Follow up with personalised offers or lead magnets to onboard new viewers smoothly.",
  "Staying close to your audience is an ongoing process.",
  "Document what you learn, revisit your findings each quarter, and keep refining your approach so your content always meets people where they are. <div> <a > Discover more audience insights with Cult Creative </a> </div>",
];

const readTime = calculateReadingTimeFromContent(articleContent);

const keywords = [
    "target audience",
    "creator strategy",
    "community insights",
    "audience research",
    "content marketing",
];

export const metadata = {
    title: title,
    description: "Identify, understand, and engage your audience with four practical tactics creators can use right now.",
    keywords: keywords,
    openGraph: {
        images: [resource.image],
        title: title,
        description: "Identify, understand, and engage your audience with four practical tactics creators can use right now.",
    },
    alternates: {
        canonical: resource.path,
    },
};

const Resource21 = async ({ params }) => {
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
                    Know exactly who you are speaking to
                </rp.h2>
                <rp.p>
                    Viral moments are great, but sustained growth comes from understanding the people who come back for
                    every upload. When you study their routines, pain points, and goals, you can tailor content that feels
                    like it was made just for them.
                </rp.p>
                <rp.p>
                    Use these four tactics to get closer to your target audience and build a feedback loop that evolves
                    with them.
                </rp.p>
                <rp.h3>
                    1. Audit the signals you already have
                </rp.h3>
                <rp.p>
                    Start with the data sitting inside your dashboards. Platform analytics reveal the basics: age ranges,
                    locations, retention drop-offs, and the posts that triggered follows. Combine those numbers with the
                    qualitative clues in your DMs and comments.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        Export monthly analytics and highlight the top performers by watch time or saves.
                    </rp.li>
                    <rp.li>
                        Log the questions viewers repeat so you can prioritise content that answers them.
                    </rp.li>
                    <rp.li>
                        Track which collaborations sent the most new followers your way and why they converted.
                    </rp.li>
                </rp.ul>
                <rp.h3>
                    2. Listen where your community hangs out
                </rp.h3>
                <rp.p>
                    Your audience is talking even when they are not on your profile. Join the subreddits, Facebook groups,
                    and Discord servers where they swap tips or vent frustrations. Those conversations surface the topics
                    you should cover next.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        Set up keyword alerts for your niche so you get notified when new threads pop up.
                    </rp.li>
                    <rp.li>
                        Host casual community polls to confirm assumptions before building a new series.
                    </rp.li>
                    <rp.li>
                        Capture the exact words your audience uses so your scripts mirror their language.
                    </rp.li>
                </rp.ul>
                <rp.h3>
                    3. Test formats with purpose
                </rp.h3>
                <rp.p>
                    A clear hypothesis makes experimentation useful. Try new hooks, video lengths, or storytelling styles
                    with a specific goal in mind, then review the metrics that connect to that goal.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        Run A and B versions of the same tip: one as a rapid fire list, the other as a deeper case study.
                    </rp.li>
                    <rp.li>
                        Compare retention graphs to see which version held attention longer.
                    </rp.li>
                    <rp.li>
                        Repurpose the winning format across other platforms to confirm it resonates elsewhere.
                    </rp.li>
                </rp.ul>
                <rp.h3>
                    4. Collaborate with creators who share your audience
                </rp.h3>
                <rp.p>
                    Partnering with creators who already speak to your ideal audience accelerates trust. Look for hosts,
                    podcast guests, or co creators whose values align with yours so the introduction feels organic.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        Create joint content that solves a problem from two perspectives.
                    </rp.li>
                    <rp.li>
                        Share audience insights after the collaboration to understand what resonated for both sides.
                    </rp.li>
                    <rp.li>
                        Follow up with personalised offers or lead magnets to onboard new viewers smoothly.
                    </rp.li>
                </rp.ul>
                <rp.p>
                    Staying close to your audience is an ongoing process. Document what you learn, revisit your findings each
                    quarter, and keep refining your approach so your content always meets people where they are.
                </rp.p>
                <div className="text-center mt-10">
                    <a
                        className="inline-flex items-center gap-2 rounded-full bg-[#1340FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0f33c7]"
                        href="https://app.cultcreativeasia.com/auth/jwt/register"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Discover more audience insights with Cult Creative
                    </a>
                </div>
            </rp.Page>
        </>
    );
};

export default Resource21;