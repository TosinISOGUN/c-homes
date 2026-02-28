import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  name?: string;
  type?: string;
}

export default function SEO({
  title,
  description = "Find affordable, verified apartments in Ibadan for NYSC corps members. Browse listings across all local governments in Oyo State.",
  name = "C-homes",
  type = "website"
}: SEOProps) {
  return (
    <Helmet>
      { /* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      { /* End standard metadata tags */}

      { /* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      { /* End Facebook tags */}

      { /* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      { /* End Twitter tags */}
    </Helmet>
  );
}
