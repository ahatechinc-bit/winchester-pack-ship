import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://winchesterpackandship.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Winchester Pack & Ship | Shipping, Printing & Mailbox Services in Winchester, VA",
    template: "%s | Winchester Pack & Ship",
  },

  description:
    "Your local shipping experts in Winchester, VA. Authorized UPS, FedEx & USPS drop-off. Custom packing, printing, and mailbox services. Drop off by 3 PM — ships today.",

  keywords: [
    "shipping Winchester VA",
    "UPS drop off Winchester VA",
    "FedEx drop off Winchester VA",
    "USPS shipping Winchester",
    "pack and ship Winchester",
    "packing services Winchester VA",
    "mailbox rental Winchester",
    "print shop Winchester VA",
    "custom packing Winchester",
    "shipping store Winchester VA",
  ],

  authors: [{ name: "Winchester Pack & Ship" }],
  creator: "Winchester Pack & Ship",
  publisher: "Winchester Pack & Ship",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Winchester Pack & Ship",
    title: "Winchester Pack & Ship | Shipping, Printing & Mailbox Services",
    description:
      "Authorized UPS, FedEx & USPS shipping in Winchester, VA. Custom packing, printing, and mailbox services. Drop off by 3 PM, ships today.",
    images: [
      {
        url: "/logo.png",
        width: 1080,
        height: 1080,
        alt: "Winchester Pack & Ship — Shipping, Printing & Mailbox Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Winchester Pack & Ship | Shipping & Printing in Winchester, VA",
    description:
      "Authorized UPS, FedEx & USPS drop-off. Custom packing, printing, and mailbox services in Winchester, VA.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col pb-16 md:pb-0">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
