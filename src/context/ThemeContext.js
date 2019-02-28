// import React, { useState, useEffect } from "react"

// const defaultState = {
//   dark: false,
//   toggleDark: () => {},
// }

// const ThemeContext = React.createContext(defaultState)

// // Getting dark mode information from OS!
// // You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
// const supportsDarkMode = () =>
//   window.matchMedia("(prefers-color-scheme: dark)").matches === true

// const ThemeProvider = () => {
//   // state = {
//   //     dark: false,
//   // }

//   const [darkMode, setDarkmode] = useState(false)

//   useEffect(() => {
//     const lsDark = JSON.parse(localStorage.getItem("dark"))
//     if (lsDark) {
//       // this.setState({ dark: lsDark })
//       setDarkmode(true)
//     } else if (supportsDarkMode()) {
//       setDarkmode(true)
//       // this.setState({ dark: true })
//     }
//   })

//   const toggleDark = () => {
//     let dark = !darkMode
//     localStorage.setItem("dark", JSON.stringify(dark))
//     this.setState({ dark })
//   }

//   // componentDidMount() {
//   //     // Getting dark mode value from localStorage!
//   //     const lsDark = JSON.parse(localStorage.getItem("dark"))
//   //     if (lsDark) {
//   //         // this.setState({ dark: lsDark })
//   //         setDarkmode(true)
//   //     } else if (supportsDarkMode()) {
//   //         setDarkmode(true)
//   //         // this.setState({ dark: true })
//   //     }
//   // }

//   const { children } = props
//   //   const { dark } = this.state
//   return (
//     <ThemeContext.Provider
//       value={{
//         darkMode,
//         toggleDark,
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// export default ThemeContext

// export { ThemeProvider }

import React from "react"

const defaultState = {
  dark: false,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)
    this.body = document.querySelector("html")
  }
  state = {
    dark: false,
  }

  toggleDark = () => {
    let dark = !this.state.dark
    localStorage.setItem("dark", JSON.stringify(dark))
    this.body.classList.toggle("light")
    this.setState({ dark })
  }

  componentDidMount() {
    const lsDark = JSON.parse(localStorage.getItem("dark"))

    if (lsDark) {
      this.body.classList.add("dark")
      this.setState({ dark: lsDark })
    } else if (supportsDarkMode()) {
      this.setState({ dark: true })
    } else {
      this.body.classList.remove("dark")
      this.body.classList.add("light")
    }
  }

  render() {
    const { children } = this.props
    const { dark } = this.state

    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
