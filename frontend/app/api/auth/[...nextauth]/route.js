import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import axios from "axios"

// These two values should be a bit less than actual token lifetimes
const BACKEND_ACCESS_TOKEN_LIFETIME = 45 * 60 // 45 minutes
const BACKEND_REFRESH_TOKEN_LIFETIME = 6 * 24 * 60 * 60 // 6 days

const getCurrentEpochTime = () => {
    return Math.floor(new Date().getTime() / 1000)
}

const SIGN_IN_HANDLERS = {
    credentials: async (user, account, profile, email, credentials) => {
        return true
    },
    // google: async (user, account, profile, email, credentials) => {
    //     try {
    //         const response = await axios({
    //             method: "post",
    //             url: process.env.NEXTAUTH_BACKEND_URL + "auth/google/",
    //             data: {
    //                 access_token: account["id_token"],
    //             },
    //         })
    //         account["meta"] = response.data
    //         return true
    //     } catch (error) {
    //         console.error(error)
    //         return false
    //     }
    // },
}
const SIGN_IN_PROVIDERS = Object.keys(SIGN_IN_HANDLERS)

export const authOptions = {
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: BACKEND_REFRESH_TOKEN_LIFETIME,
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            // The data returned from this function is passed forward as the
            // `user` variable to the signIn() and jwt() callback
            async authorize(credentials, req) {
                try {
                    const response = await axios({
                        url: process.env.NEXTAUTH_BACKEND_URL + "/auth/login/",
                        method: "post",
                        data: credentials,
                    })
                    const data = response.data
                    if (data) return data
                } catch (error) {
                    console.error(error)
                }
                return null
            },
        }),
        // GoogleProvider({
        //     clientId: process.env.CLIENT_ID ?? "",
        //     clientSecret: process.env.CLIENT_SECRET ?? "",
        //     authorization: {
        //         params: {
        //             prompt: "consent",
        //             access_type: "offline",
        //             response_type: "code"
        //         }
        //     }

        // }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (!SIGN_IN_PROVIDERS.includes(account.provider)) return false
            return SIGN_IN_HANDLERS[account.provider](
                user,
                account,
                profile,
                email,
                credentials
            )
        },
        async jwt({ user, token, account }) {
            // If `user` and `account` are set that means it is a login event
            if (user && account) {
                let backendResponse =
                    account.provider === "credentials" ? user : account.meta
                token["user"] = backendResponse.user
                token["access"] = backendResponse.access
                token["refresh"] = backendResponse.refresh
                token["ref"] =
                    getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME
                return token
            }
            // Refresh the backend token if necessary
            if (getCurrentEpochTime() > token["ref"]) {
                // const response = await axios({
                //     method: "post",
                //     url:
                //         process.env.NEXTAUTH_BACKEND_URL +
                //         "auth/token/refresh/",
                //     data: {
                //         refresh: token["refresh_token"],
                //     },
                // })
                const response = await fetch(`${process.env.NEXTAUTH_BACKEND_URL}/auth/token/refresh/`, {
                    method: "POST",
                    body: {
                        refresh: token['refresh']
                    },
                    headers: { "Content-Type": "application/json" },
                })
                token["access"] = response.data.access
                token["refresh"] = response.data.refresh
                token["ref"] =
                    getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME
            }
            return token
        },
        // Since we're using Django as the backend we have to pass the JWT
        // token to the client instead of the `session`.
        async session({ token }) {
            return token
        },
    },
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }