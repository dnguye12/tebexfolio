import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AboutStats from "./about-stats";

const AboutMe = () => {
    return (
        <section className="container mx-auto py-12">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 md:gap-8">
                <div className="col-span-1 lg:col-span-2">
                    <h2 className="text-4xl lg:text-2xl font-semibold  mb-6 text-center">😁 About Me</h2>
                    <Avatar className="w-24 h-24 bg-neutral-100 border border-neutral-400 mx-auto drop-shadow-md">
                        <AvatarImage src="./profile_cover.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h2 className="hidden lg:block text-2xl font-semibold  mt-6 text-center">tjktakbuonngu</h2>
                </div>
                <div className="col-span-1 lg:col-span-3">
                    <div className="space-y-8 px-8 lg:px-0 text-center lg:text-start">
                        <h3 className="font-semibold text-3xl tracking-wide sm:text-4xl md:text-4xl">
                            Hello, I am tjktakbuonngu.
                        </h3>
                        <p className="text-base leading-relaxed text-neutral-400 sm:text-lg md:text-lg"
                        >
                            I am a freelance website designer and developer with expertise in creating custom solutions.
                        </p>
                        <p className="text-base leading-relaxed text-neutral-400 sm:text-lg md:text-lg !mt-1"
                        >
                            I specialize in designing and developing websites for gaming servers, including platforms such as Minecraft, FiveM, and more.
                        </p>
                        <p className="text-base leading-relaxed text-neutral-400 sm:text-lg md:text-lg !mt-1">
                            My goal is to deliver high-quality, efficient, and visually appealing solutions that enhance user experiences.
                        </p>

                        <AboutStats />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;