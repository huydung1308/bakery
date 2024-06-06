import * as React from 'react'
import { Layout } from 'components/Layout'
import { Container, Grid, Typography } from '@mui/material'
import { Image } from 'components/Image'

const Shop = () => {
  return (
    <Layout>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: '50vh' }}
        >
          <Grid item xs={12} md={8}>
            <Image
              src="/img/home-page/1.jpeg"
              alt="Bakery Shop"
              sx={{ maxWidth: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h2" gutterBottom>
              Discover Our Irresistible Delights
            </Typography>
            <Typography variant="body1" paragraph>
              Explore our heavenly array of artisanal bread, meticulously
              crafted pastries, decadent cakes, and so much more. Each
              delectable creation is a testament to our passion for baking and
              dedication to using only the finest, freshest ingredients
              available. Prepare to embark on a culinary journey that will
              tantalize your taste buds and leave you craving for more.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom>
              Experience True Gastronomic Bliss
            </Typography>
            <Typography variant="body1" paragraph>
              Dive into a world of pure indulgence with our mouthwatering treats
              that are crafted with love and attention to detail. From flaky
              croissants to velvety cheesecakes, each bite is a symphony of
              flavors that will transport you to gastronomic heaven. Whether
              youre a connoisseur of baked goods or simply seeking a delightful
              treat, our bakery shop is your ultimate destination.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Image
              src="/img/home-page/2.png"
              alt="Bakery Shop"
              sx={{ maxWidth: '100%' }}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <Image
              src="/img/home-page/3.webp"
              alt="Bakery Shop"
              sx={{ maxWidth: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom>
              Let Your Senses Delight in Our Creations
            </Typography>
            <Typography variant="body1" paragraph>
              Immerse yourself in a sensory adventure as you savor the aroma,
              taste, and texture of our delectable offerings. Each bite is a
              celebration of flavor, texture, and artistry, meticulously crafted
              to delight your palate and leave you craving for more. Indulge in
              the simple pleasure of a perfectly baked treat and experience the
              joy that comes from savoring every moment.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Shop
