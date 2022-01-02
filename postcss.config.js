const postcssPresetEnv = require(`postcss-preset-env`)
const precss = require(`precss`)

module.exports = () => ({
  plugins: [
    precss(),
    postcssPresetEnv({
      stage: 0,
    }),
  ],
})
