import { Config } from "sst/node/config";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: Config.GITHUB_ID as string,
      clientSecret: Config.GITHUB_SECRET as string,
    }),
  ],
};
