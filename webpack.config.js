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
				test: /\.(css|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
						},
					},
					'postcss-loader',
				],
			},
			{
				test: /\.scss$/,
				use: ['sass-loader'],
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
