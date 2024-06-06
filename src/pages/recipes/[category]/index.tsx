import * as React from 'react'
import { Layout } from 'components/Layout'
import { useRouter } from 'next/router'
import { data as menuData } from './data'
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Divider
} from '@mui/material'
import { Image } from 'components/Image'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { RecipeDetails, RecipeYield } from 'components/RecipeDetails'

const Category = () => {
  const router = useRouter()
  const category = router.query.category as string
  const data = menuData.find((m) => m.href == category)!

  return (
    <Layout>
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4" gutterBottom>
                How to make {category}
              </Typography>
              <Typography variant="body1" paragraph>
                {data.content}
              </Typography>
            </Box>
            <RecipeDetails
              prepTime={data.prep}
              bakeTime={data.bake}
              totalTime={data.total}
            />
            <Divider sx={{ margin: '1rem 0' }} />
            <RecipeYield servings={data.servings} />
          </Grid>
          {data?.image && (
            <Grid item xs={12} md={6}>
              <Box>
                <Image
                  src={data.image}
                  alt={category}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Layout>
  )
}

export default Category
