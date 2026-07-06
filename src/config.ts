/**
 * Site Configuration
 *
 * Customize this file to personalize your blog.
 */

export const SITE_CONFIG = {
  // Basic site information
  title: "Saucy Stuff",
  description: "Healthy Homecooked meals",
  author: "Stacey",
  email: "saucystuff.stacey@gmail.com",
  whatsapp: "+27 813 885 967",

  // Social media links
  // Remove or leave empty any platforms you don't use
  socialLinks: {
    github: "",
    whatsapp: "27813885967",
    linkedin: "",
    youtube: "", // Leave empty if not used
  },

  // Analytics
  // Add your Google Analytics tracking ID
  // Leave empty to disable analytics
  googleAnalyticsId: "",

  // Locale settings
  language: "en",
  locale: "en-ZA",

  // Site URL (used for canonical URLs and SEO)
  // Update this with your production URL
  siteUrl: "https://Oscar-Hartsuier.github.io/saucy-stuff-st-francis",

  // Default meta image for social sharing
  // Place your image in the public folder
  defaultOgImage: "/stock/default-og-image.jpg",

  // Enable/disable features
  features: {
    darkMode: true,
    analytics: true,
    sitemap: true,
  },
};

// Author information for structured data
export const AUTHOR_INFO = {
  name: SITE_CONFIG.author,
  email: SITE_CONFIG.email,
  url: SITE_CONFIG.siteUrl,
  // You can add more structured data here
  jobTitle: "Developer", // Optional
  organization: "", // Optional
};

// Navigation menu items
// export const NAV_ITEMS = [
//  { href: "/", label: "Home" },
//  { href: "/blog", label: "Menu" },
//  { href: "/about", label: "About" },
//];

export const NAV_ITEMS = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
];
