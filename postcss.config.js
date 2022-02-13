'use strict';

// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = (ctx) => {
	return {
		plugins: {
			autoprefixer: {},
			cssnano:
				ctx.env === 'production'
					? {
							preset: [
								'default',
								{
									discardComments: {
										remove: (comment) =>
											!comment.includes('Find out more on /r/Naut'),
									},
								},
							],
					  }
					: false,
		},
	};
};
