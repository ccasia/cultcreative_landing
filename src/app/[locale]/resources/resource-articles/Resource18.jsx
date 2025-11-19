import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[14];
const relatedResources = [resources[13], resources[15], resources[16]];

const title = "How to Hook: Why You Need to Nail the First 3 Seconds of Your Content";
const date = "22 January 2025";

// Article content for reading time calculation
const articleContent = [
  "What's a hook?",
  "The first 3 seconds could make or break your video.",
  "Facebook reports that 47% of users determine the value of the content in the first 3 seconds as they scroll through their feeds, which is why you have to hook them in ASAP.",
  "A hook is a strong opening that grabs your viewers’ attention and makes them watch the rest of your content.",
  "You could have the solution to your audience’s most grating pain points, but if it’s concealed behind an ineffective hook, they won’t stop scrolling.",
  "Whether you’re an experienced creator or a newbie, getting your hooks right is the key to becoming a scroll-stopper.",
  "What makes a killer hook, and why is it important?",
  "A good hook should garner curiousity.",
  "It could be anything–an unpopular opinion, a funny anecdote, or you could just say less and let the visuals do the hooking–as long as it piques your viewers’ interest and makes them want to know more.",
  "A stronger hook equals higher viewer retention, which means better video performance.",
  "The better your metrics are, the more likely the algorithm will push your content on For You pages.",
  "That’s how you reach a wider audience and grow as a creator.",
  "Executing effective hooks To first execute an effective hook, you need to understand your target audience.",
  "When planning your content, take note of their goals, pain points, and interests, and find a way to provide value to them via your hook.",
  "Align your hook with your branding, tone of voice, and content theme.",
  "Going in a different direction (like using humor that’s not your usual style) could put off your followers, but don’t be afraid to experiment.",
  "Hooks are easy to play around with, and it could garner unexpected results that’ll help you in the long run.",
  "Once you start experimenting, it’s important to analyse your stats.",
  "Pay more attention to metrics like viewer retention rates and drop-off points to understand how your hook affects your content. 3 points to keep in mind <b>Intrigue.</b> Your hook should make your viewers want to know what happens next. <b>Emotion.</b> Hook them in by creating a connection through humor or empathy (e.g. setting a situation they can relate to).",
  "You could also feign controversy–bait them in with a hot take or do something cringy–once they’re hooked, you can explain yourself further. <b>Speed...</b> is of the essence.",
  "Convey the hook within the first 3 seconds (or less) of your video to provide instant value to your audience.",
  "Examples of hook types We’ve gathered a few common hook types to get you started.",
  "Try experimenting with these: <b>Bait:</b> “Hear me out–I’m not a fan of [popular thing]…”, “Do not buy this…” <b>Numbers:</b> “5 surefire ways to…”, “3 things you need to do to..” <b>Testimony:</b> “I did [thing] so you don’t have to…”, “This is how I rate a product…” <b>Visual:</b> Aesthetically pleasing or unexpected visuals. <b>Story:</b> “I made this mistake, and here’s what happened…”, <b>Question:</b> “Ever wonder why…?” <b>Humor</b> - A funny, out-of-pocket script or visual. <b>Urgency</b> - “This is only gonna take 15 seconds of your time…”",
];

const readTime = calculateReadingTimeFromContent(articleContent);




const keywords = [
    "content hooks",
    "video strategy",
    "creator tactics",
    "viewer retention",
    "social media",
];

export const metadata = {
    title: title,
    description: "Master the art of hooking viewers in the first 3 seconds and boost your content performance across all platforms.",
    keywords: keywords,
    openGraph: {
        images: [resource.image],
        title: title,
        description: "Master the art of hooking viewers in the first 3 seconds and boost your content performance across all platforms.",
    },
    alternates: {
        canonical: resource.path,
    },
};

const Resource19 = async ({ params }) => {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <>
            <rp.Page
                title={title}
                date={date}
                readTime={readTime}
                image={resource.image}
                keywords={keywords}
                relatedResources={relatedResources}
            >
                <rp.h2>What's a hook?</rp.h2>
                <rp.p>
                    The first 3 seconds could make or break your video. Facebook reports that
                    <rp.a href="https://www.facebook.com/business/news/updated-features-for-video-ads"> 47% of users determine the value of the
                        content in the first 3 seconds</rp.a> as they scroll through their feeds, which is why you have to hook them in ASAP.
                </rp.p>
                <rp.p>
                    A hook is a strong opening that grabs your viewers’ attention and makes them watch the rest of your content.
                    You could have the solution to your audience’s most grating pain points, but if it’s concealed behind
                    an ineffective hook, they won’t stop scrolling.
                </rp.p>
                <rp.p>
                    Whether you’re an experienced creator or a newbie, getting your hooks right is the key to becoming a scroll-stopper.
                </rp.p>
                <rp.h2>What makes a killer hook, and why is it important?</rp.h2>
                <rp.p>
                    A good hook should garner curiousity. It could be anything–an unpopular opinion, a funny anecdote, or
                    you could just say less and let the visuals do the hooking–as long as it piques your viewers’
                    interest and makes them want to know more.
                </rp.p>
                <rp.p>
                    A stronger hook equals higher viewer retention, which means better video performance.
                    The better your metrics are, the more likely the algorithm will push your content on For You pages.
                    That’s how you reach a wider audience and grow as a creator.
                </rp.p>
                <rp.h2>Executing effective hooks</rp.h2>
                <rp.p>
                    To first execute an effective hook, you need to understand your target audience. When planning your content,
                    take note of their goals, pain points, and interests, and find a way to provide value to them via your hook.
                </rp.p>
                <rp.p>
                    Align your hook with your branding, tone of voice, and content theme. Going in a different direction
                    (like using humor that’s not your usual style) could put off your followers, but don’t be afraid to experiment.
                    Hooks are easy to play around with, and it could garner unexpected results that’ll help you in the long run.
                </rp.p>
                <rp.p>
                    Once you start experimenting, it’s important to analyse your stats. Pay more attention to metrics like viewer
                    retention rates and drop-off points to understand how your hook affects your content.
                </rp.p>
                <rp.h2>
                    3 points to keep in mind
                </rp.h2>
                <rp.ol>
                    <rp.li>
                        <b>Intrigue.</b> Your hook should make your viewers want to know what happens next.
                    </rp.li>
                    <rp.li>
                        <b>Emotion.</b> Hook them in by creating a connection through humor or empathy
                        (e.g. setting a situation they can relate to). You could also feign controversy–bait
                        them in with a hot take or do something cringy–once they’re hooked, you can explain
                        yourself further.
                    </rp.li>
                    <rp.li>
                        <b>Speed...</b> is of the essence. Convey the hook within the first 3 seconds
                        (or less) of your video to provide instant value to your audience.
                    </rp.li>
                </rp.ol>
                <rp.h2>
                    Examples of hook types
                </rp.h2>
                <rp.p>
                    We’ve gathered a few common hook types to get you started. Try experimenting with these:
                </rp.p>
                <rp.ul>
                    <rp.li>
                        <b>Bait:</b> “Hear me out–I’m not a fan of [popular thing]…”, “Do not buy this…”
                    </rp.li>
                    <rp.li>
                        <b>Numbers:</b> “5 surefire ways to…”, “3 things you need to do to..”
                    </rp.li>
                    <rp.li>
                        <b>Testimony:</b> “I did [thing] so you don’t have to…”, “This is how I rate a product…”
                    </rp.li>
                    <rp.li>
                        <b>Visual:</b> Aesthetically pleasing or unexpected visuals.
                    </rp.li>
                </rp.ul>
                <rp.IgEmbed url="https://www.instagram.com/reel/DA7yPxkyxET/?igsh=MWFjNWpqaHdxMTB1Nw==" />
                <rp.ul>
                    <rp.li>
                        <b>Story:</b> “I made this mistake, and here’s what happened…”,
                    </rp.li>
                    <rp.li>
                        <b>Question:</b> “Ever wonder why…?”
                    </rp.li>
                    <rp.li>
                        <b>Humor</b> - A funny, out-of-pocket script or visual.
                    </rp.li>
                </rp.ul>
                <rp.IgEmbed url="https://www.instagram.com/reel/C_hmk2KvcH7/?igsh=MTdkYXV3cXlidzdnaA==" />
                <rp.ul>
                    <rp.li>
                        <b>Urgency</b> - “This is only gonna take 15 seconds of your time…”
                    </rp.li>
                </rp.ul>
            </rp.Page>
        </>
    );
};

export default Resource19;