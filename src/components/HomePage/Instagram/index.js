import Image from 'next/image'
import { Typography } from '@mui/material'
import {
  InstagramContainer,
  InstagramContent,
  InstagramGridContainer,
} from '../../../styles/homepage/instagram'
import instagram1 from '/public/img/instagram/instagram1.svg'
import instagram2 from '/public/img/instagram/instagram2.svg'
import instagram3 from '/public/img/instagram/instagram3.svg'
import instagram4 from '/public/img/instagram/instagram4.svg'
import instagram5 from '/public/img/instagram/instagram5.svg'
import instagram6 from '/public/img/instagram/instagram6.svg'

export default function Instagram() {
  return (
    <InstagramContainer>
      <InstagramContent>
        <Typography
          variant='body1'
          sx={{ color: '#5BCCDE', textAlign: 'center', padding: '15px 0px' }}
        >
          Socials
        </Typography>
        <Typography
          variant='h4'
          sx={{ color: '#486A6F', textAlign: 'center', fontWeight: 'bold', padding: '0px 0px 30px 0px' }}
        >
          On Instagram
        </Typography>
        <InstagramGridContainer>
          <Image src={instagram1} layout='responsive' alt=''></Image>
          <Image src={instagram2} layout='responsive' alt=''></Image>
          <Image src={instagram3} layout='responsive' alt=''></Image>
          <Image src={instagram4} layout='responsive' alt=''></Image>
          <Image src={instagram5} layout='responsive' alt=''></Image>
          <Image src={instagram6} layout='responsive' alt=''></Image>
        </InstagramGridContainer>
      </InstagramContent>
    </InstagramContainer>
  )
}
