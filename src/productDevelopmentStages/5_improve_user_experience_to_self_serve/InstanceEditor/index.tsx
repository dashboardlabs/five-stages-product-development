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

import { Instance, Section } from '../types'

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
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<number>(0)

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={'sm'}>
      <DialogTitle>{'Instance editor'}</DialogTitle>
      <DialogContent>
        <TextField
          sx={{ marginTop: 1, marginBottom: 1 }}
          label={'Instance'}
          value={instance.name}
          onChange={(e): void => {
            setInstance((oldInstance: Instance) => ({
              ...oldInstance,
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
          {instance.sections?.map(
            (section: Section, sectionIndex: number): ReactElement => (
              <Tab key={sectionIndex} label={section.name} value={sectionIndex} />
            )
          )}
          <Tab
            label={'Add section'}
            onClick={(): void => {
              setInstance((oldInstance: Instance): Instance => {
                const newInstance: Instance = Object.assign({}, oldInstance)
                newInstance.sections.push({
                  name: `Section ${instance.sections?.length + 1}`,
                  entities: []
                })

                return newInstance
              })
            }}
          />
        </Tabs>
        <SectionEditor
          section={instance.sections[selectedSectionIndex]}
          onChange={(newSection: Section): void => {
            setInstance((oldInstance: Instance): Instance => {
              const newInstance: Instance = Object.assign({}, oldInstance)
              if (newSection) {
                newInstance.sections[selectedSectionIndex] = newSection
              } else {
                newInstance.sections.splice(selectedSectionIndex, 1)
              }
              return newInstance
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

export default InstanceEditor
