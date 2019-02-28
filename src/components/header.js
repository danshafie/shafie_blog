import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Toggler from "./toggler"

const Header = ({ siteTitle, theme }) => (
  <header className={`header ${theme.dark ? "dark" : "light"}`}>
    <div className="header-wrapper">
      <div
        style={{
          padding: `1.45rem 0`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <Link to="/blog">Music</Link>
        <Link to="/">Sports</Link>
      </div>
    </div>
    <div className="toggle-theme">
      <Toggler />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
