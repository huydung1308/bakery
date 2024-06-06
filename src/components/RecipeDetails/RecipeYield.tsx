import React from 'react'
import { Typography, Box, Button, Grid } from '@mui/material'
import { AccessTime, Print, Save, DinnerDining } from '@mui/icons-material'

interface RecipeYieldProps {
  servings: string
}

const RecipeYield: React.FC<RecipeYieldProps> = ({ servings }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={1}>
        <DinnerDining fontSize="large" />
      </Grid>
      <Grid item xs={3}>
        <Typography fontWeight={'bold'} variant="subtitle2">
          PREP
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography fontWeight={'bold'} variant="body1">
            {servings}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Box display="flex" alignItems="center">
          <Button
            variant="outlined"
            sx={{
              borderColor: 'black',
              backgroundColor: 'white'
            }}
          >
            <Save color="action" sx={{ marginRight: '4px' }} />
            <Typography
              fontSize="small"
              fontWeight={'bold'}
              variant="body1"
              color="black"
              noWrap
            >
              SAVE RECIPE
            </Typography>
          </Button>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box display="flex" alignItems="center">
          <Button
            variant="outlined"
            sx={{
              borderColor: 'black',
              backgroundColor: 'white'
            }}
            onClick={() => {
              window.print()
            }}
          >
            <Print color="action" sx={{ marginRight: '4px' }} />
            <Typography
              fontSize="small"
              fontWeight={'bold'}
              variant="body1"
              color="black"
              noWrap
            >
              PRINT
            </Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default RecipeYield
