module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `417s1sp1t8qd`,
        accessToken: `5deec834ca2ac2b9489560939a17e94f07198149d66ab4f3029b0adf0f38f532`,
      },
    },
  ],
}
