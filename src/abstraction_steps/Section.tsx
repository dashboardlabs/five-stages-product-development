import React, { ReactElement, useState } from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import sectionSx from './sectionSx'

const Section = ({
  label, 
  children
}: {
  label: string
  children: ReactElement | ReactElement[]
}): ReactElement => {
	return (
		<Box
      sx={sectionSx}
    >
      <Typography
        variant={'h5'}
        sx={{ mb: 3 }}
      >
        {label}
      </Typography>
      {children}
		</Box>
	)
}

export default Section
