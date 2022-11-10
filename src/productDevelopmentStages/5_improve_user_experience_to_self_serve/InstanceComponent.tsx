import React, { ReactElement, useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import InstanceOutput from '../InstanceOutput'

import { Instance, Section, Field, Values } from './types'

// Passing a JSON into this object generates the instance for you

const InstanceComponent = ({ instance }: { instance: Instance }): ReactElement => {
  const [values, setValues] = useState<Values>({})

  useEffect(() => {
    const newValues = {}
    instance?.sections.forEach((section: Section) => {
      section.fields.forEach((field: Field) => {
        if (field.type === 'BOOLEAN') {
          newValues[field.id] = false
          return
        }
        newValues[field.id] = ''
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
            {section.fields.map(
              (field: Field, fieldIndex: number): ReactElement => (
                <React.Fragment key={fieldIndex}>
                  {field.type === 'FILE' && (
                    <>
                      <Typography variant={'body2'} sx={{ marginBottom: 1 }}>
                        {`${field.name}${section.required ? ' (Required)' : ''}`}
                      </Typography>
                      <Box
                        sx={{ marginBottom: 3 }}
                        component={'input'}
                        type={'file'}
                        id={field.id}
                        name={field.id}
                        onChange={(e) => {
                          setValues((oldValues: Values): Values => {
                            const newValues: Values = Object.assign({}, oldValues)
                            newValues[field.id] = e.target.value
                            return newValues
                          })
                        }}
                      />
                    </>
                  )}
                  {field.type === 'BOOLEAN' && (
                    <FormControlLabel
                      onChange={(): void => {
                        setValues((oldValues: Values): Values => {
                          const newValues: Values = Object.assign({}, oldValues)
                          newValues[field.id] = Boolean(values[field.id] !== 'true').toString()
                          return newValues
                        })
                      }}
                      control={<Checkbox checked={values[field.id] === 'true'} required={section.required} />}
                      label={`${field.name}${section.required ? ' (Required)' : ''}`}
                    />
                  )}
                  {field.type === 'STRING' && (
                    <TextField
                      required={section.required}
                      label={field.name}
                      value={values[field.id] || ''}
                      onChange={(e): void => {
                        setValues((oldValues: Values): Values => {
                          const newValues: Values = Object.assign({}, oldValues)
                          newValues[field.id] = e.target.value
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
      {instance?.sections?.length > 0 && (
        <Button
          sx={{ marginTop: 3 }}
          fullWidth
          onClick={(): void => {
            // Send to a singular endpoint in the backend
            // fetch('https://localhost:3000/instances', {
            //   method: 'POST',
            //   body: JSON.stringify(values)
            // })
          }}
          variant={'contained'}
        >
          {'Submit'}
        </Button>
      )}
    </>
  )
}

export default InstanceComponent
