import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[3];
const relatedResources = [resources[2], resources[4], resources[5]];

const title = "4 Steps to Find Your Niche as a Content Creator";
const date = "9 April 2025";

// Article content for reading time calculation
const articleContent = [
  "Why it is important to find your niche With the content creator scene booming, it is more important than ever to stand out.",
  "Having a niche helps you do exactly that, and more. <br /> <br /> A niche is your <i>thing</i> as a content creator.",
  "It not only sets you apart, but it also helps you build a dedicated audience you can connect with.",
  "By identifying your niche, you develop expertise in that area, establishing yourself as the go-to creator for whatever niche you choose.",
  "This, in turn, opens doors to collaborations and monetisation opportunities. <br /> <br /> So, how do you find your niche? <b>Start with what you like (and know)</b> Look inward and find aspects of yourself you want to share with the world.",
  "Maybe you want to document a new hobby, or you want to tell stories from unique experiences in your life. <br /> <br /> Your online consumption also helps you spot your niche.",
  "Look at your feed - which creators do you follow, and what content do you enjoy on your For You Page?",
  "How much do those reflect your interests? <br /> <br /> Another way to surface potential niches is to look at how people interact with you.",
  "What are the areas where friends ask for your opinion?",
  "Do they come to you for fashion tips?",
  "Do people compliment your cooking? <br /> <br /> From these prompts, list three to five things you enjoy and start from there. <b>Assess your knowledge and skills</b> Put on your thinking hat and gauge how much you know about your potential niches.",
  "If you were asked to give a 30-minute presentation with no prep, how much could you share about the topic?",
  "What value can you offer your target audience? <br /> <br /> Remember that offering value does not require you to be an expert.",
  "Sharing your learning journey and being transparent about your experience keeps your content relatable and engaging. <br /> <br /> https://www.tiktok.com/@leeeeming/video/7383297883484720391?_r=1&_t=8fOTyhU5MWH <br /> <br /> Caption: @leeeming shares relatable motherhood content, often with humor that packs a punch. <b>Dive deeper into your chosen niche</b> Study successful creators in similar niches.",
  "Note which content types perform best (GRWMs, day-in-the-life videos, reviews).",
  "Comments are a good indicator of what the audience likes to see and highlight the niche potential. <br /> <br /> This is where tools like TikTok Creator Search Insights are useful.",
  "The tool surfaces similar creators, suggested content, and even content gaps , which are topics users search for but do not frequently see in their feeds. <br /> <br /> Caption: @imfzhd is a sneakers creator known for transparent reviews and a sleek editing style. <b>Define your unique selling point</b> A unique selling point sets you apart in your niche.",
  "Ask yourself what is missing in the space and how you can bring a fresh perspective. <br /> <br /> Using your location as part of your storytelling is a great starting point.",
  "Maybe a topic is thriving overseas but lacks local coverage.",
  "That is your opportunity to add regional insight. <br /> <br /> Get specific - no matter how hyper-niche it feels, there is an audience waiting for you.",
  "If you are a skincare enthusiast, you could share your routine or the products you have tried and loved. <br /> <br /> https://www.instagram.com/p/DEM4wVoyYTE/ <br /> <br /> Caption: @definitelymayb_ is a dancer and creator sharing authentic content about the women's dance scene in Kuala Lumpur.",
  "Keep in mind...",
  "Your first niche might not be <i>it</i>, but do not be afraid of experimenting.",
  "Stay consistent, listen to your audience feedback, and pivot when necessary.",
];

const readTime = calculateReadingTimeFromContent(articleContent);

const keywords = [
    "Content niche",
    "Personal brand",
    "Content creators",
    "Content strategy",
];

export const metadata = {
    title: title,
    description: "Learn how to find your niche as a content creator",
    keywords: keywords,
    openGraph: {
        images: [resource.image],
        title: title,
        description: "Learn how to find your niche as a content creator",
    },
    alternates: {
        canonical: resource.path,
    },
};

const Resource30 = async ({ params }) => {
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
                    Why it is important to find your niche
                </rp.h2>
                <rp.p>
                    With the content creator scene booming, it is more important than ever
                    to stand out. Having a niche helps you do exactly that, and more.
                <br />
                <br />
                    A niche is your <i>thing</i> as a content creator. It not only sets you
                    apart, but it also helps you build a dedicated audience you can connect
                    with. By identifying your niche, you develop expertise in that area,
                    establishing yourself as the go-to creator for whatever niche you choose.
                    This, in turn, opens doors to collaborations and monetisation
                    opportunities.
                <br />
                <br />
                    So, how do you find your niche?
                </rp.p>
                <rp.ol>
                    <rp.li>
                        <b>Start with what you like (and know)</b>
                        <rp.p>
                            Look inward and find aspects of yourself you want to share with the
                            world. Maybe you want to document a new hobby, or you want to tell
                            stories from unique experiences in your life.
                        <br />
                        <br />
                            Your online consumption also helps you spot your niche. Look at your
                            feed - which creators do you follow, and what content do you enjoy on
                            your For You Page? How much do those reflect your interests?
                        <br />
                        <br />
                            Another way to surface potential niches is to look at how people
                            interact with you. What are the areas where friends ask for your
                            opinion? Do they come to you for fashion tips? Do people compliment
                            your cooking?
                        <br />
                        <br />
                            From these prompts, list three to five things you enjoy and start from
                            there.
                        </rp.p>
                    </rp.li>
                    <rp.li>
                        <b>Assess your knowledge and skills</b>
                        <rp.p>
                            Put on your thinking hat and gauge how much you know about your
                            potential niches. If you were asked to give a 30-minute presentation
                            with no prep, how much could you share about the topic? What value can
                            you offer your target audience?
                        <br />
                        <br />
                            Remember that offering value does not require you to be an expert.
                            Sharing your learning journey and being transparent about your
                            experience keeps your content relatable and engaging.
                        <br />
                        <br />
                            <rp.a href="https://www.tiktok.com/@leeeeming/video/7383297883484720391?_r=1&_t=8fOTyhU5MWH">
                                https://www.tiktok.com/@leeeeming/video/7383297883484720391?_r=1&_t=8fOTyhU5MWH
                            </rp.a>
                        <br />
                        <br />
                            Caption: <rp.a href="https://www.tiktok.com/@leeeeming">@leeeming</rp.a>
                            shares relatable motherhood content, often with humor that packs a
                            punch.
                        </rp.p>
                    </rp.li>
                    <rp.li>
                        <b>Dive deeper into your chosen niche</b>
                        <rp.p>
                            Study successful creators in similar niches. Note which content types
                            perform best (GRWMs, day-in-the-life videos, reviews). Comments are a
                            good indicator of what the audience likes to see and highlight the
                            niche potential.
                        <br />
                        <br />
                            This is where tools like TikTok Creator Search Insights are useful.
                            The tool surfaces similar creators, suggested content, and even{" "}
                            <rp.a href="https://www.cultcreativeasia.com/my/resources/how-to-tiktok-creator-search-insights">
                                content gaps
                            </rp.a>
                            , which are topics users search for but do not frequently see in their
                            feeds.
                        <br />
                        <br />
                            Caption: <rp.a href="https://www.instagram.com/imfzhd">@imfzhd</rp.a>
                            is a sneakers creator known for transparent reviews and a sleek
                            editing style.
                        </rp.p>
                    </rp.li>
                    <rp.li>
                        <b>Define your unique selling point</b>
                        <rp.p>
                            A unique selling point sets you apart in your niche. Ask yourself what
                            is missing in the space and how you can bring a fresh perspective.
                        <br />
                        <br />
                            Using your location as part of your storytelling is a great starting
                            point. Maybe a topic is thriving overseas but lacks local coverage.
                            That is your opportunity to add regional insight.
                        <br />
                        <br />
                            Get specific - no matter how hyper-niche it feels, there is an
                            audience waiting for you. If you are a skincare enthusiast, you could
                            share your routine or the products you have tried and loved.
                        <br />
                        <br />
                            <rp.a href="https://www.instagram.com/p/DEM4wVoyYTE/">
                                https://www.instagram.com/p/DEM4wVoyYTE/
                            </rp.a>
                        <br />
                        <br />
                            Caption: <rp.a href="https://www.instagram.com/definitelymayb_/">
                                @definitelymayb_
                            </rp.a>
                            is a dancer and creator sharing authentic content about the women's
                            dance scene in Kuala Lumpur.
                        </rp.p>
                    </rp.li>
                </rp.ol>
                <rp.h3>
                    Keep in mind...
                </rp.h3>
                <rp.p>
                    Your first niche might not be <i>it</i>, but do not be afraid of
                    experimenting. Stay consistent, listen to your audience feedback, and
                    pivot when necessary.
                </rp.p>
            </rp.Page>
        </>
    );
};

export default Resource30;