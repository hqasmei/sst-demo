import { Config, StackContext, NextjsSite } from "sst/constructs";

export function Default({ stack }: StackContext) {
  const NEXTAUTH_SECRET = new Config.Secret(stack, "NEXTAUTH_SECRET");
  const GITHUB_ID = new Config.Secret(stack, "GITHUB_ID");
  const GITHUB_SECRET = new Config.Secret(stack, "GITHUB_SECRET");

  const site = new NextjsSite(stack, "site", {
    path: "packages/web",
    bind: [NEXTAUTH_SECRET, GITHUB_ID, GITHUB_SECRET],
    environment: {
      NEXTAUTH_URL: "https://dx88k2g38hfhq.cloudfront.net",
    },
  });
  stack.addOutputs({
    SiteUrl: site.url,
  });
}
