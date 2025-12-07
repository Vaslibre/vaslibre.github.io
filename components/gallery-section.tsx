"use client";

const galleryImages = [
    {
        src: "/images/gallery/1.jpg",
        alt: "VasLibre - Image 1",
    },
    {
        src: "/images/gallery/2.jpg",
        alt: "VasLibre - Image 2",
    },
    {
        src: "/images/gallery/3.jpg",
        alt: "VasLibre - Image 3",
    },
    {
        src: "/images/gallery/4.jpg",
        alt: "VasLibre - Image 4",
    },
    {
        src: "/images/gallery/5.jpg",
        alt: "VasLibre - Image 5",
    },
    {
        src: "/images/gallery/6.jpg",
        alt: "VasLibre - Image 6",
    },
    {
        src: "/images/gallery/7.jpg",
        alt: "VasLibre - Image 7",
    },
    {
        src: "/images/gallery/8.jpg",
        alt: "VasLibre - Image 8",
    },
    {
        src: "/images/gallery/9.jpg",
        alt: "VasLibre - Image 9",
    },
    {
        src: "/images/gallery/10.jpg",
        alt: "VasLibre - Image 10",
    },
    {
        src: "/images/gallery/11.jpg",
        alt: "VasLibre - Image 11",
    },
    {
        src: "/images/gallery/12.jpg",
        alt: "VasLibre - Image 12",
    },
    {
        src: "/images/gallery/13.jpg",
        alt: "VasLibre - Image 13",
    },
];

export function GallerySection() {
    return (
        <section id="gallery" className="py-24 overflow-hidden">
            {/* Header with container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center">
                    <span className="text-accent font-mono text-sm">
                        // GALERÍA
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-balance">
                        Momentos de nuestra{" "}
                        <span className="text-primary">comunidad</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Revive los mejores momentos de nuestros eventos,
                        talleres y encuentros.
                    </p>
                </div>
            </div>

            {/* Full-width gallery */}
            <div className="flex flex-col gap-4">
                {/* Top Row - Scroll Right */}
                <div
                    style={{
                        maskImage:
                            "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
                    }}
                    className="relative flex justify-around gap-4 overflow-hidden"
                >
                    <div className="flex gap-4 animate-scroll-reverse hover:paused">
                        {/* Duplicate images for infinite scroll */}
                        {[...galleryImages, ...galleryImages].map(
                            (image, index) => (
                                <div
                                    key={index}
                                    className=" relative overflow-hidden rounded-xl shrink-0 w-[280px] sm:w-[320px] md:w-[440px] aspect-4/3 cursor-pointer"
                                >
                                    <img
                                        src={
                                            image.src ||
                                            "/images/placeholder.svg"
                                        }
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-sm font-medium">
                                            {image.alt}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Bottom Row - Scroll Left */}
                <div
                    style={{
                        maskImage:
                            "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
                    }}
                    className="relative flex justify-around gap-4 overflow-hidden"
                >
                    <div className="flex gap-4 animate-scroll hover:paused">
                        {/* Duplicate images for infinite scroll */}
                        {[...galleryImages, ...galleryImages].map(
                            (image, index) => (
                                <div
                                    key={index}
                                    className=" relative overflow-hidden rounded-xl shrink-0 w-[280px] sm:w-[320px] md:w-[440px] aspect-4/3 cursor-pointer"
                                >
                                    <img
                                        src={
                                            image.src ||
                                            "/images/placeholder.svg"
                                        }
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-sm font-medium">
                                            {image.alt}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
