import React, { ReactElement, useState } from 'react'
import NextLink from 'next/link'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { Instance } from 'src/productDevelopmentStages/4_abstract_custom_logic/types'
import InstanceComponent from 'src/productDevelopmentStages/4_abstract_custom_logic/InstanceComponent'
import InstanceEditor from 'src/productDevelopmentStages/4_abstract_custom_logic/InstanceEditor'
import instances from 'src/productDevelopmentStages/4_abstract_custom_logic/instances'

const AbstractCustomLogic = (): ReactElement => {
  const [instance, setInstance] = useState<Instance>({
    id: 'userGenerated',
    name: 'User generated',
    sections: [
      {
        name: 'Section',
        entities: [
          {
            id: 'ENTITY_ID',
            name: 'Name',
            type: 'STRING'
          }
        ]
      }
    ]
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
        <Typography color={'text.primary'}>{'4. Abstract custom logic'}</Typography>
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
              sections: [
                {
                  name: 'Section',
                  entities: [
                    {
                      id: 'ENTITY_ID',
                      name: 'Name',
                      type: 'STRING'
                    }
                  ]
                }
              ]
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
      <NextLink href={'/product-development-stages/improve-user-experience-to-self-serve'} passHref>
        <Button variant={'outlined'} fullWidth sx={{ marginTop: 3 }}>
          {'Next'}
        </Button>
      </NextLink>
    </Container>
  )
}

export default AbstractCustomLogic
