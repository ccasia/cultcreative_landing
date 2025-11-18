import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";

const resource = resources[5];
const relatedResources = [resources[3], resources[4], resources[6]];

const title = "What Makes Good Content? Insights From 3 Creators";
const date = "26 March 2025";
const readTime = "8 min";

const keywords = [
    "Creator insights",
    "Content strategy",
    "Content creators",
    "Creator community",
];

export const metadata = {
    title: title,
    description: "Crack the code to scroll-stopping content with learnings from three creators.",
    keywords: keywords,
    openGraph: {
        images: [resource.image],
        title: title,
        description: "Crack the code to scroll-stopping content with learnings from three creators.",
    },
    alternates: {
        canonical: resource.path,
    },
};

const Resource28 = async ({ params }) => {
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
                    Cracking the code in content creation
                </rp.h2>
                <rp.p>
                    What makes engaging content? Three creators broke the code with a mix of
                    authenticity, balanced formats, and strong visual branding. Their
                    approaches show how to hold attention and grow a loyal audience.
                </rp.p>
                <rp.h3>
                    Authentic connections through storytelling
                </rp.h3>
                <rp.ul>
                    <rp.li>
                        <b>Creator:</b> <rp.a href="https://www.instagram.com/zhysin/?hl=en">@zhysin</rp.a>
                    </rp.li>
                    <rp.li>
                        <b>Niche:</b> Food and beverage business
                    </rp.li>
                    <rp.li>
                        <b>Platforms:</b> Instagram, TikTok, YouTube
                    </rp.li>
                </rp.ul>
                <rp.p>
                    Claire invites viewers into her bakery, blending personal moments with
                    brand collaborations. From the first day, she turned running the business
                    into content, proving that transparency builds trust.
                </rp.p>
                <rp.p>
                    <rp.a href="https://www.instagram.com/p/DCbqGTFCmqI/?hl=en">
                        https://www.instagram.com/p/DCbqGTFCmqI/?hl=en
                    </rp.a>
                </rp.p>
                <rp.p>
                    Her cafe renovation series documents the reality of launching a bakery,
                    giving followers a reason to stick around for more behind-the-scenes
                    stories.
                </rp.p>
                <rp.p>
                    <rp.a href="https://m.youtube.com/shorts/V9TA_KEhqX8">
                        https://m.youtube.com/shorts/V9TA_KEhqX8
                    </rp.a>
                </rp.p>
                <rp.p>
                    The shift from flight attendant to baker is Claire's signature story. It
                    reinforces her credibility and delivers a unique selling point that brands
                    and audiences remember.
                </rp.p>
                <rp.h3>
                    Balancing branded and personal content
                </rp.h3>
                <rp.ul>
                    <rp.li>
                        <b>Creator:</b> <rp.a href="https://www.instagram.com/thenictionary/?hl=en">@thenictionary</rp.a> (Nicole)
                    </rp.li>
                    <rp.li>
                        <b>Niche:</b> Lifestyle and beauty
                    </rp.li>
                    <rp.li>
                        <b>Platforms:</b> Instagram, TikTok, Facebook
                    </rp.li>
                </rp.ul>
                <rp.p>
                    Nicole keeps branded posts aligned with her personal brand by partnering
                    with companies that fit her tone and visuals. That alignment keeps her feed
                    cohesive.
                </rp.p>
                <rp.p>
                    <rp.a href="https://docs.google.com/document/d/10AywoLQMTD-E0RhjnqQELne0E36_3E2twy_JT9-Vdpk/edit?usp=sharing">
                        Brand alignment guide
                    </rp.a>
                </rp.p>
                <rp.p>
                    <rp.a href="https://www.instagram.com/p/DCjOHgay4Ov/?hl=en">
                        https://www.instagram.com/p/DCjOHgay4Ov/?hl=en
                    </rp.a>
                </rp.p>
                <rp.p>
                    Her organic series on home ownership sets the stage for sponsored content.
                    A Sony partnership video slots naturally into that narrative, showing how a
                    campaign can enhance personal storytelling.
                </rp.p>
                <rp.p>
                    <rp.a href="https://www.instagram.com/p/C-RhtbJSNdt/?hl=en">
                        https://www.instagram.com/p/C-RhtbJSNdt/?hl=en
                    </rp.a>
                </rp.p>
                <rp.p>
                    Nicole aims for roughly a 70:30 split between personal and branded posts
                    and keeps engagement authentic by replying to comments on sponsored work.
                </rp.p>
                <rp.h3>
                    Leveraging visual branding
                </rp.h3>
                <rp.ul>
                    <rp.li>
                        <b>Creator:</b> <rp.a href="https://www.instagram.com/jordietaan/?hl=en">@jordietaan</rp.a>
                    </rp.li>
                    <rp.li>
                        <b>Niche:</b> Lifestyle and fashion
                    </rp.li>
                    <rp.li>
                        <b>Platform:</b> Instagram
                    </rp.li>
                </rp.ul>
                <rp.p>
                    Jordan's photography background powers a distinctive visual identity. His
                    reels, carousels, and PR features all follow a cinematic editing style with
                    a consistent palette.
                </rp.p>
                <rp.p>
                    <rp.a href="https://www.instagram.com/p/C6VhJ8ov37J/?hl=en&img_index=1">
                        https://www.instagram.com/p/C6VhJ8ov37J/?hl=en&img_index=1
                    </rp.a>
                </rp.p>
                <rp.p>
                    That consistency helps brands understand what a collaboration will look
                    like and keeps his audience coming back for the storytelling-first approach.
                </rp.p>
                <rp.p>
                    <rp.a href="https://www.instagram.com/p/C8WtSuNPPjZ/">
                        https://www.instagram.com/p/C8WtSuNPPjZ/
                    </rp.a>
                </rp.p>
                <rp.p>
                    A clear visual signature boosts discoverability. When viewers know what to
                    expect, they connect faster and stick around longer.
                </rp.p>
                <rp.h3>
                    Putting the lessons into practice
                </rp.h3>
                <rp.p>
                    Takeaways from these creators are simple: tell authentic stories, blend
                    branded work with personal narratives, and develop a visual language your
                    audience can instantly recognise.
                </rp.p>
            </rp.Page>
        </>
    );
};

export default Resource28;