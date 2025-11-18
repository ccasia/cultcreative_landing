import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";

const resource = resources[9];
const relatedResources = [resources[7], resources[8], resources[10]];

const title = "Why Brands Need To Tap Into Internet Culture";
const date = "26 February 2025";
const readTime = "6 min";

const keywords = [
    "internet culture",
    "brand strategy",
    "social media trends",
    "creator marketing",
    "tiktok",
];

export const metadata = {
    title: title,
    description: "Learn how brands can earn cultural credibility by embracing internet trends with the right creators.",
    keywords: keywords,
    openGraph: {
        images: [resource.image],
        title: title,
        description: "Learn how brands can earn cultural credibility by embracing internet trends with the right creators.",
    },
    alternates: {
        canonical: resource.path,
    },
};

const Resource24 = async ({ params }) => {
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
                    Internet culture moves faster than campaign decks
                </rp.h2>
                <rp.p>
                    A few words can take over TikTok overnight. Creator Jools Lebron proved it with the now iconic
                    "very demure, very mindful" sound that dominated feeds, stitches, and comment sections. The
                    brands that jumped in quickly, including
                    <rp.a href="https://www.tiktok.com/@colorwow.hair/video/7403397128451624238?is_from_webapp=1&sender_device=pc&web_id=7418086993306945030">
                        Colour Wow
                    </rp.a>
                    and
                    <rp.a href="https://www.tiktok.com/@patrickta/video/7403511464062995755?is_from_webapp=1&sender_device=pc&web_id=7418086993306945030">
                        Patrick Ta
                    </rp.a>
                    , rode the wave by collaborating with Lebron herself and earned millions of organic impressions in
                    the process.
                </rp.p>
                <rp.p>
                    These moments show that cultural literacy is no longer a nice to have. It is a competitive edge for
                    marketers who want to speak the same language as their community.
                </rp.p>
                <rp.h3>
                    Trends deliver more than reach
                </rp.h3>
                <rp.p>
                    Joining the right conversation signals that your brand understands its audience. The payoff goes
                    beyond vanity metrics; it builds social currency and keeps your brand top of mind when consumers are
                    ready to buy.
                </rp.p>
                <rp.p>
                    <rp.a href="https://www.tiktok.com/@duolingo?is_from_webapp=1&sender_device=pc">
                        Duolingo
                    </rp.a>
                    grew a fan base of millions by anchoring its TikTok presence around chaotic, meme-driven content.
                    By tapping into references like The Bear, BRAT Summer, and creator catchphrases, the brand turned a
                    language app into a pop culture icon. Luxury labels such as
                    <rp.a href="https://www.tiktok.com/@marcjacobs?is_from_webapp=1&sender_device=pc">
                        Marc Jacobs
                    </rp.a>
                    have followed suit, pairing designer drops with creator-generated stories to stay relevant to Gen Z.
                </rp.p>
                <rp.h3>
                    Speak the community's language
                </rp.h3>
                <rp.p>
                    Memes fall flat when they feel like forced ads. Brands earn credibility when they immerse
                    themselves in the jokes, comment threads, and creator-driven lore that their audience already loves.
                    That context makes it easier to co-create content that feels authentic instead of opportunistic.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        Listen before you post. Track the creators, keywords, and sounds your target audience interacts
                        with every day.
                    </rp.li>
                    <rp.li>
                        Partner with culture shapers, not just influencers with reach. They provide the nuance that
                        keeps your campaigns from feeling like brand-speak.
                    </rp.li>
                    <rp.li>
                        Add your brand twist while staying true to the original bit. The best executions feel like an
                        inside joke you were invited to, not a billboard.
                    </rp.li>
                </rp.ul>
                <rp.h3>
                    Measure cultural relevance
                </rp.h3>
                <rp.p>
                    Traditional metrics such as impressions and click-through rate still matter, but layering on
                    qualitative signals gives you the full picture. Monitor comment sentiment, saves, duets, and creator
                    shoutouts to gauge whether your brand feels like part of the community.
                </rp.p>
                <rp.p>
                    Keep a swipe file of the cultural moments you joined, what resonated, and the creators who helped
                    you break through. Over time you will build a playbook that lets you move faster without losing
                    alignment.
                </rp.p>
                <div className="text-center mt-10">
                    <a
                        className="inline-flex items-center gap-2 rounded-full bg-[#1340FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0f33c7]"
                        href="https://app.cultcreativeasia.com/auth/jwt/register"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Connect with creators who speak internet culture
                    </a>
                </div>
            </rp.Page>
        </>
    );
};

export default Resource24;