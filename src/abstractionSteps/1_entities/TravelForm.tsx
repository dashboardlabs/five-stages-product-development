import React, { ReactElement } from 'react'

import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const entitySx = {
  border: '2px solid red',
  marginBottom: 2,
  marginLeft: 0,
  padding: 1,
  width: '100%'
}

const TravelForm = (): ReactElement => (
  <>
    <Typography variant={'h4'} color={'primary'} sx={{ marginBottom: 3 }}>
      {'Travel form'}
    </Typography>
    <Typography variant={'h5'}>{'Patient information'}</Typography>
    <Typography color={'error'} variant={'overline'} sx={{ marginBottom: 3 }}>
      {'Required'}
    </Typography>
    <Box sx={entitySx}>
      <TextField required label={'First name'} />
    </Box>
    <Box sx={entitySx}>
      <TextField required label={'Last name'} />
    </Box>
    <Box sx={entitySx}>
      <TextField required label={'Birthday'} />
    </Box>
    <Box sx={entitySx}>
      <TextField required label={'Sex'} />
    </Box>
    <Box sx={{ marginBottom: 2 }} />
    <Typography variant={'h5'} sx={{ marginBottom: 3 }}>
      {'Passport'}
    </Typography>
    <Box sx={entitySx}>
      <Typography variant={'body2'} sx={{ marginBottom: 1 }}>
        {'Passport image'}
      </Typography>
      <Box component={'input'} type={'file'} name={'passportImage'} />
    </Box>
    <Box sx={entitySx}>
      <TextField label={'Passport number'} />
    </Box>
    <Box sx={entitySx}>
      <TextField label={'Issuing country'} />
    </Box>
    <Box sx={entitySx}>
      <TextField label={'Expiry date'} />
    </Box>
    <Box sx={{ marginBottom: 2 }} />
    <Typography variant={'h5'} sx={{ marginBottom: 3 }}>
      {'Vaccination record'}
    </Typography>
    <Box sx={entitySx}>
      <Typography variant={'body2'} sx={{ marginBottom: 1 }}>
        {'Vaccination card'}
      </Typography>
      <Box component={'input'} type={'file'} name={'vaccinationRecordCard'} />
    </Box>
    <Box sx={entitySx}>
      <FormControlLabel control={<Checkbox />} label={'First dose'} />
    </Box>
    <Box sx={entitySx}>
      <TextField label={'First dose brand'} />
    </Box>
    <Box sx={entitySx}>
      <TextField label={'First dose date'} />
    </Box>
    <Box sx={entitySx}>
      <FormControlLabel control={<Checkbox />} label={'Second dose'} />
    </Box>
    <Box sx={entitySx}>
      <TextField label={'Second dose brand'} />
    </Box>
    <Box sx={entitySx}>
      <TextField label={'Second dose date'} />
    </Box>
    <Box sx={entitySx}>
      <FormControlLabel control={<Checkbox />} label={'Third dose'} />
    </Box>
    <Box sx={entitySx}>
      <TextField label={'Third dose brand'} />
    </Box>
    <Box sx={entitySx}>
      <TextField label={'Third dose date'} />
    </Box>
    <Box sx={entitySx}>
      <FormControlLabel control={<Checkbox />} label={'Fourth dose'} />
    </Box>
    <Box sx={entitySx}>
      <TextField label={'Fourth dose brand'} />
    </Box>
    <Box sx={entitySx}>
      <TextField label={'Fourth dose date'} />
    </Box>
    <Box sx={{ marginBottom: 2 }} />
    <Typography variant={'h5'} sx={{ marginBottom: 3 }}>
      {'Travel details'}
    </Typography>
    <Box sx={entitySx}>
      <TextField label={'Destination'} />
    </Box>
    <Box sx={entitySx}>
      <TextField label={'Departure date'} />
    </Box>
  </>
)

export default TravelForm
