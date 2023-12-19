const nextConfig = {
  experimental: {
    serverActions: true
  },
  compiler: {
    styledComponents: true
  },
 
}
const withNextIntl = require('next-intl/plugin')('./i18n.js')
module.exports = withNextIntl(nextConfig)
