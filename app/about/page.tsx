"use client"

import { Separator } from "@/components/ui/separator";
import Header from "./components/header";
import Hero from "./components/hero";
import SmoothScroll from '@/components/smooth-scroll';
import AboutMe from "./components/about-me";
import Footer from "./components/footer";
import Contact from "./components/contact";

const AboutPage = () => {
    return (
        <SmoothScroll>
            <div className="flex min-h-screen flex-col z-40">
                <Header />
                <main className="flex-1 drop-shadow-md">
                    <div className="">
                        <Hero />
                    </div>
                    <Separator className="bg-neutral-700" />
                    <AboutMe />
                    <Separator className="bg-neutral-700" />
                    <Contact />
                </main>
                <Footer />
            </div>
        </SmoothScroll>
    );
}

export default AboutPage;