// components/Footer.tsx

import React from 'react'
import { Typography, Link, Container, Grid, Box } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <>
      <Box sx={{ height: '50px' }} />
      <Box
        sx={{
          backgroundColor: '#f7f5ef',
          color: 'black',
          padding: '2rem 0'
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Visit Us
              </Typography>
              <div
                style={{
                  width: '100%',
                  height: '300px',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387462.167622375!2d-74.25819129999999!3d40.7058259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1624569384142!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen
                  loading="lazy"
                  title="Location Map"
                ></iframe>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ marginBottom: '0.5rem' }}
              >
                Address: 123 Bakery Street, City, Country
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ marginBottom: '0.5rem' }}
              >
                Phone: +123 456 789
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ marginBottom: '0.5rem' }}
              >
                Email: info@bakeryshop.com
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            sx={{
              marginTop: '2rem',
              '& > a': {
                color: 'black',
                textDecoration: 'none',
                marginLeft: '1rem'
              }
            }}
          >
            <Typography variant="body2" color="inherit">
              Follow us on:
            </Typography>
            <Link href="#" color="inherit">
              Facebook
            </Link>
            <Link href="#" color="inherit">
              Twitter
            </Link>
            <Link href="#" color="inherit">
              Instagram
            </Link>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Footer
