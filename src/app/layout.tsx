import type { Metadata } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "DLF Hamilton Court 2 — Ultra-Luxury 4.5 BHK Residences, Gurugram",
  description:
    "DLF Hamilton Court 2: 12.5-acre gated enclave of 4.5 BHK residences and penthouses in Gurugram. Starting ₹27.50 Cr. Request EOI today.",
  keywords:
    "DLF Hamilton Court 2, DLF Gurugram, luxury apartments Gurugram, 4.5 BHK Gurugram, penthouse Gurugram, DLF new launch",
  openGraph: {
    title: "DLF Hamilton Court 2 — Ultra-Luxury 4.5 BHK Residences, Gurugram",
    description:
      "DLF Hamilton Court 2: 12.5-acre gated enclave of 4.5 BHK residences and penthouses in Gurugram. Starting ₹27.50 Cr. Request EOI today.",
    type: "website",
    url: "/",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f919c012-62c4-455e-92fa-2ee60b560c4b/id-preview-971b01aa--d1dddb9f-a706-4985-b77d-e138046dcadd.lovable.app-1784094925368.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DLF Hamilton Court 2 — Ultra-Luxury 4.5 BHK Residences, Gurugram",
    description:
      "DLF Hamilton Court 2: 12.5-acre gated enclave of 4.5 BHK residences and penthouses in Gurugram. Starting ₹27.50 Cr. Request EOI today.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f919c012-62c4-455e-92fa-2ee60b560c4b/id-preview-971b01aa--d1dddb9f-a706-4985-b77d-e138046dcadd.lovable.app-1784094925368.png",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Residence",
              name: "DLF Hamilton Court 2",
              description: "Ultra-luxury 4.5 BHK residences and penthouses across 12.5 acres in Gurugram.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Gurugram",
                addressRegion: "Haryana",
                addressCountry: "IN",
              },
              numberOfRooms: "4.5",
              floorSize: {
                "@type": "QuantitativeValue",
                value: 5500,
                unitCode: "FTK",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
