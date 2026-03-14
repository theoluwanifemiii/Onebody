import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/sermons.html', destination: '/sermons', permanent: true },
      { source: '/academy.html', destination: '/academy', permanent: true },
      { source: '/charity.html', destination: '/charity', permanent: true },
      { source: '/giving.html', destination: '/giving', permanent: true },
      { source: '/lords-table.html', destination: '/lords-table', permanent: true },
      { source: '/blog.html', destination: '/blog', permanent: true },
      { source: '/posts/god-is-calling-you.html', destination: '/posts/god-is-calling-you', permanent: true },
      { source: '/posts/fruit-bearing-branches.html', destination: '/posts/fruit-bearing-branches', permanent: true },
      { source: '/posts/loving-christs-way.html', destination: '/posts/loving-christs-way', permanent: true },
      { source: '/posts/fish-faith-and-obedience.html', destination: '/posts/fish-faith-and-obedience', permanent: true },
      { source: '/posts/the-pure-heart-touches-god.html', destination: '/posts/the-pure-heart-touches-god', permanent: true },
      { source: '/posts/spiritual-transformation.html', destination: '/posts/spiritual-transformation', permanent: true },
      { source: '/posts/god-is-speaking-can-you-hear.html', destination: '/posts/god-is-speaking-can-you-hear', permanent: true },
    ];
  },
};

export default nextConfig;
