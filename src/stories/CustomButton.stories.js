import React from "react";
import Button from "../components/button";

export default {
    title: "Custom Button",
    component:Button
}

export const BtnLg = () => (<Button value="Button Large" style={{width:'250px',backgroundColor:'blue',color:'white',padding:"10px"}} onClick={()=>console.log("Button Clicked")}/>)
export const BtnMd = () => (<Button value="Button Medium" style={{width:'150px',backgroundColor:'red',color:'white',padding:"10px"}} onClick={()=>console.log("Button Clicked")}/>)
export const BtnSm = () => (<Button value="Button Medium" style={{width:'100px',backgroundColor:'orange',color:'white',padding:"10px"}} onClick={()=>console.log("Button Clicked")}/>)

