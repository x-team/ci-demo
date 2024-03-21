const { markdown, schedule } = require('danger');

const { istanbulCoverage } = require('danger-plugin-istanbul-coverage')

schedule(istanbulCoverage({
  coveragePath: {
    path: './coverage/lcov.info',
    type: 'lcov'
  }
}))

markdown(`[Coverage Report](https://ci-demo-builds.s3.us-east-1.amazonaws.com/${process.env.CODEBUILD_WEBHOOK_TRIGGER}/lcov-report/index.html)`)
