import React, { ReactElement, useState } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import FormOutput from '../FormOutput'

const CustomForm = (): ReactElement => {
  const [yourValue, setYourValue] = useState<string>('')

  const body = {
    yourValue
  }

  return (
    <>
      <FormOutput code={body} />
      <Typography variant={'h5'} sx={{ mb: 3 }}>
        {'Build your own form!'}
      </Typography>
      <TextField
        label={'Open source code to edit file'}
        value={yourValue}
        onChange={(e): void => {
          setYourValue(e.target.value)
        }}
      />
      <Button
        sx={{ mt: 3 }}
        fullWidth
        onClick={(): void => {
          // Send to a specific endpoint in the backend
          // fetch('https://localhost:3000/forms/your-form', {
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
