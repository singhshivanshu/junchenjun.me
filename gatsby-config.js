/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `junchenjun.me`,
                short_name: `junchenjun.me`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#304ffe`,
                icon: `src/assets/icons/favicon.png`,
                display: `standalone`,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        {
            resolve: `gatsby-alias-imports`,
            options: {
                aliases: {
                    components: `src/components`,
                    constants: `src/utilities/constants`,
                },
            },
        },
        `gatsby-plugin-eslint`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                includePath: 'node_modules',
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // replace "UA-XXXXXXXXX-X" with your own Tracking ID
                trackingId: 'UA-159830781-1',
            },
        },
    ],
}
