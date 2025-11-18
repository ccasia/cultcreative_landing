import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";

const resource = resources[1];
const relatedResources = [resources[0], resources[2], resources[9]]; // Pick 3 related articles

const title = "Starting Your Signature Series";
const date = "23 April 2025";
const readTime = "5 min";

const keywords = [
    "Signature series",
    "Content planning",
    "Content strategy",
    "Signature content",
];

export const metadata = {
    title: title,
    description: "Learn how to start your signature series",
    keywords: keywords,
    openGraph: {
        images: [resource.image],
        title: title,
        description: "Learn how to start your signature series",
    },
    alternates: {
        canonical: resource.path,
    },
};

const Resource32 = async ({ params }) => {
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
                    What's a signature series?
                </rp.h2>
                <rp.p>
                    How does your favourite show to binge-watch keep you coming back for
                    more? Consistency, entertainment, value–these keywords come to mind.
                <br />
                <br />
                    It's the same case for a signature series.
                <br />
                <br />
                    A signature series is a set of recurring content that centers
                    around a theme, posted at a consistent schedule. It lets you explore
                    your niche, offers value to your audience, and builds consistency in
                    your content strategy. It's something audiences will recognise and
                    associate with you, turning you into the go-to-creator of your niche.
                </rp.p>
                <rp.h2>
                    Starting your signature series
                </rp.h2>
                <rp.p>
                    Content ideas for a series must be consistent and sustainable, which
                    is why it's important to plan and strategise your content production
                    and execution.
                <br />
                <br />
                    First, identify your theme and keep it in mind at every stage of
                    planning. Then, whip out your content calendar to see how your series
                    can fit between your usual personal and campaign content. Try shooting
                    a few ideas before you continue strategising. It might be more (or
                    less) complex than you imagined.
                <br />
                <br />
                    Any content can go into a signature series–GRWMs, reviews, vlogs–as
                    long as it's still within your niche and it has a strong theme that's
                    consistent throughout the series.
                <br />
                <br />
                    Try going deeper into your niche by going through its branches, and
                    see where it takes you.
                <br />
                <br />
                    <i>
                        <rp.a href="https://vt.tiktok.com/ZS6bnPApT/">
                            https://vt.tiktok.com/ZS6bnPApT/{" "}
                        </rp.a>
                    </i>
                <br />
                <br />
                    <i>
                        <b>Caption:</b> Try adapting series ideas from other niches to fit
                        yours.
                    </i>
                </rp.p>
                <rp.h2>
                    Brainstorming series ideas
                </rp.h2>
                <rp.p>
                    When you start brainstorming content ideas for your signature series,
                    remember that what makes a series is the <i>theme</i>. Stay consistent
                    with the chosen theme so your series doesn't lose direction.
                <br />
                <br />
                    Can't think of content ideas? The solution might be right in front of
                    you–in fact, you might be living it.
                <br />
                <br />
                    Think about your daily life–work commute, workout routine, hangouts
                    with friends–and ask yourself: are there aspects that you can spin
                    into fun, juicy content for a series?
                <br />
                <br />
                    Consider the value that it can bring to your audience, and how it can
                    shape your identity as a content creator. Additionally, content
                    derived from your routine is a safe bet to ensure consistency, but you
                    have to put in work to ensure it doesn't get boring.
                <br />
                <br />
                    Here are some ideas:
                </rp.p>
                <rp.ul>
                    <rp.li>Reviewing breakfast spots along your work commute</rp.li>
                    <rp.li>
                        Workout vlogs trying out different sports with different friends
                    </rp.li>
                    <rp.li>7-day challenge of meal prepping under a set budget</rp.li>
                </rp.ul>
                <rp.p>
                    You can also take inspiration from other niches or creators, and adapt
                    it to align with your content theme, personal branding, niche,
                    location, or audience. Remember: don&apos;t plagiarise.
                <br />
                <br />
                    <i>
                        <rp.a href="https://vt.tiktok.com/ZS6gpepTb/">
                            https://vt.tiktok.com/ZS6gpepTb/{" "}
                        </rp.a>
                    </i>
                <br />
                <br />
                    <i>
                        <b>Caption:</b> @kaitlyneats is an NYC-based creator who reviews
                        NYT's 100 best restaurants. Can you think of a way to put a local
                        spin on this?
                    </i>
                </rp.p>
                <rp.h2>
                    Making your signature series valuable
                </rp.h2>
                <rp.p>
                    Your signature series is your defining feature as a creator. And as a
                    creator, your content should have value that your audience can benefit
                    from–be it inspiring or educational.
                <br />
                <br />
                    When naming your series, frame it in a way that's beneficial for your
                    audience. For example, "My Morning Routine" doesn't bring value to
                    them. But, "The Routine That Gets Me Out Of Bed In The AM" implies
                    that you have a great morning routine, and they want that too.
                <br />
                <br />
                    <b>Tip:</b> Have a unique, short hashtag so your followers can find
                    your series easily
                </rp.p>
                <rp.h2>
                    Execution and gathering feedback
                </rp.h2>
                <rp.p>
                    Feedback is also an important aspect of kickstarting a signature
                    series.&nbsp; Pay attention to your engagement metrics – saves and
                    shares are good indicators of the value and lifespan of your series.
                <br />
                <br />
                    Besides that, interact with your audience in the comments. Acknowledge
                    their feedback, and try incorporating it into your series wherever you
                    see fit.
                </rp.p>
            </rp.Page>
            
        </>
    );
};

export default Resource32;
