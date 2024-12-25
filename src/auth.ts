import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    jwt({ token, account, user, profile }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user?.id;
        token.username = profile?.login;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.user.username = token?.username;
      return session;
    },
  },
});
