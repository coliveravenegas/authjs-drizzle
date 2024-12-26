import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import GitHub from "next-auth/providers/github"
import { NextResponse } from "next/server";

import { db } from "./db"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: DrizzleAdapter(db),
    providers: [GitHub],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized: async ({ request, auth }) => {
            const nextUrl = request.nextUrl.pathname;

            const PUBLIC_ROUTES = ["/login"];

            const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl);

            if (!isPublicRoute && !auth) {
                return NextResponse.redirect(new URL('/login', request.url))
            }

            if (auth && nextUrl === "/login") {
                return NextResponse.redirect(new URL('/profile', request.url))
            }

            return true;
        },
    },
    trustHost: true,
})