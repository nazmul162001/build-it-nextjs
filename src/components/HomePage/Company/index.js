import { CompanyContainer, CompanyImageContainer } from "../../../styles/homepage/company";
import Image from 'next/image'
import company1 from '/public/img/company/company-1.svg'
import company2 from '/public/img/company/company-2.svg'
import company3 from '/public/img/company/company-3.svg'
import company4 from '/public/img/company/company-4.svg'
import company5 from '/public/img/company/company-5.svg'

export default function Company() {
    return(
        <CompanyContainer>
            <CompanyImageContainer>
                <Image src={company1} layout='responsive' ></Image>
                <Image src={company2} layout='responsive' ></Image>
                <Image src={company3} layout='responsive' ></Image>
                <Image src={company4} layout='responsive' ></Image>
                <Image src={company5} layout='responsive' ></Image>
            </CompanyImageContainer>
        </CompanyContainer>
    )
}