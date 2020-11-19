import React from "react";
import './Card.css';
function Card(props){
    return(

    <div className="card" id="Portcard">
        <a href={props.link}>
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5>{props.name}</h5>
            </div>
        </a>
    </div>

    )

}

export default Card;