import React, { Dispatch, ReactElement, SetStateAction, useState, useEffect } from 'react'

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
import { Instance } from '../types'

const InstanceEditor = ({
  instance,
  setInstance,
  open,
  onClose
}: {
  instance: Instance
  setInstance: Dispatch<SetStateAction<Instance>>
  open: boolean
  onClose: VoidFunction
}): ReactElement => {
  const [instanceCode, setInstanceCode] = useState<string>('')

  useEffect(() => {
    if (instance) {
      setInstanceCode(JSON.stringify(instance, undefined, 2))
    } else {
      setInstanceCode(sample)
    }
  }, [open])

  const validJSON = isValidJSON(instanceCode)

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={'sm'}>
      <DialogTitle>{'Instance editor'}</DialogTitle>
      <DialogContent>
        <Editor
          value={instanceCode}
          onValueChange={(code) => setInstanceCode(code)}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14
          }}
        />
        <Typography variant={'overline'} color={validJSON ? 'default' : 'error'}>
          {validJSON ? 'Valid JSON' : 'Invalid JSON'}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button color={'error'} variant={'text'} onClick={onClose}>
          {'Cancel'}
        </Button>
        <Button
          color={'primary'}
          variant={'text'}
          onClick={(): void => {
            setInstance(JSON.parse(instanceCode))
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

export default InstanceEditor
