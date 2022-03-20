require("dotenv").config();

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
    siteMetadata: {
        title: ``,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: `gatsby-source-github-api`,
            options: {
                // token: required by the GitHub API
                token: process.env.GH_API_TOKEN,
                graphQLQuery: `query {
                  repository(name: "seeking-maintainers", owner: "garritfra") {
                    id
                    issues(first: 100, labels: "seeking-maintainers", states: OPEN) {
                      edges {
                        node {
                          id
                          body
                          title
                          createdAt
                          url
                        }
                      }
                    }
                  }
                }`,

                variables: {},
            },
        },
    ],
};
