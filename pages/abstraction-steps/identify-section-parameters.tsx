import React, { ReactElement } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import Legend from 'src/abstraction_steps/Legend'
import TravelForm from 'src/abstraction_steps/4_section_parameters/TravelForm'
import CodeSnippet from 'src/abstraction_steps/CodeSnippet'

export default (): ReactElement => {
  return (
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
          {'4. Identify section parameters'}
        </Typography>
			</Breadcrumbs>
      <Typography
        variant={'body1'}
        sx={{ marginBottom: 3 }}
      >
        {'Identify section parameters. Section parameters are customizations applied to a set of entities.'}
      </Typography>
      <Typography
        variant={'body1'}
        sx={{ marginBottom: 3 }}
      >
        {'In this form, we identify "REQUIRED" as a section parameter.'}
      </Typography>
      <CodeSnippet
        value={`const entity = { type: string label: string }\nconst section = { label: string, required: boolean, entities: entity[] }`}
      />
      <Legend />
      <TravelForm />
    </Container>
  )
}
