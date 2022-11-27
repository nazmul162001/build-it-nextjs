import Head from 'next/head'
import Projects from '../components/Projects'

const projects = () => {
  return (
    <section className='projects'>
      <Head>
        <title>projects</title>
        <meta
          name='projects'
          content='Its a Building construction service related website '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Projects />
    </section>
  )
}

export default projects
