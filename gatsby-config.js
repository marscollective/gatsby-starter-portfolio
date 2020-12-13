const metadata = require(`./content/metadata.json`)
module.exports = {
  plugins: [
    {
      resolve: `@marscollective/gatsby-theme-portfolio`,
      options: {
        metadata
      }
    }
  ]
}
