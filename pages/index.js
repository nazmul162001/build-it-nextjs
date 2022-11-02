import * as React from 'react';
import Head from 'next/head'
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div className='home'>
      <Head>
        <title>Buildit-Project</title>
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
      <h2>
      <Button variant="contained">Homepage</Button>
      </h2>
      
    </div>
  )
}
