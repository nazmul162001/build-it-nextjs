import Layout from '../components/Layout'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme'

//my all component pages load here

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
