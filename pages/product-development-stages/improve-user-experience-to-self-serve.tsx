import React, { ReactElement, useState } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { Instance } from 'src/productDevelopmentStages/5_improve_user_experience_to_self_serve/types'
import InstanceComponent from 'src/productDevelopmentStages/5_improve_user_experience_to_self_serve/InstanceComponent'
import InstanceEditor from 'src/productDevelopmentStages/5_improve_user_experience_to_self_serve/InstanceEditor'
import instances from 'src/productDevelopmentStages/5_improve_user_experience_to_self_serve/instances'

const ImproveUserExperienceToSelfServe = (): ReactElement => {
  const [instance, setInstance] = useState<Instance>({
    id: 'userGenerated',
    name: 'User generated',
    sections: []
  })

  const [editorOpen, setEditorOpen] = useState<boolean>(false)

  return (
    <Container
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
        <Typography color={'text.primary'}>{'5. Improve user experience to self-serve'}</Typography>
      </Breadcrumbs>
      <Button
        sx={{ marginBottom: 2 }}
        fullWidth
        variant={'contained'}
        onClick={(): void => {
          setEditorOpen(true)
        }}
      >
        {'Open editor'}
      </Button>
      <ButtonGroup color={'inherit'} sx={{ marginBottom: 2 }} size={'small'}>
        {Object.values(instances).map(
          (instance: Instance): ReactElement => (
            <Button
              key={instance.id}
              onClick={(): void => {
                setInstance(instance)
              }}
            >
              {`Load ${instance.name}`}
            </Button>
          )
        )}
        <Button
          onClick={(): void => {
            setInstance({
              id: 'userGenerated',
              name: 'User generated',
              sections: []
            })
          }}
        >
          {'Clear'}
        </Button>
      </ButtonGroup>
      <InstanceComponent instance={instance} />
      <InstanceEditor
        instance={instance}
        setInstance={setInstance}
        open={editorOpen}
        onClose={(): void => {
          setEditorOpen(false)
        }}
      />
    </Container>
  )
}

export default ImproveUserExperienceToSelfServe
