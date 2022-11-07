import React, { ReactElement, useState } from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Section = ({
  label, 
  children
}: {
  label: string
  children: ReactElement | ReactElement[]
}): ReactElement =>
  <Box
    sx={{
      border: '2px solid blue',
      marginBottom: 3,
      padding: 1
    }}
  >
    <Typography
      variant={'h5'}
      sx={{ mb: 3 }}
    >
      {label}
    </Typography>
    {children}
  </Box>

export default Section
