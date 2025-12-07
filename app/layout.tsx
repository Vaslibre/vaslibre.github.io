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
    title: "VasLibre - Comunidad de Usuarios Linux",
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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body className={`font-sans antialiased`}>
                <Providers>
                    {children}
                    <Analytics />
                </Providers>
            </body>
        </html>
    );
}
