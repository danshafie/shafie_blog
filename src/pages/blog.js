import React from "react"
import { graphql, Link } from "gatsby"
// import Layout from "../layouts/index"
import Img from "gatsby-image"
import Utils from "../utils/utils"

const Blog = ({ data: { allContentfulBlogPost } }) => {
  console.log("allContentfulBlogPost:", allContentfulBlogPost)

  return (
    <div className="blog-wrapper">
      {allContentfulBlogPost.edges.map(item => {
        console.log("item: ", item)
        const slug = Utils.createSlug(item.node.title)
        return (
          <div className="wrapper" key={item.node.id}>
            <Link to={`blog/${slug}`}>
              {item.node.colorImage ? (
                <Img fluid={item.node.colorImage.fluid} />
              ) : null}
              <div className="description">
                <p>{item.node.title}</p>
              </div>
            </Link>
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
          slug
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
