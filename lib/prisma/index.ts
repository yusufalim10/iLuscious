import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient()

export default prisma

export const bodyCheck = <T> (object: unknown, key: string): object is T => {

    if(object !== null && typeof object === 'object') {
        return "name" in object
    }

    return false
}