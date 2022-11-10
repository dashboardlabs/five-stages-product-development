import React, { ReactElement } from 'react'

import Box from '@mui/material/Box'

const CodeSnippet = ({ value }: { value: string }): ReactElement => (
  <Box
    sx={{
      p: 2,
      mb: 3,
      backgroundColor: '#eaeaea',
      borderRadius: 2
    }}
  >
    <code>
      <pre>{value}</pre>
    </code>
  </Box>
)

export default CodeSnippet
