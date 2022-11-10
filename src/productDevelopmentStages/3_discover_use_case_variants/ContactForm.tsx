import React, { ReactElement, useState } from 'react'

import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import InstanceOutput from '../InstanceOutput'

const ContactForm = (): ReactElement => {
  const [patientProfilePhoto, setPatientProfilePhoto] = useState<string>('')
  const [patientFirstName, setPatientFirstName] = useState<string>('')
  const [patientLastName, setPatientLastName] = useState<string>('')
  const [patientBirthday, setPatientBirthday] = useState<string>('')
  const [patientCivilStatus, setPatientCivilStatus] = useState<string>('')
  const [patientSex, setPatientSex] = useState<string>('')
  const [patientNationality, setPatientNationality] = useState<string>('')
  const [contactEmail, setContactEmail] = useState<string>('')
  const [contactPromotions, setContactPromotions] = useState<boolean>(false)
  const [contactPhone, setContactPhone] = useState<string>('')
  const [contactEmergency, setContactEmergency] = useState<boolean>(false)

  const body = {
    patientProfilePhoto,
    patientFirstName,
    patientLastName,
    patientBirthday,
    patientCivilStatus,
    patientSex,
    patientNationality,
    contactEmail,
    contactPromotions,
    contactPhone,
    contactEmergency
  }

  return (
    <>
      <InstanceOutput code={body} />
      <Typography variant={'h4'} color={'primary'} sx={{ marginBottom: 3 }}>
        {'Contact'}
      </Typography>
      <Typography variant={'h5'} sx={{ marginBottom: 3 }}>
        {'Patient information'}
      </Typography>
      <Typography variant={'body2'} sx={{ marginBottom: 1 }}>
        {'Profile photo'}
      </Typography>
      <Box
        sx={{ marginBottom: 3 }}
        component={'input'}
        type={'file'}
        name={'patientProfilePhoto'}
        onChange={(e) => {
          setPatientProfilePhoto(e.target.value)
        }}
      />
      <TextField
        label={'First name'}
        value={patientFirstName}
        onChange={(e): void => {
          setPatientFirstName(e.target.value)
        }}
      />
      <TextField
        label={'Last name'}
        value={patientLastName}
        onChange={(e): void => {
          setPatientLastName(e.target.value)
        }}
      />
      <TextField
        label={'Birthday'}
        value={patientBirthday}
        onChange={(e): void => {
          setPatientBirthday(e.target.value)
        }}
      />
      <TextField
        label={'Civil status'}
        value={patientCivilStatus}
        onChange={(e): void => {
          setPatientCivilStatus(e.target.value)
        }}
      />
      <TextField
        label={'Sex'}
        value={patientSex}
        onChange={(e): void => {
          setPatientSex(e.target.value)
        }}
      />
      <TextField
        label={'Nationality'}
        value={patientNationality}
        onChange={(e): void => {
          setPatientNationality(e.target.value)
        }}
      />
      <Box sx={{ marginBottom: 2 }} />
      <Typography variant={'h5'} sx={{ marginBottom: 3 }}>
        {'Contact - email'}
      </Typography>
      <TextField
        label={'Email'}
        value={contactEmail}
        onChange={(e): void => {
          setContactEmail(e.target.value)
        }}
      />
      <FormControlLabel
        onChange={(): void => {
          setContactPromotions(!contactPromotions)
        }}
        control={<Checkbox checked={contactPromotions} />}
        label={'Email me promotional materials'}
      />
      <Box sx={{ marginBottom: 2 }} />
      <Typography variant={'h5'} sx={{ marginBottom: 3 }}>
        {'Contact - phone'}
      </Typography>
      <TextField
        label={'Phone'}
        value={contactPhone}
        onChange={(e): void => {
          setContactPhone(e.target.value)
        }}
      />
      <FormControlLabel
        onChange={(): void => {
          setContactEmergency(!contactEmergency)
        }}
        control={<Checkbox checked={contactEmergency} />}
        label={'This is my primary contact'}
      />
    </>
  )
}

export default ContactForm
