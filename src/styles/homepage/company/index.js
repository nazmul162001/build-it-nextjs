import {Box} from '@mui/material'
import {styled} from '@mui/material/styles'
import {Colors} from '../../theme'

export const CompanyContainer = styled(Box)(({theme})=> ({
    width: '100%',
    height: 600,
    marginTop: 150,
    padding: '30px 0px',
    background: Colors.secondary,
}))

export const CompanyImageContainer = styled(Box)(({theme})=> ({
    width: '90%',
    height: 40,
    margin: 'auto',
    padding: '30px 0px',
    borderTop: '2px solid #678c9265',
    borderBottom: '2px solid #678c9265',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
        height: 30,
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: 15,
    }
}))