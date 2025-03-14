import { Clock8, Headset, Star, UserCheck } from "lucide-react";

const AboutStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 px-0 ">
            <div className="border-2 border-neutral-700 px-8 py-6 drop-shadow-md flex gap-x-4 justify-between rounded-md">
                <div className="flex flex-col items-start">
                    <p className="text-lg font-semibold">Happy Clients</p>
                    <p className="text-4xl font-semibold text-pink-600 tracking-wide mt-1">75+</p>
                </div>
                <div className="flex justify-center items-center">
                    <UserCheck className="text-pink-600 w-8 h-8" />
                </div>
            </div>
            <div className="border-2 border-neutral-700 px-8 py-6 drop-shadow-md flex gap-x-4 justify-between rounded-md">
                <div className="flex flex-col items-start">
                    <p className="text-lg font-semibold">Fiverr Ratings</p>
                    <p className="text-4xl font-semibold text-green-600 tracking-wide mt-1 text-start">4.9</p>
                </div>
                <div className="flex justify-center items-center">
                    <Star className="text-green-600 w-8 h-8" />
                </div>
            </div>
            <div className="border-2 border-neutral-700 px-8 py-6 drop-shadow-md flex gap-x-4 justify-between rounded-md">
                <div className="flex flex-col items-start">
                    <p className="text-lg font-semibold">Experience</p>
                    <p className="text-4xl font-semibold text-violet-600 tracking-wide mt-1">{new Date().getFullYear() - 2019} Years</p>
                </div>
                <div className="flex justify-center items-center">
                    <Clock8 className="text-violet-600 w-8 h-8" />
                </div>
            </div>
            <div className="border-2 border-neutral-700 px-8 py-6 drop-shadow-md flex gap-x-4 justify-between rounded-md">
                <div className="flex flex-col items-start">
                    <p className="text-lg font-semibold">Support</p>
                    <p className="text-4xl font-semibold text-amber-500 tracking-wide mt-1">Lifetime</p>
                </div>
                <div className="flex justify-center items-center">
                    <Headset className="text-amber-500 w-8 h-8" />
                </div>
            </div>
        </div>
    );
}

export default AboutStats;