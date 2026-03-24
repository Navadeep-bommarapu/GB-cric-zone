import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GB Cric Zone | Best Box Cricket Ground in Uppal, Hyderabad",
  description:
    "GB Cric Zone – the best box cricket ground near Uppal & Peerzadiguda, Hyderabad. Spacious outdoor sports ground, premium turf, nets, floodlights. Fun cricket for all! Open 24 hours. Book via WhatsApp.",
  keywords: [
    "cricket",
    "box cricket",
    "fun",
    "sports",
    "outdoor",
    "nets",
    "box cricket hyderabad",
    "box cricket uppal",
    "box cricket peerzadiguda",
    "box cricket near me",
    "cricket ground hyderabad",
    "outdoor cricket ground",
    "cricket nets hyderabad",
    "fun sports hyderabad",
    "GB Cric Zone",
    "turf cricket ground",
    "cricket booking",
    "box cricket boduppal",
  ],
  openGraph: {
    title: "GB Cric Zone | Best Box Cricket in Uppal, Hyderabad",
    description:
      "Best box cricket around Uppal – spacious outdoor ground, premium turf, strong nets, and friendly management. Fun sports for everyone! Open 24 hours.",
    type: "website",
    locale: "en_IN",
    siteName: "GB Cric Zone",
  },
  twitter: {
    card: "summary_large_image",
    title: "GB Cric Zone | Best Box Cricket in Uppal, Hyderabad",
    description:
      "Fun outdoor box cricket with premium turf, nets & floodlights. Open 24/7 in Uppal, Hyderabad.",
  },
  alternates: {
    canonical: "https://gbcriczone.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "GB Cric Zone",
    description:
      "Best box cricket ground near Uppal & Peerzadiguda, Hyderabad. Spacious outdoor ground with premium turf, strong nets, floodlights. Fun cricket sports for all ages. Open 24 hours.",
    image: "/images/hero.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2, Bk Kumar Nagar, Gayatri Nagar, Uppal, Peerzadiguda",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500098",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.3987,
      longitude: 78.5858,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "17",
      bestRating: "5",
    },
    sport: "Cricket",
    keywords: "cricket, box cricket, fun, sports, outdoor, nets",
    url: "https://gbcriczone.com",
    hasMap: "https://maps.app.goo.gl/ciT7yUy3uwBLBtV17",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
