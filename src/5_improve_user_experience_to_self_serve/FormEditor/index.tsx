import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TextField from '@mui/material/TextField'

import SectionEditor from './SectionEditor'

import {  Form, Section } from '../types'

export default ({
  form,
  setForm,
  open,
  onClose
}: {
  form: Form,
  setForm: Dispatch<SetStateAction<Form>>
  open: boolean
  onClose: VoidFunction
}): ReactElement => {
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<number>(0)

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
        <TextField
          sx={{ marginTop: 1, marginBottom: 1 }}
          label={'Form'}
          value={form.name}
          onChange={(e): void => {
            setForm((previousForm: Form) => ({
              ...previousForm,
              name: e.target.value
            }))
          }}
        />
        <Tabs
          variant={'scrollable'}
          value={selectedSectionIndex}
          onChange={(_e: React.SyntheticEvent, newSelectedSectionIndex: number): void => {
            setSelectedSectionIndex(newSelectedSectionIndex)
          }}
        >
          {form.sections?.map((section: Section, sectionIndex: number): ReactElement =>
            <Tab
              key={sectionIndex}
              label={section.name}
              value={sectionIndex}
            />
          )}
          <Tab
            label={'Add section'}
            onClick={(): void => {
              setForm((oldForm: Form): Form => {
                const newForm: Form = Object.assign({}, oldForm)
                newForm.sections.push({
                  name: `Section ${form.sections?.length + 1}`,
                  fields: []
                })
  
                return newForm
              })
            }}
          />
        </Tabs>
        <SectionEditor
          section={form.sections[selectedSectionIndex]}
          onChange={(newSection: Section): void => {
            setForm((oldForm: Form): Form => {
              const newForm: Form = Object.assign({}, oldForm)
              if (newSection) {
                newForm.sections[selectedSectionIndex] = newSection
              } else {
                newForm.sections.splice(selectedSectionIndex, 1)
              }
              return newForm
            })
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          color={'primary'}
          variant={'text'}
          onClick={(): void => {
            onClose()
          }}
        >
          {'Close'}
        </Button>
      </DialogActions>
    </Dialog>
	)
}
