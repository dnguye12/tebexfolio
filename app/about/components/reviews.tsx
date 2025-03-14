import reviews from "@/data/reviews"
import ReviewCard from "./review-card";

const Reviews = () => {
    const sizes = [2, 3, 2];
    let index = 0

    const reviewChunks = sizes.map(size => {
        const chunk = reviews.slice(index, index + size)
        index += size
        return chunk
    })

    return (
        <div className="container mx-auto py-12 px-8 lg:px-0">
            <h2 className="text-3xl tracking-wide sm:text-4xl md:text-4xl font-semibold text-neutral-100 mb-8 text-center">💬 Customers Reviews</h2>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 lg:gap-4 2xl:gap-8">
                {
                    reviewChunks.map((chunk, idx) => (
                        <div
                            key={`chunk-${idx}`}
                            className="group flex flex-col justify-center gap-y-6 lg:gap-y-4 2xl:gap-y-8"
                        >
                            {
                                chunk.map((review, idx) => (
                                    <ReviewCard
                                        key={`review-${idx}`}
                                        imageUrl={review.imageUrl}
                                        user={review.user}
                                        content={review.content}
                                    />
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Reviews;