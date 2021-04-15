import React from 'react';
import InfoForm from "../Components/Header/Form";
export default function Home(props) {
   
    return (
        <div>
            Home
            <InfoForm displayName={props.displayName}></InfoForm>
        </div>
    )
}
