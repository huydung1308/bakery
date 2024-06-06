import * as React from 'react'
import { Container, Typography, Box } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Layout } from 'components/Layout'

const AboutUs = () => {
  return (
    <Layout>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 2
        }}
      >
        <Container>
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div>
              <img src="/img/about-us/1.jpeg" alt="Baked Goods" />
              <p className="legend">Baked Goods</p>
            </div>
            <div>
              <img src="/img/about-us/2.jpeg" alt="Baker at Work" />
              <p className="legend">Baker at Work</p>
            </div>
            <div>
              <img src="/img/about-us/3.jpeg" alt="Bakery Shop" />
              <p className="legend">Bakery Shop</p>
            </div>
          </Carousel>
          <Box sx={{ paddingTop: '15px' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Welcome to Our Bakery!
            </Typography>
            <Typography variant="body1" paragraph>
              At our bakery, we believe in the magic of freshly baked goods.
              Every day, we craft delicious bread, pastries, and cakes with the
              finest ingredients and a whole lot of love.
            </Typography>
            <Typography variant="body1" paragraph>
              Our journey began with a simple passion for baking, and over the
              years, weve grown into a beloved local bakery known for our warm
              atmosphere and scrumptious treats.
            </Typography>
            <Typography variant="body1" paragraph>
              Meet our team of talented bakers who bring joy to our community
              with every bite.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default AboutUs
