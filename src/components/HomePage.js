import React from "react";
import NewsCarrusel from "./NewsCarrusel";
import ContactMe from "./ContactMe";


const HomePage = ({states}) => {



return (
    <>
        
        <div>
            <h1>This is a title bar</h1>
        </div>
        <div>
            <NewsCarrusel/>
        </div>
        <div>
            <ContactMe/>
        </div>
    </>
)

}

export default HomePage