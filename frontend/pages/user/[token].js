import React from  "react"
import {Typography,Grid,CssBaseline, AppBar, Toolbar} from "@mui/material";
import {getUserData} from "../../APIs/auth";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CameraIcon from '@mui/icons-material/PhotoCamera';


export default function User({_user}) {
    const theme = createTheme();
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <AppBar position="relative">
                    <Toolbar>
                        <CameraIcon sx={{ mr: 2 }} />
                        <Typography variant="h6" color="inherit" noWrap>
                            {_user?.user?.username}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <Grid sx={{
                        marginTop: "4rem"
                    }}>
                        <Typography textAlign={"center"} variant={"h2"}>{_user?.user?.fullname}</Typography>
                        <Typography textAlign={"center"} variant={"h6"}>{_user?.user?.email}</Typography>
                    </Grid>
                </main>
            </CssBaseline>
        </ThemeProvider>
    )
}


export const getServerSideProps = async ({ req, res, resolvedUrl }) => {
    const token = resolvedUrl.split("/")[2]
    let user
    try{
         user = await getUserData({token})
    }catch (e) {

    }


    return {
        props: {
            _user: user?.data || ""
        }
    }
}

