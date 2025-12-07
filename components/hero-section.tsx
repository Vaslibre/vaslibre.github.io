import { Button } from "@/components/ui/button";
import { Terminal, ChevronRight, Code2, Users, Sparkles } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#2a2a3e_1px,transparent_1px),linear-gradient(to_bottom,#2a2a3e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

            {/* Glow effects with brand colors */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 text-sm backdrop-blur-sm">
                            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                            <span className="text-muted-foreground">
                                Comunidad Open Source
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                            Bienvenido a
                            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent block mt-2">
                                VaSLibre
                            </span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
                            VaSLibre (Valencia/Venezuela Software Libre) nació
                            de la nada, de un solo pensamiento, como un
                            pensamiento radical, donde muchos de nosotros
                            teníamos la misma meta, construir un grupo fuerte y
                            solidario, contando para ello con una buena base de
                            colaboradores.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                size="lg"
                                className="gap-2 bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 text-primary-foreground"
                            >
                                Únete a Nosotros
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2 border-border hover:bg-secondary hover:text-primary hover:border-primary bg-transparent transition-all duration-300"
                            >
                                Ver Eventos
                            </Button>
                        </div>

                        {/* <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                                    150+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Miembros
                                </div>
                            </div>
                            <div className="h-8 w-px bg-border" />
                            <div className="text-center">
                                <div className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                                    50+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Eventos
                                </div>
                            </div>
                            <div className="h-8 w-px bg-border" />
                            <div className="text-center">
                                <div className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                                    5
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Años
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className="relative flex justify-center items-center">
                        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                            {/* Terminal window illustration */}
                            <div className="absolute inset-0 bg-card border border-border rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden backdrop-blur-sm">
                                <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    <span className="ml-2 text-xs text-muted-foreground font-mono">
                                        terminal
                                    </span>
                                </div>
                                <div className="p-4 font-mono text-sm space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-accent">$</span>
                                        <span className="text-primary">
                                            whoami
                                        </span>
                                    </div>
                                    <div className="text-muted-foreground">
                                        linux_user_group
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-accent">$</span>
                                        <span className="text-primary">
                                            echo
                                        </span>
                                        <span className="text-foreground">
                                            "¡Bienvenido!"
                                        </span>
                                    </div>
                                    <div className="text-accent">
                                        ¡Bienvenido!
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-accent">$</span>
                                        <span className="text-primary">
                                            cat
                                        </span>
                                        <span className="text-foreground">
                                            filosofia.txt
                                        </span>
                                    </div>
                                    <div className="text-accent text-xs leading-relaxed">
                                        Software libre para todos.
                                        <br />
                                        Conocimiento compartido.
                                        <br />
                                        Comunidad primero.
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-accent">$</span>
                                        <span className="animate-pulse">▊</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating icons with improved animations */}
                            <div className="absolute -top-4 -right-4 bg-card p-3 rounded-xl border border-primary/50 shadow-lg shadow-primary/20 animate-bounce">
                                <Terminal className="h-6 w-6 text-primary" />
                            </div>
                            <div
                                className="absolute -bottom-4 -left-4 bg-card p-3 rounded-xl border border-accent/50 shadow-lg shadow-accent/20 animate-bounce"
                                style={{ animationDelay: "0.5s" }}
                            >
                                <Code2 className="h-6 w-6 text-accent" />
                            </div>
                            <div
                                className="absolute top-1/2 -right-8 bg-card p-3 rounded-xl border border-primary/50 shadow-lg shadow-primary/20 animate-bounce"
                                style={{ animationDelay: "0.3s" }}
                            >
                                <Users className="h-6 w-6 text-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
