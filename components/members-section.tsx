import { Github, Twitter, Linkedin } from "lucide-react";

const members = [
    {
        name: "Julio Ortega",
        role: "",
        image: "/images/team/generic.png",
        github: "#",
        twitter: "#",
    },
    {
        name: "Hector Mantellini",
        role: "",
        image: "/images/team/generic.png",
        github: "#",
        linkedin: "#",
    },
    {
        name: "Álvaro Hernández",
        role: "",
        image: "/images/team/generic.png",
        github: "#",
        twitter: "#",
    },
    {
        name: "Angel Cruz",
        role: "",
        image: "/images/team/generic.png",
        github: "#",
        linkedin: "#",
    },
    {
        name: "Jesús Palencia",
        role: "",
        image: "/images/team/generic.png",
        github: "#",
        twitter: "#",
    },
    {
        name: "Eduardo Echeverría",
        role: "",
        image: "/images/team/generic.png",
        github: "#",
        linkedin: "#",
    },
];

export function MembersSection() {
    return (
        <section id="members" className="py-24 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent font-mono text-sm">
                        // NUESTRO EQUIPO
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-balance">
                        Conoce a los{" "}
                        <span className="text-primary">miembros</span> del grupo
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Un equipo diverso de entusiastas de Linux que trabajan
                        juntos para hacer crecer nuestra comunidad.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className="aspect-square overflow-hidden relative">
                                <img
                                    src={
                                        member.image ||
                                        "/images/placeholder.svg"
                                    }
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="p-6">
                                <h3 className="font-semibold text-lg">
                                    {member.name}
                                </h3>
                                <p className="text-primary text-sm mt-1">
                                    {member.role}
                                </p>
                                <div className="flex items-center gap-3 mt-4">
                                    {member.github && (
                                        <a
                                            href={member.github}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <Github className="h-5 w-5" />
                                        </a>
                                    )}
                                    {member.twitter && (
                                        <a
                                            href={member.twitter}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <Twitter className="h-5 w-5" />
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
