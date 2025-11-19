import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[17];
const relatedResources = [resources[16], resources[18], resources[19]];

const title = "What the Olympics Told Us About Creator Marketing";
const date = "15 August 2024";

// Article content for reading time calculation
const articleContent = [
  "And just like that, we say au revoir to the hottest sporting event of the Summer.",
  "We will miss La Phryge, Snoop Dogg and his side quests, and cheering on our beloved athletes at the games.",
  "But most of all, we would miss the carefree and chaotic content that came out of the Olympic Village – adieu Muffin Man, adieu Olympic Villa 😢👋 Not only have they enhanced our viewing experience with their unhinged videos, but they’ve also taught us a thing or two about the power of creator marketing.",
  "So, in celebration of these sportfluencers, here are three things brands could learn from them about creator marketing.",
  "COMMUNITY IS THE INTERNET’S HOTTEST CLUB Some of the best performing Olympic content are the ones that give audiences a peek into their athletic world.",
  "Videos like kit unboxings, food reviews, and room tours were well-received by viewers not only because they were insightful, but also because it made audiences feel like they were part of a community that is otherwise closed off to them.",
  "Thus, bringing them closer to the athletes and event itself.",
  "How to foster community Foster community by putting the spotlight on your work culture and employees a la Thinker Studios and Luxegen.",
  "Alternatively, you could collaborate with brand champions to produce content around the release of a new product or the launch of an exclusive event.",
  "Unlock marketing success with a key message Do you know the Muffin Man?",
  "He’s a Norwegian swimmer who has recently gained fame for his unabashed love of the Olympic chocolate muffins.",
  "In fact, he’s posted so much about those muffins during his time at the games that other athletes and viewers think of him when they think of chocolate muffins.",
  "So, if there is one thing we could learn from Henrik Christiansen, other than the fact that the muffins are good, it's that key messages are important for brand recall.",
  "How to create key messages Create content around a central character, joke, or even video format for your audiences to associate with to keep them coming back for more.",
  "Authenticity wins the games Beyond the marketing tricks and creative strategies, audiences were drawn to Olympic content because of the athletes' authenticity.",
  "It was refreshing to see these often serious personalities have fun doing something ordinary, like lip synching to a TikTok audio and fangirling over celebrities.",
  "How to leverage authenticity ✨ Creative Suggestion ✨ Leverage your status and insight as an insider to produce casual and relatable content about your brand.",
  "People love hearing directly from founders, employees, and super fans, but remember to be yourself. <div> <a > Learn more with Cult Creative </a> </div>",
];

const readTime = calculateReadingTimeFromContent(articleContent);

const keywords = [
  "olympic marketing",
  "creator marketing",
  "influencer strategy",
  "brand authenticity",
  "community building",
];

export const metadata = {
  title: title,
  description: "Discover three key lessons brands can learn from Olympic athletes about creator marketing, community, and authenticity.",
  keywords: keywords,
  openGraph: {
    images: [resource.image],
    title: title,
    description: "Discover three key lessons brands can learn from Olympic athletes about creator marketing, community, and authenticity.",
  },
  alternates: {
    canonical: resource.path,
  },
};

const Resource16 = async ({ params }) => {
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
        <rp.p>
          And just like that, we say au revoir to the hottest sporting event of
          the Summer. We will miss La Phryge, Snoop Dogg and his side quests,
          and cheering on our beloved athletes at the games.
        </rp.p>
        <rp.p>
          But most of all, we would miss the carefree and chaotic content that
          came out of the Olympic Village – adieu Muffin Man, adieu Olympic
          Villa 😢👋 Not only have they enhanced our viewing experience with
          their unhinged videos, but{" "}
          <rp.a href="https://www.cultcreativeasia.com/brands">
            they’ve also taught us a thing or two about the power of creator
            marketing.
          </rp.a>
        </rp.p>
        <rp.p>
          So, in celebration of these sportfluencers, here are three things
          brands could learn from them about creator marketing.
        </rp.p>
        <rp.IgEmbed url="https://www.instagram.com/reel/C-RxB7zpA4h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        <rp.h2>COMMUNITY IS THE INTERNET’S HOTTEST CLUB</rp.h2>
        <rp.p>
          Some of the best performing Olympic content are the ones that give
          audiences a peek into their athletic world.
        </rp.p>
        <rp.p>
          Videos like kit unboxings, food reviews, and room tours were
          well-received by viewers not only because they were insightful, but
          also because it made audiences feel like they were part of a community
          that is otherwise closed off to them.
        </rp.p>
        <rp.p>
          Thus, bringing them closer to the athletes and event itself.
        </rp.p>
        <rp.h3>How to foster community</rp.h3>
        <rp.p>
          Foster community by putting the spotlight on your work culture and
          employees a la{" "}
          <rp.a href="https://www.youtube.com/@ThinkerStudiosOfficial">
            Thinker Studios
          </rp.a>{" "}
          and <rp.a href="https://www.tiktok.com/@luxegen">Luxegen.</rp.a>{" "}
          Alternatively, you could{" "}
          <rp.a href="https://www.cultcreativeasia.com/brands">
            collaborate with brand champions
          </rp.a>{" "}
          to produce content around the release of a new product or the launch
          of an exclusive event.
        </rp.p>
        <rp.h2>Unlock marketing success with a key message</rp.h2>
        <rp.p>Do you know the Muffin Man?</rp.p>
        <rp.p>
          He’s a Norwegian swimmer who has recently gained fame for his
          unabashed love of the Olympic chocolate muffins. In fact,{" "}
          <rp.a href="https://www.tiktok.com/@henrikchristians1">
            he’s posted so much about those muffins
          </rp.a>{" "}
          during his time at the games that other athletes and viewers think of
          him when they think of chocolate muffins.
        </rp.p>
        <rp.p>
          So, if there is one thing we could learn from Henrik Christiansen, other than the fact that the muffins are good, it's that key messages are important for brand recall.
        </rp.p>
        <rp.h3>How to create key messages</rp.h3>
        <rp.p>
          Create content around a central character, joke, or even video format
          for your audiences to associate with to keep them coming back for
          more.
        </rp.p>
        <rp.h2>Authenticity wins the games</rp.h2>
                <rp.p>
          Beyond the marketing tricks and creative strategies, audiences were drawn to Olympic content because of the athletes' authenticity. It was refreshing to see these often serious personalities have fun doing something ordinary, like lip synching to a TikTok audio and fangirling over celebrities.
        </rp.p>
        <rp.h3>How to leverage authenticity</rp.h3>
        <rp.h3>✨ Creative Suggestion ✨</rp.h3>
        <rp.p>
          Leverage your status and insight as an insider to produce casual and relatable content about your brand. People love hearing directly from founders, employees, and super fans, but remember to be yourself.
        </rp.p>
        <div className="text-center mt-10">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-[#1340FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0f33c7]"
            href="https://app.cultcreativeasia.com/auth/jwt/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more with Cult Creative
          </a>
        </div>
      </rp.Page>
    </>
  );
};

export default Resource16;