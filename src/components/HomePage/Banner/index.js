import { useMediaQuery, Typography, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import {
  Banner1,
  Banner2,
  BannerButton,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImageContent,
  BannerImageContentMain,
  BannerTitle,
  ImageFive,
  ImageFour,
  ImageOne,
  ImageThree,
  ImageTwo,
} from '../../../styles/homepage/banner'
import image1 from '/public/img/banner/banner-1.svg'
import image2 from '/public/img/banner/banner-2.svg'
import image3 from '/public/img/banner/banner-3.svg'
import image4 from '/public/img/banner/banner-4.svg'
import image5 from '/public/img/banner/banner-5.svg'
import Image from 'next/image'

export default function Banner() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      <BannerContainer>
        {/* Banner content  */}
        <BannerContent>
          <BannerTitle variant='h2'>Development Company</BannerTitle>
          <BannerDescription variant='subtitle'>
            Forward-thinking real estate developer, owner <br></br> and investor
            with a reputation
          </BannerDescription>
          <BannerButton>
            <Button variant='contained'>Services</Button>
            <Button
              variant='text'
              sx={{ padding: matches ? '5px 10px' : '10px 40px', background: '#C6DBFF' }}
            >
              About the Company
            </Button>
          </BannerButton>
        </BannerContent>

        {/* Banner image content  */}
        <BannerImageContent>
          <BannerImageContentMain>
            <Banner1>
              <ImageOne>
                <Image src={image1} layout='responsive'></Image>
              </ImageOne>
              <ImageTwo>
                <Image src={image2} layout='responsive'></Image>
              </ImageTwo>
              <ImageThree>
                <Image src={image3} layout='responsive'></Image>
              </ImageThree>
            </Banner1>
            <Banner2>
              <ImageFour>
                <Image src={image4} layout='responsive'></Image>
              </ImageFour>
              <ImageFive>
                <Image src={image5} layout='responsive'></Image>
              </ImageFive>
            </Banner2>
          </BannerImageContentMain>
        </BannerImageContent>
      </BannerContainer>
    </>
  )
}
