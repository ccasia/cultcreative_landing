import resources from "@/data/resources.json";
import * as rp from "@/app/[locale]/components/resource-page.jsx";
import { setRequestLocale } from "next-intl/server";
import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";

const resource = resources[16];
const relatedResources = [resources[15], resources[17], resources[18]];

const title = "BrandStrat 2024 Summit: Where Collaboration and Innovation Drives Branding Success";
const date = "2 October 2024";

// Article content for reading time calculation
const articleContent = [
  "A summit where strategy meets innovation On 2 October 2024, Cult Creative, along with Mad Hat Asia and Wavemakers Collective, hosted the first BrandStrat Summit at Colony @ The Met Corporate Towers KL.",
  "We gathered industry leaders, branding experts, and marketing professionals for a day of strategic insights, innovation, and networking to help them refine their brand strategies for today's fast-evolving marketplace.",
  "Shermaine Wong, Co-founder and CEO of Cult Creative, shared, \"Collaboration is at the heart of creativity, and events like BrandStrat showcase the power of collective knowledge.",
  "The insights shared by the speakers and the connections we saw during the networking sessions show the potential for even more collaborative efforts fostered within the industry.\" Expert insights on brand strategy Featuring a compelling lineup of panel discussions and interactive workshops, prominent local and international experts from brands such as Zus Malaysia, Amazin' Graze, Undefeated, and Media Prima Television Networks shared their knowledge on building solid brand foundations, executing impactful strategies, and measuring brand performance in real time.",
  "Nadzirah Hashim, Co-founder and CEO of Wavemakers Collective, added, \"The energy in the room was incredible.",
  "It's clear that the industry is committed to pushing boundaries in branding and marketing in this competitive environment.",
  "With Malaysia having fragmented markets, it was inspiring to hear the enthusiasm of industry leaders sharing unique branding strategies.\" Key highlights from the summit <b>Inspiring Discussions:</b> Participants engaged with industry thought leaders through sessions like \"Building a Sustainable and Scalable Marketing Funnel\" and \"Rethinking Content Creation,\" offering practical insights into navigating the complex landscape of modern branding. <b>Hands-On Learning Workshops:</b> Attendees gained practical skills in workshops, including User-Generated Content Strategies and AI in Content Creation, aimed at equipping them with the tools necessary to thrive in a rapidly changing industry. <b>Exclusive Networking Opportunities:</b> The summit concluded with a vibrant networking session, allowing professionals to exchange ideas and foster potential collaborations in the marketing and branding space. 250 professionals, countless connections Rengeeta Rendava, Founder and CEO of Mad Hat Asia, remarked, \"BrandStrat Summit is all about forward-thinking approaches and inspiring brands to explore new ways of connecting with their audiences.",
  "It's exciting to see the passion and energy in the room as we continue to drive innovation and meaningful collaboration in strategic branding.\" With over 250 attendees at the summit, the energy was palpable as professionals from various industries came together to exchange ideas and explore innovative approaches to branding.",
  "The diverse group of participants reflected the summit's commitment to inclusivity, bringing in fresh perspectives from across the branding and marketing spectrum.",
  "Aziemah Azman, Producer and Manager of Animation at Media Prima Television Networks, commented, \"Today's summit has reinforced the importance of a solid brand strategy, and how compelling content and authentic storytelling are essential to driving innovation and staying ahead in this competitive market.\" Kalithasan Sothinathan, Marketing Manager at Etika Holdings, remarked, “The workshops and discussions provided valuable insights into the future of branding, especially as AI and user-generated content continue to reshape the way we engage with consumers.” Safe to say, we did it!",
  "Thank you to our amazing sponsors, Colony Co-Working Space KL, and Printcious Gifts, , and Printcious Gifts as well as our expert speakers and attendees for working your magic at the Summit.",
  "For those who missed this year's summit, an even bigger and bolder BrandStrat Summit awaits you in 2025.",
  "We will dive deeper into emerging trends and strategies that are shaping the future of branding.",
  "Find out more about BrandStrat Summit 2024 on LinkedIn and follow @brandstratsummitmy on Instagram for the latest updates and sneak peeks into what's coming next. <div> <a > Stay updated with Cult Creative </a> </div>",
];

const readTime = calculateReadingTimeFromContent(articleContent);




const keywords = [
  "branding strategy",
  "industry insights",
  "brand marketing",
  "content creation",
  "collaboration",
];

export const metadata = {
  title: title,
  description: "Discover key insights from the BrandStrat 2024 Summit on building sustainable brands through strategic collaboration and innovation.",
  keywords: keywords,
  openGraph: {
    images: [resource.image],
    title: title,
    description: "Discover key insights from the BrandStrat 2024 Summit on building sustainable brands through strategic collaboration and innovation.",
  },
  alternates: {
    canonical: resource.path,
  },
};

const Resource17 = async ({ params }) => {
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
        <rp.h2>A summit where strategy meets innovation</rp.h2>
        <rp.p>
          On 2 October 2024, Cult Creative, along with Mad Hat Asia and Wavemakers Collective, hosted the first BrandStrat Summit at Colony @ The Met Corporate Towers KL. We gathered industry leaders, branding experts, and marketing professionals for a day of strategic insights, innovation, and networking to help them refine their brand strategies for today's fast-evolving marketplace.
        </rp.p>
        <rp.p>
          Shermaine Wong, Co-founder and CEO of Cult Creative, shared, "Collaboration is at the heart of creativity, and events like BrandStrat showcase the power of collective knowledge. The insights shared by the speakers and the connections we saw during the networking sessions show the potential for even more collaborative efforts fostered within the industry."
        </rp.p>
        <rp.h2>Expert insights on brand strategy</rp.h2>
        <rp.p>
          Featuring a compelling lineup of panel discussions and interactive workshops, prominent local and international experts from brands such as Zus Malaysia, Amazin' Graze, Undefeated, and Media Prima Television Networks shared their knowledge on building solid brand foundations, executing impactful strategies, and measuring brand performance in real time.
        </rp.p>
        <rp.p>
          Nadzirah Hashim, Co-founder and CEO of Wavemakers Collective, added, "The energy in the room was incredible. It's clear that the industry is committed to pushing boundaries in branding and marketing in this competitive environment. With Malaysia having fragmented markets, it was inspiring to hear the enthusiasm of industry leaders sharing unique branding strategies."
        </rp.p>
        <rp.h3>Key highlights from the summit</rp.h3>
        <rp.ol>
          <rp.li>
            <b>Inspiring Discussions:</b> Participants engaged with industry thought leaders through sessions like "Building a Sustainable and Scalable Marketing Funnel" and "Rethinking Content Creation," offering practical insights into navigating the complex landscape of modern branding.
          </rp.li>
          <rp.li>
            <b>Hands-On Learning Workshops:</b> Attendees gained practical skills in workshops, including User-Generated Content Strategies and AI in Content Creation, aimed at equipping them with the tools necessary to thrive in a rapidly changing industry.
          </rp.li>
          <rp.li>
            <b>Exclusive Networking Opportunities:</b> The summit concluded with a vibrant networking session, allowing professionals to exchange ideas and foster potential collaborations in the marketing and branding space.
          </rp.li>
        </rp.ol>
        <rp.h2>250 professionals, countless connections</rp.h2>
        <rp.p>
          Rengeeta Rendava, Founder and CEO of Mad Hat Asia, remarked, "BrandStrat Summit is all about forward-thinking approaches and inspiring brands to explore new ways of connecting with their audiences. It's exciting to see the passion and energy in the room as we continue to drive innovation and meaningful collaboration in strategic branding."
        </rp.p>
        <rp.p>
          With over 250 attendees at the summit, the energy was palpable as professionals from various industries came together to exchange ideas and explore innovative approaches to branding. The diverse group of participants reflected the summit's commitment to inclusivity, bringing in fresh perspectives from across the branding and marketing spectrum.
        </rp.p>
        <rp.p>
          Aziemah Azman, Producer and Manager of Animation at Media Prima Television Networks, commented, "Today's summit has reinforced the importance of a solid brand strategy, and how compelling content and authentic storytelling are essential to driving innovation and staying ahead in this competitive market."
        </rp.p>
        <rp.p>
          Kalithasan Sothinathan, Marketing Manager at Etika Holdings, remarked,
          “The workshops and discussions provided valuable insights into the
          future of branding, especially as AI and user-generated content
          continue to reshape the way we engage with consumers.”
        </rp.p>
        <rp.p>
          Safe to say, we did it! Thank you to our amazing sponsors,{" "}
          <rp.a href="https://colony.work/">Colony Co-Working Space KL,</rp.a>{" "}
          and{" "}
          <rp.a href="https://www.printcious.com/my/bulk-order?v=1&utm_source=ggasa&utm_medium=brand&gad_source=1&gclid=CjwKCAjwpbi4BhByEiwAMC8JnZYvIppYq-Ui1YigkAG77EP8P_As7jd0Rm-39_7m93TDLUrJVsJ09hoC5pIQAvD_BwE">
            Printcious Gifts,
          </rp.a>, and
          <rp.a href="https://www.printcious.com/my/bulk-order?v=1&utm_source=ggasa&utm_medium=brand&gad_source=1&gclid=CjwKCAjwpbi4BhByEiwAMC8JnZYvIppYq-Ui1YigkAG77EP8P_As7jd0Rm-39_7m93TDLUrJVsJ09hoC5pIQAvD_BwE">
            Printcious Gifts
          </rp.a> as well as our expert speakers and attendees for working your magic at the Summit.
        </rp.p>
        <rp.p>
          For those who missed this year's summit, an even bigger and bolder BrandStrat Summit awaits you in 2025. We will dive deeper into emerging trends and strategies that are shaping the future of branding. Find out more about
          <rp.a href="https://www.linkedin.com/company/brandstrat-summit-2024/"> BrandStrat Summit 2024</rp.a> on LinkedIn and follow
          <rp.a href="https://www.instagram.com/brandstratsummitmy/"> @brandstratsummitmy</rp.a> on Instagram for the latest updates and sneak peeks into what's coming next.
        </rp.p>
        <div className="text-center mt-10">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-[#1340FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0f33c7]"
            href="https://app.cultcreativeasia.com/auth/jwt/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stay updated with Cult Creative
          </a>
        </div>
      </rp.Page>
    </>
  );
};

export default Resource17;