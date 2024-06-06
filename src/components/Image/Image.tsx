import * as React from 'react'
import Box from '@mui/material/Box'

interface IImage {
  src: string
  alt: string
  [key: string]: any
}

const Image = ({ src, alt, sx, ...rest }: IImage) => {
  return <Box component="img" src={src} alt={alt} {...rest} sx={{ ...sx }} />
}

export default Image
