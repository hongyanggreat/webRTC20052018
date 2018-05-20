// webpack.development.config.js
module.exports = {
	mode: 'development',
	entry: './src/app.js',
	output: {
		path: path.resolve(dirname, './'),
		filename: './public/bundle.js'
	}
}
