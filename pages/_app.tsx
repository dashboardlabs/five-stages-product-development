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
        size: 'small',
        fullWidth: true,
        margin: 'dense'
      }
    },
    MuiFormControlLabel: {
      defaultProps: {
        sx: {
          display: 'block',
          marginLeft: 0,
          marginBottom: 1
        }
      }
    },
    MuiListSubheader: {
      defaultProps: {
        color: 'primary'
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
          marginBottom: 3
        }
      }
    }
  }
})

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>{'5 Stages of product development'}</title>
    </Head>
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={'sm'}
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginBottom: 10,
          marginTop: 2
        }}
      >
        <Box
          component={'img'}
          sx={{
            borderRadius: 2,
            cursor: 'pointer',
            height: 128,
            marginBottom: 2,
            width: 128
          }}
          onClick={(): void => {
            window.open('http://dashlabs.ai/')
          }}
          src={'https://cdn00.dashlabs.app/DashlabsLogo-BlueBackground.png'}
        />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  </>
)

export default MyApp
