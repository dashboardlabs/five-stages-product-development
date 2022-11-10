import React, { ReactElement } from 'react'

import Box from '@mui/material/Box'

const CodeSnippet = ({ value }: { value: string }): ReactElement => (
  <Box
    sx={{
      backgroundColor: '#eaeaea',
      borderRadius: 2,
      marginBottom: 3,
      padding: 2
    }}
  >
    <code>
      <pre>{value}</pre>
    </code>
  </Box>
)

export default CodeSnippet
