require("dotenv").config();

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
    siteMetadata: {
        title: ``,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
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
                  repository(name: "seeking-maintainers.net", owner: "garritfra") {
                    id
                    issues(
                      labels: "seeking-maintainers"
                      states: OPEN
                      orderBy: {field: UPDATED_AT, direction: DESC}
                      last: 100
                    ) {
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
