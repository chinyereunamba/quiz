import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   async authorize(credentials) {
    //     const res = await fetch(
    //       `${process.env.NEXTAUTH_BACKEND_URL}/api/login/`,
    //       {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(credentials),
    //       }
    //     );

    //     const user = await res.json();
    //     if (res.ok && user) {
    //       return user;
    //     }
    //     throw new Error("Invalid credentials");
    //   },
    // }),
  ],
  pages: {
    signIn: "/sign-in",
    error: "/auth/error",
    callbackUrl: "http://localhost:3000/api/auth/callback/google", // Local URL for testing
  },
  callbacks: {
    // async jwt({ token, account, profile }) {
    //   if (account?.provider === "google") {
    //     const response = await axios.post(
    //       `${process.env.BACKEND_URL}/api/google-login/`,
    //       {
    //         google_id: profile.sub,
    //         email: profile.email,
    //         name: profile.name,
    //         profile_picture: profile.picture,
    //       }
    //     );
    //     token.accessToken = response.data.access;
    //   }
    //   return token;
    // },
    // async session({ session, token }) {
    //   session.accessToken = token.accessToken;
    //   return session;
    // },

    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
