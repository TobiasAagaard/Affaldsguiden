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

export const Login = () => {

    const { register, handleSubmit, reset, formState: {errors}} = useForm()
    const { loginData, setLoginData } = useAuth()
    const [ errMes, setErrMes ] = useState('')
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
      }
   
    const loginRequest = async (data) => {
        const formData = new URLSearchParams();
        formData.append("username", data.username)
        formData.append("password", data.password)

        const endpoint = `http://localhost:3000/login`;
        try {
            const res = await axios.post(endpoint, formData)
            handleSessionData(res.data.access_token)
            console.log(res)
        }
        catch(err) {
            console.error('Kunne ikke logge ind')
            setErrMes('Forkert brugernavn eller password')
        }
    }

    const handleSessionData = data => {
        if(data) {
            sessionStorage.setItem('token', JSON.stringify(data));
            setLoginData(data)
        }
    }
 
    const LogOut = () => {
        sessionStorage.removeItem('token')
        setLoginData('')
        reset()


        console.log("Logget ud korrekt")
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
                                {errors.username && ( <div className={Styles.error}>Tast dit brugernavn!</div> )}
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