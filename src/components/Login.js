import React from 'react';
// import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import NavBar from './NavBar';
// import Background from '../img/gummyLogin.jpg';
import '../App.css'
// import { Password } from 'primereact/password';

let Login = () =>  {

    return(
        <>
            <NavBar />
            <div>
                <h1 className =  "d-flex justify-content-center text-white">EMPRESA HARIBO</h1>
                <p className="d-flex justify-content-center text-white ">
                    <i><strong>Nuestra filosofía de vida:</strong></i>
                    No dejar paladares sin conquistar. Prueba nuestros sensacionales gomitas y conoce el verdadero amor!
                </p>
                <div className="col-12 md:col-6 d-flex justify-content-center">
                    <div>
                        <h5 className= "text-white">Login</h5>
                        <div className="field">
                            <div className="col-12 mb-2 md:col-2 md:mb-0">
                                <span className="p-input-icon-left">
                                    <i className="pi pi-user" />
                                    <InputText id= "emailLogin" type="email" placeholder="Email" required/>
                                </span>
                            </div>
                        </div >
                        <div className="field">
                            <div className="col-12 mb-2 md:col-2 md:mb-0">
                                <span className="p-input-icon-left">
                                    <i className="pi pi-ellipsis-h" />
                                    <InputText id= "passwordLogin" type="password" placeholder="Password" required/>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 ">
                            <Button label="Login" className="p-button-success mr-2 mb-2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;