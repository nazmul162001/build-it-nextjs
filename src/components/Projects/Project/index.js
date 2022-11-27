import Image from 'next/image'
import { Typography } from '@mui/material'
import {
  ImgBox,
  ImgBoxContent,
  InstagramContainer,
  InstagramContent,
  InstagramGridContainer,
} from '../../../styles/projects/project'
import project1 from '/public/img/projects/project1.svg'
import project2 from '/public/img/projects/project2.svg'
import project3 from '/public/img/projects/project3.svg'
import project4 from '/public/img/projects/project4.svg'
import project5 from '/public/img/projects/project5.svg'
import project6 from '/public/img/projects/project6.svg'
import { Colors } from '../../../styles/theme'

export default function Project() {
  return (
    <InstagramContainer>
      <InstagramContent>
        <Typography
          variant='h4'
          sx={{
            color: '#486A6F',
            textAlign: 'center',
            fontWeight: 'bold',
            padding: '0px 0px 30px 0px',
          }}
        >
          Our Projects
        </Typography>
        <InstagramGridContainer>
          <ImgBox>
            <Image src={project6} layout='responsive' alt=''></Image>
            <ImgBoxContent>
              <Typography
                variant='body2'
                sx={{ fontWeight: '900', color: Colors.textColor }}
              >
                Project Surname
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontWeight: '700', color: Colors.muted }}
              >
                Info
              </Typography>
            </ImgBoxContent>
          </ImgBox>
          <ImgBox>
            <Image src={project2} layout='responsive' alt=''></Image>
            <ImgBoxContent>
              <Typography
                variant='body2'
                sx={{ fontWeight: '900', color: Colors.textColor }}
              >
                Project Surname
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontWeight: '700', color: Colors.muted }}
              >
                Info
              </Typography>
            </ImgBoxContent>
          </ImgBox>
          <ImgBox>
            <Image src={project3} layout='responsive' alt=''></Image>
            <ImgBoxContent>
              <Typography
                variant='body2'
                sx={{ fontWeight: '900', color: Colors.textColor }}
              >
                Project Surname
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontWeight: '700', color: Colors.muted }}
              >
                Info
              </Typography>
            </ImgBoxContent>
          </ImgBox>
          <ImgBox>
            <Image src={project4} layout='responsive' alt=''></Image>
            <ImgBoxContent>
              <Typography
                variant='body2'
                sx={{ fontWeight: '900', color: Colors.textColor }}
              >
                Project Surname
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontWeight: '700', color: Colors.muted }}
              >
                Info
              </Typography>
            </ImgBoxContent>
          </ImgBox>
          <ImgBox>
            <Image src={project5} layout='responsive' alt=''></Image>
            <ImgBoxContent>
              <Typography
                variant='body2'
                sx={{ fontWeight: '900', color: Colors.textColor }}
              >
                Project Surname
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontWeight: '700', color: Colors.muted }}
              >
                Info
              </Typography>
            </ImgBoxContent>
          </ImgBox>
          <ImgBox>
            <Image src={project1} layout='responsive' alt=''></Image>
            <ImgBoxContent>
              <Typography
                variant='body2'
                sx={{ fontWeight: '900', color: Colors.textColor }}
              >
                Project Surname
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontWeight: '700', color: Colors.muted }}
              >
                Info
              </Typography>
            </ImgBoxContent>
          </ImgBox>
          
        </InstagramGridContainer>
      </InstagramContent>
    </InstagramContainer>
  )
}
