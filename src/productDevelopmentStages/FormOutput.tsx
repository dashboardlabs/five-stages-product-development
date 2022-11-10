import React, { ReactElement } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const FormOutput = ({ code }: { code: unknown }): ReactElement => (
  <Box
    sx={{
      backgroundColor: '#eaeaea',
      borderRadius: 2,
      marginBottom: 3,
      padding: 2
    }}
  >
    <code>
      {'This is the printed output of this form'}
      <pre>{JSON.stringify(code, null, 2)}</pre>
    </code>
    <Button
      onClick={(): void => {
        console.log(code)
      }}
      sx={{ marginTop: 3 }}
      variant={'outlined'}
      color={'inherit'}
    >
      {'Print to console'}
    </Button>
  </Box>
)

export default FormOutput
