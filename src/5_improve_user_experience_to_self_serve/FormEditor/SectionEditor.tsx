import React, { ReactElement, useState } from 'react'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import { Field, Section } from '../types'

const fieldTypes: string[] = ['BOOLEAN', 'STRING', 'FILE']

export default ({
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
        sx={{ mb: 2 }}
        label={'Section name'}
        value={section.name}
        onChange={(e): void => {
          onChange({
            ...section,
            name: e.target.value
          })
        }}
      />
      {section.fields?.map((field: Field, fieldIndex: number): ReactElement => 
        <Box
          key={fieldIndex}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            mb: 1
          }}
        >
          <Button
            sx={{ mr: 1 }}
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
      )}
      <ButtonGroup
        size={'small'}
        color={'inherit'}
        sx={{ mb: 2 }}
      >
        {fieldTypes.map((fieldType: Field['type']): ReactElement =>
          <Button
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
