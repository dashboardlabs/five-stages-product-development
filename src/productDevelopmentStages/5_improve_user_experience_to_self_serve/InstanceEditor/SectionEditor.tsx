import React, { ReactElement } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'

import { Entity, Section } from '../types'

const entityTypes: string[] = ['BOOLEAN', 'STRING', 'FILE']

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
  const oldEntities: Entity[] = oldSection.entities?.slice()

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
        label={'Require all entities in this section'}
      />
      {section.entities?.map(
        (entity: Entity, entityIndex: number): ReactElement => (
          <Box
            key={entityIndex}
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
                oldEntities.splice(entityIndex, 1)
                onChange({
                  ...oldSection,
                  entities: oldEntities
                })
              }}
            >
              {'Delete'}
            </Button>
            <TextField
              label={`${entity.type} name`}
              value={entity.name}
              onChange={(e): void => {
                const entities: Entity[] = oldEntities
                entities[entityIndex].id = e.target.value?.trim()?.toUpperCase()?.replace(/ /g, '_')
                entities[entityIndex].name = e.target.value

                onChange({
                  ...section,
                  entities
                })
              }}
            />
          </Box>
        )
      )}
      <ButtonGroup size={'small'} color={'inherit'} sx={{ marginBottom: 2 }}>
        {entityTypes.map(
          (entityType: Entity['type'], entityTypeIndex: number): ReactElement => (
            <Button
              key={entityTypeIndex}
              onClick={(): void => {
                oldEntities.push({
                  id: new Date().getTime().toString(),
                  name: '',
                  type: entityType
                })

                onChange({
                  ...section,
                  entities: oldEntities
                })
              }}
            >
              {`Add ${entityType}`}
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
