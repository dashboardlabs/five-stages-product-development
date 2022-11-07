import React, { ReactElement } from 'react'
import NextLink from 'next/link'

import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListSubheader from '@mui/material/ListSubheader'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import MuiLink from '@mui/material/Link'
import Paper from '@mui/material/Paper'

interface PageNavigationRoute {
	primary: string
  secondary: string
	href: string
}

const routes = [{
  primary: 'Find a real use-case',
  secondary: 'Step 1',
  href: '/find-a-real-use-case'
}, {
  primary: 'Single use-case feature',
  secondary: 'Step 2',
  href: '/single-use-case-feature'
}, {
  primary: 'Discover use-case variants',
  secondary: 'Step 3',
  href: '/discover-use-case-variants'
}, {
  primary: 'Abstract custom logic',
  secondary: 'Step 4',
  href: '/abstract-custom-logic'
}, {
  primary: 'Improve user experience to self-serve',
  secondary: 'Step 5',
  href: '/improve-user-experience-to-self-serve'
}]

const howToRoutes = [{
  primary: 'Identify entities',
  secondary: 'Step 1',
  href: '/abstraction-steps/identify-entities'
}, {
  primary: 'Identify entity types',
  secondary: 'Step 2',
  href: '/abstraction-steps/identify-entity-types'
}, {
  primary: 'Identify sections',
  secondary: 'Step 3',
  href: '/abstraction-steps/identify-sections'
}, {
  primary: 'Identify section parameters',
  secondary: 'Step 4',
  href: '/abstraction-steps/identify-section-parameters'
}, {
  primary: 'Identify instance',
  secondary: 'Step 5',
  href: '/abstraction-steps/identify-instance'
}]


export default (): ReactElement =>
  <Container>
    <List
      component={Paper}
      dense
      sx={{ mb: 3 }}
    >
      <ListSubheader>
        {'5 stages of product development'}
      </ListSubheader>
      {routes.map((route: PageNavigationRoute, index: number): ReactElement => (
        <NextLink key={index} href={route.href} passHref>
          <ListItem button component={MuiLink}>
            <ListItemText primary={route.primary} secondary={route.secondary} />
          </ListItem>
        </NextLink>
      ))}
    </List>
    <List
      component={Paper}
      dense
    >
      <ListSubheader>
        {'5 steps of abstraction'}
      </ListSubheader>
      {howToRoutes.map((route: PageNavigationRoute, index: number): ReactElement => (
        <NextLink key={index} href={route.href} passHref>
          <ListItem button component={MuiLink}>
            <ListItemText primary={route.primary} secondary={route.secondary} />
          </ListItem>
        </NextLink>
      ))}
    </List>
  </Container>
