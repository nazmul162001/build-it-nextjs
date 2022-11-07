import { AppbarContainer, AppbarHeader, GetProject } from '../../styles/appbar'
import { Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Image from 'next/image'
import logo from '/public/img/logo.svg'
import { useUIContext } from '../context/ui'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import Link from 'next/link'

export default function NavbarMobile() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const { setDrawerOpen } = useUIContext()

  return (
    <AppbarContainer sx={{ padding: '5px 10px' }}>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon sx={{ fontSize: '45px' }} />
      </IconButton>
      {!matches && (
        <AppbarHeader>
          <Link href='/'>
            <Image src={logo} alt='logo' width={150} height={60} />
          </Link>
        </AppbarHeader>
      )}
      <GetProject>
        <Button variant='contained'>Get a Project?</Button>
      </GetProject>
    </AppbarContainer>
  )
}
