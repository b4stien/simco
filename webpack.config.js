var path = require('path'),
    webpack = require('webpack');


var rootdir = path.resolve(__dirname);


var webpackConfig = {
  context: __dirname + '/js',
  entry: {
    'app': './main',
    'vendor': [
      'babel-polyfill',
      'immutable',
      'whatwg-fetch',
      'react',
      'react-dom',
      'redux',
      'react-redux'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [/simco\/js/],
        query: {
          presets: ['es2015-webpack', 'react', 'stage-2']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' })
  ],
  resolve: {
    modules: ['../node_modules'],
    extensions: ['', '.jsx', '.js', '.json'],
    alias: {
      simco: path.resolve(__dirname, 'js')
    }
  },
  output: {
    publicPath: 'dist/',
    path: path.resolve(rootdir, 'dist'),
    filename: '[name].js'
  },
  debug: true
};



if(process.argv.indexOf('-p') >= 0) {
  webpackConfig['devtool'] = 'source-map';
  webpackConfig.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {'NODE_ENV': JSON.stringify('production')}
    })
  );
}

else {
  webpackConfig['devtool'] = 'inline-source-map';
}

module.exports = webpackConfig;
