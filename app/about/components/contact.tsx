import Image from "next/image";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const Contact = () => {
    return (
        <div className="container mx-auto py-12 flex flex-col justify-center items-center px-8 lg:px-0">
            <h2 className="text-3xl tracking-wide sm:text-4xl md:text-4xl font-semibold text-neutral-100 mb-8">📝 Hire Me</h2>
            <p className="text-base leading-relaxed text-neutral-400 sm:text-lg md:text-lg">Ready to bring your project to life? Get in touch below to start.</p>
            <p className="text-base leading-relaxed text-neutral-400 sm:text-lg md:text-lg !mt-1">I usually respond within 3 hours.</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 m-6 lg:m-8 w-full gap-6 lg:gap-8">
                <TooltipProvider
                    delayDuration={100}
                >
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a href="https://discordapp.com/users/589583302890094600" className="flex flex-col items-center p-8 border border-neutral-700 rounded-md drop-shadow-md transition-all hover:scale-105 hover:bg-neutral-800 hover:border-neutral-400 cursor-pointer" target="_blank">
                                <Image
                                    src="/icons8-discord-48.png"
                                    width={48}
                                    height={48}
                                    alt="Discord contact"
                                    className="drop-shadow-md mb-2"
                                />
                                <h3 className="text-lg text-neutral-100 font-semibold">Discord</h3>
                                <p className="text-pink-600 font-semibold">tjktak1002</p>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent alignOffset={10} sideOffset={10}>
                            <p>Click to see my Discord</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider
                    delayDuration={100}
                >
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a href="mailto:tjktakbuonngu@gmail.com" className="flex flex-col items-center p-8 border border-neutral-700 rounded-md drop-shadow-md transition-all hover:scale-105 hover:bg-neutral-800 hover:border-neutral-400 cursor-pointer" target="_blank">
                                <Image
                                    src="/icons8-email-48.png"
                                    width={48}
                                    height={48}
                                    alt="Email"
                                    className="drop-shadow-md mb-2"
                                />
                                <h3 className="text-lg text-neutral-100 font-semibold">Email</h3>
                                <p className="text-violet-600 font-semibold">tjktakbuonngu@gmail.com</p>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent alignOffset={10} sideOffset={10}>
                            <p>Click to send me an email</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>


                <TooltipProvider
                    delayDuration={100}
                >
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a href="https://www.fiverr.com/s/m5Bmq1V" className="flex flex-col items-center p-8 border border-neutral-700 rounded-md drop-shadow-md transition-all hover:scale-105 hover:bg-neutral-800 hover:border-neutral-400 cursor-pointer" target="_blank">
                                <Image
                                    src="/icons8-fiverr-48.png"
                                    width={48}
                                    height={48}
                                    alt="Email"
                                    className="drop-shadow-md mb-2"
                                />
                                <h3 className="text-lg text-neutral-100 font-semibold">Fiverr</h3>
                                <p className="text-green-600 font-semibold">tjktakbuonngu</p>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent alignOffset={10} sideOffset={10}>
                            <p>Contact me on Fiverr</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    );
}

export default Contact;