// import React from "react"

// import Header from "../components/header"
// import Transition from "../components/transition"
// // import "../components/layout.scss"

// const Layout = ({ children, location }) => {
//   return (
//     <>
//       <Header siteTitle="Site tittle bitch" />
//       <Transition location={location}>{children}</Transition>
//     </>
//   )
// }

// export default Layout

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import ThemeContext from "../context/ThemeContext"
import Header from "../components/header"
import Transition from "../components/transition"
import "../components/layout.scss"

const Layout = ({ children, location }) => {
  console.log("locatin", location)
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <ThemeContext.Consumer>
            {theme => (
              <>
                <Header
                  siteTitle={data.site.siteMetadata.title}
                  theme={theme}
                />
                <Transition location={location}>
                  <div
                    className={`body-wrapper ${theme.dark ? "dark" : "light"}`}
                  >
                    <main>{children}</main>
                    <footer />
                  </div>
                </Transition>
              </>
            )}
          </ThemeContext.Consumer>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
