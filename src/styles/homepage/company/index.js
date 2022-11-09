import {Box} from '@mui/material'
import {styled} from '@mui/material/styles'
import {Colors} from '../../theme'

export const CompanyContainer = styled(Box)(({theme})=> ({
    width: '100%',
    height: 600,
    marginTop: 150,
    background: Colors.secondary,
}))

export const CompanyImageContainer = styled(Box)(({theme})=> ({
    width: '100%',
    height: 70,
    display: 'flex',
    justifyContent: 'center',
}))