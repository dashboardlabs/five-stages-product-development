import React, { ReactElement } from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const size = 16

const Legend = ({
  entity,
  section,
  instance
}: {
  entity?: boolean
  section?: boolean
  instance?: boolean
}): ReactElement => (
  <Box sx={{ marginBottom: 3 }}>
    {entity && (
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'red',
            height: size,
            marginRight: 1,
            width: size
          }}
        />
        <Typography variant={'body1'}>{'Entity'}</Typography>
      </Box>
    )}
    {section && (
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'blue',
            height: size,
            marginRight: 1,
            width: size
          }}
        />
        <Typography variant={'body1'}>{'Section'}</Typography>
      </Box>
    )}
    {instance && (
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'green',
            height: size,
            marginRight: 1,
            width: size
          }}
        />
        <Typography variant={'body1'}>{'Instance'}</Typography>
      </Box>
    )}
  </Box>
)

export default Legend
