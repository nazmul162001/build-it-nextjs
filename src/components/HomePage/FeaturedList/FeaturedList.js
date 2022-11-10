import { Typography, Button } from '@mui/material'
import Image from 'next/image'
import {
  FeatureContainer,
  FeatureContent,
  FeatureDescription,
  FeatureGridContainer,
  FeatureImage,
  FeatureImageContent,
  FeatureTitle,
} from '../../../styles/homepage/featuredList'
import feature1 from '/public/img/feature/feature-1.svg'
import feature2 from '/public/img/feature/feature-2.svg'
import feature3 from '/public/img/feature/feature-3.svg'
import feature4 from '/public/img/feature/feature-4.svg'

export default function FeaturedList() {
  return (
    <FeatureContainer>
      <FeatureGridContainer>
        <FeatureContent>
          <Typography variant='subtitle' sx={{ color: '#5BCCDE' }}>
            Available Properties
          </Typography>
          <FeatureTitle variant='h3'>Featured Listing</FeatureTitle>
          <FeatureDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
            viverra vel ultrices in, congue sed ex.
          </FeatureDescription>
          <Button
            variant='contained'
            sx={{ padding: '5px 40px', margin: '30px 0px' }}
          >
            Explore
          </Button>
        </FeatureContent>
        <FeatureImage>
          <FeatureImageContent>
            <Image
              src={feature1}
              sx={{ marginTop: '8px', verticalAlign: 'middle', width: '100%' }}
              layout='responsive'
            ></Image>
            <Image
              src={feature2}
              sx={{ marginTop: '8px', verticalAlign: 'middle', width: '100%' }}
              layout='responsive'
            ></Image>
          </FeatureImageContent>
          <FeatureImageContent>
            <Image
              src={feature3}
              sx={{ marginTop: '8px', verticalAlign: 'middle', width: '100%' }}
              layout='responsive'
            ></Image>
            <Image
              src={feature4}
              sx={{ marginTop: '8px', verticalAlign: 'middle', width: '100%' }}
              layout='responsive'
            ></Image>
          </FeatureImageContent>
        </FeatureImage>
      </FeatureGridContainer>
    </FeatureContainer>
  )
}
