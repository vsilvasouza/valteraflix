import React from 'react';

function ButtonLink(props){
    //props =>{ classname: "oq alguem passar", href:"/" }
    return(
        <a href={props.href} className={props.className}>
           {props.children}
        </a>
    );
}

export default ButtonLink;