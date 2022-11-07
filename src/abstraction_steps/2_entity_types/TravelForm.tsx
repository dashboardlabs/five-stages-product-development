import React, { ReactElement, useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Entity from '../Entity'

export default (): ReactElement => {
	return (
		<>
      <Typography
        variant={'h5'}
        sx={{ mb: 3 }}
      >
        {'Patient information'}
      </Typography>
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
      <Box sx={{ mb: 2 }} />
      <Typography
        variant={'h5'}
        sx={{ mb: 3 }}
      >
        {'Passport'}
      </Typography>
      <Entity 
        type={'FILE UPLOAD'}
        label={'Passport image'}
      />
      <Entity 
        type={'TEXT FIELD'}
        label={'Passport number'}
      />
      <Entity 
        type={'TEXT FIELD'}
        label={'Issuing country'}
      />
      <Entity 
        type={'TEXT FIELD'}
        label={'Expiry date'}
      />
      <Box sx={{ mb: 2 }} />
      <Typography
        variant={'h5'}
        sx={{ mb: 3 }}
      >
        {'Vaccination record'}
      </Typography>
      <Entity 
        type={'FILE UPLOAD'}
        label={'Vaccination card'}
      />
      <Entity 
        type={'CHECKBOX'}
        label={'First dose'}
      />
      <Entity 
        type={'TEXT FIELD'}
        label={'First dose brand'}
      />
      <Entity 
        type={'TEXT FIELD'}
        label={'First dose date'}
      />
      <Entity 
        type={'CHECKBOX'}
        label={'Second dose'}
      />
      <Entity 
        type={'TEXT FIELD'}
        label={'Second dose brand'}
      />
      <Entity 
        type={'TEXT FIELD'}
        label={'Second dose date'}
      />
      <Entity 
        type={'CHECKBOX'}
        label={'Third dose'}
      />
      <Entity 
        type={'TEXT FIELD'}
        label={'Third dose brand'}
      />
      <Entity 
        type={'TEXT FIELD'}
        label={'Third dose date'}
      />
      <Entity 
        type={'CHECKBOX'}
        label={'Fourth dose'}
      />
      <Entity 
        type={'TEXT FIELD'}
        label={'Fourth dose brand'}
      />
      <Entity 
        type={'TEXT FIELD'}
        label={'Fourth dose date'}
      />
      <Box sx={{ mb: 2 }} />
      <Typography
        variant={'h5'}
        sx={{ mb: 3 }}
      >
        {'Travel details'}
      </Typography>
      <Entity 
        type={'TEXT FIELD'}
        label={'Destination'}
      />
      <Entity 
        type={'TEXT FIELD'}
        label={'Departure date'}
      />
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
