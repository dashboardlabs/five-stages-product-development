import React, { ReactElement, useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import InstanceOutput from '../InstanceOutput'

import { Instance, Section, Entity, Values } from './types'

// Passing a JSON into this object generates the instance for you

const InstanceComponent = ({ instance }: { instance: Instance }): ReactElement => {
  const [values, setValues] = useState<Values>({})

  useEffect(() => {
    const newValues = {}
    instance?.sections.forEach((section: Section) => {
      section.entities.forEach((entity: Entity) => {
        if (entity.type === 'BOOLEAN') {
          newValues[entity.id] = false
          return
        }
        newValues[entity.id] = ''
      })
    })
    setValues(newValues)
  }, [instance])

  return (
    <>
      <InstanceOutput code={values} />
      <Typography variant={'h4'} color={'primary'} sx={{ marginBottom: 3 }}>
        {instance.name}
      </Typography>
      {instance?.sections.map(
        (section: Section, sectionIndex: number): ReactElement => (
          <Box key={sectionIndex} sx={{ marginBottom: 2 }}>
            <Typography variant={'h5'} sx={!section.required && { marginBottom: 3 }}>
              {section.name}
            </Typography>
            {section.required && (
              <Typography color={'error'} variant={'overline'} sx={{ marginBottom: 3 }}>
                {'Required'}
              </Typography>
            )}
            {section.entities.map(
              (entity: Entity, entityIndex: number): ReactElement => (
                <React.Fragment key={entityIndex}>
                  {entity.type === 'FILE' && (
                    <>
                      <Typography variant={'body2'} sx={{ marginBottom: 1 }}>
                        {`${entity.name}${section.required ? ' (Required)' : ''}`}
                      </Typography>
                      <Box
                        sx={{ marginBottom: 3 }}
                        component={'input'}
                        type={'file'}
                        id={entity.id}
                        name={entity.id}
                        onChange={(e) => {
                          setValues((oldValues: Values): Values => {
                            const newValues: Values = Object.assign({}, oldValues)
                            newValues[entity.id] = e.target.value
                            return newValues
                          })
                        }}
                      />
                    </>
                  )}
                  {entity.type === 'BOOLEAN' && (
                    <FormControlLabel
                      onChange={(): void => {
                        setValues((oldValues: Values): Values => {
                          const newValues: Values = Object.assign({}, oldValues)
                          newValues[entity.id] = Boolean(values[entity.id] !== 'true').toString()
                          return newValues
                        })
                      }}
                      control={<Checkbox checked={values[entity.id] === 'true'} required={section.required} />}
                      label={`${entity.name}${section.required ? ' (Required)' : ''}`}
                    />
                  )}
                  {entity.type === 'STRING' && (
                    <TextField
                      required={section.required}
                      label={entity.name}
                      value={values[entity.id] || ''}
                      onChange={(e): void => {
                        setValues((oldValues: Values): Values => {
                          const newValues: Values = Object.assign({}, oldValues)
                          newValues[entity.id] = e.target.value
                          return newValues
                        })
                      }}
                    />
                  )}
                </React.Fragment>
              )
            )}
          </Box>
        )
      )}
    </>
  )
}

export default InstanceComponent
