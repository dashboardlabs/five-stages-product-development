import React, { ReactElement } from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Entity = ({ label, type }: { label: string; type: 'STRING' | 'BOOLEAN' | 'FILE' }): ReactElement => (
  <Box
    sx={{
      border: '2px solid red',
      marginBottom: 2,
      marginLeft: 0,
      padding: 1
    }}
  >
    <Typography variant={'body1'}>{`Type: ${type}`}</Typography>
    <Typography variant={'caption'}>{label}</Typography>
  </Box>
)

export default Entity
