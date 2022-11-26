import Appbar from '../components/Navbar'
import Footer from './Footer/Footer'
import AppDrawer from './Navbar/Drawer'
import { UIProvider } from './context/ui'

const Layout = ({ children }) => {
  return (
    <div>
      <UIProvider>
        <Appbar />
        {children}
        <Footer />
        <AppDrawer />
      </UIProvider>
    </div>
  )
}

export default Layout
