
import TextReveal from "@/components/motion/text-reveal";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    imageUrl?: string;
    tags: string[];
    liveUrl?: string;
}

const ProjectCard = ({
    title, imageUrl, tags, liveUrl
}: ProjectCardProps) => {
    return (
        <Card
            className={cn(
                'relative flex h-full flex-col justify-between border border-neutral-700 bg-neutral-900 drop-shadow-md cursor-pointer transition',
            )}
        >
            <CardContent className="p-4 md:p-6">
                <div className="grid gap-2">
                    <AspectRatio
                        ratio={16 / 9}
                        className="z-[2] mb-2 inline-block overflow-hidden rounded-md"
                    >
                        {
                            imageUrl
                                ? (
                                    <Image
                                        src={imageUrl}
                                        alt={`Image of ${title}`}
                                        fill
                                        className="object-cover transition-transform duration-300 drop-shadow-md hover:scale-105"
                                    />
                                )
                                :
                                (
                                    <div className="w-full h-full bg-neutral-950 flex justify-center items-center drop-shadow-md" >
                                        <LoaderCircle className="animate-spin w-8 h-8" />
                                    </div>

                                )
                        }
                    </AspectRatio>
                    <TextReveal className="text-xl font-bold" as="h2">
                        {title}
                    </TextReveal>
                    <div className="flex justify-between">
                        <div className="mt-2 flex flex-wrap gap-2">
                            {tags?.map((tag, index) => (
                                <Badge key={`project-tag_${index}`} className="drop-shadow-md">{tag}</Badge>
                            ))}
                        </div>
                        <Button asChild className="bg-neutral-900 border border-neutral-400 text-neutral-100 hover:bg-neutral-700 hover:scale-105 transition-all">
                            <a href={liveUrl} target="_blank" >Visit Website<ArrowUpRight className="ml-1 size-5" /></a>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default ProjectCard;
