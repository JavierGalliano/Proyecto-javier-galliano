import React from "react";
import Contador from "./Contador"
function Container(props){
    
const {name} = props;
return(
<div>
    <h1>{name}</h1>
    <Contador stock={5} initial ={0}/>
</div>
);
}
export default Container;