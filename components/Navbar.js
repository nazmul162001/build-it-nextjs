import Link from 'next/link'
import navStyles from '../styles/navbar.module.css'
import logo from '../public/img/logo2.png'
import Image from 'next/image'
import Button from '@mui/material/Button'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-10'>
      {/* logo  */}
      <Link href='/'>
        <Image src={logo} alt='' width={110} height={40}></Image>
      </Link>
      {/* navmenu  */}
      <ul className='flex justify-center'>
        <li className={navStyles.li}>
          <Link href='/'>Home</Link>
        </li>
        <li className={navStyles.li}>
          <Link href='/about'>About</Link>
        </li>
        <li className={navStyles.li}>
          <Link href='/services'>Services</Link>
        </li>
        <li className={navStyles.li}>
          <Link href='/projects'>Projects</Link>
        </li>
        <li className={navStyles.li}>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
      {/* contact  */}
      {/* contact button  */}
      <Button sx={{ height: '' }} variant='contained'>
        Need a project?
      </Button>
    </nav>
  )
}

export default Navbar
