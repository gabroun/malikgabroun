import { colors } from "./components/shared/shared.style";

const config = {
  siteTitle: "MalikGabroun",
  shortSiteTitle: "MalikGabroun",
  siteDescription: "Personal Website for Malik Elgabroun - Front End Developer",
  siteUrl: "https://malikgabroun.com/",
  pathPrefix: "/",
  siteImage: "",
  siteLanguage: "en",
  // author
  authorName: "Malik Elgabroun",
  authorTwitterAccount: "@malroun1",
  organisation: "MalikGabroun",
  // info
  infoTitle: "Malik Elgabroun",
  infoTitleNote: "Personal Website",
  // manifest.json
  manifestName: "Malik Elgabroun - Front End Developer",
  manifestShortName: "MalikGabroun", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.white,
  manifestThemeColor: colors.white,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "malikgabroun@yahoo.co.uk",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/gabroun" },
    { name: "twitter", url: "https://twitter.com/malroun1" },
    { name: "linkedin", url: "https://www.linkedin.com/in/malik-elgabroun/" },
  ],
  social: {
    twitter: { name: "twitter", url: "https://twitter.com/malroun1" },
    github: { name: "github", url: "https://github.com/gabroun" },
    linkedIn: {
      name: "linkedin",
      url: "https://www.linkedin.com/in/malik-elgabroun/",
    },
  },
};
export default config;
