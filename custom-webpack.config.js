const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const {sentryWebpackPlugin} = require('@sentry/webpack-plugin');
module.exports = {
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: ['fr']
    }),
    sentryWebpackPlugin({
        org: "francisorg",
        project: "angularrepro",
        authToken: "245b2adc7a2447fbbfe95596719ab67a926ffb7b90b94de59eac8172b3799d9a"
    })
  ]
};
