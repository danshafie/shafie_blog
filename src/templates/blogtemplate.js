import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const BlogTemplate = ({ data: { contentfulBlogPost } }) => {
  console.log("data: ", contentfulBlogPost)

  return (
    <div className="blog-template">
      <Img fluid={contentfulBlogPost.largeImage.fluid} />
      <div className="content-wrapper" />
    </div>
  )
}

export const query = graphql`
  query blogPostQuery($title: String!) {
    contentfulBlogPost(title: { eq: $title }) {
      title
      largeImage {
        fluid(maxWidth: 1600) {
          ...GatsbyContentfulFluid
        }
        id
      }
      blogPost {
        content {
          content {
            value
          }
        }
      }
    }
  }
`

export default BlogTemplate
