import React, { ReactElement, useState } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { Form } from 'src/productDevelopmentStages/5_improve_user_experience_to_self_serve/types'
import FormComponent from 'src/productDevelopmentStages/5_improve_user_experience_to_self_serve/FormComponent'
import FormEditor from 'src/productDevelopmentStages/5_improve_user_experience_to_self_serve/FormEditor'
import forms from 'src/productDevelopmentStages/5_improve_user_experience_to_self_serve/forms'

const ImproveUserExperienceToSelfServe = (): ReactElement => {
  const [form, setForm] = useState<Form>({
    id: 'userGeneratedForm',
    name: 'User generated form',
    sections: []
  })

  const [formEditorOpen, setFormEditorOpen] = useState<boolean>(false)

  return (
    <Container
      sx={{
        backgroundColor: '#fff',
        p: 2,
        borderRadius: 2
      }}
    >
      <Breadcrumbs sx={{ mb: 3 }}>
        <NextLink href={'/'} passHref>
          <MuiLink>{'Home'}</MuiLink>
        </NextLink>
        <Typography color={'text.primary'}>{'5. Improve user experience to self-serve'}</Typography>
      </Breadcrumbs>
      <Button
        sx={{ mb: 2 }}
        fullWidth
        variant={'contained'}
        onClick={(): void => {
          setFormEditorOpen(true)
        }}
      >
        {'Open form editor'}
      </Button>
      <ButtonGroup color={'inherit'} sx={{ mb: 2 }} size={'small'}>
        {Object.values(forms).map(
          (form: Form): ReactElement => (
            <Button
              key={form.id}
              onClick={(): void => {
                setForm(form)
              }}
            >
              {`Load ${form.name}`}
            </Button>
          )
        )}
        <Button
          onClick={(): void => {
            setForm({
              id: 'userGeneratedForm',
              name: 'User generated form',
              sections: []
            })
          }}
        >
          {'Clear'}
        </Button>
      </ButtonGroup>
      <FormComponent form={form} />
      <FormEditor
        form={form}
        setForm={setForm}
        open={formEditorOpen}
        onClose={(): void => {
          setFormEditorOpen(false)
        }}
      />
    </Container>
  )
}

export default ImproveUserExperienceToSelfServe
