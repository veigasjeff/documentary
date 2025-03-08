const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve.alias['path'] = path.resolve(__dirname, 'node_modules/path')
    return config
  }
}