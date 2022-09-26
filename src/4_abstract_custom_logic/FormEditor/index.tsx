import React, { ReactElement, useEffect, useState } from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'

import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism.css'

import isValidJSON from './isValidJSON'
import sample from './sample'

export default ({
  open,
  onClose
}: {
  open: boolean
  onClose: VoidFunction
}): ReactElement => {
  const [formCode, setFormCode] = useState<string>('')
  useEffect(() => { setFormCode(sample) }, [])
  const validJSON = isValidJSON(formCode)

	return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={'sm'}
    >
      <DialogTitle>
        {'Form editor'}
      </DialogTitle>
      <DialogContent>
        <Editor
          value={formCode}
          onValueChange={code => setFormCode(code)}
          highlight={code => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
          }}
        />
        <Typography
          variant={'overline'}
          color={validJSON ? 'default' : 'error'}
        >
          {validJSON ? 'Code is valid' : 'Code is invalid'}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          color={'error'}
          variant={'text'}
          onClick={onClose}
        >
          {'Cancel'}
        </Button>
        <Button
          color={'primary'}
          variant={'text'}
          onClick={(): void => {
            window.localStorage.setItem('4-form-id-code-sample', formCode)
            onClose()
          }}
          disabled={!validJSON}
        >
          {'Save'}
        </Button>
      </DialogActions>
    </Dialog>
	)
}
