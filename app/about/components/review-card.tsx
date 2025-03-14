import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react";

interface ReviewCardProps {
    imageUrl?: string;
    user: string;
    content: string;
}

const ReviewCard = ({ imageUrl, user, content }: ReviewCardProps) => {
    return (
        <div className="rounded-md drop-shadow-md border border-neutral-700 flex flex-col p-6 min-h-20 lg:min-h-48">
            <div className="flex gap-x-4 items-center">
                <Avatar className="w-12 h-12 border border-neutral-700 drop-shadow-md">
                    <AvatarImage src={imageUrl} />
                    <AvatarFallback className="text-xl font-semibold">{String(user).charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                    <h4 className="text-neutral-100 text-lg font-semibold">{user}</h4>
                    <div className="flex gap-x-1 items-end mt-1">
                        <Star className="w-5 fill-neutral-100" />
                        <Star className="w-5 fill-neutral-100" />
                        <Star className="w-5 fill-neutral-100" />
                        <Star className="w-5 fill-neutral-100" />
                        <Star className="w-5 fill-neutral-100" />
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-neutral-300">{content}</p>
            </div>
        </div>
    );
}

export default ReviewCard;