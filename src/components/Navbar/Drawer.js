import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  styled,
} from '@mui/material'
import { DrawerCloseButton } from '../../styles/appbar'
import { useUIContext } from '../context/ui'
import CloseIcon from '@mui/icons-material/Close'
import { lighten } from 'polished'
import { Colors } from "../../styles/theme";

const MiddleDivider = styled((props) => (
  <Divider variant='middle' {...props} />
))``

export default function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext()

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{ fontSize: '2.5rem', color: lighten(0.09, Colors.secondary) }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>About</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Services</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Projects</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Contact</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  )
}
