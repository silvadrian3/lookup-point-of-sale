import React from "react";

// functional component

// function LoginBanner(){
//     return (
//         <>
//         <h1>Hello World!</h1>
//         <Image source="../../public/logo512.png" />
//         </>
//     );
// }

// export default LoginBanner;
// or

export const LoginBanner = (props) => {

    return(
        <>
        <h1>Hello World!</h1>
        <img src={props.src} alt={props.alt} />
        {props.children}
        </>
    )    
}



