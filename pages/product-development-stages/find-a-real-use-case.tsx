import React, { ReactElement } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const FindARealUseCase = (): ReactElement => (
  <Container
    maxWidth={'sm'}
    sx={{
      backgroundColor: '#fff',
      padding: 2,
      borderRadius: 2
    }}
  >
    <Breadcrumbs sx={{ marginBottom: 3 }}>
      <NextLink href={'/'} passHref>
        <MuiLink>{'Home'}</MuiLink>
      </NextLink>
      <Typography color={'text.primary'}>{'1. Find a real use-case'}</Typography>
    </Breadcrumbs>
    <Typography color={'text.primary'}>
      {'Code should not be written at this stage. Engineers should talk to users and understand their problems.'}
    </Typography>
    <NextLink href={'/product-development-stages/single-use-case-feature'} passHref>
      <Button variant={'outlined'} fullWidth sx={{ marginTop: 3 }}>
        {'Next'}
      </Button>
    </NextLink>
  </Container>
)

export default FindARealUseCase
