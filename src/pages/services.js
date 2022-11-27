import Head from 'next/head'
import Services from '../components/Services'

const services = () => {
  return (
    <section className='services'>
      <Head>
        <title>services</title>
        <meta
          name='services'
          content='Its a Building construction service related website '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Services />
    </section>
  )
}

export default services
