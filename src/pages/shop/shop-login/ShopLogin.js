import ShopNavBar from "../../../base/shop-navbar/ShopNavBar";
import {CssBaseline, TextField} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import {useAuth} from "../../../context/FakeAuth";
import {useNavigate} from "react-router-dom";
import {useTheme} from "../../../context/Theme";

export default function ShopLogin(){
    const {user} = useTheme()

    const[email, setEmail] = useState(user)
    const[password, setPassword] = useState("admin")

    const {login, isAuthenticated} = useAuth()
    const navigate = useNavigate()


    function handleSubmit(e){
        e.preventDefault()
        if(email && password) login(email,password)
    }


    useEffect(() => {
        if(isAuthenticated) navigate("/", {replace: true})
    }, [isAuthenticated,navigate]);

    return(
        <>
            <ShopNavBar/>
            <>
                <CssBaseline />
                <Container  maxWidth="sm">
                    <Box sx={{ boxShadow: '5px 5px 5px #868686', height: '40vh' , marginTop: '10vh', borderRadius: "15px"}} >
                        <div style={{display: "flex", flexDirection: "column", width: '20vw', margin: "auto"}} >
                                <TextField style={{marginTop: "20px"}} value={email} onChange={(e)=>setEmail(e.target.value)} placeholder={"Votre e-email"} id="filled-basic" label="Email" variant="filled" />
                                <TextField style={{marginTop: "20px"}} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder={"Password"} id="filled-basic" label="Password" variant="filled" type={"password"}/>
                                <Button onClick={handleSubmit} style={{marginTop: "20px"}} variant="contained">Login</Button>
                        </div>
                    </Box>
                </Container>
            </>
        </>
    )
}