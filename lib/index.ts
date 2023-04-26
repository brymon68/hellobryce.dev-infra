import * as cdk from "aws-cdk-lib";
import { AmplifyStack } from "./amplify";
import { InfraStack } from "./infra";

const app = new cdk.App();

const infra = new InfraStack(app, "InfraStack", {
  env: {
    account: "948132494928",
    region: "us-west-2",
  },
});
new AmplifyStack(app, "AmplifyStack", {
  env: {
    account: "948132494928",
    region: "us-west-2",
  },
  repository: "hellobryce.dev",
  owner: "brymon68",
  githubOauthTokenName: "GITHUB_OAUTH_TOKEN_SECRET",
}).addDependency(infra);
