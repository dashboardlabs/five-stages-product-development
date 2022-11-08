import React, { ReactElement } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export default ({
  code
}: {
  code: unknown
}): ReactElement =>
  <Box
    sx={{
      p: 2,
      mb: 3,
      backgroundColor: '#eaeaea',
      borderRadius: 2
    }}
  >
    <code>
      {'This is the printed output of this form'}
      <pre>
        {JSON.stringify(code, null, 2)}
      </pre>
    </code>
    <Button
      onClick={(): void => { console.log(code) }}
      sx={{ mt: 3 }}
      variant={'outlined'}
      color={'inherit'}
    >
      {'Print to console'}
    </Button>
  </Box>
