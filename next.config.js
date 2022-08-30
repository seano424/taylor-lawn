const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const STUDIO_REWRITE = {
  source: '/studio/:path*',
  destination:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333/studio/:path*'
      : '/studio/index.html',
}

module.exports = withBundleAnalyzer({
  rewrites: () => [STUDIO_REWRITE],
  images: {
    domains: ['cdn.sanity.io'],
  },
})
