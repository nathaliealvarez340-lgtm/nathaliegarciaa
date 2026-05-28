const PRODUCTION_SITE_URL = "https://nathaliegarciaa.maiabrand.co";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const SITE_URL =
  configuredSiteUrl === PRODUCTION_SITE_URL
    ? configuredSiteUrl
    : PRODUCTION_SITE_URL;

export const siteMetadata = {
  title: "Nathalie García | Estrategia, Diseño y Sistemas",
  description:
    "Página personal premium de Nathalie García: estrategia de marca, arquitectura de negocios y sistemas de crecimiento.",
  siteName: "Nathalie García",
};
