import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  styled,
} from '@mui/material'
import { DrawerCloseButton, AppbarHeader } from '../../styles/appbar'
import { useUIContext } from '../context/ui'
import CloseIcon from '@mui/icons-material/Close'
import { lighten, darken } from 'polished'
import { Colors } from '../../styles/theme'
import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/img/logo.svg'

const MiddleDivider = styled((props) => (
  <Divider variant='middle' {...props} />
))``

export default function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext()

  return (
    <>
      {drawerOpen && (
        // Drawer button
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{ fontSize: '2.5rem', color: lighten(0.5, Colors.secondary) }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        {/* Drawer /Logo */}
        <AppbarHeader
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image src={logo} alt='logo' width={150} height={80} />
        </AppbarHeader>

        {/* Drawer menu  */}
        <List>
          <Link className='nav-link-mobile' href='/'>
            <ListItemButton onClick={() => setDrawerOpen(false)}>
              <ListItemText sx={{ color: Colors.muted }}>Home</ListItemText>
            </ListItemButton>
          </Link>
          <MiddleDivider />
          <Link className='nav-link-mobile' href='/about'>
            <ListItemButton onClick={() => setDrawerOpen(false)}>
              <ListItemText sx={{ color: Colors.muted }}>About</ListItemText>
            </ListItemButton>
          </Link>
          <MiddleDivider />
          <Link className='nav-link-mobile' href='/services'>
            <ListItemButton onClick={() => setDrawerOpen(false)}>
              <ListItemText sx={{ color: Colors.muted }}>Services</ListItemText>
            </ListItemButton>
          </Link>
          <MiddleDivider />
          <Link className='nav-link-mobile' href='projects'>
            <ListItemButton onClick={() => setDrawerOpen(false)}>
              <ListItemText sx={{ color: Colors.muted }}>Projects</ListItemText>
            </ListItemButton>
          </Link>
          <MiddleDivider />
          <Link className='nav-link-mobile' href='contact'>
            <ListItemButton onClick={() => setDrawerOpen(false)}>
              <ListItemText sx={{ color: Colors.muted }}>Contact</ListItemText>
            </ListItemButton>
          </Link>
        </List>
      </Drawer>
    </>
  )
}
