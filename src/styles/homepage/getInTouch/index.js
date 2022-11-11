import {styled} from '@mui/material/styles'
import {Box, Typography} from '@mui/material'
import {Colors} from '../../theme'

export const GetInTouchContainer = styled(Box)(({theme})=> ({
    width: '100%',
    padding: '100px 60px'
}))
export const GetInTouchGridContainer = styled(Box)(({theme})=> ({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
}))
export const GetInTouchContent = styled(Box)(({theme})=> ({
    
}))

export const Contact = styled(Box)(({theme})=> ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
}))






export const GetInTouchForm = styled(Box)(({theme})=> ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const GetInTouchFormInput = styled(Box)(({theme})=> ({
    width: '100%',
    height: '100%',
    margin: '0px 80px',
    background: Colors.secondary,
    padding: '25px',
    borderRadius: '5px'
}))