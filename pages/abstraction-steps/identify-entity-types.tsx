import React, { ReactElement } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import Legend from 'src/abstractionSteps/Legend'
import TravelForm from 'src/abstractionSteps/2_entity_types/TravelForm'
import CodeSnippet from 'src/abstractionSteps/CodeSnippet'

const IdentifyEntityTypes = (): ReactElement => {
  return (
    <Container
      sx={{
        backgroundColor: '#fff',
        borderRadius: 2,
        padding: 2
      }}
    >
      <Breadcrumbs sx={{ marginBottom: 3 }}>
        <NextLink href={'/'} passHref>
          <MuiLink>{'Home'}</MuiLink>
        </NextLink>
        <Typography color={'text.primary'}>{'2. Identify entity types'}</Typography>
      </Breadcrumbs>
      <Typography variant={'body1'} sx={{ marginBottom: 3 }}>
        {'Identify entity types. Entity types allow you entities to be customized.'}
      </Typography>
      <Typography variant={'body1'} sx={{ marginBottom: 3 }}>
        {'In this form, we wrote down the types.'}
      </Typography>
      <CodeSnippet value={'const entity = { \n type: string \n label: string \n}'} />
      <Legend entity />
      <TravelForm />
      <NextLink href={'/abstraction-steps/identify-sections'} passHref>
        <Button variant={'outlined'} fullWidth sx={{ marginTop: 3 }}>
          {'Next'}
        </Button>
      </NextLink>
    </Container>
  )
}

export default IdentifyEntityTypes
