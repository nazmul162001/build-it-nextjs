import Head from 'next/head'
import About from '../components/About'
import AboutCompany from '../components/About/Company'
import CompanyLogo from '../components/About/CompanyLogo'
import MeetOurTeam from '../components/About/MeetOurTeam'

const about = () => {
  return (
    <section className='about'>
      <Head>
        <title>about</title>
        <meta
          name='about'
          content='Its a Building construction service related website '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* all about page component  */}
      <About />
      <AboutCompany />
      <CompanyLogo />
      <MeetOurTeam />
    </section>
  )
}

export default about
