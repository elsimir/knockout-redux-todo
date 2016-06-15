var path = require('path')

module.exports = {
	entry: './src/index',
	target: 'web',
	output: {
		path: __dirname + '/dist/',
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{test: /\.js$/, include: [path.join(__dirname, 'src'), path.join(__dirname, 'vendor')], loaders: ['babel']},
		]
	}
}