import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-12 bg-card border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <span className="font-bold">VasLibre</span>
                    </div>

                    <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                        <Link
                            href="#about"
                            className="hover:text-primary transition-colors"
                        >
                            Nosotros
                        </Link>
                        <Link
                            href="#members"
                            className="hover:text-primary transition-colors"
                        >
                            Miembros
                        </Link>
                        <Link
                            href="#events"
                            className="hover:text-primary transition-colors"
                        >
                            Eventos
                        </Link>
                        <Link
                            href="#contact"
                            className="hover:text-primary transition-colors"
                        >
                            Contacto
                        </Link>
                    </nav>

                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                        Hecho con{" "}
                        <Heart className="h-4 w-4 text-[tomato] fill-[tomato]" />{" "}
                        y software libre
                    </p>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} VaSLibre. Todos los
                        derechos reservados.
                    </p>
                    <p className="mt-2 font-mono text-xs text-accent">
                        $ echo "Open Source FTW" 🐧
                    </p>
                </div>
            </div>
        </footer>
    );
}
