import Image from 'next/image'
import { InstagramContainer, InstagramGridContainer } from "../../../styles/homepage/instagram";
import instagram1 from '/public/img/instagram/instagram1.svg'
import instagram2 from '/public/img/instagram/instagram2.svg'
import instagram3 from '/public/img/instagram/instagram3.svg'
import instagram4 from '/public/img/instagram/instagram4.svg'
import instagram5 from '/public/img/instagram/instagram5.svg'
import instagram6 from '/public/img/instagram/instagram6.svg'

export default function Instagram() {
    return (
        <InstagramContainer>
            <InstagramGridContainer>
                <Image src={instagram1} layout='responsive' ></Image>
                <Image src={instagram2} layout='responsive' ></Image>
                <Image src={instagram3} layout='responsive' ></Image>
                <Image src={instagram4} layout='responsive' ></Image>
                <Image src={instagram5} layout='responsive' ></Image>
                <Image src={instagram6} layout='responsive' ></Image>
            </InstagramGridContainer>
        </InstagramContainer>
    )
}