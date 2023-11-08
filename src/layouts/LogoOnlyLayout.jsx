import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
    flexDirection: 'column'

})

const HeaderStyle = styled('header')({
   top: "0",
   left: "0",
   lineHeight: "0",
   width: "100%",
   position: "absolute",
   

}) 

const MainStyle = styled('div')(({theme}) => ({
    flexGrow: '1',
    overflow: "auto",
    minHeight: '90vh',
    width: '100vw',
    paddingTop: '24',
    paddingBottom: theme.spacing(10),


})); 



export default function LogoOnlyLayout(){

    return (
        <RootStyle>
            <HeaderStyle>
                <a href="/">

                    <img src = '../../assets/logo.png' alt="logo" width={100}/>
                </a>

        

                
            </HeaderStyle>
            <MainStyle>
                <Outlet/>
            </MainStyle>
        </RootStyle>
    )
}