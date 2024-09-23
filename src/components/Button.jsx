import React from "react"
import '../App.css'

export default function Button(props){
    return(
        <button className="btn" style={{backgroundColor:props.background, color:props.fontColor}}>
            <img src={props.img}/>
            {props.title}
        </button>
    )
}