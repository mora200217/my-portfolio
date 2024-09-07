import { Fragment } from "react/jsx-runtime";
import "./ChangingTitle.sass"; 
import { useState } from "react";

export const ChangingTitle = () => {
    const titleList = ["Andrés", "Creativo", "Curioso", "Chistoso"]; 
    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState(titleList[counter]); 

    /*
    getTitle
    */
    // setInterval(()=>{
    //     setCounter((counter + 1) % titleList.length); 
    // }, 2000)

    return(
        <Fragment>
            <h1 id="title-hero">¡Hola! Soy <span className="block"> {titleList[counter]}</span></h1>
            <p>Conoce más de mi trabajo</p>
        </Fragment>
    )
}