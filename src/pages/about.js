import Head from 'next/head'
import About from '../components/About'
import AboutCompany from '../components/About/Company'

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
    </section>
  )
}

export default about
