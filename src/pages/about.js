import Head from 'next/head'
import About from '../components/About'

const about = () => {
  return (
    <section className='about'>
      <Head>
        <title>Buildit-Project/ about</title>
        <meta
          name='about'
          content='Its a Building construction service related website '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <About />
    </section>
  )
}

export default about
