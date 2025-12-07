"use client";

import { Github, Twitter, Linkedin, MessageCircle } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 relative">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-secondary/20" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent font-mono text-sm">
                        // CONTACTO
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-balance">
                        Conéctate con{" "}
                        <span className="text-primary">nosotros</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Síguenos en nuestras redes sociales y mantente al día
                        con nuestras actividades.
                    </p>
                </div>

                {/* Centered Social Links */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-card border border-border rounded-xl p-8">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <a
                                href="https://github.com/Vaslibre"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary hover:border-primary/50 border border-transparent transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Github className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">GitHub</p>
                                    <p className="text-sm text-muted-foreground">
                                        @VasLibre
                                    </p>
                                </div>
                            </a>

                            <a
                                href="https://x.com/vaslibre"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary hover:border-primary/50 border border-transparent transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Twitter className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">Twitter / X</p>
                                    <p className="text-sm text-muted-foreground">
                                        @VasLibre
                                    </p>
                                </div>
                            </a>

                            <a
                                href="#0"
                                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary hover:border-primary/50 border border-transparent transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Linkedin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">LinkedIn</p>
                                    <p className="text-sm text-muted-foreground">
                                        Linux User Group
                                    </p>
                                </div>
                            </a>

                            <a
                                href="https://t.me/comunidadvaslibre"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary hover:border-primary/50 border border-transparent transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <MessageCircle className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">Telegram</p>
                                    <p className="text-sm text-muted-foreground">
                                        @comunidadvaslibre
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
