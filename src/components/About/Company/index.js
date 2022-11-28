import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import {
  CompanyClient,
  CompanyContainer,
  CompanyHeading,
  CompanyTitle,
} from '../../../styles/about/company'
import { Colors } from '../../../styles/theme'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CottageIcon from '@mui/icons-material/Cottage'
import TouchAppIcon from '@mui/icons-material/TouchApp'

export default function AboutCompany() {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <CompanyContainer>
        <CompanyTitle>
          <Typography variant='body1' sx={{ color: Colors.primary }}>
            Statistics
          </Typography>
          <CompanyHeading variant='h5'>Development in numbers</CompanyHeading>
        </CompanyTitle>
        <CompanyClient>
          {/* box 1  */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}
          >
            <Typography
              sx={{
                padding: '10px',
                background: '#678C92',
                borderRadius: '5px',
              }}
            >
              <LocationOnIcon sx={{ fontSize: '40px' }} />
            </Typography>
            <Box sx={{ marginLeft: '10px' }}>
              <Typography variant='h4' sx={{ color: Colors.textColor }}>
                {' '}
                <ArrowForwardIosIcon />
                200
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: Colors.primary, letterSpacing: '2px' }}
              >
                Number
              </Typography>
            </Box>
          </Box>
          {/* box 2  */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}
          >
            <Typography
              sx={{
                padding: '10px',
                background: '#678C92',
                borderRadius: '5px',
              }}
            >
              <CottageIcon sx={{ fontSize: '40px' }} />
            </Typography>
            <Box sx={{ marginLeft: '10px' }}>
              <Typography variant='h4' sx={{ color: Colors.textColor }}>
                {' '}
                <ArrowForwardIosIcon />
                70
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: Colors.primary, letterSpacing: '2px' }}
              >
                Number
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              sx={{
                padding: '10px',
                background: '#678C92',
                borderRadius: '5px',
              }}
            >
              <TouchAppIcon sx={{ fontSize: '40px' }} />
            </Typography>
            <Box sx={{ marginLeft: '10px' }}>
              <Typography variant='h4' sx={{ color: Colors.textColor }}>
                {' '}
                <ArrowForwardIosIcon />
                20
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: Colors.primary, letterSpacing: '2px' }}
              >
                Number
              </Typography>
            </Box>
          </Box>
        </CompanyClient>
      </CompanyContainer>
      {/* next component here  */}
    </Box>
  )
}
