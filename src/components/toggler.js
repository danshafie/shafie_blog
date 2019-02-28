import React, { useContext } from "react"
import ThemeContext from "../context//ThemeContext"

const Toggler = () => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <div className="button-container">
        <label className="switcher">
          <input onClick={theme.toggleDark} type="checkbox" />
          <span className={`slider ${theme.dark ? "dark" : "light"}`} />
        </label>
      </div>
    </>
  )
}

export default Toggler
