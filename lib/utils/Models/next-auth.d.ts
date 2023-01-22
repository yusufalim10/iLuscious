import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            name: string,
            email: string,
            role?: string,
            image: string,
            [key?: string]: string
        }
    }
}