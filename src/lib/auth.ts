import { NextAuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && account.type === "credentials") {
        token.userId = account.providerAccountId;
        if (account && user) {
          token.token = user.token!;
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.userId;
      session.token = token.token;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const cHeaders = new Headers();
        cHeaders.append("Content-Type", "application/json");

        try {
          const tokenRes = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
            {
              method: "POST",
              headers: cHeaders,
              body: JSON.stringify({ email, password }),
            }
          );

          if (!tokenRes.ok) {
            const error = await tokenRes.json();
            throw new Error(error.message || "Failed to authenticate");
          }

          const { token } = await tokenRes.json();

          cHeaders.append("Authorization", `Bearer ${token}`);
          const userRes = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`,
            {
              headers: cHeaders,
            }
          );

          if (!userRes.ok) {
            throw new Error("Failed to fetch user data");
          }

          const userJson = await userRes.json();
          const user: User = {
            id: userJson._id,
            name: userJson.username,
            email: userJson.email,
          };
          return { ...user, token };
        } catch (error) {
          console.log(error);
          throw new Error((error as string) || "An unexpected error occurred");
        }
      },
    }),
  ],
};
