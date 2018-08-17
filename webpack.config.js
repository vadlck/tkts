const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
	entry: './src',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'main.js'
	},
	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			'node_modules'
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'env',
							'react'
						],
						plugins: [
							'transform-class-properties',
							'transform-object-rest-spread'
						]
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin('main.css'),
		new LiveReloadPlugin()
	]
}