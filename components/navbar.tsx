"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const navLinks = [
        { href: "#about", label: "Nosotros" },
        { href: "#members", label: "Miembros" },
        { href: "#gallery", label: "Galería" },
        { href: "#events", label: "Eventos" },
        { href: "/notas", label: "Notas" },
        { href: "#contact", label: "Contacto" },
    ];

    // Prevent hydration mismatch
    if (!mounted) {
        return null; // Or a loading skeleton if preferred, but null is safer for hydration
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
                    >
                        <Image
                            src="/images/logovaslibre.svg"
                            alt="Logo"
                            width={200}
                            height={200}
                            className="h-28 w-auto"
                            loading="eager"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-secondary transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>
                        <Link
                            href="#contact"
                            className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Únete
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-secondary transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>

                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="md:hidden"
                                >
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-[300px] sm:w-[400px] border-l border-border bg-background/95 backdrop-blur-xl p-6"
                            >
                                <SheetHeader className="mb-8 text-left">
                                    <SheetTitle className="flex items-center gap-2">
                                        <Image
                                            src="/images/logovaslibre.svg"
                                            alt="VaSLibre Logo"
                                            width={150}
                                            height={150}
                                            className="h-10 w-auto" // Reduced size slightly for better proportion
                                        />
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col h-full">
                                    <div className="flex flex-col space-y-1">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center text-base font-normal hover:text-primary hover:bg-muted/50 transition-all py-3 px-4 rounded-md -mx-4" // Negative margin + padding for full-width touch target but aligned text with padding
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="mt-auto pb-6">
                                        <Link
                                            href="#contact"
                                            onClick={() => setIsOpen(false)}
                                            className="w-full block bg-primary text-white px-4 py-3 rounded-xl text-center text-base font-medium hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-sm active:scale-95"
                                        >
                                            Únete a VaSLibre
                                        </Link>
                                        <p className="text-center text-xs text-muted-foreground mt-6 opacity-50">
                                            © 2025 Comunidad VaSLibre
                                        </p>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
