/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
	// here you can add the url's that you are planning 
   // to use inside your next/image.
    domains: ["image.tmdb.org","www.themoviedb.org"],
  },
};

// module.exports = nextConfig
