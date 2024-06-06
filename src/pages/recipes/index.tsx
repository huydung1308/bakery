import * as React from 'react'
import { Header } from 'components/Header'
import { Layout } from 'components/Layout'
import { Box, Container, Typography } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'

const Recipes = () => {
  return (
    <Layout>
      <Box
        sx={{
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 2
        }}
      >
        <Container>
          <Box sx={{ paddingTop: '15px' }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome to Our Recipes!
            </Typography>
            <Typography variant="body1" paragraph>
              Step into our virtual kitchen, where the aroma of sizzling spices
              and baking delights awaits you. At Our Recipes, we are dedicated
              to bringing culinary inspiration to your home.
            </Typography>
            <Typography variant="body2" paragraph>
              Our journey began with a simple love for cooking, ignited by the
              memories of family gatherings and shared meals. Over the years, we
              have honed our skills and gathered a treasure trove of recipes
              from across cultures and cuisines.
            </Typography>
            <Typography variant="body2" paragraph>
              Dive into our collection and discover a world of flavors. From
              hearty comfort foods to exotic delicacies, each recipe is crafted
              with care and attention to detail.
            </Typography>
            <Typography variant="body2" paragraph>
              Meet our team of passionate chefs, each with their own culinary
              expertise. Together, we are committed to helping you create
              memorable meals that bring joy to your table and warmth to your
              soul.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default Recipes
