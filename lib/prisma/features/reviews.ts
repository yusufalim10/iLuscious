import { Review } from "@prisma/client";
import prisma from "..";

export const createReview = async (review: Review) => {

    try {

        const theReview = await prisma.review.create({
            data: {
                body: review.body,
                createdAt: new Date().toISOString(),
                rating: review.rating,
                userId: review.userId
            }
        })

        return theReview

    } catch(err) {

        if(err instanceof Error) {
            console.log(err.message)
        }

    }

}