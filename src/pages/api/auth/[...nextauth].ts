import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../../lib/prisma/index";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { checkUsernameAvailibility } from "lib/prisma/features/users";
import bcrypt from 'bcryptjs'
import { User } from "@prisma/client";

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
        maxAge: 300,
        updateAge: 240
    },
    callbacks: {
        async jwt({token, user, account, profile, isNewUser}) {
            user && (token.user = user)
            return Promise.resolve(token)
        },
        async session({session, token, user}) {
            return session
        }
    }, 
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: "Username", type: "text " },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {

                prisma.$connect()

                const username = credentials?.username

                const password = credentials?.password

                if(username && password) {
                    const user = await checkUsernameAvailibility(username) as User
                    
                    if(!user) {
                        throw new Error("Invalid Username or Password")
                    }

                    if(user) {
                        const checkPasswordMatch = await bcrypt.compare(password, user.password)

                        if(!checkPasswordMatch) {
                            throw new Error("Invalid Username or Password")
                        }

                        return user
                    }

                }

                return null

            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/',
        signOut: '/',
    }
})