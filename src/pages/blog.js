import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/index"
import Img from "gatsby-image"

const Blog = ({ data: { allContentfulBlogPost } }) => {
  console.log("allContentfulBlogPost:", allContentfulBlogPost)

  return (
    <div className="blog-wrapper">
      {allContentfulBlogPost.edges.map(item => {
        return (
          <div className="wrapper" key={item.node.id}>
            {item.node.colorImage ? (
              <Img fluid={item.node.colorImage.fluid} />
            ) : null}
            <div className="description">
              <p>{item.node.title}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Blog

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          contentful_id
          blogPost {
            content {
              content {
                value
              }
            }
          }
          colorImage {
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid
            }
            id
          }
        }
      }
    }
  }
`
