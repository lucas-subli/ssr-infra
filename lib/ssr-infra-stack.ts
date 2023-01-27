import * as cdk from 'aws-cdk-lib';
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from 'constructs';
import { SvelteDistribution } from './distribution';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SsrInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    new SvelteDistribution(this, 'ssr-distribution', {
      bucketProps: {
        accessControl: s3.BucketAccessControl.PRIVATE,
        blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
        encryption: s3.BucketEncryption.S3_MANAGED,
        objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
        versioned: false,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        autoDeleteObjects: true,
      },
    })

    // example resource
    // const queue = new sqs.Queue(this, 'SsrInfraQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
