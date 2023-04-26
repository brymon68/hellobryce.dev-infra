import { CfnOutput, SecretValue, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { ISecret, Secret } from "aws-cdk-lib/aws-secretsmanager";
import { IKey, Key } from "aws-cdk-lib/aws-kms";

export class InfraStack extends Stack {
  public readonly secretKMSKey: IKey;
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    this.secretKMSKey = new Key(this, "GitHubOAuthSecretKey", {
      enableKeyRotation: true,
    });
  }
}
