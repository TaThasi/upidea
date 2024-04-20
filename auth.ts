import NextAuth, {  NextAuthConfig } from "next-auth";
import google from "next-auth/providers/google";
import github from "next-auth/providers/github";
import credentials from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/app/lib/db";
import resend from "next-auth/providers/resend";
const credentialsConfig = credentials({
    name: "Credentials",
    credentials: {
        username: {
            label: "Username",
        },
        password: {
            label: "Password",
            type: "password",
        },
    },
    async authorize(credentials) {
        if(credentials.username === 'ok' && credentials.password === '123') {
            return {
                name: "Vahid",
            }
        }
        else return null;
    }
})

const config = {
    providers: [
        github,
        resend
    ],
    callbacks: {
        authorized({request, auth}) {
            const { pathname } = request.nextUrl;
            if (pathname === "/submit") return !!auth
            return true
        }
    },
    adapter: MongoDBAdapter(clientPromise),
} satisfies NextAuthConfig 


export const {handlers, auth, signIn, signOut} = NextAuth(config);