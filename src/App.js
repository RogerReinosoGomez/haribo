import Footer from './components/Footer'
//import Principal from './components/Principal'
import TablaUsuarios from './components/Usuarios/index';
import React, { Fragment, useState, useEffect } from 'react';
//import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import NavBar from './components/NavBar';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import ModuloProduccion from './components/ModuloProduccion';

function App() {

  const [sesionIniciada, setSesionIniciada] = useState(false);

  const cambiarSesionIniciada = (exitoLogin) => {
    setSesionIniciada(exitoLogin);
  }

  useEffect(() => {
    const tokenData = localStorage.getItem('tokenAcceso');
    if (tokenData) {
        const objToken = JSON.parse(tokenData);
        const diffMins = Math.round((((Date.now() - objToken.timestamp) % 86400000) % 3600000) / 60000);

        if (diffMins <= 60) {
          setSesionIniciada(true);
        }else {
          setSesionIniciada(false);
        }
    }
  }, [])

  const cerrarSesion = async () => {
    localStorage.setItem('tokenAcceso',null);
    setSesionIniciada(false)
  }

  const informacion = { ubicacion: "2021 Haribo Gummies. Miami, Fl" };

  return (
    <Fragment>
      <NavBar sesionIniciada={ sesionIniciada } barCommand={ cerrarSesion } />
      { sesionIniciada ? <TablaUsuarios /> : <Login cambiarSesionIniciada={ cambiarSesionIniciada } /> }
      <Footer { ...informacion }/>
    </Fragment>
  );
}

export default App;
