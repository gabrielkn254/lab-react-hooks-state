//import { dark } from '@mui/material/styles/createPalette'
import React from 'react'

const DarkModeToggle = ({ onClick, darkTheme }) => {
  // TODO: Implement dark mode toggle logic

  return (
        <button onClick={onClick}>
          {darkTheme ? "Toggle Dark Mode" : "Toggle Light Mode"}
        </button>
  )
}

export default DarkModeToggle
