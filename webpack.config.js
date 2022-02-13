'use strict';

const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		out: './src/main.js',
	},
	output: {
		path: path.resolve(__dirname, 'out/'),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							url: false,
						},
					},
					'postcss-loader',
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
	devtool: false,
};
