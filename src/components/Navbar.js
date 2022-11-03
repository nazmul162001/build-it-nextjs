import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  styled,
  Button,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import logo from '../../public/img/logo2.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import DrawerComponent from './Drawer'

const Header = styled(AppBar)`
  background: transparent;
  box-shadow: none;
  color: #678c92;
  // padding: 20px;
`

const Nav = styled(Box)`
  display: flex;
  & p {
    padding: 0 25px;
  }
`

const Navbar = () => {
  const [value, setValue] = useState('one')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const theme = useTheme()
  // console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  const isMatch2 = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Header className={isMatch2 ? 'p-none' : 'p-20'} position='fixed'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {isMatch ? (
          <DrawerComponent />
        ) : (
          <>
            <Link href='/'>
              <Image src={logo} alt='/logo' width={0} height={50} />
            </Link>
            <Nav>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor='secondary'
                indicatorColor='secondary'
                aria-label='secondary tabs example'
              >
                <Tab value='one' label='About' />
                <Tab value='two' label='Services' />
                <Tab value='three' label='Projects' />
                <Tab value='three' label='Contact' />
              </Tabs>
            </Nav>
            <Button variant='contained'>Need a Project?</Button>
          </>
        )}
      </Toolbar>
    </Header>
  )
}

export default Navbar
