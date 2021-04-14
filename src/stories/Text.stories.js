import React from "react";

import Text from "../components/text";


export default {
    title:"Text",
    component:Text
}

export const TextLg = () => (<Text style={{fontWeight:"bold",fontSize:"48px"}} value="Large Text "/>)
export const TextMd = () => (<Text style={{fontWeight:"bold",fontSize:"36px"}} value="Medium Text "/>)
export const TextSm = () => (<Text style={{fontWeight:"bold",fontSize:"24px"}} value="Small Text "/>)