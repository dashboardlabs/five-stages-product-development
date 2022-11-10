import React, { ReactElement, useEffect, useState } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'

import ContactForm from 'src/productDevelopmentStages/3_discover_use_case_variants/ContactForm'
import EmploymentForm from 'src/productDevelopmentStages/3_discover_use_case_variants/EmploymentForm'
import TravelForm from 'src/productDevelopmentStages/3_discover_use_case_variants/TravelForm'
import YourForm from 'src/productDevelopmentStages/3_discover_use_case_variants/EDIT_HERE'

const pageId = '3-instance-id'

const DiscoverUseCaseVariants = (): ReactElement => {
  const [instanceId, setInstanceId] = useState<string>('travel')

  useEffect(() => {
    const storedPageId: string = window.localStorage.getItem(pageId)

    if (storedPageId) {
      setInstanceId(storedPageId)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(pageId, instanceId)
  }, [instanceId])

  return (
    <Container
      maxWidth={'sm'}
      sx={{
        backgroundColor: '#fff',
        padding: 2,
        borderRadius: 2
      }}
    >
      <Breadcrumbs sx={{ marginBottom: 3 }}>
        <NextLink href={'/'} passHref>
          <MuiLink>{'Home'}</MuiLink>
        </NextLink>
        <Typography color={'text.primary'}>{'3. Discover use-case variants'}</Typography>
      </Breadcrumbs>
      <Tabs
        value={instanceId}
        onChange={(_e: React.SyntheticEvent, newInstanceId: string): void => {
          setInstanceId(newInstanceId)
        }}
      >
        <Tab label={'Travel'} value={'travel'} />
        <Tab label={'Employment'} value={'employment'} />
        <Tab label={'Contact'} value={'contact'} />
        <Tab label={'Your form'} value={'yourInstance'} />
      </Tabs>
      {instanceId === 'travel' && <TravelForm />}
      {instanceId === 'employment' && <EmploymentForm />}
      {instanceId === 'contact' && <ContactForm />}
      {instanceId === 'yourInstance' && <YourForm />}
      <NextLink href={'/product-development-stages/abstract-custom-logic'} passHref>
        <Button variant={'outlined'} fullWidth sx={{ marginTop: 3 }}>
          {'Next'}
        </Button>
      </NextLink>
    </Container>
  )
}

export default DiscoverUseCaseVariants
