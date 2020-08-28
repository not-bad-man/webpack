const path = require('path');

const rootPath = path.join(__dirname, '../');
console.log('rootpath', rootPath)

module.exports = {
  entry: {
		path: path.join(rootPath, './src/index.js')
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../output')
	}
}