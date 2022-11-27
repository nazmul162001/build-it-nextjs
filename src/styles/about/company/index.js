import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { Colors } from '../../theme'

export const CompanyContainer = styled(Box)(({ theme }) => ({
    padding: '100px',
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
    width: '50%',
    margin: '100px auto 0px auto',
    background: Colors.primary,
    padding: '50px',
    color: 'white'
}))