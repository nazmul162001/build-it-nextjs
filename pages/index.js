import Head from 'next/head'

export default function Home() {
  return (
    <div className='home'>
      <Head>
        <title>Buildit-Project</title>
        <meta name='description' content='Its a Building construction service related website ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h2>homepage</h2>
    </div>
  )
}
