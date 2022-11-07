import React, { ReactElement, useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import entitySx from '../entitySx'

export default (): ReactElement => {
  const [patientFirstName, setPatientFirstName] = useState<string>('')
  const [patientLastName, setPatientLastName] = useState<string>('')
  const [patientBirthday, setPatientBirthday] = useState<string>('')
  const [patientSex, setPatientSex] = useState<string>('')
  const [passportImage, setPassportImage] = useState<string>('')
  const [passportNumber, setPassportNumber] = useState<string>('')
  const [passportIssuingCountry, setPassportIssuingCountry] = useState<string>('')
  const [passportExpiryDate, setPassportExpiryDate] = useState<string>('')
  const [vaccinationRecordCard, setVaccinationRecordCard] = useState<string>('')
  const [vaccinationRecordFirstDose, setVaccinationRecordFirstDose] = useState<boolean>(false)
  const [vaccinationRecordFirstDoseBrand, setVaccinationRecordFirstDoseBrand] = useState<string>('')
  const [vaccinationRecordFirstDoseDate, setVaccinationRecordFirstDoseDate] = useState<string>('')
  const [vaccinationRecordSecondDose, setVaccinationRecordSecondDose] = useState<boolean>(false)
  const [vaccinationRecordSecondDoseBrand, setVaccinationRecordSecondDoseBrand] = useState<string>('')
  const [vaccinationRecordSecondDoseDate, setVaccinationRecordSecondDoseDate] = useState<string>('')
  const [vaccinationRecordThirdDose, setVaccinationRecordThirdDose] = useState<boolean>(false)
  const [vaccinationRecordThirdDoseBrand, setVaccinationRecordThirdDoseBrand] = useState<string>('')
  const [vaccinationRecordThirdDoseDate, setVaccinationRecordThirdDoseDate] = useState<string>('')
  const [vaccinationRecordFourthDose, setVaccinationRecordFourthDose] = useState<boolean>(false)
  const [vaccinationRecordFourthDoseBrand, setVaccinationRecordFourthDoseBrand] = useState<string>('')
  const [vaccinationRecordFourthDoseDate, setVaccinationRecordFourthDoseDate] = useState<string>('')
  const [travelDestination, setTravelDestination] = useState<string>('')
  const [travelDepartureDate, setTravelDepartureDate] = useState<string>('')

	return (
		<>
      <Typography
        variant={'h5'}
        sx={{ mb: 3 }}
      >
        {'Patient information'}
      </Typography>
      <TextField
        sx={entitySx}
        label={'First name'}
        value={patientFirstName}
        onChange={(e): void => {
          setPatientFirstName(e.target.value)
        }}
      />
      <TextField
        sx={entitySx}
        label={'Last name'}
        value={patientLastName}
        onChange={(e): void => {
          setPatientLastName(e.target.value)
        }}
      />
      <TextField
        sx={entitySx}
        label={'Birthday'}
        value={patientBirthday}
        onChange={(e): void => {
          setPatientBirthday(e.target.value)
        }}
      />
      <TextField
        sx={entitySx}
        label={'Sex'}
        value={patientSex}
        onChange={(e): void => {
          setPatientSex(e.target.value)
        }}
      />
      <Box sx={{ mb: 2 }} />
      <Typography
        variant={'h5'}
        sx={{ mb: 3 }}
      >
        {'Passport'}
      </Typography>
      <Box
        sx={entitySx}
      >
        <Typography variant={'body2'} sx={{ mb: 1 }}>
          {'Passport image'}
        </Typography>
        <Box
          component={'input'}
          type={'file'}
          name={'passportImage'}
          onChange={(e) => {
            setPassportImage(e.target.value)
          }}
        />
      </Box>
      <TextField
        sx={entitySx}
        label={'Passport number'}
        value={passportNumber}
        onChange={(e): void => {
          setPassportNumber(e.target.value)
        }}
      />
      <TextField
        sx={entitySx}
        label={'Issuing country'}
        value={passportIssuingCountry}
        onChange={(e): void => {
          setPassportIssuingCountry(e.target.value)
        }}
      />
      <TextField
        sx={entitySx}
        label={'Expiry date'}
        value={passportExpiryDate}
        onChange={(e): void => {
          setPassportExpiryDate(e.target.value)
        }}
      />
      <Box sx={{ mb: 2 }} />
      <Typography
        variant={'h5'}
        sx={{ mb: 3 }}
      >
        {'Vaccination record'}
      </Typography>
      <Box
        sx={entitySx}
      >
        <Typography variant={'body2'} sx={{ mb: 1 }}>
          {'Vaccination card'}
        </Typography>
        <Box
          component={'input'}
          type={'file'}
          name={'vaccinationRecordCard'}
          onChange={(e) => {
            setVaccinationRecordCard(e.target.value)
          }}
        />
      </Box>
      <FormControlLabel
        sx={entitySx}
        onChange={(): void => {
          setVaccinationRecordFirstDose(!vaccinationRecordFirstDose)
        }}
        control={<Checkbox checked={vaccinationRecordFirstDose} />}
        label={'First dose'}
      />
      <TextField
        sx={entitySx}
        label={'First dose brand'}
        value={vaccinationRecordFirstDoseBrand}
        onChange={(e): void => {
          setVaccinationRecordFirstDoseBrand(e.target.value)
        }}
      />
      <TextField
        sx={entitySx}
        label={'First dose date'}
        value={vaccinationRecordFirstDoseDate}
        onChange={(e): void => {
          setVaccinationRecordFirstDoseDate(e.target.value)
        }}
      />
      <FormControlLabel
        sx={entitySx}
        onChange={(): void => {
          setVaccinationRecordSecondDose(!vaccinationRecordSecondDose)
        }}
        control={<Checkbox checked={vaccinationRecordSecondDose} />}
        label={'Second dose'}
      />
      <TextField
        sx={entitySx}
        label={'Second dose brand'}
        value={vaccinationRecordSecondDoseBrand}
        onChange={(e): void => {
          setVaccinationRecordSecondDoseBrand(e.target.value)
        }}
      />
      <TextField
        sx={entitySx}
        label={'Second dose date'}
        value={vaccinationRecordSecondDoseDate}
        onChange={(e): void => {
          setVaccinationRecordSecondDoseDate(e.target.value)
        }}
      />
      <FormControlLabel
        sx={entitySx}
        onChange={(): void => {
          setVaccinationRecordThirdDose(!vaccinationRecordThirdDose)
        }}
        control={<Checkbox checked={vaccinationRecordThirdDose} />}
        label={'Third dose'}
      />
      <TextField
        sx={entitySx}
        label={'Third dose brand'}
        value={vaccinationRecordThirdDoseBrand}
        onChange={(e): void => {
          setVaccinationRecordThirdDoseBrand(e.target.value)
        }}
      />
      <TextField
        sx={entitySx}
        label={'Third dose date'}
        value={vaccinationRecordThirdDoseDate}
        onChange={(e): void => {
          setVaccinationRecordThirdDoseDate(e.target.value)
        }}
      />
      <FormControlLabel
        sx={entitySx}
        onChange={(): void => {
          setVaccinationRecordFourthDose(!vaccinationRecordFourthDose)
        }}
        control={<Checkbox checked={vaccinationRecordFourthDose} />}
        label={'Fourth dose'}
      />
      <TextField
        sx={entitySx}
        label={'Fourth dose brand'}
        value={vaccinationRecordFourthDoseBrand}
        onChange={(e): void => {
          setVaccinationRecordFourthDoseBrand(e.target.value)
        }}
      />
      <TextField
        sx={entitySx}
        label={'Fourth dose date'}
        value={vaccinationRecordFourthDoseDate}
        onChange={(e): void => {
          setVaccinationRecordFourthDoseDate(e.target.value)
        }}
      />
      <Box sx={{ mb: 2 }} />
      <Typography
        variant={'h5'}
        sx={{ mb: 3 }}
      >
        {'Travel details'}
      </Typography>
      <TextField
        sx={entitySx}
        label={'Destination'}
        value={travelDestination}
        onChange={(e): void => {
          setTravelDestination(e.target.value)
        }}
      />
      <TextField
        sx={entitySx}
        label={'Departure date'}
        value={travelDepartureDate}
        onChange={(e): void => {
          setTravelDepartureDate(e.target.value)
        }}
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
