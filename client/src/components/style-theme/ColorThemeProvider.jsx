import React from 'react'
import { ThemeProvider } from 'styled-components'

export default function ColorThemeProvider({ children }) {

  // const bright = {
  //   orange: 'rgb(239,114,24)',
  //   green: 'rgb(29,157,65)',
  //   red: 'rgb(201,13,13)',
  //   purple: 'rgb(133,107,123)',
  //   yellow: 'rgb(235,183,45)',
  //   blue: 'rgb(54,70,209)'
  // }

  const tetradic = {
    purple: '#671050',
    orange: '#675310',
    green: '#106727',
    red: '#671024',
    yellow: '#c79c24',
    blue: '#173393'
  }

  return (
    < ThemeProvider theme={tetradic}>
      { children}
    </ThemeProvider >
  )
}
