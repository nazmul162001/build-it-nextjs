import { AboutContainer, AboutHero, AboutHero2 } from '../../styles/about'
import Image from 'next/image'
import { Box } from '@mui/material'
import Company from './Company'

export default function About() {
  return (
    <>
      <AboutContainer>
        <AboutHero>
          {/* <Image src={about}  layout='responsive' alt=''></Image> */}
          Image
        </AboutHero>
        <AboutHero2>Content</AboutHero2>
      </AboutContainer>
      {/* others component  */}
      <Company />
    </>
  )
}
