const path = require('path');

//CSS
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
	    'jquery',
		path.resolve(__dirname, "app/index.js")
	],
	output: {
		path: path.resolve(__dirname, "build"),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			/*{
				test: /\.json$/,
				/*loader: 'json-loader',*/
				//use: 'json-loader'
			//},
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: path.resolve(__dirname, "node_modules")
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader'}
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('/css/style.css')
	],
	// externals: {
	// 	jquery: 'jQuery'
	// },
	devtool: 'cheap-module-source-map',
	devServer: {
		port: 3001,
		contentBase: path.resolve(__dirname, "build"),
		inline: true,
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},
	mode: 'development'
}