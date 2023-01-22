import { Review } from "@prisma/client";
import { bodyCheck } from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";



const reviewHandler = async (req: NextApiRequest, res: NextApiResponse) => {

    if(req.method === "POST") {

        if(bodyCheck<Review>(req.body, "body")) {

            const { body, rating, userId, createdAt } = req.body


        }

    }

}