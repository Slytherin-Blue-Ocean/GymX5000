/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
// }

// module.exports = (on, config) => {
//   if (config.testingType === 'component') {
//     const { startDevServer } = require('@cypress/webpack-dev-server')

//     // Your project's Webpack configuration
//     const webpackConfig = require('../../webpack.config.js')

//     on('dev-server:start', (options) =>
//       startDevServer({ options, webpackConfig })
//     )
//   }
// }



// cypress/plugins/index.js
module.exports = (on, config) => {
  if (config.testingType === 'component') {
    require('@cypress/react/plugins/react-scripts')(on, config)
  }

  return config
}

//part2
// const injectDevServer = require('@cypress/react/plugins/react-scripts');

// module.exports = (on, config) => {
//   injectDevServer(on, config);

//   return config;
// };

//part3
// module.exports = (on, config) => {
//   config.env.webpackFilename = './cypress/webpack.config.js' // or path to your webpack.config.js
//   require('cypress-react-unit-test/plugins/load-webpack')(on, config)
//   return config
// }