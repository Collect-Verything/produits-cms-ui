import ShopNavBar from "../../../base/shop-navbar/ShopNavBar";
import Container from "@mui/material/Container";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTheme} from "../../../context/Theme";

export default function ShopHome() {
    const {titreSite, user} = useTheme()

    const generateErrorForDashboard = async (path: string, n: number = 10) => {
        for (let i = 0; i < n; i++) {
            try {
                await fetch(path, {cache: "no-store"});
            } catch (e) {
                console.error("Erreur lors de la génération :", e);
            }
        }
    }


    return (
        <>
            <ShopNavBar/>
            <Container maxWidth="md" sx={{marginTop: "30px"}}>
                <Grid spacing={2}>
                    <Typography component="h1" variant="h5">Bonjour {user.split("@")[0]},</Typography>
                    <Typography component="h2" variant="h5">bienvenue sur votre boutique {titreSite}</Typography>
                </Grid>
            </Container>
            <Grid sx={{marginTop: "20px"}}>
                <button onClick={() => generateErrorForDashboard("/debug-500", 5)}>
                    Générer 500
                </button>
                <button onClick={() => generateErrorForDashboard("/debug-404", 5)}>
                    Générer 404
                </button>
            </Grid>
        </>
    )
}