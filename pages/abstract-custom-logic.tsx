import React, { ReactElement, useEffect, useState } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'

import { Form } from '../src/4_abstract_custom_logic/types'
import FormComponent from '../src/4_abstract_custom_logic/FormComponent'
import FormEditor from '../src/4_abstract_custom_logic/FormEditor'
import forms from '../src/4_abstract_custom_logic/forms'

const pageId = '4-form-id'

export default (): ReactElement => {
  const [formId, setFormId] = useState<string>('travel')
  const [userGeneratedForm, setUserGeneratedForm] = useState<Form>(null)
  const [formEditorOpen, setFormEditorOpen] = useState<boolean>(false)

  useEffect(() => {
    const storedFormId: string = window.localStorage.getItem(pageId)

    if (storedFormId) {
      setFormId(storedFormId)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(pageId, formId)
  }, [formId])

  const returnForm = (formId: string): Form => {
    if (formId === 'userGeneratedForm') {
      return userGeneratedForm
    }
  
    return forms[formId]
  }

  return (
    <Container
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
          {'Step 4: Abstract custom logic'}
        </Typography>
			</Breadcrumbs>
      <Tabs
        value={formId}
        onChange={(_e: React.SyntheticEvent, newFormId: string): void => {
          setFormId(newFormId)
        }}
      >
        <Tab
          label={'Create your own form'}
          value={'userGeneratedForm'}
        />
        {Object.values(forms).map((form: Form): ReactElement =>
          <Tab
            key={form.id}
            label={form.name}
            value={form.id}
          />
        )}
      </Tabs>
      {formId === 'userGeneratedForm' &&
        <Button
          sx={{ mb: 2 }}
          fullWidth
          variant={'outlined'}
          onClick={(): void => {
            setFormEditorOpen(true)
          }}
        >
          {'Open form editor'}
        </Button>
      }
      <FormComponent
        form={returnForm(formId)}
      />
      <FormEditor
        form={userGeneratedForm}
        setForm={setUserGeneratedForm}
        open={formEditorOpen}
        onClose={(): void => {
          setFormEditorOpen(false)
        }}
      />
    </Container>
  )
}
