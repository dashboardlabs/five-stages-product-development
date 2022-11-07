import React, { ReactElement } from 'react'

import Typography from '@mui/material/Typography'

import Entity from '../Entity'
import Section from '../Section'

export default (): ReactElement =>
  <>
    <Typography
      variant={'h4'}
      color={'primary'}
      sx={{ mb: 3 }}
    >
      {'Travel form'}
    </Typography>
    <Section
      label={'Patient information'}
    >
      <Entity 
        type={'STRING'}
        label={'First name'}
      />
      <Entity 
        type={'STRING'}
        label={'Last name'}
      />
      <Entity 
        type={'STRING'}
        label={'Birthday'}
      />
      <Entity 
        type={'STRING'}
        label={'Sex'}
      />
    </Section>
    <Section
      label={'Passport'}
    >
      <Entity 
        type={'FILE'}
        label={'Passport image'}
      />
      <Entity 
        type={'STRING'}
        label={'Passport number'}
      />
      <Entity 
        type={'STRING'}
        label={'Issuing country'}
      />
      <Entity 
        type={'STRING'}
        label={'Expiry date'}
      />
    </Section>
    <Section
      label={'Vaccination record'}
    >
      <Entity 
        type={'FILE'}
        label={'Vaccination card'}
      />
      <Entity 
        type={'BOOLEAN'}
        label={'First dose'}
      />
      <Entity 
        type={'STRING'}
        label={'First dose brand'}
      />
      <Entity 
        type={'STRING'}
        label={'First dose date'}
      />
      <Entity 
        type={'BOOLEAN'}
        label={'Second dose'}
      />
      <Entity 
        type={'STRING'}
        label={'Second dose brand'}
      />
      <Entity 
        type={'STRING'}
        label={'Second dose date'}
      />
      <Entity 
        type={'BOOLEAN'}
        label={'Third dose'}
      />
      <Entity 
        type={'STRING'}
        label={'Third dose brand'}
      />
      <Entity 
        type={'STRING'}
        label={'Third dose date'}
      />
      <Entity 
        type={'BOOLEAN'}
        label={'Fourth dose'}
      />
      <Entity 
        type={'STRING'}
        label={'Fourth dose brand'}
      />
      <Entity 
        type={'STRING'}
        label={'Fourth dose date'}
      />
    </Section>
    <Section
      label={'Travel details'}
    >
      <Entity 
        type={'STRING'}
        label={'Destination'}
      />
      <Entity 
        type={'STRING'}
        label={'Departure date'}
      />
    </Section>
  </>
