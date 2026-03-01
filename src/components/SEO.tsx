import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  name?: string;
  type?: string;
  path?: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
}

const SITE_URL = "https://c-homes.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export default function SEO({
  title,
  description = "Find affordable, verified apartments in Ibadan for NYSC corps members. Browse listings across all local governments in Oyo State.",
  name = "C-Homes",
  type = "website",
  path = "/",
  image = DEFAULT_IMAGE,
  jsonLd,
}: SEOProps) {
  const canonicalUrl = `${SITE_URL}${path}`;

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "C-Homes",
    url: SITE_URL,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/listings?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const structuredData = jsonLd || defaultJsonLd;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={name} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={name} />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={name} />

      {/* Geo / Location tags (relevant for local SEO in Ibadan) */}
      <meta name="geo.region" content="NG-OY" />
      <meta name="geo.placename" content="Ibadan" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
