import ShopNavBar from "../../../base/shop-navbar/ShopNavBar";
import Container from "@mui/material/Container";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTheme} from "../../../context/Theme";

export default function ShopHome() {
    const {titreSite, user} = useTheme()

    return (
        <>
            <ShopNavBar/>
            <Container maxWidth="md" sx={{marginTop: "30px"}}>
                <Grid spacing={2}>
                    <Typography component="h1" variant="h5">Bonjour {user.split("@")[0]},</Typography>
                    <Typography component="h2" variant="h5">bienvenue sur votre boutique {titreSite}</Typography>
                </Grid>
            </Container>
        </>
    )
}