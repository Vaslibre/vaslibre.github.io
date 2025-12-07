import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
    {
        date: "22",
        month: "ABRIL",
        year: "2016",
        title: "FLISoL 2016",
        description:
            "El FLISoL es el Festival Latinoamericano de Software Libre, un evento que promueve la cultura del software libre en Latinoamérica.",
        time: "08:00 - 13:00 VET",
        location: "UJAP",
        type: "Evento",
    },
    {
        date: "22",
        month: "DICIEMBRE",
        year: "2014",
        title: "Almuerzo de fin de Año",
        description:
            "Cada quien compra su hallaca o bollo y bebe lo que quiera. Lo virtual no quita lo valiente, lo refuerza!",
        time: "13:30 - 16:30 VET",
        location: "Virtual",
        type: "Evento",
    },
];

export function EventsSection() {
    return (
        <section id="events" className="py-24 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <div>
                        <span className="text-accent font-mono text-sm">
                            // PRÓXIMOS EVENTOS
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-balance">
                            Actividades{" "}
                            <span className="text-primary">programadas</span>
                        </h2>
                        <p className="text-muted-foreground mt-4 max-w-xl">
                            Únete a nuestros eventos y aprende junto a la
                            comunidad.
                        </p>
                    </div>
                    <a
                        href="https://www.meetup.com/es-ES/vaslibre"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 w-fit px-4 py-2 rounded-lg border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                        Ver todos los eventos
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-16 h-24 bg-primary/10 rounded-lg flex flex-col items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <span className="text-2xl font-bold text-primary">
                                        {event.date}
                                    </span>
                                    <span className="text-xs text-primary font-medium">
                                        {event.month}
                                    </span>
                                    <span className="text-[10px] text-primary/70 font-medium">
                                        {event.year}
                                    </span>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-medium">
                                            {event.type}
                                        </span>
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2 text-balance">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                        {event.description}
                                    </p>

                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
