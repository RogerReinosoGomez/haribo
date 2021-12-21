import React from 'react';

import { useState } from "react";
import { IniciarSesion } from "./api";

import NavBar from '../NavBar';

import '../../App'

let Login = (props) =>  {
    const [ cedula, setUsuario ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const onUsuarioChange = (evt) => {
        setUsuario(evt.target.value);
    }

    const onPasswordChange = (evt) => {
        setPassword(evt.target.value);
    }

    const onFormSubmit = async (evt) => {
        evt.preventDefault();
        console.log("Iniciando sesión...");
        const data = await IniciarSesion({
            cedula: cedula,
            password: password
        })
        if (data?.token) {
            localStorage.setItem("tokenAcceso", JSON.stringify({ token: data.token,  timestamp: Date.now() }));
            props.cambiarSesionIniciada(true);
        }else {
            setError('Nombre de usuario o contraseña incorrecta');
        }
    }

    return(
        <>
            <div>
                <h1 className =  "d-flex justify-content-center text-white">EMPRESA HARIBO</h1>
                <p className="d-flex justify-content-center text-white ">
                    <i><strong>Nuestra filosofía de vida:</strong></i>
                    No dejar paladares sin conquistar. Prueba nuestros sensacionales gomitas y conoce el verdadero amor!
                </p>
                <div className="col-12 col-6 d-flex justify-content-center">
                    <form onSubmit={ onFormSubmit }>
                        <div>
                            <div className="row mt-2">
                                <div className="col-12 text-center">{ error }</div>
                            </div>
                            <h5 className= "text-white">Login</h5>
                            <div className="field">
                                <div className="col-12 mb-2 md:col-2 md:mb-0">
                                    <span className="p-input-icon-left">
                                        <i className="pi pi-user" />
                                        <input type="text" className="form-control" id="usuario"
                                            value={ cedula } onChange={ onUsuarioChange }
                                        />
                                    </span>
                                </div>
                            </div >
                            <div className="field">
                                <div className="col-12 mb-2 md:col-2 md:mb-0">
                                    <span className="p-input-icon-left">
                                        <i className="pi pi-ellipsis-h" />
                                        <input type="password" className="form-control" id="contrasena"
                                            value={ password } onChange={ onPasswordChange }
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 ">
                                <button type="submit" className="btn btn-primary btn-lg">Iniciar sesión</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;