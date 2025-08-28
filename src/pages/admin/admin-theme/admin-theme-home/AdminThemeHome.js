import AdminNavBar from "../../../../base/admin-navbar/AdminNavBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import Compact from "@uiw/react-color-compact";
import {useTheme} from "../../../../context/Theme";

export default function AdminThemeHome(){

    const {primary, setPrimary,secondary, setSecondary} = useTheme()

    return(
        <>
            <AdminNavBar/>
            <Container sx={{borderRadius: "15px", boxShadow: '5px 5px 5px #868686', width: "40vw",padding:"30px", marginTop: "60px"}} maxWidth="sm">
                <Typography textAlign={"center"} sx={{paddingTop: "30px"}} variant={"h4"}>Theme de la boutique</Typography>
                <Grid container sx={{paddingTop: "30px"}}  spacing={2}>
                    <Grid item xs={6}>
                        <Typography>Couleur Primaire : </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Compact color={ primary} onChange={(color) => {setPrimary(color.hex);}}/>
                    </Grid>
                    <Grid  item xs={6}>
                        <Typography>Couleur titre du site : </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Compact color={secondary} onChange={(color) => {setSecondary(color.hex);}}/>
                    </Grid>
                </Grid>
            </Container>

            </>
    )
}