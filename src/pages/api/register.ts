import bcrypt from 'bcryptjs'
import { checkEmailAvailibility, checkUsernameAvailibility, createUser, getUserById } from "lib/prisma/features/users";
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next'
import { bodyCheck } from 'lib/prisma';

const authHandler = async (req: NextApiRequest, res: NextApiResponse) => {

    if(req.method === 'POST') {

        if(bodyCheck<User>(req.body, "name")) {

            const { name, email, password } = req.body

            const userData = {
                name: name,
                username: name,
                email: email,
                password: bcrypt.hashSync(password, 10)
            }

            const checkEmail = await checkEmailAvailibility(email)
            const checkUsername = await checkUsernameAvailibility(name)

            if(checkEmail) {
                res.status(409).json({Error: "Email has already been used"})
            }

            if(checkUsername) {
                res.status(409).json({Error: "Username has been taken"})
            }

            const user = await createUser(userData)
    
            res.status(201).json(user)
        }

    }

    if(req.method === "GET") {

        if(bodyCheck<User>(req.body, "name")) {

            const { id, password } = req.body

            const user = await getUserById(id) as User
    
            if(!user) {
                res.status(404).json({ Error: "User does not exist "})
            }
    
            const isPasswordMatch = bcrypt.compare(password, user.password)
    
            if(!isPasswordMatch) {
                res.status(409).json({ Error: "Password is Invalid "})
            }
    
            res.status(200).json(user)
        }

    }

}

export default authHandler