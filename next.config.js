/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			// Basic redirect
			{
				source: '/',
				destination: '/en',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
