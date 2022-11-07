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

export default function NavbarDesktop({ matches }) {
  return (
    <AppbarContainer sx={{ padding: '10px 30px' }}>
      <AppbarHeader>
        <Link href='/'>
          <Image src={logo} alt='logo' width={150} height={80} />
        </Link>
      </AppbarHeader>
      <MyList type='row'>
        <ListItemButton>
          <ListItemText sx={{ color: Colors.muted }}>About</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText sx={{ color: Colors.muted }}>Services</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText sx={{ color: Colors.muted }}>Projects</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText sx={{ color: Colors.muted }}>Contact</ListItemText>
        </ListItemButton>
      </MyList>
      <GetProject>
        <Button variant='contained'>Get a Project?</Button>
      </GetProject>
    </AppbarContainer>
  )
}
