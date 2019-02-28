/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

const BlogTemplate = path.resolve("./src/templates/blogtemplate.js")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  console.log("results!@!!!!!!: ", result)

  const posts = result.data.allContentfulBlogPost.edges
  posts.forEach(({ node }) => {
    const slug = node.title.replace(/[^0-9a-zA-Z ]/g, "").replace(/ /g, "-")
    createPage({
      path: `/blog/${slug}`,
      component: BlogTemplate,
      context: {
        title: node.title,
      },
    })
  })
}
