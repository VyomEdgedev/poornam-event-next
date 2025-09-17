
import { Box, Container } from "@mui/material";
import Image from "next/image";
import style from "@/styles/style.module.scss"
import { useEffect } from "react";

const Loader = () => {
    useEffect(()=>{
       if(typeof window !== "undefined"){
        window.scrollTo({top:0})
       }
    },[])
    return (
        <Container disableGutters maxWidth="xxl" sx={{height:"120vh" ,width:"100vw" , display:'flex', alignItems:"center" ,justifyContent:"center"}}>
            <Box className={style.loaderAnimation} sx={{width:"20vh"}}>
                <Image
                    src={"/logo2.png"}
                    alt="Logo"
                    width={120}
                    height={120}
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                />
            </Box>
        </Container>
    )
}

export default Loader;