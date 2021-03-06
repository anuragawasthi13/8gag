var path = require("path");
var webpack = require("webpack");
module.exports = {
	devTool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./public/app/index'
	],
	output: {
		path: path.join(__dirname, 'public/dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel'],
			exclude: /node_modules/,
			include: __dirname
		}, {
			test: /\.json$/,
			loaders: ['json'],
			exclude: /node_modules/,
			include: __dirname
		}]
	}
}