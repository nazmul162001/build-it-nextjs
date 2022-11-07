import {
  AppbarContainer,
  GetProject,
  AppbarHeader,
  MyList,
} from '../../styles/appbar'
import { ListItemText, ListItemButton, Button } from '@mui/material'
import Image from 'next/image'
import logo from '/public/img/logo.svg'

export default function NavbarDesktop({ matches }) {
  return (
    <AppbarContainer sx={{padding: '10px 30px'}}>
      <AppbarHeader>
      <Image
      src={logo}
      alt="logo"
      width={150}
      height={80}
    />
      </AppbarHeader>
      <MyList type='row'>
        <ListItemText sx={{padding: '0 10px'}} primary='About' />
        <ListItemText sx={{padding: '0 10px'}} primary='Services' />
        <ListItemText sx={{padding: '0 10px'}} primary='Projects' />
        <ListItemText sx={{padding: '0 10px'}} primary='Contact' />
      </MyList>
      <GetProject>
        <Button variant='contained'>Get a Project?</Button>
      </GetProject>
    </AppbarContainer>
  )
}
