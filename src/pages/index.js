import * as React from 'react'
import Head from 'next/head'
import Banner from '../components/HomePage/Banner'
import Innovative from '../components/HomePage/Innovative'
import Company from '../components/HomePage/Company'
import FeaturedList from '../components/HomePage/FeaturedList/FeaturedList'
import Instagram from '../components/HomePage/Instagram'
import GetInTouch from '../components/HomePage/GetInTouch'

export default function Home() {
  return (
    <div className='home'>
      <Head>
        <title>Buildit-Project</title>
        {/* google fonts / noto sans  */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap'
          rel='stylesheet'
        ></link>
        <meta
          name='description'
          content='Its a Building construction service related website '
        />
        <link rel='icon' href='/favicon.ico' />

        {/* google  web fonts  */}
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        {/* google  web fonts / MUI */}
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </Head>
      {/* Banner Section  */}
      <Banner />
      <Innovative />
      <Company />
      <FeaturedList />
      <Instagram />
      <GetInTouch/>
    </div>
  )
}
