import React, { ReactElement } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Entity from '../Entity'

const TravelForm = (): ReactElement => (
  <>
    <Typography variant={'h4'} color={'primary'} sx={{ marginBottom: 3 }}>
      {'Travel form'}
    </Typography>
    <Typography variant={'h5'}>{'Patient information'}</Typography>
    <Typography color={'error'} variant={'overline'} sx={{ marginBottom: 3 }}>
      {'Required'}
    </Typography>
    <Entity type={'STRING'} label={'First name'} />
    <Entity type={'STRING'} label={'Last name'} />
    <Entity type={'STRING'} label={'Birthday'} />
    <Entity type={'STRING'} label={'Sex'} />
    <Box sx={{ marginBottom: 2 }} />
    <Typography variant={'h5'} sx={{ marginBottom: 3 }}>
      {'Passport'}
    </Typography>
    <Entity type={'FILE'} label={'Passport image'} />
    <Entity type={'STRING'} label={'Passport number'} />
    <Entity type={'STRING'} label={'Issuing country'} />
    <Entity type={'STRING'} label={'Expiry date'} />
    <Box sx={{ marginBottom: 2 }} />
    <Typography variant={'h5'} sx={{ marginBottom: 3 }}>
      {'Vaccination record'}
    </Typography>
    <Entity type={'FILE'} label={'Vaccination card'} />
    <Entity type={'BOOLEAN'} label={'First dose'} />
    <Entity type={'STRING'} label={'First dose brand'} />
    <Entity type={'STRING'} label={'First dose date'} />
    <Entity type={'BOOLEAN'} label={'Second dose'} />
    <Entity type={'STRING'} label={'Second dose brand'} />
    <Entity type={'STRING'} label={'Second dose date'} />
    <Entity type={'BOOLEAN'} label={'Third dose'} />
    <Entity type={'STRING'} label={'Third dose brand'} />
    <Entity type={'STRING'} label={'Third dose date'} />
    <Entity type={'BOOLEAN'} label={'Fourth dose'} />
    <Entity type={'STRING'} label={'Fourth dose brand'} />
    <Entity type={'STRING'} label={'Fourth dose date'} />
    <Box sx={{ marginBottom: 2 }} />
    <Typography variant={'h5'} sx={{ marginBottom: 3 }}>
      {'Travel details'}
    </Typography>
    <Entity type={'STRING'} label={'Destination'} />
    <Entity type={'STRING'} label={'Departure date'} />
  </>
)

export default TravelForm
