import { Typography, Box, Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import {
  Contact,
  GetInTouchContainer,
  GetInTouchContent,
  GetInTouchForm,
  GetInTouchFormInput,
  GetInTouchGridContainer,
} from '../../../styles/homepage/getInTouch'
import { useState } from 'react'

export default function GetInTouch() {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <GetInTouchContainer>
      <GetInTouchGridContainer>
        <GetInTouchContent>
          <Typography
            variant='body1'
            sx={{ color: '#5BCCDE', padding: '15px 0px' }}
          >
            Contact
          </Typography>
          <Typography
            variant='h5'
            sx={{
              color: '#486A6F',
              fontWeight: 'bold',
              padding: '0px 0px 30px 0px',
            }}
          >
            Get In Touch
          </Typography>

          <Contact>
            <WifiCalling3Icon sx={{ padding: '12px', background: '#E1EBFA' }} />
            <Box sx={{ paddingLeft: '20px' }}>
              <Typography sx={{ color: '#486A6F' }}>Tel</Typography>
              <Typography sx={{ color: '#486A6F', fontWeight: 'bold' }}>
                708-790-0000
              </Typography>
            </Box>
          </Contact>
          <Contact>
            <MailOutlineIcon sx={{ padding: '12px', background: '#E1EBFA' }} />
            <Box sx={{ paddingLeft: '20px' }}>
              <Typography sx={{ color: '#486A6F' }}>Email</Typography>
              <Typography sx={{ color: '#486A6F', fontWeight: 'bold' }}>
                sales@buildit.site
              </Typography>
            </Box>
          </Contact>
          <Contact>
            <MailOutlineIcon sx={{ padding: '12px', background: '#E1EBFA' }} />
            <Box sx={{ paddingLeft: '20px' }}>
              <Typography sx={{ color: '#486A6F' }}>Office</Typography>
              <Typography sx={{ color: '#486A6F', fontWeight: 'bold' }}>
                60 Manor Station St. <br></br> Fairport, NY 14450
              </Typography>
            </Box>
          </Contact>
        </GetInTouchContent>
        <GetInTouchForm>
          <GetInTouchFormInput>
            <Box component='form' noValidate autoComplete='off'>
              <Box sx={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                <TextField
                  sx={{ width: '100%' }}
                  id='outlined-textarea'
                  label='Name'
                  placeholder='Your Name'
                  multiline
                />
                <TextField
                  sx={{ width: '100%' }}
                  id='outlined-textarea'
                  label='Email'
                  placeholder='Your Email'
                  multiline
                />
              </Box>
              <Box>
                <TextField
                  sx={{ width: '100%', marginBottom: '15px' }}
                  id='outlined-textarea'
                  label='Subject'
                  placeholder='Subject'
                  multiline
                />
              </Box>
              <Box>
                <TextField
                  sx={{ width: '100%' }}
                  id='outlined-textarea'
                  label='Message'
                  placeholder='Message'
                  multiline
                  rows={4}
                />
              </Box>
              <Box>
                <Button
                  variant='contained'
                  sx={{
                    background: '#4397A4',
                    margin: '20px 0px',
                    width: '100%',
                    color: 'white'
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </GetInTouchFormInput>
        </GetInTouchForm>
      </GetInTouchGridContainer>
    </GetInTouchContainer>
  )
}
