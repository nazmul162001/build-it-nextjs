import Image from 'next/image'
import { Button, Typography } from '@mui/material'
import {
  ButtonBox,
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
import project7 from '/public/img/projects/project7.svg'
import project8 from '/public/img/projects/project8.svg'
import project9 from '/public/img/projects/project9.svg'
import project10 from '/public/img/projects/project10.svg'
import project11 from '/public/img/projects/project11.svg'
import project12 from '/public/img/projects/project12.svg'
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
        {/* all project  */}
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
          <ImgBox>
            <Image src={project7} layout='responsive' alt=''></Image>
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
            <Image src={project8} layout='responsive' alt=''></Image>
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
            <Image src={project9} layout='responsive' alt=''></Image>
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
            <Image src={project10} layout='responsive' alt=''></Image>
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
            <Image src={project11} layout='responsive' alt=''></Image>
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
            <Image src={project12} layout='responsive' alt=''></Image>
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
        <ButtonBox>
        <Button variant="contained" sx={{padding: '5px 50px', margin: '20px 0px', textTransform: 'capitalize'}}>More</Button>
        </ButtonBox>
      </InstagramContent>
    </InstagramContainer>
  )
}
