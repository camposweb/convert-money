import { AppBar, Container, Toolbar, Typography } from "@mui/material";


export function Header(){
    return(
        <>
            <AppBar position="static">
                <Container>
                    <Toolbar disableGutters>
                        <Typography variant="h6">Exchange Money</Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}