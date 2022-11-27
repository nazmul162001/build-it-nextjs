import Head from 'next/head'
import Contact from '../components/Contact'

const contact = () => {
  return (
    <section className='contact'>
      <Head>
        <title>contact</title>
        <meta
          name='contact'
          content='Its a Building construction service related website '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Contact />
    </section>
  )
}

export default contact
