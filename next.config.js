const { i18n } = require('./next-i18next.config')

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/welcome',
        permanent: true
      }
    ]
  },

  i18n
}