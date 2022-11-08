import React, { ReactElement, useState } from 'react'

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
}): ReactElement =>
  <Box
    sx={{
      marginBottom: 3
    }}
  >
    {entity &&
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'red',
            height: size,
            width: size,
            marginRight: 1
          }}
        />
        <Typography
          variant={'body1'}
        >
          {'Entity'}
        </Typography>
      </Box>
    }
    {section &&
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'blue',
            height: size,
            width: size,
            marginRight: 1
          }}
        />
        <Typography
          variant={'body1'}
        >
          {'Section'}
        </Typography>
      </Box>
    }
    {instance &&
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'green',
            height: size,
            width: size,
            marginRight: 1
          }}
        />
        <Typography
          variant={'body1'}
        >
          {'Instance'}
        </Typography>
      </Box>
    }
  </Box>

export default Legend
