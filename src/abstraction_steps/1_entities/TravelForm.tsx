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

export default (): ReactElement =>
  <>
    <Typography
      variant={'h4'}
      color={'primary'}
      sx={{ mb: 3 }}
    >
      {'Travel form'}
    </Typography>
    <Typography
      variant={'h5'}
    >
      {'Patient information'}
    </Typography>
    <Typography
      color={'error'}
      variant={'overline'}
      sx={{ mb: 3 }}
    >
      {'Required'}
    </Typography>
    <TextField
      sx={entitySx}
      required
      label={'First name'}
    />
    <TextField
      sx={entitySx}
      required
      label={'Last name'}
    />
    <TextField
      sx={entitySx}
      required
      label={'Birthday'}
    />
    <TextField
      required
      sx={entitySx}
      label={'Sex'}
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
      />
    </Box>
    <TextField
      sx={entitySx}
      label={'Passport number'}
    />
    <TextField
      sx={entitySx}
      label={'Issuing country'}
    />
    <TextField
      sx={entitySx}
      label={'Expiry date'}
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
      />
    </Box>
    <FormControlLabel
      sx={entitySx}
      control={<Checkbox />}
      label={'First dose'}
    />
    <TextField
      sx={entitySx}
      label={'First dose brand'}
    />
    <TextField
      sx={entitySx}
      label={'First dose date'}
    />
    <FormControlLabel
      sx={entitySx}
      control={<Checkbox />}
      label={'Second dose'}
    />
    <TextField
      sx={entitySx}
      label={'Second dose brand'}
    />
    <TextField
      sx={entitySx}
      label={'Second dose date'}
    />
    <FormControlLabel
      sx={entitySx}
      control={<Checkbox />}
      label={'Third dose'}
    />
    <TextField
      sx={entitySx}
      label={'Third dose brand'}
    />
    <TextField
      sx={entitySx}
      label={'Third dose date'}
    />
    <FormControlLabel
      sx={entitySx}
      control={<Checkbox />}
      label={'Fourth dose'}
    />
    <TextField
      sx={entitySx}
      label={'Fourth dose brand'}
    />
    <TextField
      sx={entitySx}
      label={'Fourth dose date'}
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
    />
    <TextField
      sx={entitySx}
      label={'Departure date'}
    />
  </>
