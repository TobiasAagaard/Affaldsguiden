import axios from "axios";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Providers/AuthProvider";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import Logo from "../../assets/Images/Icons/Logo.svg";
import Styles from "./Login.module.scss";


//function component til login
export const Login = () => {

    //Destructer variabler til at opsætte useForm react-hook-form 
    const { register, handleSubmit, reset, formState: {errors}} = useForm()
    //Destructer loginData så vi kan få fat i vores auth context i vores provider
    const { loginData, setLoginData } = useAuth()
    //en errorhandeling
    const [ errMes, setErrMes ] = useState('')
    //Destructer så vi kan lave function til at skjule og vise password
    const [open, setOpen] = useState(false)

   
   //function som aktiveres ved submit 
    const loginRequest = async (data) => {

        //laver formData og appender username og password. Så vi kan sende kærneværdier op i url
        const formData = new URLSearchParams();
        formData.append("username", data.username)
        formData.append("password", data.password)

        //endpoint / url
        const endpoint = `http://localhost:3000/login`;
        try {
            //sender et post requst til apiet med vores formData
            const res = await axios.post(endpoint, formData)

            //giver handleSessionData res data som property
            handleSessionData(res.data)
            console.log(res)
        }
        catch(err) {
            console.error('Kunne ikke logge ind')
            setErrMes('Forkert E-mail eller password')
        }
    }
    //Håndtere data i sessionStorage
    const handleSessionData = data => {
        if(data) {
            //parser token ud til en string
            sessionStorage.setItem('token', JSON.stringify(data));
            //giver loginData data property
            setLoginData(data)
        }
    }
    //function til at logge ud 
    const LogOut = () => {
        //fjerner token
        sessionStorage.removeItem('token')
        //Giver en tom værdi
        setLoginData('')
        //reseter login form for login oplysninger når man logger ud
        reset()


        console.log("Logget ud korrekt")
    }

    //Function til at kontroller om password vises eller skjules
    const toggle = () => {
        setOpen(!open)
      }
    
    return (
        <ContentWrapper title="Login">
            {!loginData  ?
            (
                <section className={Styles.loginContainer}>
                    <article>
                        <Link to={"/"}>
                            <img src={Logo} alt="Logo" />
                        </Link>
                        <h2>Log ind på Affaldsguiden</h2>
                        <h3>for at anmelde stationer</h3>
                    </article>
                    <form onSubmit={handleSubmit(loginRequest)} >
                        <div className={Styles.container}> 
                            <h1>Log ind</h1>
                           
                        </div>
                            <div className={Styles.inputContainer}>
                                <input type="text" name="username" placeholder="E-mail" id="username" {...register("username", {required: true})} />
                                {errors.username && ( <div className={Styles.error}>Tast din E-mail!</div> )}
                            </div>
                     
                                <div className={Styles.inputContainer}>
                                    <input type={(open === false) ? 'password' : 'text'} name="password" placeholder="Adgangskode" id="password"{...register("password", {required: true})}  />
                                    <span className={Styles.onOffpassword}>{(open === false) ? <BsFillEyeFill onClick={toggle} /> : <BsFillEyeSlashFill onClick={toggle}  /> }</span>
                                    {errors.password && (<div className={Styles.error}>Tast din adgangskode!</div>)}
                                </div>
                    
                        {errMes && (<div className={Styles.error}>{errMes}</div>)}

                        <div className={Styles.buttonContainer}>
                            <button>Log Ind</button>
                        </div>
                    </form>
                    </section>
            
            ) : (
            <>
            <Navbar />
                <section className={Styles.minSide}>
                   <h1>Min side</h1>
                    <button onClick={LogOut}>Log ud</button>
                </section>
            <Footer />
            </>

            )}

        </ContentWrapper>
    )

}