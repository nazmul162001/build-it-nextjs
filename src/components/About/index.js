import {
  AboutContainer,
  AboutContainerContent,
  AboutHero,
  AboutHero2,
  AboutHeroTitle,
} from '../../styles/about'
import Image from 'next/image'
import about from '/public/img/about/about2.svg'
import about2 from '/public/img/about/about1.svg'
import { Box, Typography } from '@mui/material'
import { Colors } from '../../styles/theme'

export default function About() {
  return (
    <>
      <AboutContainer>
        <AboutContainerContent>
          <AboutHero>
            <Image src={about} className='custom-image' alt=''></Image>
          </AboutHero>
          <AboutHero2>
            <Typography sx={{ color: Colors.primary }}>About Us</Typography>
            <AboutHeroTitle variant='h4'>
              Owner and investor with a reputation
            </AboutHeroTitle>
            <Typography
              variant='body2'
              sx={{ color: Colors.muted, padding: '5px 0px' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
              sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
              rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
              ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
              Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
              viverra vel ultrices in, congue sed ex.
            </Typography>
          </AboutHero2>
        </AboutContainerContent>
      </AboutContainer>
    </>
  )
}
