import React, { ReactElement } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import Legend from 'src/abstraction_steps/Legend'
import TravelForm from 'src/abstraction_steps/1_entities/TravelForm'

export default (): ReactElement =>
  <Container
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
        {'1. Identify entities'}
      </Typography>
    </Breadcrumbs>
    <Typography
      variant={'body1'}
      sx={{ marginBottom: 3 }}
    >
      {'Identify entities. Entities are the building block of your product. You can think of it as a Lego block. Small pieces, with different colors, forming something whole.'}
    </Typography>
    <Typography
      variant={'body1'}
      sx={{ marginBottom: 3 }}
    >
      {'In this form, we outlined the entities in red.'}
    </Typography>
    <Legend />
    <TravelForm />
  </Container>
