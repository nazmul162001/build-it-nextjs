import {
    FeatureBox1,
    FeatureContainer,
    FeatureContent,
    FeatureContentBox,
    FeatureContentDescription,
    FeatureContentImage,
    FeatureContentInfo,
    FeatureContentTitle,
    SeeMore,
  } from '../../../styles/services/featureone'
  import Image from 'next/image'
  import feature3 from '/public/img/services/service2.svg'
  import { Typography } from '@mui/material'
  import { Colors } from '../../../styles/theme'
  import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'
  
  export default function FeatureThree() {
    return (
      <>
        <FeatureContainer>
          <FeatureContent>
            <FeatureContentImage>
              <Image src={feature3} layout='responsive' alt=''></Image>
            </FeatureContentImage>
            <FeatureContentInfo>
              <Typography variant='body1' sx={{ color: Colors.primary }}>
                Service
              </Typography>
              <FeatureContentTitle variant='h4'>
                Featured Listing
              </FeatureContentTitle>
              <FeatureContentDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
                sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
                rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
                ullamcorper enim magna eu orci.
              </FeatureContentDescription>
              <FeatureContentBox>
                <FeatureBox1>
                  <Typography
                    variant='body1'
                    sx={{ color: Colors.textColor, fontWeight: 'bold' }}
                  >
                    Name
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{
                      color: Colors.primary,
                      fontWeight: 'normal',
                      lineHeight: '2',
                    }}
                  >
                    Statistics
                  </Typography>
                </FeatureBox1>
                <FeatureBox1>
                  <Typography
                    variant='body1'
                    sx={{ color: Colors.textColor, fontWeight: 'bold' }}
                  >
                    Name
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{
                      color: Colors.primary,
                      fontWeight: 'normal',
                      lineHeight: '2',
                    }}
                  >
                    Statistics
                  </Typography>
                </FeatureBox1>
              </FeatureContentBox>
            </FeatureContentInfo>
          </FeatureContent>
          <SeeMore>
            <Typography
              className='see-more'
              variant='body1'
              sx={{
                color: Colors.textColor,
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              See More{' '}
              <TrendingFlatIcon
                className='see-more-hover'
                sx={{ marginLeft: '5px' }}
              />{' '}
            </Typography>
          </SeeMore>
        </FeatureContainer>
      </>
    )
  }
  