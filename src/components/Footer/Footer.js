import {
  FooterBox1,
  FooterCompany,
  FooterContainer,
  FooterContent,
  FooterCopyRight,
  FooterGetInTouch,
} from '../../styles/footer'
import { Box, Button, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterBox1>
          <Typography
            variant='h2'
            sx={{ fontSize: '24px', fontWeight: 'bold' }}
          >
            BuildIt
          </Typography>
          <FooterCompany variant='body1'>
            Development Company, 2022
          </FooterCompany>
          <FooterCopyRight variant='body1'>
            Site design – ⏰ Nazmul_Hassan
          </FooterCopyRight>
        </FooterBox1>
        <FooterBox1>
          <Typography variant='body1' sx={{ fontSize: '14px' }}>
            <Button href='' sx={{ color: 'white', fontSize: '12px' }}>
              Service-1
            </Button>
          </Typography>
          <Typography variant='body1' sx={{ fontSize: '14px' }}>
            <Button href='' sx={{ color: 'white', fontSize: '12px' }}>
              Service-1
            </Button>
          </Typography>
          <Typography variant='body1' sx={{ fontSize: '14px' }}>
            <Button href='' sx={{ color: 'white', fontSize: '12px' }}>
              Service-1
            </Button>
          </Typography>
          <Typography variant='body1' sx={{ fontSize: '14px' }}>
            <Button href='' sx={{ color: 'white', fontSize: '12px' }}>
              Service-1
            </Button>
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Button
              sx={{
                background: '#678C92',
                marginRight: 2,
              }}
            >
              <InstagramIcon sx={{ color: 'white' }} />
            </Button>
            <Button
              sx={{
                background: '#678C92',
              }}
            >
              <FacebookIcon sx={{ color: 'white' }} />
            </Button>
          </Box>
        </FooterBox1>
        <Box sx={{marginBottom: '15px'}}>
          <Typography variant='body1' sx={{ fontSize: '14px' }}>
            <Button href='' sx={{ color: 'white', fontSize: '12px' }}>
              About Us
            </Button>
          </Typography>
          <Typography variant='body1' sx={{ fontSize: '14px' }}>
            <Button href='' sx={{ color: 'white', fontSize: '12px' }}>
              Services
            </Button>
          </Typography>
          <Typography variant='body1' sx={{ fontSize: '14px' }}>
            <Button href='' sx={{ color: 'white', fontSize: '12px' }}>
              Projects
            </Button>
          </Typography>
          <Typography variant='body1' sx={{ fontSize: '14px' }}>
            <Button href='' sx={{ color: 'white', fontSize: '12px' }}>
              Contact
            </Button>
          </Typography>
        </Box>
        <FooterGetInTouch>
          <Typography variant='body1' sx={{ marginBottom: '10px' }}>
            Get In Touch
          </Typography>
          <Typography variant='body1' sx={{ lineHeight: '2' }}>
            60 Manor Station St. Fairport, <br></br> NY 14450
          </Typography>
          <Typography variant='body1' sx={{ lineHeight: '2', marginTop: '30px' }}>
            708-790-0000 <br></br> developer.nazmul1@gmail.com
          </Typography>
        </FooterGetInTouch>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
