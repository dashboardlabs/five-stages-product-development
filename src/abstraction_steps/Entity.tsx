import React, { ReactElement, useState } from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import borderSx from './entitySx'

const Entity = ({
  label, 
  type
}: {
  label: string
  type: 'TEXT FIELD' | 'DATE FIELD' | 'CHECKBOX' | 'FILE UPLOAD'
}): ReactElement => {
	return (
		<Box
      sx={borderSx}
    >
      <Typography
        variant={'body1'}
      >
        {`Type: ${type}`}
      </Typography>
      <Typography
        variant={'caption'}
      >
        {label}
      </Typography>
		</Box>
	)
}

export default Entity
