import { AboutContainer, AboutHero, AboutHero2 } from '../../styles/about'
import Image from 'next/image'
import about from '/public/img/about/about2.svg'
import about2 from '/public/img/about/about1.svg'
import { Box } from '@mui/material'

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
    </>
  )
}
