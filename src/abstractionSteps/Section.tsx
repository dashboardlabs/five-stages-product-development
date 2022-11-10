import React, { ReactElement } from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Section = ({
  label,
  required,
  children
}: {
  label: string
  required?: boolean
  children: ReactElement | ReactElement[]
}): ReactElement => (
  <Box
    sx={{
      border: '2px solid blue',
      marginBottom: 3,
      padding: 1
    }}
  >
    <Typography variant={'h5'}>{label}</Typography>
    <Typography color={required ? 'error' : null} variant={'overline'} sx={{ mb: 3 }}>
      {required ? 'REQUIRED: TRUE' : 'REQUIRED: FALSE'}
    </Typography>
    {children}
  </Box>
)

export default Section
