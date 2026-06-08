import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarrierStrip from "@/components/CarrierStrip";
import UrgencyStrip from "@/components/UrgencyStrip";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Guarantees from "@/components/Guarantees";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Winchester Pack & Ship",
  description:
    "Authorized UPS, FedEx, and USPS shipping center in Winchester, VA. Custom packing, printing, and mailbox services.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://winchesterpackandship.com",
  telephone: "+15405550100",
  email: "info@winchesterpackandship.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main Street",
    addressLocality: "Winchester",
    addressRegion: "VA",
    postalCode: "22601",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.1857,
    longitude: -78.1633,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "16:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Shipping & Business Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UPS Shipping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "FedEx Shipping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "USPS Shipping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Packing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Printing Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mailbox Rental" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "100",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which carriers do you ship with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are authorized partners for UPS, FedEx, and USPS. We compare rates across all three carriers for every shipment so you get the best price and fastest delivery time — no need to visit three separate locations.",
      },
    },
    {
      "@type": "Question",
      name: "Can you pack my items for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We carry boxes, bubble wrap, packing peanuts, and custom crating materials. Our team professionally packs fragile, oversized, and odd-shaped items every day. If it breaks in transit after we pack it, the carrier claim is on us.",
      },
    },
    {
      "@type": "Question",
      name: "How much does shipping cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rates depend on the carrier, weight, dimensions, and destination. Bring your item in and we'll show you exact prices from UPS, FedEx, and USPS side by side. There's no charge to get a quote.",
      },
    },
    {
      "@type": "Question",
      name: "How does mailbox rental work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You get a real street address, not a PO Box. You can accept packages from all carriers including UPS, FedEx, and USPS. We notify you when mail arrives. Plans start monthly with no long-term contracts required.",
      },
    },
    {
      "@type": "Question",
      name: "What printing services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Color and black-and-white copies, custom business cards, flyers, banners, binding, laminating, and large-format printing. Same-day turnaround on most jobs.",
      },
    },
    {
      "@type": "Question",
      name: "What are your hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're open Monday through Friday 9 AM to 6 PM, and Saturday 10 AM to 4 PM. We are closed on Sundays.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No appointment needed for shipping, packing, printing, or most other services. Just walk in. For large orders or custom crating, calling ahead helps us have materials ready.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <CarrierStrip />
        <UrgencyStrip />
        <Problem />
        <Services />
        <HowItWorks />
        <Guarantees />
        <About />
        <Reviews />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
