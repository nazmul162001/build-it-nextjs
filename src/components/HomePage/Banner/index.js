import { useMediaQuery, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImageContent,
  BannerTitle,
} from '../../../styles/banner'
import image from '/public/img/banner/banner-1.svg'
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
            Forward-thinking real estate developer, owner and investor with a
            reputation
          </BannerDescription>
        </BannerContent>

        {/* Banner image content  */}
        <BannerImageContent>
            {/* image here  */}
            <h2>Image content</h2>
        </BannerImageContent>
      </BannerContainer>
    </>
  )
}
