module.exports = {
  exportPathMap: () => ({
    '/': {page: '/'},
    '/commas/': {page: '/commas/'},
    '/cv/': {page: '/cv/'},
    '/pug/': {page: '/pug/'},
    '/the-last-question/': {page: '/the-last-question/'}
  }),
  webpack: (config, {dev}) => {
    if (dev) {
      const Visualizer = require('webpack-visualizer-plugin')
      config.plugins.push(new Visualizer())
    }
    return config
  }
}
