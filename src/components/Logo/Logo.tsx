import * as React from 'react'
import { useRouter } from 'next/router'

import Box from '@mui/material/Box'

interface ILogo {
  src: string
  alt: string
  [key: string]: any
}

const Logo = ({ src, alt, sx, ...rest }: ILogo) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      {...rest}
      onClick={handleClick}
      sx={{ ...sx, cursor: 'pointer' }}
    />
  )
}

export default Logo
