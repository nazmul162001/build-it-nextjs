import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../../theme'

export const InnovativeContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    padding: '10px 0px',
    marginTop: '100px',
  }))

export const InnovativeTitle = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    color: Colors.textColor,
    fontWeight: 'bold',
  }))

//   innovative content

export const InnovativeContent = styled(Box)((theme)=> ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 20,
    padding: '40px 0px',
}))

export const InnovativeItem = styled(Box)((theme)=> ({
    padding: '30px 50px',
}))
export const InnovativeItemTitle = styled(Box)((theme)=> ({

}))
export const InnovativeItemDescription = styled(Box)((theme)=> ({
    color: Colors.muted,
    lineHeight: 2,
}))
