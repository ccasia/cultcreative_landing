import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";

const resource = resources[11];
const relatedResources = [resources[9], resources[10], resources[12]];

const title = "Why You Should Crosspost Your Content";
const date = "29 January 2025";
const readTime = "6 min";

const keywords = [
    "crossposting",
    "content strategy",
    "creator workflow",
    "social media growth",
    "repurposing content",
];

export const metadata = {
    title: title,
    description: "Learn how to crosspost strategically so every video works harder across TikTok, Instagram, and YouTube.",
    keywords: keywords,
    openGraph: {
        images: [resource.image],
        title: title,
        description: "Learn how to crosspost strategically so every video works harder across TikTok, Instagram, and YouTube.",
    },
    alternates: {
        canonical: resource.path,
    },
};

const Resource22 = async ({ params }) => {
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
                    Crossposting multiplies your reach
                </rp.h2>
                <rp.p>
                    Growing as a creator is easier when each idea lives on more than one platform. Crossposting gives your content
                    a second and third chance to be discovered, introduces you to new demographics, and keeps your feeds active
                    without doubling your production hours.
                </rp.p>
                <rp.p>
                    Winning at crossposting is about planning the story once, then editing it so it feels native to TikTok, Instagram,
                    and YouTube. With a streamlined workflow, you can cover more platforms and stay consistent all year long.
                </rp.p>
                <rp.h3>
                    Map your goals and platforms
                </rp.h3>
                <rp.p>
                    Start by choosing which channels matter most to your audience and the brands you want to work with. TikTok skews
                    younger and rewards discovery; Instagram blends community and curation; YouTube builds long term search traffic and
                    ad revenue. Decide what you want each feed to achieve so you can tailor intros, CTAs, and editing pace.
                </rp.p>
                <rp.h3>
                    Build a reusable content toolkit
                </rp.h3>
                <rp.p>
                    Systemise your workflow so your core asset can be adapted in minutes instead of hours. Create templates for cover
                    slides, caption formats, and hook variations so you are not starting from scratch every time you export.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        Shoot in 4K vertical when possible. You can crop wider shots for Reels or Shorts without losing quality.
                    </rp.li>
                    <rp.li>
                        Save a library of hook lines, CTAs, and on screen prompts that fit each platform's tone.
                    </rp.li>
                    <rp.li>
                        Keep brand elements like fonts, colour blocks, and logos in reusable project files.
                    </rp.li>
                </rp.ul>
                <rp.h3>
                    Optimise for each algorithm
                </rp.h3>
                <rp.p>
                    Small adjustments go a long way. Swap trending audio for platform specific sounds, reframe thumbnails so they pop, and
                    adjust length to match attention spans. TikTok and Reels thrive on fast hooks, while YouTube Shorts benefits from a more
                    narrative build.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        Align captions with the search terms viewers use on that platform.
                    </rp.li>
                    <rp.li>
                        Use native features like stickers, polls, or carousel posts to boost engagement signals.
                    </rp.li>
                    <rp.li>
                        Test different posting times, then document the slots that consistently deliver reach.
                    </rp.li>
                </rp.ul>
                <rp.h3>
                    Track performance and iterate
                </rp.h3>
                <rp.p>
                    Review analytics weekly so you know which edits, hooks, or thumbnails carried the most weight. When a video performs
                    unusually well on one platform, break down why and replicate that format elsewhere.
                </rp.p>
                <rp.p>
                    Record your learnings in a simple tracker. Over time you will build a crossposting playbook that keeps your feeds fresh
                    without burning you out.
                </rp.p>
                <div className="text-center mt-10">
                    <a
                        className="inline-flex items-center gap-2 rounded-full bg-[#1340FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0f33c7]"
                        href="https://app.cultcreativeasia.com/auth/jwt/register"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Streamline your crossposting with Cult Creative
                    </a>
                </div>
            </rp.Page>
        </>
    );
};

export default Resource22;
