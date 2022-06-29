const { defineConfig } = require('cypress')

module.exports = defineConfig({
projectId: "1bqk3y",
  e2e:{
    baseUrl:'https://portaldocliente.stg.calcadosbeirario.app.br'
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 30000
})
