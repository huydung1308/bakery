// theme.js
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          position: 'relative',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent' // Ensure no background color on hover
          },
          '& .button-text': {
            position: 'relative',
            '&::after': {
              content: '""',
              display: 'block',
              width: '0%',
              height: '2px',
              backgroundColor: '#b62121de',
              transition: 'width 0.3s ease-in-out',
              position: 'absolute',
              bottom: -2,
              left: '50%',
              transform: 'translateX(-50%)',
              transformOrigin: 'center'
            }
          },
          '&:hover .button-text::after': {
            width: '100%'
          }
        }
      }
    }
  }
})

export default theme
