import * as React from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import Link from 'next/link'

export const NotFound = () => (
  <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f5f0',
      textAlign: 'center',
      padding: 2
    }}
  >
    <Container>
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Oops! The page you are looking for does not exist.
      </Typography>
      <Typography variant="body1" gutterBottom>
        It might have been removed, or the URL might be incorrect.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary" sx={{ boxShadow: 'none' }}>
          <Typography
            className="button-text"
            sx={{
              my: 2,
              color: 'black',
              display: 'block',
              letterSpacing: '0.2rem',
              fontSize: '0.8rem'
            }}
          >
            Go Back to Homepage
          </Typography>
        </Button>
      </Link>
    </Container>
  </Box>
)

export default NotFound
