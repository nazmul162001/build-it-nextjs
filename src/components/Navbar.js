import { AppBar, Toolbar, Box, Typography, styled, Button, Tabs, Tab } from '@mui/material'
import logo from '../../public/img/logo2.png'
import Image from 'next/image'
import Link from 'next/link'

const Header = styled(AppBar)`
  background: transparent;
  box-shadow: none;
  color: #678c92;
  padding: 20px;
`

const Nav = styled(Box)`
  display: flex;
  & p {
    padding: 0 25px;
  }
`

const Navbar = () => {
  return (
    <Header position='static'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href='/'>
          <Image src={logo} alt='/logo' width={0} height={50} />
        </Link>
        <Nav>
          <Link href='/about'>
            <Typography>About</Typography>
          </Link>
          <Link href='/services'>
            <Typography>Services</Typography>
          </Link>
          <Link href='/projects'>
            <Typography>Projects</Typography>
          </Link>
          <Link href='/contact'>
            <Typography>Contact</Typography>
          </Link>
        </Nav>
        <Button variant='contained'>Need a Project?</Button>
      </Toolbar>
    </Header>
  )
}

export default Navbar
