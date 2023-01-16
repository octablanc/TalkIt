import React from "react";
import { NavbarS } from "./styled-components/Navbar.styled";
import Button from '@mui/material/Button';
import Login from "../../views/login/Login";

export default function Navbar(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = ()=> setOpen(false);
    return (
        <NavbarS>
            <h2 style={{ marginLeft: '15vw' }}>Talk It</h2>
            <Button 
                onClick={handleOpen} 
                style={{ 
                    fontFamily: "'Montserrat', sans-serif", 
                    textTransform: 'none', 
                    fontSize: '20px',
                    marginRight: '15vw'
                }}
            >Inciar sesion</Button>
            
            <Login open={open} handleClose={handleClose}/>
        </NavbarS>
    );
}
