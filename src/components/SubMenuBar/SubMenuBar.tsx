import * as React from 'react'

import { Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { useRouter } from 'next/router'
import { menu as menuData } from 'data'
import { FadeMenu } from 'components/FadeMenu'

function SubMenuBar() {
  const [anchorEls, setAnchorEls] = React.useState<(null | HTMLElement)[]>([])
  const router = useRouter()
  const pathname = router.pathname
  const firstPath = pathname.split('/')[1]
  const subMenu = menuData.find((f) => f.href == firstPath)?.subMenu

  const handleClick =
    (index: number) => (event: React.MouseEvent<HTMLElement>) => {
      const newAnchorEls = [...anchorEls]
      newAnchorEls[index] = event.currentTarget
      setAnchorEls(newAnchorEls)
    }

  const handleClose = (index: number, href?: string) => () => {
    const newAnchorEls = [...anchorEls]
    newAnchorEls[index] = null
    setAnchorEls(newAnchorEls)

    if (href) {
      router.push(`/${firstPath}/${href}`)
    }
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#f8f5f0',
        boxShadow: 'none',
        display: { xs: 'none', md: 'flex' }
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              marginLeft: '160px'
            }}
          >
            {subMenu?.map((sm, index) => (
              <Box key={sm.name}>
                <Button
                  id={`fade-button-${index}`}
                  aria-controls={
                    anchorEls[index] ? `fade-menu-${index}` : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={anchorEls[index] ? 'true' : undefined}
                  onClick={handleClick(index)}
                  sx={{
                    minWidth: '150px'
                  }}
                >
                  <Typography
                    className="button-text"
                    sx={{
                      my: 2,
                      color: 'black',
                      display: 'block',
                      letterSpacing: '0.2rem',
                      fontSize: '0.8rem'
                    }}
                  >
                    {sm.name}
                  </Typography>
                </Button>
                {sm.items && (
                  <FadeMenu
                    index={index}
                    items={sm.items}
                    anchorEl={anchorEls[index]}
                    open={Boolean(anchorEls[index])}
                    handleClose={handleClose}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default SubMenuBar
