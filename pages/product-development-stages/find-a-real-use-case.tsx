import React, { ReactElement } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export default (): ReactElement =>
  <Container
    maxWidth={'sm'}
    sx={{
      backgroundColor: '#fff',
      p: 2,
      borderRadius: 2
    }}
  >
    <Breadcrumbs
      sx={{ mb: 3 }}
    >
      <NextLink
        href={'/'}
        passHref
      >
        <MuiLink>{'Home'}</MuiLink>
      </NextLink>
      <Typography
        color={'text.primary'}
      >
        {'1. Find a real use-case'}
      </Typography>
    </Breadcrumbs>
    <Typography
        color={'text.primary'}
      >
      {'Code should not be written at this stage. Engineers should talk to users and understand their problems.'}
    </Typography>
  </Container>
