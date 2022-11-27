import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { Colors } from '../../theme'

export const CompanyContainer = styled(Box)(({ theme }) => ({
    padding: '100px',
    [theme.breakpoints.down('md')]: {
        padding: '60px', 
    },
    [theme.breakpoints.down('sm')]: {
        padding: '20px', 
    },
}))

export const CompanyTitle = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}))

export const CompanyHeading = styled(Typography)(({ theme }) => ({
    color: Colors.textColor,
    fontWeight: 'bold',
    padding: '5px 0px',
}))

export const CompanyClient = styled(Box)(({ theme }) => ({
    width: '70%',
    margin: '100px auto 0px auto',
    background: 'linear-gradient(88.65deg, #C6DBFF 0%, #E1EBFA 100%)',
    filter:'drop-shadow(0px 30px 60px rgba(59, 130, 246, 0.25))',
    padding: '50px',
    color: 'white',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    [theme.breakpoints.down('md')]:{
        gridTemplateColumns: 'repeat(2, 1fr)',
        width: '80%',
        padding: '30px',
    },
    [theme.breakpoints.down('sm')]:{
        gridTemplateColumns: 'repeat(1, 1fr)',
        width: '100%',
            padding: '20px',
    }
}))