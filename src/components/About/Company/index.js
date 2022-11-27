import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { CompanyClient, CompanyContainer, CompanyHeading, CompanyTitle } from '../../../styles/about/company'
import { Colors } from '../../../styles/theme'

export default function Company() {
  return (
    <Box sx={{width: '100%', height: '100%'}}>
      <CompanyContainer>
        <CompanyTitle>
          <Typography variant='body1' sx={{color: Colors.primary}}>Statistics</Typography>
          <CompanyHeading variant='h5'>Development in numbers</CompanyHeading>
        </CompanyTitle>
        <CompanyClient>
            Client section here
        </CompanyClient>
      </CompanyContainer>
    </Box>
  )
}
