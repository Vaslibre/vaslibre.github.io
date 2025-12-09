import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { MembersSection } from "@/components/members-section";
import { GallerySection } from "@/components/gallery-section";
import { LatestPostsSection } from "@/components/latest-posts-section";
import { EventsSection } from "@/components/events-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <MembersSection />
            <GallerySection />
            <LatestPostsSection />
            <EventsSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
