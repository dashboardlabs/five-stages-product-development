import React, { ReactElement, useState } from 'react'

import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import InstanceOutput from '../InstanceOutput'

const CustomForm = (): ReactElement => {
  const [yourValue, setYourValue] = useState<string>('')

  const body = {
    yourValue
  }

  return (
    <>
      <InstanceOutput code={body} />
      <Typography variant={'h5'} sx={{ marginBottom: 3 }}>
        {'Build one yourself!'}
      </Typography>
      <TextField
        label={'Open source code to edit file'}
        value={yourValue}
        onChange={(e): void => {
          setYourValue(e.target.value)
        }}
      />
    </>
  )
}

export default CustomForm
