const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  experimental: {
    appDir: true
  },
  // 👇 This tells Next.js that your app lives in /src
  // (Vercel will now build correctly)
  srcDir: 'src',
  
  async headers() {
    return [
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          }
        ],
      },
      {
        source: '/:locale/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          }
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          }
        ],
      }
    ];
  }
};

module.exports = withNextIntl(nextConfig);
