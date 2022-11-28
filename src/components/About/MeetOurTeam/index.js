import Image from 'next/image'
import { Button, Typography } from '@mui/material'
import {
  ButtonBox,
  ImgBox,
  ImgBoxContent,
  InstagramContainer,
  InstagramContent,
  InstagramGridContainer,
} from '../../../styles/about/meetourcompany'
import team1 from '/public/img/about/team/team1.svg'
import team2 from '/public/img/about/team/team2.svg'
import team3 from '/public/img/about/team/team3.svg'
import team4 from '/public/img/about/team/team4.svg'
import team5 from '/public/img/about/team/team5.svg'
import team6 from '/public/img/about/team/team6.svg'
import team7 from '/public/img/about/team/team7.svg'
import team8 from '/public/img/about/team/team8.svg'
import team9 from '/public/img/about/team/team9.svg'
import { Colors } from '../../../styles/theme'

export default function MeetOurTeam() {
  return (
    <InstagramContainer>
      <InstagramContent>
        <Typography
          variant='body1'
          sx={{ textAlign: 'center', color: Colors.primary }}
        >
          Our Team
        </Typography>
        <Typography
          variant='h4'
          sx={{
            color: '#486A6F',
            textAlign: 'center',
            fontWeight: 'bold',
            padding: '0px 0px 30px 0px',
          }}
        >
          Let's Meet
        </Typography>
        {/* all project  */}
        <InstagramGridContainer>
          <ImgBox>
            <Image src={team1} layout='responsive' alt=''></Image>
            <ImgBoxContent>
              <Typography
                variant='body2'
                sx={{ fontWeight: '900', color: Colors.textColor }}
              >
                Nazmul Hassan
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontWeight: '700', color: Colors.muted }}
              >
                Lead Engineer
              </Typography>
            </ImgBoxContent>
          </ImgBox>
          <ImgBox>
            <Image src={team2} layout='responsive' alt=''></Image>
            <ImgBoxContent>
              <Typography
                variant='body2'
                sx={{ fontWeight: '900', color: Colors.textColor }}
              >
                Pricila HM
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontWeight: '700', color: Colors.muted }}
              >
                Team Planner
              </Typography>
            </ImgBoxContent>
          </ImgBox>
          <ImgBox>
            <Image src={team3} layout='responsive' alt=''></Image>
            <ImgBoxContent>
              <Typography
                variant='body2'
                sx={{ fontWeight: '900', color: Colors.textColor }}
              >
                Sohag Ahmed Zayan
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontWeight: '700', color: Colors.muted }}
              >
                Senior Engineer
              </Typography>
            </ImgBoxContent>
          </ImgBox>
          <ImgBox>
            <Image src={team4} layout='responsive' alt=''></Image>
            <ImgBoxContent>
              <Typography
                variant='body2'
                sx={{ fontWeight: '900', color: Colors.textColor }}
              >
                Ratul Sharma
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontWeight: '700', color: Colors.muted }}
              >
                Worker
              </Typography>
            </ImgBoxContent>
          </ImgBox>
          <ImgBox>
            <Image src={team5} layout='responsive' alt=''></Image>
            <ImgBoxContent>
              <Typography
                variant='body2'
                sx={{ fontWeight: '900', color: Colors.textColor }}
              >
                Emmila Jessy
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontWeight: '700', color: Colors.muted }}
              >
                Worker
              </Typography>
            </ImgBoxContent>
          </ImgBox>
          <ImgBox>
            <Image src={team6} layout='responsive' alt=''></Image>
            <ImgBoxContent>
              <Typography
                variant='body2'
                sx={{ fontWeight: '900', color: Colors.textColor }}
              >
                Devid Miller
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontWeight: '700', color: Colors.muted }}
              >
                Worker
              </Typography>
            </ImgBoxContent>
          </ImgBox>
          <ImgBox>
            <Image src={team7} layout='responsive' alt=''></Image>
            <ImgBoxContent>
              <Typography
                variant='body2'
                sx={{ fontWeight: '900', color: Colors.textColor }}
              >
                Butler
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontWeight: '700', color: Colors.muted }}
              >
                Worker
              </Typography>
            </ImgBoxContent>
          </ImgBox>
          <ImgBox>
            <Image src={team8} layout='responsive' alt=''></Image>
            <ImgBoxContent>
              <Typography
                variant='body2'
                sx={{ fontWeight: '900', color: Colors.textColor }}
              >
                Shakib Al Hasan
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontWeight: '700', color: Colors.muted }}
              >
                Worker
              </Typography>
            </ImgBoxContent>
          </ImgBox>
          <ImgBox>
            <Image src={team9} layout='responsive' alt=''></Image>
            <ImgBoxContent>
              <Typography
                variant='body2'
                sx={{ fontWeight: '900', color: Colors.textColor }}
              >
                Queen Alilna
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontWeight: '700', color: Colors.muted }}
              >
                Lead Engineer
              </Typography>
            </ImgBoxContent>
          </ImgBox>
        </InstagramGridContainer>
      </InstagramContent>
    </InstagramContainer>
  )
}
