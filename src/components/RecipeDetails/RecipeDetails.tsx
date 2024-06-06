import React from 'react'
import { Grid, Typography, Box, Button } from '@mui/material'
import { AccessTime } from '@mui/icons-material'

interface RecipeDetailsProps {
  prepTime: string
  bakeTime: string
  totalTime: string
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({
  prepTime,
  bakeTime,
  totalTime
}) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={1}>
        <AccessTime fontSize="large" />
      </Grid>
      <Grid item xs={3}>
        <Typography fontWeight={'bold'} variant="subtitle2">
          PREP
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography fontWeight={'bold'} variant="body1">
            {prepTime}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Typography fontWeight={'bold'} variant="subtitle2">
          BAKE
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography fontWeight={'bold'} variant="body1">
            {bakeTime}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Typography fontWeight={'bold'} variant="subtitle2">
          TOTAL
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography fontWeight={'bold'} variant="body1">
            {totalTime}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default RecipeDetails
