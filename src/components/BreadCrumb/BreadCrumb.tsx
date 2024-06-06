import React from 'react'
import { useRouter } from 'next/router'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'

const BreadCrumb: React.FC = () => {
  const router = useRouter()
  const pathnames = router.pathname.split('/').filter((x) => x)

  const queryName = Object.values(router.query)[0]

  return (
    <Box sx={{ paddingLeft: '50px' }}>
      <Breadcrumbs separator={<NavigateNextIcon />} aria-label="breadcrumb">
        {pathnames.length > 1 &&
          [...pathnames.slice(0, -1), queryName].map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
            return (
              <Link
                href={routeTo}
                passHref
                key={routeTo}
                style={{ textDecoration: 'none' }}
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
                  {(name || '').toString().toUpperCase()}
                </Typography>
              </Link>
            )
          })}
      </Breadcrumbs>
    </Box>
  )
}

export default BreadCrumb
