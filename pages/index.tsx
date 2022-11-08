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
  primary: '1. Find a real use-case',
  href: '/product-development-stages/find-a-real-use-case'
}, {
  primary: '2. Single use-case feature',
  href: '/product-development-stages/single-use-case-feature'
}, {
  primary: '3. Discover use-case variants',
  href: '/product-development-stages/discover-use-case-variants'
}, {
  primary: '4. Abstract custom logic',
  href: '/product-development-stages/abstract-custom-logic'
}, {
  primary: '5. Improve user experience to self-serve',
  href: '/product-development-stages/improve-user-experience-to-self-serve'
}]

const howToRoutes = [{
  primary: '1. Identify entities',
  href: '/abstraction-steps/identify-entities'
}, {
  primary: '2. Identify entity types',
  href: '/abstraction-steps/identify-entity-types'
}, {
  primary: '3. Identify sections',
  href: '/abstraction-steps/identify-sections'
}, {
  primary: '4. Identify section parameters',
  href: '/abstraction-steps/identify-section-parameters'
}, {
  primary: '5. Identify instance',
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
            <ListItemText primary={route.primary} />
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
            <ListItemText primary={route.primary} />
          </ListItem>
        </NextLink>
      ))}
    </List>
  </Container>
