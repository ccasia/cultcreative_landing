import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import resources from "@/data/resources.json";

// Map of slug to article component
const articleComponents = {
  "Resource33": dynamic(() => import("../resource-articles/Resource33")),
  "Resource32": dynamic(() => import("../resource-articles/Resource32")),
  "Resource31": dynamic(() => import("../resource-articles/Resource31")),
  "Resource30": dynamic(() => import("../resource-articles/Resource30")),
  "Resource29": dynamic(() => import("../resource-articles/Resource29")),
  "Resource28": dynamic(() => import("../resource-articles/Resource28")),
  "Resource27": dynamic(() => import("../resource-articles/Resource27")),
  "Resource26": dynamic(() => import("../resource-articles/Resource26")),
  "Resource25": dynamic(() => import("../resource-articles/Resource25")),
  "Resource24": dynamic(() => import("../resource-articles/Resource24")),
  "Resource23": dynamic(() => import("../resource-articles/Resource23")),
  "Resource22": dynamic(() => import("../resource-articles/Resource22")),
  "Resource21": dynamic(() => import("../resource-articles/Resource21")),
  "Resource20": dynamic(() => import("../resource-articles/Resource20")),
  // Add more articles here as you create them
  // "starting-your-signature-series": dynamic(() => import("../resource-articles/StartingYourSignatureSeries")),
};

// Generate static params for all resources
export async function generateStaticParams() {
  const locales = ["my", "sg"];
  const params = [];

  locales.forEach((locale) => {
    resources.forEach((resource) => {
      // Extract slug from path (e.g., "/resources/Resource32" -> "Resource32")
      const slug = resource.path.split("/").pop();
      params.push({ locale, slug });
    });
  });

  return params;
}

// Generate metadata for each resource
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const resource = resources.find((r) => r.path.endsWith(`/${slug}`));

  if (!resource) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: resource.title,
    description: resource.title,
    openGraph: {
      images: [resource.image],
      title: resource.title,
    },
  };
}

export default async function ResourcePage({ params }) {
  const { slug } = await params;

  // Find the article component
  const ArticleComponent = articleComponents[slug];

  // If no component exists for this slug, show 404
  if (!ArticleComponent) {
    notFound();
  }

  return <ArticleComponent params={params} />;
}
