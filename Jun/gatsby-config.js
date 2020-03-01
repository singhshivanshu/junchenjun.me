/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-alias-imports`,
            options: {
                aliases: {
                    components: `pages/components`,
                    constants: `pages/constants`,
                },
            },
        },
        `gatsby-plugin-eslint`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-react-svg',
        },
    ],
    pathPrefix: `/hello`,
}
