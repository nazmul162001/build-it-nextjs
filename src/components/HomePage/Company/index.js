import { Typography, Button } from '@mui/material'
import {
  CompanyContainer,
  CompanyDetails,
  CompanyImage,
  CompanyImageContainer,
  CompanyInfo,
  CompanyInfoDescription,
  CompanyInfoTitle,
} from '../../../styles/homepage/company'
import Image from 'next/image'
import company1 from '/public/img/company/company-1.svg'
import company2 from '/public/img/company/company-2.svg'
import company3 from '/public/img/company/company-3.svg'
import company4 from '/public/img/company/company-4.svg'
import company5 from '/public/img/company/company-5.svg'
import companyImage from '/public/img/company/companyImage.svg'

export default function Company() {
  return (
    <CompanyContainer>
      {/* company logo  */}
      <CompanyImageContainer>
        <Image src={company1} layout='responsive'></Image>
        <Image src={company2} layout='responsive'></Image>
        <Image src={company3} layout='responsive'></Image>
        <Image src={company4} layout='responsive'></Image>
        <Image src={company5} layout='responsive'></Image>
      </CompanyImageContainer>
      {/* company details  */}
      <CompanyDetails>
        <CompanyImage>
          <Image src={companyImage} layout='responsive'></Image>
        </CompanyImage>
        <CompanyInfo>
          <Typography variant='subtitle' sx={{ color: '#5BCCDE' }}>
            About Us
          </Typography>
          <CompanyInfoTitle variant='h3'>
            Owner and investor with a reputation
          </CompanyInfoTitle>
          <CompanyInfoDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
            viverra vel ultrices in, congue sed ex.
          </CompanyInfoDescription>
          <Button variant='contained' sx={{padding: '5px 40px'}}>Explore</Button>
        </CompanyInfo>
      </CompanyDetails>
    </CompanyContainer>
  )
}
