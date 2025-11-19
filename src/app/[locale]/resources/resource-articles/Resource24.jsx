import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[8];
const relatedResources = [resources[6], resources[7], resources[9]];

const title = "How to Develop Your Personal Brand as a Content Creator";
const date = "5 March 2025";

// Article content for reading time calculation
const articleContent = [
  "Personal branding is how creators build trust Your personal brand is the promise you make to your audience every time your content appears in their feed.",
  "It covers the values you stand for, the tone you use, and the experiences you create for collaborators.",
  "When all three line up, brands can immediately recognise why you are the right creator for their brief.",
  "In a crowded creator economy, clarity beats volume.",
  "A well-defined brand helps you negotiate confidently, attracts recurring partnerships, and ensures new followers understand what to expect from you within a few seconds.",
  "Define your brand foundation Start by articulating the core of who you are and what you want to be known for.",
  "A written brand statement keeps you aligned when opportunities or trends feel distracting.",
  "What do you want people to feel after consuming your content?",
  "Which values or beliefs will you never compromise on to secure a collaboration?",
  "How do your skills or experiences solve problems for your audience or for the brands you work with?",
  "Understand the audience you serve Map the exact community you want to reach, their pain points, and the outcomes they want.",
  "Creators who speak directly to a specific group convert better and deliver stronger campaign results.",
  "Build simple personas and align each content idea with a desired transformation.",
  "If your niche is emerging creators, teach them how to pitch, price, and produce content with less friction.",
  "If you help brands, focus on insights they can action immediately.",
  "Design a recognisable presence A cohesive look and feel stabilises your brand even as you test new formats.",
  "Create lightweight guidelines that cover colours, typography, editing styles, and on-screen tone so every video or post feels unmistakably you.",
  "Choose one hero colour palette and stick to it across thumbnails, captions, and graphics.",
  "Collect visual references that capture your vibe and revisit them before new shoots or design sessions.",
  "Highlight signature phrases or hooks that make your intros instantly memorable.",
  "Our guide on nailing the first three seconds shows you how to sharpen those openings.",
  "Build signature content pillars Anchor your weekly schedule around three to four pillars that reinforce your positioning.",
  "Rotate between educational breakdowns, behind-the-scenes moments, and proof-of-work stories so viewers see both expertise and personality.",
  "Teach: share frameworks, checklists, or mini workshops that help your audience take action.",
  "Show: publish case studies or campaign recaps that demonstrate the results you drive for clients.",
  "Connect: post relatable stories or creator diary entries that humanise your brand and spark comments.",
  "Protect trust while you grow Every collaboration should reinforce, not dilute, the standards you set.",
  "Develop a quick vetting checklist so you can decline offers that do not align with your beliefs or audience needs.",
  "Track the feedback you receive from community members and adjust your messaging when expectations shift.",
  "A personalised brand toolkit - containing your bio, stats, tone guidelines, and partnership process - helps you stay consistent as your team expands.",
  "Revisit it quarterly to capture new wins, refine positioning, and document the kind of work you want next. <div> <a > Build your creator brand with Cult Creative </a> </div>",
];

const readTime = calculateReadingTimeFromContent(articleContent);

const keywords = [
    "personal brand",
    "creator strategy",
    "content pillars",
    "brand storytelling",
    "creator marketing",
];

export const metadata = {
    title: title,
    description: "Build a personal brand that resonates with your niche and unlocks consistent collaborations.",
    keywords: keywords,
    openGraph: {
        images: [resource.image],
        title: title,
        description: "Build a personal brand that resonates with your niche and unlocks consistent collaborations.",
    },
    alternates: {
        canonical: resource.path,
    },
};

const Resource25 = async ({ params }) => {
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
                    Personal branding is how creators build trust
                </rp.h2>
                <rp.p>
                    Your personal brand is the promise you make to your audience every time your content appears in
                    their feed. It covers the values you stand for, the tone you use, and the experiences you create
                    for collaborators. When all three line up, brands can immediately recognise why you are the right
                    creator for their brief.
                </rp.p>
                <rp.p>
                    In a crowded creator economy, clarity beats volume. A well-defined brand helps you negotiate
                    confidently, attracts recurring partnerships, and ensures new followers understand what to expect
                    from you within a few seconds.
                </rp.p>
                <rp.h3>
                    Define your brand foundation
                </rp.h3>
                <rp.p>
                    Start by articulating the core of who you are and what you want to be known for. A written brand
                    statement keeps you aligned when opportunities or trends feel distracting.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        What do you want people to feel after consuming your content?
                    </rp.li>
                    <rp.li>
                        Which values or beliefs will you never compromise on to secure a collaboration?
                    </rp.li>
                    <rp.li>
                        How do your skills or experiences solve problems for your audience or for the brands you work
                        with?
                    </rp.li>
                </rp.ul>
                <rp.h3>
                    Understand the audience you serve
                </rp.h3>
                <rp.p>
                    Map the exact community you want to reach, their pain points, and the outcomes they want. Creators
                    who speak directly to a specific group convert better and deliver stronger campaign results.
                </rp.p>
                <rp.p>
                    Build simple personas and align each content idea with a desired transformation. If your niche is
                    emerging creators, teach them how to pitch, price, and produce content with less friction. If you
                    help brands, focus on insights they can action immediately.
                </rp.p>
                <rp.h3>
                    Design a recognisable presence
                </rp.h3>
                <rp.p>
                    A cohesive look and feel stabilises your brand even as you test new formats. Create lightweight
                    guidelines that cover colours, typography, editing styles, and on-screen tone so every video or post
                    feels unmistakably you.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        Choose one hero colour palette and stick to it across thumbnails, captions, and graphics.
                    </rp.li>
                    <rp.li>
                        Collect visual references that capture your vibe and revisit them before new shoots or design
                        sessions.
                    </rp.li>
                    <rp.li>
                        Highlight signature phrases or hooks that make your intros instantly memorable. Our guide on
                        <rp.a href="https://www.cultcreativeasia.com/my/resources/how-to-hook-why-you-need-to-nail-the-first-3-seconds-of-your-content">
                            nailing the first three seconds
                        </rp.a>
                        shows you how to sharpen those openings.
                    </rp.li>
                </rp.ul>
                <rp.h3>
                    Build signature content pillars
                </rp.h3>
                <rp.p>
                    Anchor your weekly schedule around three to four pillars that reinforce your positioning. Rotate
                    between educational breakdowns, behind-the-scenes moments, and proof-of-work stories so viewers see
                    both expertise and personality.
                </rp.p>
                <rp.ul>
                    <rp.li>
                        Teach: share frameworks, checklists, or mini workshops that help your audience take action.
                    </rp.li>
                    <rp.li>
                        Show: publish case studies or campaign recaps that demonstrate the results you drive for
                        clients.
                    </rp.li>
                    <rp.li>
                        Connect: post relatable stories or creator diary entries that humanise your brand and spark
                        comments.
                    </rp.li>
                </rp.ul>
                <rp.h3>
                    Protect trust while you grow
                </rp.h3>
                <rp.p>
                    Every collaboration should reinforce, not dilute, the standards you set. Develop a quick vetting
                    checklist so you can decline offers that do not align with your beliefs or audience needs. Track the
                    feedback you receive from community members and adjust your messaging when expectations shift.
                </rp.p>
                <rp.p>
                    A personalised brand toolkit - containing your bio, stats, tone guidelines, and partnership process -
                    helps you stay consistent as your team expands. Revisit it quarterly to capture new wins, refine
                    positioning, and document the kind of work you want next.
                </rp.p>
                <div className="text-center mt-10">
                    <a
                        className="inline-flex items-center gap-2 rounded-full bg-[#1340FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0f33c7]"
                        href="https://app.cultcreativeasia.com/auth/jwt/register"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Build your creator brand with Cult Creative
                    </a>
                </div>
            </rp.Page>
        </>
    );
};

export default Resource25;