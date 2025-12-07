import { Shield, BookOpen, Heart, Zap } from "lucide-react";

export function AboutSection() {
    const features = [
        {
            icon: Shield,
            title: "Software Libre",
            description:
                "Promovemos el uso y desarrollo de software libre como herramienta de libertad digital.",
        },
        {
            icon: BookOpen,
            title: "Aprendizaje Continuo",
            description:
                "Organizamos talleres, charlas y eventos para compartir conocimiento.",
        },
        {
            icon: Heart,
            title: "Comunidad Inclusiva",
            description:
                "Todos son bienvenidos, desde principiantes hasta expertos en Linux.",
        },
        {
            icon: Zap,
            title: "Innovación",
            description:
                "Exploramos nuevas tecnologías y tendencias en el mundo open source.",
        },
    ];

    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <span className="text-accent font-mono text-sm">
                                // SOBRE NOSOTROS
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-balance">
                                Una comunidad apasionada por el{" "}
                                <span className="text-primary">
                                    código abierto
                                </span>
                            </h2>
                        </div>

                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Somos un grupo de entusiastas de Linux y el software
                            libre unidos por la pasión de aprender, compartir y
                            contribuir al ecosistema open source. Desde Octubre
                            de 2006, hemos creado un espacio donde la
                            colaboración y el conocimiento fluyen libremente.
                        </p>

                        <p className="text-muted-foreground leading-relaxed">
                            Nuestra misión es promover el uso de sistemas
                            operativos libres, educar sobre las ventajas del
                            software de código abierto y crear una red de apoyo
                            para todos aquellos que deseen adentrarse en el
                            mundo de Linux.
                        </p>

                        {/* <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium"
                                    >
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                                +150 miembros activos
                            </span>
                        </div> */}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <feature.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-semibold text-lg mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
