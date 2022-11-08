import React, { ReactElement } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import Legend from 'src/abstractionSteps/Legend'
import TravelForm from 'src/abstractionSteps/3_sections/TravelForm'
import CodeSnippet from 'src/abstractionSteps/CodeSnippet'

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
          {'3. Identify sections'}
        </Typography>
			</Breadcrumbs>
      <Typography
        variant={'body1'}
        sx={{ marginBottom: 3 }}
      >
        {'Identify sections. Sections are sets of entities. Customization that affect multiple entities can be applied at the section level.'}
      </Typography>
      <Typography
        variant={'body1'}
        sx={{ marginBottom: 3 }}
      >
        {'In this form, we outlined the sections in blue.'}
      </Typography>
      <CodeSnippet
        value={`const section = {
  label: string,
  required: boolean,
  entities: entity[]
}

const entity = {
  type: string,
  label: string
}`}
      />
      <Legend
        entity
        section
      />
      <TravelForm />
      <NextLink
        href={'/abstraction-steps/identify-section-parameters'}
        passHref
      >
        <Button
          variant={'outlined'}
          fullWidth
        >
          {'Next step'}
        </Button>
      </NextLink>
    </Container>
  )
}
