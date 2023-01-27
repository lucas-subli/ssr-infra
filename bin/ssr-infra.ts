#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SsrInfraStack } from '../lib/ssr-infra-stack';

const app = new cdk.App();
new SsrInfraStack(app, 'SsrInfraStack', {
  env: { account: '094656407436', region: 'us-east-2' },
});