import Footer from './components/Footer'
//import Principal from './components/Principal'
import TablaUsuarios from './components/TablaUsuarios';
import React, { Fragment, useState } from 'react';
//import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ModuloProduccion from './components/ModuloProduccion';

function App() {

  const [listaUsuarios, setListaUsuarios] = useState([
    {cedula:725877638, nombre:"Niki", apellido:"Doyley", email:"ndoyley0@accuweather.com", genero:"Male", ciudad:"Cilongkrang", telefono:3005293623, password:"WWvX3I", status:false, nacimiento:"16/05/1969"},
    {cedula:499003072, nombre:"Rosalind", apellido:"Siene", email:"rsiene1@answers.com", genero:"Female", ciudad:"San José", telefono:3005294131, password:"tqODSE", status:false, nacimiento:"04/04/1988"},
    {cedula:1829470650, nombre:"Ervin", apellido:"Spira", email:"espira2@canalblog.com", genero:"Male", ciudad:"Dogondoutchi", telefono:3005292961, password:"ywe6jggqPJ", status:false, nacimiento:"07/12/1984"},
    {cedula:1573831980, nombre:"Myrtia", apellido:"Padberry", email:"mpadberry3@cnbc.com", genero:"Female", ciudad:"Takedamachi", telefono:3005296949, password:"zkfkvV", status:true, nacimiento:"25/04/1952"},
    {cedula:1757960987, nombre:"Farrel", apellido:"Kleuer", email:"fkleuer4@unblog.fr", genero:"Male", ciudad:"Caoping", telefono:3005293007, password:"sIeje0", status:true, nacimiento:"06/07/1962"},
    {cedula:723475173, nombre:"Sawyere", apellido:"Turbern", email:"sturbern5@paypal.com", genero:"Male", ciudad:"Yuzhou", telefono:3005290783, password:"PAi1ZnGt", status:true, nacimiento:"07/12/1965"},
    {cedula:1585194053, nombre:"Layla", apellido:"Lewis", email:"llewis6@myspace.com", genero:"Female", ciudad:"Yurkivka", telefono:3005293563, password:"qr4Af93X", status:true, nacimiento:"10/07/1964"},
    {cedula:503857080, nombre:"Kiele", apellido:"Robins", email:"krobins7@umich.edu", genero:"Female", ciudad:"Skövde", telefono:3005291915, password:"RXOgPMq", status:false, nacimiento:"02/06/1976"},
    {cedula:477865120, nombre:"Maryrose", apellido:"Paolone", email:"mpaolone8@dailymail.co.uk", genero:"Male", ciudad:"Tanjungpati", telefono:3005295985, password:"4xkRLcOK", status:false, nacimiento:"23/12/1982"},
    {cedula:978732900, nombre:"Gerladina", apellido:"De la Harpe", email:"gdelaharpe9@blog.com", genero:"Female", ciudad:"Aourir", telefono:3005297849, password:"HLu9Ppsm", status:false, nacimiento:"05/02/1977"},
    {cedula:833685345, nombre:"Lucias", apellido:"Bengoechea", email:"lbengoecheaa@w3.org", genero:"Female", ciudad:"Looc", telefono:3005297566, password:"l4D5A0DsxTO", status:true, nacimiento:"19/03/1981"},
    {cedula:755165514, nombre:"Lexine", apellido:"McMurdo", email:"lmcmurdob@cmu.edu", genero:"Male", ciudad:"Jasienica Rosielna", telefono:3005294390, password:"vFDnmyL", status:true, nacimiento:"27/04/1990"},
    {cedula:135900243, nombre:"Eloisa", apellido:"Zoppie", email:"ezoppiec@japanpost.jp", genero:"Female", ciudad:"Cangqian", telefono:3005299137, password:"gtc0h492xttY", status:true, nacimiento:"20/05/1988"},
    {cedula:363321831, nombre:"Law", apellido:"Glancy", email:"lglancyd@printfriendly.com", genero:"Male", ciudad:"Plato", telefono:3005297128, password:"igdCvNP", status:false, nacimiento:"07/07/1973"},
    {cedula:1746884508, nombre:"Blithe", apellido:"Demer", email:"bdemere@cam.ac.uk", genero:"Female", ciudad:"Teryayevo", telefono:3005299660, password:"gX8wBd", status:false, nacimiento:"11/06/1972"}
  ]);

  const pedidosPorDespachar = [
    {NOrden: "001", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Por despachar", fecha: "2015-09-13"},
    {NOrden: "002", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Por despachar", fecha: "2015-09-13"},
    {NOrden: "003", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Por despachar", fecha: "2015-09-13"},
    {NOrden: "004", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Por despachar", fecha: "2015-09-13"},
    {NOrden: "005", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Por despachar", fecha: "2015-09-13"},
    {NOrden: "006", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Por despachar", fecha: "2015-09-13"},
    {NOrden: "007", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Por despachar", fecha: "2015-09-13"},
  ];

  const pedidosDespachados= [
    {NOrden: "008", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Despachado", fecha: "2015-09-13"},
    {NOrden: "009", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Despachado", fecha: "2015-09-13"},
    {NOrden: "010", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Despachado", fecha: "2015-09-13"},
    {NOrden: "011", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Despachado", fecha: "2015-09-13"},
    {NOrden: "012", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Despachado", fecha: "2015-09-13"},
    {NOrden: "013", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Despachado", fecha: "2015-09-13"},
    {NOrden: "014", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Despachado", fecha: "2015-09-13"},
  ];

  const productosDisponibles= [
    {NOrden: "015", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Disponible", materiaPrima: "grenetina (gelatina sin sabor), glucosa, azúcar refinada, gelatina con sabor, agua y preservativos. ", fecha: "2015-09-13"},
    {NOrden: "016", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Disponible", materiaPrima: "grenetina (gelatina sin sabor), glucosa, azúcar refinada, gelatina con sabor, agua y preservativos. ", fecha: "2015-09-13"},
    {NOrden: "017", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Disponible", materiaPrima: "grenetina (gelatina sin sabor), glucosa, azúcar refinada, gelatina con sabor, agua y preservativos. ", fecha: "2015-09-13"},
    {NOrden: "018", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Disponible", materiaPrima: "grenetina (gelatina sin sabor), glucosa, azúcar refinada, gelatina con sabor, agua y preservativos. ", fecha: "2015-09-13"},
    {NOrden: "019", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Disponible", materiaPrima: "grenetina (gelatina sin sabor), glucosa, azúcar refinada, gelatina con sabor, agua y preservativos. ", fecha: "2015-09-13"},
    {NOrden: "020", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Disponible", materiaPrima: "grenetina (gelatina sin sabor), glucosa, azúcar refinada, gelatina con sabor, agua y preservativos. ", fecha: "2015-09-13"},
    {NOrden: "021", descripcion: "elaborados a partir de gelatina animal. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc.", estado: "Disponible", materiaPrima: "grenetina (gelatina sin sabor), glucosa, azúcar refinada, gelatina con sabor, agua y preservativos. ", fecha: "2015-09-13"},
  ];

  const informacion = { ubicacion: "2021 Haribo Gummies. Miami, Fl" };

  const modificarStatus = (cedula) => {
    const copiaUsuarios = [ ...listaUsuarios ];
    const usuario = copiaUsuarios.find( (parametro) => parametro.cedula === cedula);
    usuario.status = !usuario.status;
    setListaUsuarios(copiaUsuarios);
  }

  const eliminarUsuario = (cedula) => {
    const copiaUsuarios = listaUsuarios.filter( (parametro) => parametro.cedula !== cedula );
    setListaUsuarios(copiaUsuarios);
  }

  const agregarUsuario = (nuevoUsuario) => {
    const copiaUsuarios = [ ...listaUsuarios ];
    copiaUsuarios.push(nuevoUsuario);
    setListaUsuarios(copiaUsuarios);
  }

  const editarUsuario = (nuevoUsuario) => {
    const copiaUsuarios = [ ...listaUsuarios ];
    const usuarioSeleccionado = copiaUsuarios.find( (usuario) => usuario.cedula === nuevoUsuario.cedula );
    for ( var atributo in usuarioSeleccionado) {
      usuarioSeleccionado[ atributo ] = nuevoUsuario[ atributo ]
    }
    setListaUsuarios(copiaUsuarios);
  }

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Login/>}/>
          <Route path = "/ModuloProduccion/" element = {<ModuloProduccion despachar ={ pedidosPorDespachar }
                                                                          despachado = { pedidosDespachados }
                                                                          disponibles = { productosDisponibles }/>}
          />
          <Route path = "/TablaDeUsuarios/" element = {<TablaUsuarios usuarios = { listaUsuarios }
                                                                      modificarStatus = { modificarStatus }
                                                                      eliminarUsuario = { eliminarUsuario }
                                                                      agregarUsuario = { agregarUsuario }
                                                                      editarUsuario = { editarUsuario } />}
          />
        </Routes>
      </BrowserRouter>
      <Footer { ...informacion }/>
    </Fragment>
  );
}

export default App;
