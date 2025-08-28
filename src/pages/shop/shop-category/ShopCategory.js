import ShopNavBar from "../../../base/shop-navbar/ShopNavBar";
import Container from "@mui/material/Container";
import {Card, CardActions, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const objet = [
    {
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3d846378-df15-4139-80d7-4d103936ecc6/chaussure-p-6000-HxDbK8.png",
        title: "Nike P-6000",
        price: "142,00 €"
    },
    {
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2d83ceff-e32c-4349-805e-03f410e963d6/chaussure-air-max-1-Kd8dSr.png",
        title: "Air Max 1",
        price: "532,00 €"
    },
    {
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4371ac31-97cd-4057-bd6e-41440e39f3b9/chaussure-dunk-low-pour-plus-age-ClKMgF.png",
        title: "Dunk Low Black",
        price: "162,00 €"
    },
    {
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b5da6bae-bebb-43c0-a65e-df13ce50e190/chaussure-air-max-pulse-marcus-rashford-pour-dx5nwn.png",
        title: "Air Max Pulse",
        price: "532,00 €"
    },
    {
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b3546974-0d23-4657-a8a7-8d6abc9fc5e8/chaussure-air-force-1-07-lv8-pour-ggb31G.png",
        title: "Air Force 1 Low",
        price: "432,00 €"
    },
    {
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/af2e1930-269a-4b67-ae76-8e2cc7a89f9f/chaussure-air-jordan-1-mid-se-pour-ado-pZrKG1.png",
        title: "Dunk High",
        price: "132,00 €"
    }
]


export default function ShopCategory() {
    return (
        <>
            <ShopNavBar/>
            {process.env.REACT_APP_TEST}
            <Container maxWidth="md" sx={{marginTop: "30px"}}>
                <Grid container spacing={2}>

                    {objet.map((item) =>


                        <Grid item xs={6}>
                            <Card sx={{maxWidth: 345}}>
                                <CardMedia
                                    sx={{height: 200}}
                                    image={item.img}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Consulter</Button>
                                    <Button size="small">Ajouter au panier</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )}
                </Grid>

            </Container>

        </>
    )
}