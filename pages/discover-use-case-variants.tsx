import React, { ReactElement, useEffect, useState } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'

import ContactForm from '../src/3_discover_use_case_variants/ContactForm'
import EmploymentForm from '../src/3_discover_use_case_variants/EmploymentForm'
import TravelForm from '../src/3_discover_use_case_variants/TravelForm'
import YourForm from '../src/3_discover_use_case_variants/EDIT_HERE'

const pageId = '3-form-id'

export default (): ReactElement => {
  const [formId, setFormId] = useState<string>('travel')

  useEffect(() => {
    const storedFormId: string = window.localStorage.getItem(pageId)

    if (storedFormId) {
      setFormId(storedFormId)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(pageId, formId)
  }, [formId])

  return (
    <Container
      maxWidth={'sm'}
      sx={{
        backgroundColor: '#fff',
        p: 2,
        borderRadius: 2
      }}
    >
			<Breadcrumbs
        sx={{ mb: 3 }}
      >
        <NextLink
          href={'/'}
          passHref
        >
          <MuiLink>{'Home'}</MuiLink>
        </NextLink>
				<Typography
          color={'text.primary'}
        >
          {'3. Discover use-case variants'}
        </Typography>
			</Breadcrumbs>
      <Tabs
        value={formId}
        onChange={(_e: React.SyntheticEvent, newFormId: string): void => {
          setFormId(newFormId)
        }}
      >
        <Tab
          label={'Travel'}
          value={'travel'}
        />
        <Tab
          label={'Employment'}
          value={'employment'}
        />
        <Tab
          label={'Contact'}
          value={'contact'}
        />
        <Tab
          label={'Your form'}
          value={'yourForm'}
        />
      </Tabs>
      {formId === 'travel' && <TravelForm />}
      {formId === 'employment' && <EmploymentForm />}
      {formId === 'contact' && <ContactForm />}
      {formId === 'yourForm' && <YourForm />}
    </Container>
  )
}
