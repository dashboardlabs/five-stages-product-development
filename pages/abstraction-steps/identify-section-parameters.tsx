import React, { ReactElement } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import Legend from 'src/abstraction_steps/Legend'
import TravelForm from 'src/abstraction_steps/4_section_parameters/TravelForm'
import Code1 from 'src/Code1'

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
          {'Step 4: Identify section parameters'}
        </Typography>
			</Breadcrumbs>
      <Code1
        value={`const entity = { type: string label: string }\nconst section = { label: string, entities: entity[] }`}
      />
      <Legend />
      <TravelForm />
    </Container>
  )
}
