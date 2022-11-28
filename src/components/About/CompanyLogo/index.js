import { Typography, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import {
  CompanyContainer,
  CompanyImageContainer,
} from '../../../styles/about/companylogo'
import Image from 'next/image'
import company1 from '/public/img/company/company-1.svg'
import company2 from '/public/img/company/company-2.svg'
import company3 from '/public/img/company/company-3.svg'
import company4 from '/public/img/company/company-4.svg'
import company5 from '/public/img/company/company-5.svg'
import companyImage from '/public/img/company/companyImage.svg'

export default function CompanyLogo() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  
  return (
    <CompanyContainer>
      {/* company logo  */}
      <CompanyImageContainer>
        <Image src={company1} layout='responsive' alt=''></Image>
        <Image src={company2} layout='responsive' alt=''></Image>
        <Image src={company3} layout='responsive' alt=''></Image>
        <Image src={company4} layout='responsive' alt=''></Image>
        <Image src={company5} layout='responsive' alt=''></Image>
      </CompanyImageContainer>
    </CompanyContainer>
  )
}
