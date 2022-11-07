import React, { ReactElement, useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import Code from '../Code'

import { Form, Section, Field, Values } from './types'

// Passing a JSON into this object generates the form for you

export default ({
	form
}: {
	form: Form
}): ReactElement => {
	const [values, setValues] = useState<Values>({})

	useEffect(() => {
		const newValues = {}
		form?.sections.forEach((section: Section) => {
			section.fields.forEach((field: Field) => {
				if (field.type === 'BOOLEAN') {
					newValues[field.id] = false
					return
				}
				newValues[field.id] = ''
			})
		})
		setValues(newValues)
	}, [form])

	return (
		<>
			<Code
				code={values}
			/>
      <Typography
        variant={'h4'}
        color={'primary'}
        sx={{ mb: 3 }}
      >
        {form?.name}
      </Typography>
			{form?.sections.map((section: Section, sectionIndex: number): ReactElement =>
				<Box
					key={sectionIndex}
					sx={{ mb: 2 }}
				>
					<Typography
						variant={'h5'}
						sx={{ mb: 3 }}
					>
						{section.name}
					</Typography>
						{section.fields.map((field: Field, fieldIndex: number): ReactElement =>
							<React.Fragment key={fieldIndex}>
								{field.type === 'FILE' &&
									<>
										<Typography variant={'body2'} sx={{ mb: 1 }}>
											{field.name}
										</Typography>
										<Box
											sx={{ mb: 3 }}
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
								}
								{field.type === 'BOOLEAN' &&
									<FormControlLabel
										onChange={(): void => {
											setValues((oldValues: Values): Values => {								
												const newValues: Values = Object.assign({}, oldValues)
												newValues[field.id] = Boolean(values[field.id] !== 'true').toString()
												return newValues
											})
										}}
										control={<Checkbox checked={values[field.id] === 'true'} />}
										label={field.name}
									/>
								}
								{field.type === 'STRING' &&
									<TextField
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
								}
							</React.Fragment>	
						)}
				</Box>
			)}
      <Button
				sx={{ mt: 3 }}
        fullWidth
        onClick={(): void => {
          // Send to a singular endpoint in the backend
          // fetch('https://localhost:3000/forms', {
          //   method: 'POST',
          //   body: JSON.stringify(values)
          // })
        }}
        variant={'contained'}
      >
        {'Submit'}
      </Button>
		</>
	)
}
