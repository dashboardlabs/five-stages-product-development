import React, { ReactElement, useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import InstanceOutput from '../InstanceOutput'

const EmploymentForm = (): ReactElement => {
  const [patientFirstName, setPatientFirstName] = useState<string>('')
  const [patientLastName, setPatientLastName] = useState<string>('')
  const [patientBirthday, setPatientBirthday] = useState<string>('')
  const [patientCivilStatus, setPatientCivilStatus] = useState<string>('')
  const [patientSex, setPatientSex] = useState<string>('')
  const [employmentEmployed, setEmploymentEmployed] = useState<boolean>(false)
  const [employmentId, setEmploymentId] = useState<string>('')
  const [employmentEmployer, setEmploymentEmployer] = useState<string>('')
  const [employmentEmployerPhoneNumber, setEmploymentEmployerPhoneNumber] = useState<string>('')
  const [employmentJobTitle, setEmploymentJobTitle] = useState<string>('')
  const [laboratoryServicesCbc, setLaboratoryServicesCbc] = useState<boolean>(false)
  const [laboratoryServicesXRay, setLaboratoryServicesXRay] = useState<boolean>(false)
  const [laboratoryServicesClinicalChemistry, setLaboratoryServicesClinicalChemistry] = useState<boolean>(false)
  const [laboratoryServicesUltraSound, setLaboratoryServicesUltraSound] = useState<boolean>(false)
  const [laboratoryServicesUrinalysis, setLaboratoryServicesUrinalysis] = useState<boolean>(false)
  const [laboratoryServicesFecalysis, setLaboratoryServicesFecalysis] = useState<boolean>(false)

  const body = {
    patientFirstName,
    patientLastName,
    patientBirthday,
    patientCivilStatus,
    patientSex,
    employmentEmployed,
    employmentId,
    employmentEmployer,
    employmentEmployerPhoneNumber,
    employmentJobTitle,
    laboratoryServicesCbc,
    laboratoryServicesXRay,
    laboratoryServicesClinicalChemistry,
    laboratoryServicesUltraSound,
    laboratoryServicesUrinalysis,
    laboratoryServicesFecalysis
  }

  return (
    <>
      <InstanceOutput code={body} />
      <Typography variant={'h4'} color={'primary'} sx={{ marginBottom: 3 }}>
        {'Employment'}
      </Typography>
      <Typography variant={'h5'} sx={{ marginBottom: 3 }}>
        {'Patient information'}
      </Typography>
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
      <Box sx={{ marginBottom: 2 }} />
      <Typography variant={'h5'} sx={{ marginBottom: 3 }}>
        {'Employment'}
      </Typography>
      <FormControlLabel
        onChange={(): void => {
          setEmploymentEmployed(!employmentEmployed)
        }}
        control={<Checkbox checked={employmentEmployed} />}
        label={'I am currently employed'}
      />
      <Typography variant={'body2'} sx={{ marginBottom: 1 }}>
        {'Employment ID'}
      </Typography>
      <Box
        sx={{ marginBottom: 3 }}
        component={'input'}
        type={'file'}
        name={'employmentId'}
        onChange={(e) => {
          setEmploymentId(e.target.value)
        }}
      />
      <TextField
        label={'Employer'}
        value={employmentEmployer}
        onChange={(e): void => {
          setEmploymentEmployer(e.target.value)
        }}
      />
      <TextField
        label={'Employer phone number'}
        value={employmentEmployerPhoneNumber}
        onChange={(e): void => {
          setEmploymentEmployerPhoneNumber(e.target.value)
        }}
      />
      <TextField
        label={'Job title'}
        value={employmentJobTitle}
        onChange={(e): void => {
          setEmploymentJobTitle(e.target.value)
        }}
      />
      <Box sx={{ marginBottom: 2 }} />
      <Typography variant={'h5'} sx={{ marginBottom: 3 }}>
        {'Laboratory services'}
      </Typography>
      <FormControlLabel
        onChange={(): void => {
          setLaboratoryServicesCbc(!laboratoryServicesCbc)
        }}
        control={<Checkbox checked={laboratoryServicesCbc} />}
        label={'Complete blood count (CBC)'}
      />
      <FormControlLabel
        onChange={(): void => {
          setLaboratoryServicesXRay(!laboratoryServicesXRay)
        }}
        control={<Checkbox checked={laboratoryServicesXRay} />}
        label={'X-ray'}
      />
      <FormControlLabel
        onChange={(): void => {
          setLaboratoryServicesClinicalChemistry(!laboratoryServicesClinicalChemistry)
        }}
        control={<Checkbox checked={laboratoryServicesClinicalChemistry} />}
        label={'Clinical chemistry'}
      />
      <FormControlLabel
        onChange={(): void => {
          setLaboratoryServicesUltraSound(!laboratoryServicesUltraSound)
        }}
        control={<Checkbox checked={laboratoryServicesUltraSound} />}
        label={'Ultrasound'}
      />
      <FormControlLabel
        onChange={(): void => {
          setLaboratoryServicesUrinalysis(!laboratoryServicesUrinalysis)
        }}
        control={<Checkbox checked={laboratoryServicesUrinalysis} />}
        label={'Urinalysis'}
      />
      <FormControlLabel
        onChange={(): void => {
          setLaboratoryServicesFecalysis(!laboratoryServicesFecalysis)
        }}
        control={<Checkbox checked={laboratoryServicesFecalysis} />}
        label={'Fecalysis'}
      />
      <Button
        sx={{ marginTop: 3 }}
        fullWidth
        onClick={(): void => {
          // Send to a specific endpoint in the backend
          // fetch('https://localhost:3000/instances/employment', {
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

export default EmploymentForm
