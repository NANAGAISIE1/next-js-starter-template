import { Metadata } from "next";

import { siteConfig } from "@/config/siteConfig";

type Props = {};

const SiteMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Nana A. Gaisie",
      url: "https://nana.enpeer.tech",
    },
  ],
  creator: "Nana A. Gaisie",
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
      "en-GH": "/en-GB",
      "en-GB": "/en-GB",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage[0],
        width: 500,
        height: 500,
        alt: siteConfig.name,
      },
      {
        url: siteConfig.ogImage[1],
        width: 500,
        height: 500,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage[0], siteConfig.ogImage[1]],
    creator: "@nana.gaisie",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: siteConfig.image.lightsvg,
        href: siteConfig.image.lightsvg,
      },
      {
        media: "(prefers-color-scheme: light)",
        url: siteConfig.image.lightpng,
        href: siteConfig.image.lightpng,
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: siteConfig.image.darksvg,
        href: siteConfig.image.darksvg,
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: siteConfig.image.darkpng,
        href: siteConfig.image.darkpng,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default SiteMetadata;
