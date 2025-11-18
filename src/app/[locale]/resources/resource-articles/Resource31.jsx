import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";

const resource = resources[2];
const relatedResources = [resources[1], resources[3], resources[4]];

const title = "Your Guide to a Creator Portfolio";
const date = "16 April 2025";
const readTime = "6 min";

const keywords = [
    "Portfolio",
    "Brand deals",
    "Content management",
    "Collaborations",
];

export const metadata = {
    title: title,
    description: "Learn how to create a creator portfolio",
    keywords: keywords,
    openGraph: {
        images: [resource.image],
        title: title,
        description: "Learn how to create a creator portfolio",
    },
    alternates: {
        canonical: resource.path,
    },
};

const Resource31 = async ({ params }) => {
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
                    Why you need a portfolio
                </rp.h2>
                <rp.p>
                    You have the engaging content and the results, so now is the time to show
                    them off in your portfolio.
                <br />
                <br />
                    A strong portfolio is the key to establishing yourself as a credible
                    content creator. It highlights your expertise and lets brands see if you
                    are a great match.
                <br />
                <br />
                    Our platform's built-in Media Kit is a fuss-free, seamless way to display
                    your highlighted works and metrics in one place. Just by linking your
                    socials, you will have a portfolio built for you.
                <br />
                <br />
                    But if you want a more customised feel, we have you covered. Keep reading
                    to learn how to create your portfolio.
                </rp.p>
                <rp.h3>
                    Introducing yourself and your niche
                </rp.h3>
                <rp.p>
                    Just like how your content needs{" "}
                    <rp.a href="https://www.cultcreativeasia.com/my/resources/how-to-hook-why-you-need-to-nail-the-first-3-seconds-of-your-content">
                        great hooks
                    </rp.a>
                    , your portfolio needs a punchy (and professional) introduction of who
                    you are as a creator and, most importantly, what you can do for brands
                    that work with you.
                <br />
                <br />
                    This section includes your name, picture, and a brief summary of what
                    services you offer and your specialty. Do you have a distinct editing
                    style, or do you bring a touch of humor to every post? Now is the time to
                    say it.
                <br />
                <br />
                    It is important to showcase your niche and unique selling proposition
                    (USP) to ensure you stand out as a creator.
                <br />
                <br />
                    <b>Tip:</b> Focus on your niche. It might be tempting to present yourself
                    as a jack-of-all-trades, but that could indicate a lack of focus.
                </rp.p>
                <rp.h3>
                    Highlighting your best campaign content
                </rp.h3>
                <rp.p>
                    The work highlights section is the main event of your portfolio.
                <br />
                <br />
                    It not only demonstrates your expertise and creativity in creating
                    content, but it also shows potential collaborators what you are capable of
                    achieving for them.
                <br />
                <br />
                    How do you begin curating your selection of work samples? Two words: be
                    strategic. Take your time to choose content that best showcases your
                    style, skills, and niche.
                <br />
                <br />
                    Organise your work by categories, like topics (your microniches or areas
                    related to your niche) or formats (reviews, unboxings, problem-and-solution
                    format, day-in-the-life videos, GRWMs, etc.), to showcase your
                    versatility.
                <br />
                <br />
                    <b>Tip:</b> Avoid including every campaign you have created to make your
                    portfolio seem meatier. Remember: quality over quantity.
                </rp.p>
                <rp.h3>
                    Presenting your metrics
                </rp.h3>
                <rp.p>
                    Metrics are the supporting act to your main event. By showcasing numbers,
                    you reinforce your credibility as a creator and assure brands that you can
                    produce results.
                <br />
                <br />
                    Display your average engagement rate (our Media Kit does the calculations
                    for you!) and highlight your reach and impressions numbers, as these are
                    prioritised in brand campaigns.
                <br />
                <br />
                    <b>Tip:</b> Do not forget your follower count - it helps collaborators gauge
                    how large your audience is.
                </rp.p>
                <rp.h3>
                    Sharing reviews and testimonials
                </rp.h3>
                <rp.p>
                    Reviews from past collaborators are the cherry on top. Testimonials about
                    your creativity and professionalism are valuable, but reviews with
                    measurable results are even better. For instance, a brand could mention a
                    specific percentage increase in their conversion or click-through rates,
                    credited to their collaboration with you.
                <br />
                <br />
                    <b>Tip:</b> For convenience and consistency, provide a template or a set of
                    questions when asking for reviews from brands.
                </rp.p>
                <rp.h3>
                    Customising your portfolio
                </rp.h3>
                <rp.p>
                    Customising your portfolio is fun, but remember to keep it practical.
                    Whether you are hosting on a site or creating a deck, make sure it has good
                    readability and that the visual branding, like colours and fonts, stays
                    consistent.
                <br />
                <br />
                    <b>Tip:</b> If you have strong web design skills, host your portfolio on a
                    site so you can show off your creativity.
                </rp.p>
            </rp.Page>
        </>
    );
};

export default Resource31;