// import { CssBaseline, StyledEngineProvider } from '@mui/material'
import React  from 'react'

function ThemeProvider({children}) {
  return (
    // <StyledEngineProvider>
    //     <CssBaseline/>
        {children}

    // </StyledEngineProvider>
  )
}

export default ThemeProvider