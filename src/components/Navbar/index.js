import {useTheme} from '@mui/material/styles'
import { useMediaQuery } from "@mui/material";
import NavbarMobile from './NavbarMobile'
import NavbarDesktop from './NavbarDesktop'

export default function Appbar(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return(
        <>
            {
                matches? <NavbarMobile matches={matches} /> : <NavbarDesktop matches={matches} />
            }
        </>
    );
}