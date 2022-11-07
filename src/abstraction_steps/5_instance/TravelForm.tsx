import React, { ReactElement, useState } from 'react'

import Button from '@mui/material/Button'

import Entity from '../Entity'
import Section from '../Section'

export default (): ReactElement => {
	return (
		<>
      <Section
        label={'Section title'}
      >
        <Entity 
          type={'TEXT FIELD'}
          label={'First name'}
        />
        <Entity 
          type={'TEXT FIELD'}
          label={'Last name'}
        />
        <Entity 
          type={'DATE FIELD'}
          label={'Birthday'}
        />
        <Entity 
          type={'TEXT FIELD'}
          label={'Sex'}
        />
      </Section>
      <Button
        sx={{ mt: 3 }}
        fullWidth
        onClick={(): void => {
          // Send to a specific endpoint in the backend
          // fetch('https://localhost:3000/forms/travel', {
          //   method: 'POST',
          //   body: JSON.stringify(body)
          // })
        }}
        variant={'contained'}
      >
        {'Submit'}
      </Button>
		</>
	)
}
