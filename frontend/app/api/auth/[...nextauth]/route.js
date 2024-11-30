import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(process.env.NEXTAUTH_BACKEND_URL + "/login/", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const user = await res.json();
        if (res.ok && user) {
          return user;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      session = token
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user && account) {
        token['refresh'] = user.refresh
        token["access"] = user.access
        token["user"] = user.user
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  httpOptions: {
    timeout: 10000,
  },
  events: {
    signIn: async (message) => console.log("SignIn event:", message),
    error: async (error) => console.error("Error event:", error),
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
