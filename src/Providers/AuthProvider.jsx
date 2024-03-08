//Det her komponent bruger vi til at sende data ned gennem komponenternes hieraki

// vi importer de forskellige react hooks vi bruger
import { createContext, useContext, useEffect, useState } from 'react';

// Vi laver vores context
const AuthContext = createContext();

// her laver vi et komponentet med children som prop
const AuthProvider = ({children}) => {

// useState hook til at kontrolerer og ændre tilstandsværdier
    const [loginData, setLoginData ] = useState('') 
// Vi sætter ny eller opdaterer loginData hvis der er en token i sessionStorage
    useEffect(() => {
        // Hvis man kan få token ud af sessionStorage 
        if(sessionStorage.getItem('token')) {

            //Så skal den angives som ny loginData
            setLoginData(JSON.parse(sessionStorage.getItem('token')))
        }

        //Et dependency array som checker på ændringer i children
    }, [children])

    return (
        <AuthContext.Provider value={{loginData, setLoginData}}>
            {children}
        </AuthContext.Provider>
    )
}

//hook til at tilgå contexten ude i andre komponenter
const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth }