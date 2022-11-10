import React, { ReactElement } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import Legend from 'src/abstractionSteps/Legend'
import TravelForm from 'src/abstractionSteps/1_entities/TravelForm'

const IdentifyEntitiesPage = (): ReactElement => (
  <Container
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
      <Typography color={'text.primary'}>{'1. Identify entities'}</Typography>
    </Breadcrumbs>
    <Typography variant={'body1'} sx={{ marginBottom: 3 }}>
      {
        'Identify entities. Entities are the building blocks of your product. You can think of it as a Lego block. Small pieces, with different colors, forming something whole.'
      }
    </Typography>
    <Typography variant={'body1'} sx={{ marginBottom: 3 }}>
      {'In this form, we outlined the entities in red.'}
    </Typography>
    <Legend entity />
    <TravelForm />
    <NextLink href={'/abstraction-steps/identify-entity-types'} passHref>
      <Button variant={'outlined'} fullWidth>
        {'Next'}
      </Button>
    </NextLink>
  </Container>
)

export default IdentifyEntitiesPage
