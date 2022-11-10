import React, { ReactElement } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import CodeSnippet from 'src/abstractionSteps/CodeSnippet'
import Legend from 'src/abstractionSteps/Legend'
import TravelForm from 'src/abstractionSteps/5_instance/FormComponent'

const IdentifyInstance = (): ReactElement => (
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
      <Typography color={'text.primary'}>{'5. Identify instance'}</Typography>
    </Breadcrumbs>
    <Typography variant={'body1'} sx={{ marginBottom: 3 }}>
      {'Identify instance. This is the parent level when saved into the database.'}
    </Typography>
    <Typography variant={'body1'} sx={{ marginBottom: 3 }}>
      {'In this form, we outlined the instance in green.'}
    </Typography>
    <CodeSnippet
      value={`const instance = {
  name: string,
  sections: section[]
}

const section = {
  label: string,
  required: boolean,
  entities: entity[]
}

const entity = {
  type: string,
  label: string
}`}
    />
    <Legend entity section instance />
    <TravelForm />
  </Container>
)

export default IdentifyInstance
