import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[10];
const relatedResources = [resources[8], resources[9], resources[11]];

const title = "UGC Ideas To Hook Your Viewers This CNY";
const date = "12 February 2025";

// Article content for reading time calculation
const articleContent = [
  "Festive spending surges on social feeds Malaysians love gearing up for Chinese New Year.",
  "Search interest around outfits, gifting, and reunion dining spikes weeks before the celebration, which means the creators you partner with can influence buying decisions right now.",
  "Smart user generated content keeps the hype building while paid spots like TV and billboards run in the background.",
  "Here are CNY storylines to brief your creators on so their videos land quickly and feel authentic.",
  "Spotlight reunion dinners and staycations Food and hospitality brands can lean into the rise of foodie creators who document dining adventures.",
  "Invite them to film tasting menus, behind the scenes prep, or limited time reunion sets that viewers can book instantly.",
  "Film a creator led kitchen tour that shows how signature prosperity dishes are made.",
  "Capture family style plating and plating hacks viewers can recreate at home.",
  "Turn reviews into reservation nudges by including booking links in captions or overlays.",
  "Celebrate personal style and gifting moments Fashion and beauty shoppers hunt for inspiration the moment red lanterns appear in malls.",
  "Partner with creators who have a recognisable look and briefing them to produce storytelling content rather than simple hauls.",
  "Build transition edits that take viewers from casual errands to reunion dinner glam using your hero pieces.",
  "Share gift guides sorted by relationship or budget so shoppers can copy the cart.",
  "Encourage creators to mix archive items with new arrivals to highlight versatility.",
  "Lean into traditions and symbolism Cultural context matters.",
  "Work with storytellers who can explain why specific colours, ingredients, or rituals matter so the content resonates with viewers across generations.",
  "Break down the meaning behind reunion dishes, house visits, or angpow etiquette.",
  "Highlight philanthropic or community initiatives your brand supports during the season.",
  "Pair traditional elements with modern twists so the content feels fresh but respectful.",
  "Track what success looks like Festive content moves quickly, so set goals that cover both reach and action.",
  "Monitor saves, shares, comment sentiment, and click through rates to see which creators and hooks are driving conversions.",
  "Keep a running library of winning concepts.",
  "When Hari Raya and Deepavali approach, you will already know which creators to rebook and how to brief them faster. <div> <a > Plan your CNY campaign with Cult Creative </a> </div>",
];

const readTime = calculateReadingTimeFromContent(articleContent);

const keywords = [
    "ugc",
    "chinese new year",
    "content strategy",
    "festive campaigns",
    "creator marketing",
];

export const metadata = {
    title: title,
    description: "Plan Chinese New Year UGC campaigns that cut through the noise and inspire festive purchases.",
    keywords: keywords,
    openGraph: {
        images: [resource.image],
        title: title,
        description: "Plan Chinese New Year UGC campaigns that cut through the noise and inspire festive purchases.",
    },
    alternates: {
        canonical: resource.path,
    },
};

const Resource23 = async ({ params }) => {
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
                    Festive spending surges on social feeds
                </rp.h2>
                <rp.p>
                    Malaysians love gearing up for Chinese New Year. Search interest around outfits, gifting, and
                    reunion dining spikes weeks before the celebration, which means the creators you partner with can
                    influence buying decisions right now.
                </rp.p>
                <rp.p>
                    Smart user generated content keeps the hype building while paid spots like TV and billboards run in
                    the background. Here are CNY storylines to brief your creators on so their videos land quickly and
                    feel authentic.
                </rp.p>
                <rp.h3>
                    Spotlight reunion dinners and staycations
                </rp.h3>
                <rp.p>
                    Food and hospitality brands can lean into the rise of foodie creators who document dining
                    adventures. Invite them to film tasting menus, behind the scenes prep, or limited time reunion sets
                    that viewers can book instantly.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        Film a creator led kitchen tour that shows how signature prosperity dishes are made.
                    </rp.li>
                    <rp.li>
                        Capture family style plating and plating hacks viewers can recreate at home.
                    </rp.li>
                    <rp.li>
                        Turn reviews into reservation nudges by including booking links in captions or overlays.
                    </rp.li>
                </rp.ul>
                <rp.h3>
                    Celebrate personal style and gifting moments
                </rp.h3>
                <rp.p>
                    Fashion and beauty shoppers hunt for inspiration the moment red lanterns appear in malls. Partner
                    with creators who have a recognisable look and briefing them to produce storytelling content rather
                    than simple hauls.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        Build transition edits that take viewers from casual errands to reunion dinner glam using your
                        hero pieces.
                    </rp.li>
                    <rp.li>
                        Share gift guides sorted by relationship or budget so shoppers can copy the cart.
                    </rp.li>
                    <rp.li>
                        Encourage creators to mix archive items with new arrivals to highlight versatility.
                    </rp.li>
                </rp.ul>
                <rp.h3>
                    Lean into traditions and symbolism
                </rp.h3>
                <rp.p>
                    Cultural context matters. Work with storytellers who can explain why specific colours, ingredients,
                    or rituals matter so the content resonates with viewers across generations.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        Break down the meaning behind reunion dishes, house visits, or angpow etiquette.
                    </rp.li>
                    <rp.li>
                        Highlight philanthropic or community initiatives your brand supports during the season.
                    </rp.li>
                    <rp.li>
                        Pair traditional elements with modern twists so the content feels fresh but respectful.
                    </rp.li>
                </rp.ul>
                <rp.h3>
                    Track what success looks like
                </rp.h3>
                <rp.p>
                    Festive content moves quickly, so set goals that cover both reach and action. Monitor saves, shares,
                    comment sentiment, and click through rates to see which creators and hooks are driving conversions.
                </rp.p>
                <rp.p>
                    Keep a running library of winning concepts. When Hari Raya and Deepavali approach, you will already
                    know which creators to rebook and how to brief them faster.
                </rp.p>
                <div className="text-center mt-10">
                    <a
                        className="inline-flex items-center gap-2 rounded-full bg-[#1340FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0f33c7]"
                        href="https://app.cultcreativeasia.com/auth/jwt/register"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Plan your CNY campaign with Cult Creative
                    </a>
                </div>
            </rp.Page>
        </>
    );
};

export default Resource23;