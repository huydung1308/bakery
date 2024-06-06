import * as React from 'react'
import { MenuItem, Fade, Menu } from '@mui/material'
import { IItem } from 'data'

export interface IMenuProps {
  index: number
  items: IItem[]
  anchorEl: HTMLElement | null
  open: boolean
  [key: string]: any
}

const FadeMenu = ({
  index,
  items = [],
  anchorEl,
  open,
  handleClose,
  ...rest
}: IMenuProps) => {
  return (
    <Menu
      id="fade-menu"
      MenuListProps={{
        'aria-labelledby': 'fade-button'
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
    >
      {items.map((item) => (
        <MenuItem key={item.name} onClick={handleClose(index, item.href)}>
          {item.name}
        </MenuItem>
      ))}
    </Menu>
  )
}
export default FadeMenu
