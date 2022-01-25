import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import excuteQuery from "../../../lib/db";

const bcrypt = require("bcryptjs");

export default NextAuth({
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt(token, user) {
      if (typeof user !== typeof undefined) {
        token.user = user;
      }
      return token;
    },
    async session(session) {
      session.session.user = session.token.token.user;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        userId: { label: "User ID", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        let user = {
          id: credentials.userId,
          name: credentials.userId,
        };
        // If no error and we have user data, return it
        if (user || user.length !== 0) {
          return user;
        } else return null;

        // Return null if user data could not be retrieved
      },
    }),
  ],
  pages: {
    signIn: "/account/login",
  },
});
