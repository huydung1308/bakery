import * as React from 'react'

import { MenuBar } from 'components/MenuBar'
import { SubMenuBar } from 'components/SubMenuBar'
import { Box } from '@mui/material'

const Header = () => {
  return (
    <Box
      sx={{
        marginBottom: '20px',
        position: 'sticky',
        top: '0',
        zIndex: 999
      }}
    >
      <MenuBar />
      <SubMenuBar />
    </Box>
  )
}

export default Header
