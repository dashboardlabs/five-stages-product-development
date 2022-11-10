import React, { ReactElement, useState } from 'react'

import Button from '@mui/material/Button'
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
      <Button
        sx={{ marginTop: 3 }}
        fullWidth
        onClick={(): void => {
          // Send to a specific endpoint in the backend
          // fetch('https://localhost:3000/instances/your-instance', {
          //   method: 'POST',
          //   body: JSON.stringify(body)
          // })
        }}
        variant={'contained'}
      >
        {'Submit'}
      </Button>
    </>
  )
}

export default CustomForm
