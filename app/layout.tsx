import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/theme-provider";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// <CHANGE> Updated metadata for Linux User Group
export const metadata: Metadata = {
    title: "VaSLibre - Comunidad de Usuarios Linux",
    description:
        "Comunidad apasionada por el software libre, Linux y el código abierto. Únete a nosotros y forma parte del movimiento open source.",
    generator: "v0.app",
    icons: {
        icon: [
            {
                url: "/images/logovaslibre.svg",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/images/logovaslibre.svg",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/images/logovaslibre.svg",
                type: "image/svg+xml",
            },
        ],
        apple: "/images/logovaslibre.svg",
    },
    openGraph: {
        title: "VaSLibre - Comunidad de Usuarios Linux",
        description:
            "Comunidad apasionada por el software libre, Linux y el código abierto. Únete a nosotros y forma parte del movimiento open source.",
        url: "https://vaslibre.org.ve",
        siteName: "VaSLibre - Comunidad de Usuarios Linux",
        images: [
            {
                url: "https://vaslibre.org.ve/images/vaslibre-og.png", // Must be an absolute URL
                width: 800,
                height: 600,
                alt: "VaSLibre - Comunidad de Usuarios Linux",
            },
            // Add more images if needed
        ],
        locale: "es_Es",
        type: "website",
    },
    twitter: {
        // Optional: for Twitter Cards
        card: "summary_large_image",
        title: "VaSLibre - Comunidad de Usuarios Linux",
        description:
            "Comunidad apasionada por el software libre, Linux y el código abierto. Únete a nosotros y forma parte del movimiento open source.",
        images: ["https://vaslibre.org.ve/images/vaslibre-og.png"],
    },
    alternates: {
        canonical: "https://vaslibre.org.ve",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "VaSLibre",
        alternateName: "VaSLibre - Comunidad de Usuarios Linux",
        url: "https://vaslibre.org.ve",
        logo: "https://vaslibre.org.ve/images/logovaslibre.svg",
        description:
            "Comunidad de usuarios Linux dedicada a compartir conocimiento, organizar talleres y apoyar a nuevos usuarios.",
        sameAs: [
            "https://github.com/vaslibre",
            "https://twitter.com/vaslibre",
            "https://t.me/comunidadvaslibre",
        ],
    };

    return (
        <html lang="es" suppressHydrationWarning>
            <body className={`font-sans antialiased`}>
                <Providers>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(jsonLd),
                        }}
                    />
                    {children}
                    <Analytics />
                </Providers>
            </body>
        </html>
    );
}
