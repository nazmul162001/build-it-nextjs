import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CallUsContainer, CallUsContent, CustomButton, CustomButton2 } from "../../../styles/about/callus";
import { Colors } from "../../../styles/theme";

export default function CallUsAbout(){
    return <>
    <CallUsContainer>
        <CallUsContent>
            <Typography variant='h6' sx={{color: Colors.textColor, fontWeight: 'bold'}}>
                Call Us
            </Typography>
            <Box sx={{display: 'flex'}}>
                <CustomButton variant='contain'>Call</CustomButton>
                <CustomButton2 variant='contain'>Email</CustomButton2>
            </Box>
        </CallUsContent>
    </CallUsContainer>
    </>
}