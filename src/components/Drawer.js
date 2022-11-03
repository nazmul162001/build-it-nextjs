import { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/img/logo2.png'
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core'
import { Button, useMediaQuery, useTheme } from '@mui/material'
// import { Link } from "react-router-dom";
import Link from 'next/link'

import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '20px',
  },
  icon: {
    color: 'black',
    padding: '0',

  },
}))

function DrawerComponent() {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false)

  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'))

  // console.log(isMatch)
  
  
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href='/'>
                <Image src={logo} alt='/logo' width={0} height={50} />
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href='/about' className={classes.link}>
                About
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href='/services' className={classes.link}>
                Services
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href='/projects' className={classes.link}>
                Projects
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href='/contact' className={classes.link}>
                Contact
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon style={{fontSize: '45px'}} />
      </IconButton>
      {!isMatch && <Link href='/'>
        <Image src={logo} alt='/logo' width={0} height={50} />
      </Link>}
      <Button style={{background: '#4398A5', color: 'white', padding: '5px 15px', borderRadius: '5px'}} variant='contained'>Need a Project?</Button>
    </>
  )
}
export default DrawerComponent
