import {
  AppbarContainer,
  GetProject,
  AppbarHeader,
  MyList,
} from '../../styles/appbar'
import { ListItemText, ListItemButton, Button } from '@mui/material'
import Image from 'next/image'
import logo from '/public/img/logo.svg'
import { Colors } from '../../styles/theme'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NavbarDesktop({ matches }) {
  const [color, setColor] = useState(false)
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true)
      } else {
        setColor(false)
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <AppbarContainer
      className={color ? 'set-bg' : 'remove-bg'}
      sx={{ padding: '5px 75px' }}
    >
      {/* logo  */}
      <AppbarHeader>
        <Link href='/'>
          <Image src={logo} alt='logo' width={150} height={80} />
        </Link>
      </AppbarHeader>
      <MyList type='row'>
        <Link className='nav-link' href='/about'>About</Link>
        <Link className='nav-link' href='/services'>Services</Link>
        <Link className='nav-link' href='/projects'>Projects</Link>
        <Link className='nav-link' href='/contact'>Contact</Link>
      </MyList>
      <GetProject>
        <Button variant='contained'>Need a Project?</Button>
      </GetProject>
    </AppbarContainer>
  )
}
