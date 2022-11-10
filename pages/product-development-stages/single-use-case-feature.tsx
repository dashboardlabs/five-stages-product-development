import React, { ReactElement } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import TravelForm from 'src/productDevelopmentStages/2_single_use_case_feature/TravelForm'

const SingleUseCaseFeature = (): ReactElement => (
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
      <Typography color={'text.primary'}>{'2. Single use-case feature'}</Typography>
    </Breadcrumbs>
    <TravelForm />
    <NextLink href={'/product-development-stages/discover-use-case-variants'} passHref>
      <Button variant={'outlined'} fullWidth sx={{ marginTop: 3 }}>
        {'Next'}
      </Button>
    </NextLink>
  </Container>
)

export default SingleUseCaseFeature
