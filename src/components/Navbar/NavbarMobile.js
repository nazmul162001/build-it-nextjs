import { AppbarContainer, AppbarHeader, GetProject } from "../../styles/appbar";
import { Button, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Image from 'next/image'
import logo from '/public/img/logo.svg'
import { useUIContext } from "../context/ui";


export default function NavbarMobile({matches}) {

  const {setDrawerOpen} = useUIContext()
  
  return(
    <AppbarContainer>
      <IconButton onClick={()=> setDrawerOpen(true) }>
        <MenuIcon />
      </IconButton>
      <AppbarHeader>
      <Image
      src={logo}
      alt="logo"
      width={150}
      height={80}
    />
      </AppbarHeader>
      <GetProject>
        <Button variant='contained'>Get a Project?</Button>
      </GetProject>
    </AppbarContainer>
  )
}