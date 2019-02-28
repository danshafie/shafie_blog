// import React from "react"
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
// import ThemeContext from "../context/ThemeContext"
// import Header from "./header"
// import "./layout.scss"

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <ThemeContext.Consumer>
//           {theme => (
//             <>
//               <Header siteTitle={data.site.siteMetadata.title} theme={theme} />
//               <div className={`body-wrapper ${theme.dark ? "dark" : "light"}`}>
//                 <main>{children}</main>
//                 <footer />
//               </div>
//             </>
//           )}
//         </ThemeContext.Consumer>
//       </>
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
