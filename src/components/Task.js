// @flow
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as regularStar} from "@fortawesome/free-regular-svg-icons";
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {Col} from "react-bootstrap";

const Task = ({id,desc,status,changeStatus}) => {
 return (
     <Col>

         <input className="styled-checkbox" id={`${status+id}`} name={`${status}Tasks`} type="checkbox" checked={status==="archived"?true:false} onChange={(e)=>{status==='default'?changeStatus('archived',id):e.preventDefault()}} value={id}/>
         <label htmlFor={`${status+id}`}>{desc} </label>
         {status === "archived" ? "" :
             < span className = "float-right icon18" > < FontAwesomeIcon className="text-success"icon={status==="default"?regularStar:faStar} onClick={(e)=>{status==='default'?changeStatus('pinned',id):e.preventDefault()}}/></span>
         }
     </Col>
 );
};
export default Task;