import { User } from "@prisma/client";
import { userModel } from "lib/utils/Models/usersModel";
import prisma from "..";

export const getUsers = async () => {
    
    try {
        const users = await prisma.user.findMany()
        return users 
    } catch (err) {
        if(err instanceof Error) {
            console.log(err.message)
        }
    }
}

export const createUser = async (user: userModel) => {
    try {
        const userFromDb = await prisma.user.create({
            data: {
                username: user.username,
                name: user.username,
                email: user.email,
                password: user.password
            }
        })

        return userFromDb

    } catch (err) {

        if(err instanceof Error) {
            console.log(err.message)
        }

    }
}

export const getUserById = async (id: string) => {
    try {
        const user = await prisma.user.findUnique({where: { id }})
        return user 
    } catch (err) {
        if(err instanceof Error) {
            console.log(err.message)
        }
    }
}

export const checkEmailAvailibility = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({where: { email }})
        return user
    } catch (err) {
        if(err instanceof Error) {
            console.log(err.message)
        }
    }
}

export const checkUsernameAvailibility = async (username: string) => {
    try {
        const user = await prisma.user.findUnique({where: { username }})
        return user
    } catch (err) {
        if(err instanceof Error) {
            return err.message
        }
    }
}