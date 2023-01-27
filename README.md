# SvelteKit on AWS

Testing SvelteKit deplyment using a Lambda@Edge function on a cloudfront distribution.
Heavily based on https://juranki.github.io/sveltekit-cdk/

The idea is to create a sveltekit adapter to modify the sveltkit output to use a lambda@edge
The prerendered and static files are uploaded to an S3 bucket
And the code goes through the lambda@edge function

The problem with this approach is that the svelketkit folder in this project needs to contain the output of the sveltekit build command with the custom adapter (there is a sample here).
And the CDK will properly deploy it to the lambda@edge function and the S3 bucket accordingly.

But that means that I can´t directly deploy from the sveltekit project and that is minorly annoying.

The biggest advantages here are:

1. No API gateway - less latency less costs
1. lambda@edge is so much faster than usual lambda for end customers
1. reasonably simple approach to understand