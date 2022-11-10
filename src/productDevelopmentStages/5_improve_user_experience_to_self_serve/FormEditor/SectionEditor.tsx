import React, { ReactElement } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'

import { Field, Section } from '../types'

const fieldTypes: string[] = ['BOOLEAN', 'STRING', 'FILE']

const SectionEditor = ({
  section,
  onChange
}: {
  section: Section
  onChange: (newSection: Section) => void
}): ReactElement => {
  if (!section) {
    return null
  }

  const oldSection: Section = Object.assign({}, section)
  const oldFields: Field[] = oldSection.fields?.slice()

  return (
    <>
      <TextField
        sx={{ marginBottom: 2 }}
        label={'Section name'}
        value={section.name}
        onChange={(e): void => {
          onChange({
            ...section,
            name: e.target.value
          })
        }}
      />
      <FormControlLabel
        onChange={(): void => {
          onChange({
            ...section,
            required: !section.required
          })
        }}
        control={<Checkbox checked={section.required} />}
        label={'Require all fields in this section'}
      />
      {section.fields?.map(
        (field: Field, fieldIndex: number): ReactElement => (
          <Box
            key={fieldIndex}
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 1
            }}
          >
            <Button
              sx={{ marginRight: 1 }}
              color={'error'}
              onClick={(): void => {
                oldFields.splice(fieldIndex, 1)
                onChange({
                  ...oldSection,
                  fields: oldFields
                })
              }}
            >
              {'Delete'}
            </Button>
            <TextField
              label={`${field.type} name`}
              value={field.name}
              onChange={(e): void => {
                const fields: Field[] = oldFields
                fields[fieldIndex].id = e.target.value?.trim()?.toUpperCase()?.replace(/ /g, '_')
                fields[fieldIndex].name = e.target.value

                onChange({
                  ...section,
                  fields
                })
              }}
            />
          </Box>
        )
      )}
      <ButtonGroup size={'small'} color={'inherit'} sx={{ marginBottom: 2 }}>
        {fieldTypes.map(
          (fieldType: Field['type'], fieldTypeIndex: number): ReactElement => (
            <Button
              key={fieldTypeIndex}
              onClick={(): void => {
                oldFields.push({
                  id: new Date().getTime().toString(),
                  name: '',
                  type: fieldType
                })

                onChange({
                  ...section,
                  fields: oldFields
                })
              }}
            >
              {`Add ${fieldType} field`}
            </Button>
          )
        )}
      </ButtonGroup>
      <Button
        sx={{ display: 'block' }}
        variant={'outlined'}
        color={'error'}
        onClick={(): void => {
          onChange(null)
        }}
      >
        {`Delete ${section.name || 'section'}`}
      </Button>
    </>
  )
}

export default SectionEditor
