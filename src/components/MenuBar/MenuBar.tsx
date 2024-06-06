import * as React from 'react'
import { useRouter } from 'next/router'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Logo } from 'components/Logo'
import { menu as menuData } from 'data'

function MenuBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const router = useRouter()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (href?: string) => {
    setAnchorElNav(null)
    if (href) {
      router.push(`/${href}`)
    }
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              width: { xs: 120, md: 150 },
              height: { xs: 120, md: 150 },
              position: 'absolute',
              top: 0,
              left: 0
            }}
            src="/img/logo.png"
            alt="Logo image"
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              marginLeft: '160px'
            }}
          >
            {menuData?.map((m) => (
              <Button
                key={m.name}
                onClick={() => {
                  handleCloseNavMenu(m.href)
                }}
                sx={{
                  minHeight: '80px',
                  minWidth: '120px'
                }}
              >
                <Typography
                  className="button-text"
                  sx={{
                    my: 2,
                    color: 'black',
                    display: 'block',
                    letterSpacing: '0.2rem',
                    fontSize: '1rem'
                  }}
                >
                  {m.name}
                </Typography>
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1
            }}
          />
          <Logo
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              width: { xs: 120, md: 150 },
              height: { xs: 120, md: 150 }
            }}
            src="/img/logo.png"
            alt="Logo image"
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' }
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
              sx={{ marginLeft: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={() => {
                handleCloseNavMenu()
              }}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {menuData?.map((m) => (
                <MenuItem
                  key={m.name}
                  onClick={() => {
                    handleCloseNavMenu(m.href)
                  }}
                >
                  <Typography textAlign="center">{m.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default MenuBar
