import React, { ReactElement } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Entity from '../Entity'
import Section from '../Section'

const FormComponent = (): ReactElement => (
  <Box
    sx={{
      border: '2px solid green',
      padding: 1
    }}
  >
    <Typography variant={'h4'} color={'primary'} sx={{ marginBottom: 3 }}>
      {'Instance'}
    </Typography>
    <Section label={'Section 1'}>
      <Entity type={'STRING'} label={'Entity type'} />
      <Entity type={'BOOLEAN'} label={'Entity type'} />
      <Entity type={'FILE'} label={'Entity type'} />
    </Section>
    <Section label={'Section 2'}>
      <Entity type={'STRING'} label={'Entity type'} />
      <Entity type={'BOOLEAN'} label={'Entity type'} />
      <Entity type={'FILE'} label={'Entity type'} />
    </Section>
  </Box>
)

export default FormComponent
