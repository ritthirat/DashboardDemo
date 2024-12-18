// CustomSwitch.tsx
import React from 'react'

import { Switch, styled } from '@mui/material'

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 70,
  height: 40,
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.error.main,
    width: 100,
    height: 26,
    borderRadius: 13
  },
  '& .MuiSwitch-thumb': {
    width: 22,
    height: 22,
    transform: 'translateX(0px)'
  },
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      transform: 'translateX(35px)',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.success.main,
        opacity: 1
      }
    }
  }
}))

const CustomSwitch = (props: React.ComponentProps<typeof Switch>) => {
  return <StyledSwitch {...props} />
}

export default CustomSwitch
