import { AppProps } from 'next/app'
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles'
import Head from 'next/head'
import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const theme: Theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        size: 'small',
        sx: {
          mb: 1
        }
      }
    },
    MuiFormControlLabel: {
      defaultProps: {
        sx: {
          display: 'block',
          mb: 1
        }
      }
    },
    MuiButton: {
      defaultProps: {
        size: 'small'
      }
    },
    MuiTabs: {
      defaultProps: {
        variant: 'fullWidth',
        sx: {
          mb: 3
        }
      }
    }
  }
})


const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>
        {'5 Stages of product development'}
      </title>
    </Head>
    <ThemeProvider
      theme={theme}
    >
      <Container
        maxWidth={'sm'}
        sx={{
          mt: 2,
          mb: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Box
          component={'img'}
          sx={{
            height: 128,
            width: 128,
            borderRadius: 2,
            mb: 2,
            cursor: 'pointer'
          }}
          onClick={(): void => {
            window.open('http://dashlabs.ai/')
          }}
          src={'https://cdn00.dashlabs.app/DashlabsLogo-BlueBackground.png'}
        />
        <Component
          {...pageProps}
        />
      </Container>
    </ThemeProvider>
  </>
)

export default MyApp
