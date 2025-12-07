"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return null;
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <Link
                        href="/"
                        className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
                    >
                        <Image
                            src="/images/logovaslibre.svg"
                            alt="Logo"
                            width={200}
                            height={200}
                            className="h-20 w-auto"
                        />
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="#about"
                            className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                        >
                            Nosotros
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="#members"
                            className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                        >
                            Miembros
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="#gallery"
                            className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                        >
                            Galería
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="#events"
                            className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                        >
                            Eventos
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                        >
                            Contacto
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-secondary transition-colors"
                            aria-label={
                                theme === "dark"
                                    ? "Cambiar a modo claro"
                                    : "Cambiar a modo oscuro"
                            }
                        >
                            {theme === "dark" ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>
                        <Link
                            href="#contact"
                            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Únete
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
