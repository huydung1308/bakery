import React, { useMemo } from 'react'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { BreadCrumb } from 'components/BreadCrumb'
import { Box, Container } from '@mui/material'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const layout = useMemo(
    () => (
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header />
        <BreadCrumb />
        <Box flex={1}>
          <Container
            maxWidth="lg"
            sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}
          >
            {children}
          </Container>
        </Box>
        <Footer />
      </Box>
    ),
    [children]
  )

  return layout
}

export default Layout
