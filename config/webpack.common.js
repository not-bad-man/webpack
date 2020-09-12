const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const rootPath = path.join(__dirname, '../');

module.exports = {
  entry: {
		index: path.join(rootPath, './src/index.js')
	},
	output: {
		path: path.resolve(__dirname, '../output'),
		filename: 'static/js/[name][hash:8].js',
		chunkFilename: 'static/js/[name][hash:8].js'
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: 'template/index.html',
			filename: 'tpl/index.html'
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.js|jsx|ts|tsx$/,
				use: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.css|less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			}
		]
	},
	resolve: {
		extensoins: ['js', 'ts', 'jsx', 'tsx']
	},
	devServer: {
		port: 3000,
		hot: true
	}
}