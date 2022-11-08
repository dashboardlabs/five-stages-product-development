import React, { ReactElement } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import TravelForm from '../../src/product-development-stages/2_single_use_case_feature/TravelForm'

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
        {'2. Single use-case feature'}
      </Typography>
    </Breadcrumbs>
    <TravelForm />
  </Container>
