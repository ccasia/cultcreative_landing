import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";

const resource = resources[4];
const relatedResources = [resources[2], resources[3], resources[5]];

const title = "How-To: Instagram Creator Account";
const date = "2 April 2025";
const readTime = "4 min";

const keywords = [
    "Instagram",
    "Instagram creator account",
    "Creator tools",
];

export const metadata = {
    title: title,
    description: "Learn how to create an Instagram creator account",
    keywords: keywords,
    openGraph: {
        images: [resource.image],
        title: title,
        description: "Learn how to create an Instagram creator account",
    },
    alternates: {
        canonical: resource.path,
    },
};

const Resource29 = async ({ params }) => {
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
                    Why switch to a creator account
                </rp.h2>
                <rp.p>
                    Switching to an Instagram creator account unlocks valuable insights,
                    audience demographics, ad tools, and other features that help you manage
                    your presence and create better content.
                <br />
                <br />
                    These tools help you understand which content resonates, so you can reach
                    the right people with the right stories.
                </rp.p>
                <rp.h3>
                    What sets the creator account apart
                </rp.h3>
                <rp.p>
                    Tailored for creators, public figures, and anyone building community,
                    the creator account surfaces the data you need to grow.
                <br />
                <br />
                    Detailed insights, such as campaign engagement rates or your followers'
                    top locations, become easier to track. When you know what works, you can
                    strengthen your connection with your audience.
                </rp.p>
                <rp.h3>
                    Core tools at your fingertips
                </rp.h3>
                <rp.ul>
                    <rp.li>
                        <b>Insights:</b> View performance trends, engagement rates, reach,
                        and impressions in one place.
                    </rp.li>
                    <rp.li>
                        <b>Content management:</b> Track ads, partnership posts, and branded
                        campaigns with dedicated dashboards.
                    </rp.li>
                    <rp.li>
                        <b>Professional dashboard:</b> Access tools, tips, and resources that
                        keep your content strategy on track.
                    </rp.li>
                </rp.ul>
                <rp.h3>
                    How to make the switch
                </rp.h3>
                <rp.p>
                    Changing from a personal profile to a creator account takes less than a
                    minute.
                <br />
                <br />
                    Tap the <b>three lines</b> at the top of your profile, choose <b>Account
                    type and tools</b>, then select <b>Switch to professional account</b>.
                <br />
                <br />
                    Pick the <b>Creator</b> option and choose the category that describes you
                    best. Once saved, Instagram unlocks its professional toolset for you.
                </rp.p>
                <rp.h3>
                    Navigating your professional dashboard
                </rp.h3>
                <rp.p>
                    From your profile, open the <b>Professional dashboard</b> to find
                    <b>Insights</b>, <b>Your tools</b>, and <b>Tips and resources</b>.
                <br />
                <br />
                    Start with the <b>Accounts reached</b> tab to see how many people your
                    content touches and to review top-performing posts.
                <br />
                <br />
                    Tap <b>View insights</b> on any post for a breakdown of reach, impressions,
                    and engagement. Look beyond likes and track <b>Saves</b> to gauge lasting
                    value.
                <br />
                <br />
                    Explore the <b>Total followers</b> tab to learn about your follower growth,
                    demographics, and the <b>Most active times</b> data that helps you post when
                    your audience is online.
                </rp.p>
                <rp.h3>
                    More tools to explore
                </rp.h3>
                <rp.p>
                    Branded content labels, partnership ad tracking, and DM filtering come
                    bundled with the creator account, making campaign management easier.
                <br />
                <br />
                    The Inspiration tab surfaces reels and trending audio, giving you a steady
                    flow of ideas to test in your own content strategy.
                </rp.p>
            </rp.Page>
        </>
    );
};

export default Resource29;