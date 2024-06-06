import React from 'react'
import { CircularProgress, Container, Typography } from '@mui/material'

export default function Loading() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <CircularProgress color="primary" size={80} />
      <Typography variant="h5" mt={2}>
        Loading...
      </Typography>
    </Container>
  )
}
