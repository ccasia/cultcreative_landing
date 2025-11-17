import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { setRequestLocale } from "next-intl/server";

// Dynamic imports for sections
const FloatingNavbar = dynamic(() =>
  import("@/app/[locale]/components/FloatingNavbar")
);

const HeroSection = dynamic(() =>
  import("@/app/[locale]/sections/newStories/storySections/HeroSection")
);
const VideosSection = dynamic(() =>
  import("@/app/[locale]/sections/newStories/storySections/VideosSection")
);
const StrategySection = dynamic(() =>
  import("@/app/[locale]/sections/newStories/storySections/StrategySection")
);
const SimilarStoriesSection = dynamic(() =>
  import("@/app/[locale]/sections/newStories/storySections/SimilarStoriesSection")
);
const NewFooter = dynamic(() =>
  import("@/app/[locale]/components/NewFooter")
);

export const metadata = {
  title: {
    absolute: "Success Story - Cult Creative",
  },
  description: "Read our inspiring success stories from leading brands.",
  openGraph: {
    title: "Success Story - Cult Creative",
  },
};

export default async function StoryDetailPage({ params }) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  // Mock data mapping - replace with real API data later
  const storiesData = {
    1: {
      title: "Dressing Paula",
      subtitle: "Success Story",
      campaignGoal:
        "Dressing Paula aimed to boost brand and event awareness by producing engaging short-form video content that appeals to various segments of the target audience and attracts diverse types of customers.",
      stats: [
        { label: "Views", value: "620K" },
        { label: "Reach", value: "8.4K" },
        { label: "Engagement", value: "5.74%" },
      ],
      infoChips: [
        "30-45s AVG. VIEW DURATION",
        "1.6K SAVES",
        "1.2K COMMENTS",
        "24 CREATORS",
      ],
      strategyTitle: "Cult's Approach",
      strategyContent: [
        "The Cult wanted to do more with Dressing Paula's inspiring celebration of womanhood. So, we onboarded female creators with diverse body shapes and sizes, from different socioeconomic, cultural, and religious backgrounds – including hijabi and Indian creators – to compliment the client's initial idea of working exclusively with Chinese creators. We then guided the creators to create fashion and lifestyle content that incorporates the clothing into their everyday wardrobe, showcasing the versatility of Dressing Paula's pieces.",
        "This step towards inclusivity has directly expanded Dressing Paula's audiences and reach beyond its usual community of customers.",
      ],
    },
    2: {
      title: "The Body Shop",
      subtitle: "Success Story",
      campaignGoal:
        "When The Body Shop first opened its doors in 1976, it was a little green-painted shop in the streets of Brighton, England. Its approach to beauty was radically different to the big players in the beauty industry. It was simple: ethically sourced and naturally-based ingredients from around the world, in no-nonsense packaging you could easily refill. Products and beauty rituals were made for every body, that made women feel good in their skin—never promising to make them look like someone else.",
      stats: [
        { label: "Views", value: "143K" },
        { label: "Reach", value: "4K" },
        { label: "Engagement", value: "3.60%" },
      ],
      infoChips: [
        "20-30s AVG. VIEW DURATION",
        "182K SAVES",
        "211 COMMENTS",
        "24 CREATORS",
      ],
      strategyTitle: "Cult's Approach",
      strategyContent: [
        "With skincare all the rave right now, The Cult wanted to position The Body Shop's Vitamin C serum and moisturiser as a holy grail product for skincare enthusiasts through trends. At the same time, the client has requested to include clips of the 'Vitamin C-Apple test' across all content for consistency and credibility.",
        "So, The Cult blended the two by getting male and female skincare creators to create trendy content such as GRWM, skincare ASMR, and product tests featuring the 'Vitamin C-Apple test' whilst also maintaining the 'clean girl' aesthetic that the skincae community loves.",
      ],
    },
    3: {
      title: "REXPERIENCE",
      subtitle: "Success Story",
      campaignGoal:
        "REXPERIENCE is an immersive digital art space located in the iconic REXKL. By reimagining the former REX CINEMA that once stood as the art and culture centre of downtown KL, REXPERIENCE merges the past's rich tapestry with new and cutting-edge digital art forms, welcoming all into the world of art.",
      stats: [
        { label: "Views", value: "940K" },
        { label: "Reach", value: "24K" },
        { label: "Engagement", value: "9.05%" },
      ],
      infoChips: [
        "15-20s AVG. VIEW DURATION",
        "35K SAVES",
        "400 COMMENTS",
        "32 CREATORS",
      ],
      strategyTitle: "Cult's Approach",
      strategyContent: [
        "Nothing is more indie and cool than going to an art exhibition at REXKL. So, to capture the essence of the exhibition and location, The Cult sought out lifestyle creators with an artistic flair to create a weekend guide/date idea type of content – framing the exhibition as an IFYKYK activity to pique curiousity and drive foot traffic.",
        "The campaign was also largerly ran on TikTok to reach the client's target audience of gen z and young millennial consumers.",
      ],
    },
    4: {
      title: "Suisen",
      subtitle: "Success Story",
      campaignGoal:
        "Suisen's mission is to embody the principles of Zen and Slow Beauty, encouraging a mindful and holistic approach to personal care. They believe in nurturing beauty from head to toe, from the inside out, and creating rituals that harmonises the body, mind, and spirit.",
      stats: [
        { label: "Views", value: "72K" },
        { label: "Reach", value: "-" },
        { label: "Engagement", value: "3.31%" },
      ],
      infoChips: [
        "25-35ss AVG. VIEW DURATION",
        "42 SAVES",
        "147 COMMENTS",
        "26 CREATORS",
      ],
      strategyTitle: "Cult's Approach",
      strategyContent: [
        "Centred around calmness and self-care, The Cult played into Suisen's ingenious 'Skincare For The Hair' concept by getting lifestyle and beauty creators to create content such as product reviews and hair care routine that is both relaxing and authentic. The Cult also got hijabi creators involved in the campaign to tap into a new group of consumers and expand Suisen's reach.",
      ],
    },
    5: {
      title: "Nature Valley",
      subtitle: "Success Story",
      campaignGoal:
        "Known as 'The Original Granola Bar', Nature Valley was established in 1973 with the introduction of granola cereal. There was just one problem: it wasn’t designed to be eaten outside. So, they got to work and created the world’s first-ever granola bar.",
      stats: [
        { label: "Views", value: "46.6K" },
        { label: "Reach", value: "15K" },
        { label: "Engagement", value: "54.14%" },
      ],
      infoChips: [
        "20-30s AVG. VIEW DURATION",
        "34 SAVES",
        "100 COMMENTS",
        "22 CREATORS",
      ],
      strategyTitle: "Cult's Approach",
      strategyContent: [
        "Loved by many across the globe, The Cult wanted to reaffirm these iconic granola bars as everybody's go-to snack,not just the gym junkies. So, The Cult looked beyond the usual suspect of health and fitness creators, and engaged creators from different niches too. For the former, The Cult got them to incoporate the granola bars into their everyday fitness content, framing the bars as the perfect healthy snack. For the latter, The Cult allowed the creators more creative freedom, birthing super cool content such as silent reviews and outfits inspired by the granola bars.",
      ],
    },
    6: {
      title: "Lenskart",
      subtitle: "Success Story",
      campaignGoal:
        "Lenskart is the top e-commerce marketplace for eyewear. With its omni-channel strategy, it has completely transformed the nation's eyewear market by offering a variety of bargains to every consumer, from an ever-increasing number of offline storefronts located in key cities to an online store that ships worldwide.",
      stats: [
        { label: "Views", value: "550K" },
        { label: "Reach", value: "15K" },
        { label: "Engagement", value: "5.08%" },
      ],
      infoChips: [
        "10-20s AVG. VIEW DURATION",
        "350 SAVES",
        "500 COMMENTS",
        "20 CREATORS",
      ],
      strategyTitle: "Cult's Approach",
      strategyContent: [
        "With the rise of corporatecore and the office siren, eyewear has become the hottest accessory of the summer. So, The Cult gathered a diverse group of Gen Z and young millennial creators to create office-centric content, such as lookbooks and fit checks featuring Lenskart's eyewear.",
        "To help Lenskart reach more audiences in Malaysia, the Cult went beyond fashion creators and engaged lifestyle creators too.",
      ],
    },
    7: {
      title: "Flint",
      subtitle: "Success Story",
      campaignGoal:
        "FLINT Roastery & Café offers a unique and elevated dining experience serving both innovative Western and heritage cuisine with artisanal craftsmanship. Their mission is to be a community hub for coffee enthusiast by emphasising placemaking, showcasing artisanal products and craftmanship, and fostering community building.",
      stats: [
        { label: "Views", value: "550K" },
        { label: "Reach", value: "56K" },
        { label: "Engagement", value: "8.69%" },
      ],
      infoChips: [
        "20-30s AVG. VIEW DURATION",
        "23K SAVES",
        "250 COMMENTS",
        "20 CREATORS",
      ],
      strategyTitle: "Cult's Approach",
      strategyContent: [
        "Searching for places to eat on Google is dead; foodies are flocking to TikTok for restaurant recs.", "Taking this shift into account, The Cult has suggested to engage lifestyle and foodie creators, and to run the campaign largely on TikTok to optimise reach. The Cult has also swapped the usual video content for image slides knowing that the platform's algorithm is favouring images over videos.",
        "To frame Flint as a hangout spot, The Cult suggested diverse videos angles including date night spot, cafe to try, and meeting spot.",
      ],
    },
    8: {
      title: "Pejoy",
      subtitle: "Success Story",
      campaignGoal:
        "GLICO's Pejoy Biscuit Sticks are redefining the sweet treat. Filled with rich chocolate, matcha green tea cream, mint cream, and now, milk cream, these biscuit sticks make for the perfect downtime snack.",
      stats: [
        { label: "Views", value: "80K" },
        { label: "Reach", value: "7K" },
        { label: "Engagement", value: "11%" },
      ],
      infoChips: [
        "30-40s AVG. VIEW DURATION",
        "150 SAVES",
        "120 COMMENTS",
        "20 CREATORS",
      ],
      strategyTitle: "Cult's Approach",
      strategyContent: [
        "Juggling motherhood and a career is demanding work. In line with the client's vision, the central focus of this campaign is on the wellbeing of women. So, The Cult engaged female creators, from mothers to entrepeneurs and full-timers, to share how Pejoy has helped them wind down and relax. We experimented with different types of content, but the predominant angle for this campaign was 'Day In The Life'.",
      ],
    },
    9: {
      title: "NOIR",
      subtitle: "Success Story",
      campaignGoal:
        "At Noir, Chef Ikhwan Rahman presents inventive tasting menus featuring modern cuisine with a touch of innovation, set in an expansive and theatrical setting. Guests can enjoy the experience of watching their dishes being crafted at the expansive open kitchen, seated at plush counters that surround it, and interact directly with the chef during their dining experience.",
      stats: [
        { label: "Views", value: "1.3M" },
        { label: "Reach", value: "50K" },
        { label: "Engagement", value: "6.2%" },
      ],
      infoChips: [
        "15-25s AVG. VIEW DURATION",
        "38K SAVES",
        "500 COMMENTS",
        "20 CREATORS",
      ],
      strategyTitle: "Cult's Approach",
      strategyContent: [
        "As foodie content continues to grow, The Cult optimised NOIR's reach by exploring different social media platforms for this campaign. First, we onboarded popular foodies to create content about the restaurant's opening on Instagram to build hype. Then, we looked beyond the foodies and engaged lifestyle and travel creators to post content on TikTok, angling the restaurant as a hidden gem, must-visit restaurant for the young, cool, and savvy.",
      ],
    },
  };

  // Get story data based on id, fallback to story 1 if not found
  const storyData = storiesData[id] || storiesData[1];

  return (
    <>
      <FloatingNavbar />
      <main className="flex flex-col w-full overflow-x-clip bg-white">
        {/* Hero Section */}
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-black">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
            </div>
          }
        >
          <HeroSection storyData={storyData} />
        </Suspense>

        {/* Videos Section */}
        <Suspense fallback={<div className="h-96 bg-white animate-pulse"></div>}>
          <VideosSection />
        </Suspense>

        {/* Strategy Section */}
        <Suspense fallback={<div className="bg-white animate-pulse"></div>}>
          <StrategySection
            strategyTitle={storyData.strategyTitle}
            strategyContent={storyData.strategyContent}
          />
        </Suspense>

        {/* Similar Stories Section */}
        <Suspense fallback={<div className="h-96 bg-white animate-pulse"></div>}>
          <SimilarStoriesSection />
        </Suspense>

        {/* Footer */}
        <NewFooter />
        <Toaster position="top-center" />
      </main>
    </>
  );
}