
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.deborabrasil.js'
  },
  module: {
    noParse: [/aws-sdk.js/]
  },
  target: 'node',
  externals: [nodeExternals(), "node_helper"]
};