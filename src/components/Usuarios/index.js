import Usuario from '../Usuario';
import NavBar from '../NavBar';
import FormUsuario from '../FormUsuario'
import Paginator from '../Paginator'
import { Modal, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import {
    ObtenerListado,
    CrearUsuario,
    EstadoUsuario,
    BorrarUsuario,
    ActualizarUsuario
} from './api';

let TablaUsuarios = () => {
    const [ vUsuarios, setvUsuarios ] = useState([]);
    const [ pagina, setPagina ] = useState(1);
    const [ refrescar, setRefrescar ] = useState(false);
    const [ showLoading, setShowLoading ] = useState(true);
    const [ elementosTotales, setElementosTotales ] = useState(0);
    const [ esError, setEsError ] = useState(false);
    const [ mensaje, setMensaje ] = useState('');

    const limite = 10;

    const parametros = {
        titulo: "",
        mostrar: false,
        modo: "nuevo",
        usuario: null,
        agregarUsuario: null
    };

    const [ parametrosModal, setParametrosModal ] = useState(parametros);

    useEffect(function () {
        console.log('Enviando petición...');
        setShowLoading(true);
        ObtenerListado(pagina, limite, function (responseData) {
            console.log(responseData);
            setShowLoading(false);
            if (responseData?.data) {
                setvUsuarios(responseData.data);
                setElementosTotales(responseData.count);
            }
        });
    }, [pagina, limite, refrescar]);

    const onRefrescar = function () {
        setRefrescar(true);
    }

    const onPrevio = function () {
        if (pagina >=2) {
            setPagina(pagina-1);
        }
    }
    const onSiguiente = function () {
        if (pagina < (elementosTotales/limite)) {
            setPagina(pagina+1);
        }
    }
    const onPaginaNueva = function(event) {
        if (Number(event.target.value) >=1 && 
           (Number(event.target.value) <= Number(elementosTotales/limite))) {
            setPagina(event.target.value);
        }
    }

    const onRegistrarUsuario = (event) => {
        event.preventDefault();
        const nuevoParametroModal = { ...parametrosModal };
        nuevoParametroModal.modo = "nuevo";
        nuevoParametroModal.mostrar = true;
        nuevoParametroModal.titulo = "Registrar Usuario";
        nuevoParametroModal.agregarUsuario = onNuevoUsuario;
        nuevoParametroModal.usuario = null;
        setParametrosModal(nuevoParametroModal);
        setShowLoading(false);
    }

    const onEditarUsuario = (parametro) => {
        const nuevoParametroModal = { ...parametrosModal };
        nuevoParametroModal.modo = "editar";
        nuevoParametroModal.mostrar = true;
        nuevoParametroModal.titulo = "Editar Usuario";
        nuevoParametroModal.agregarUsuario = onActualizarUsuario;
        nuevoParametroModal.usuario = parametro;
        setParametrosModal(nuevoParametroModal);
    }

    const cerrarModal = () => {
        const nuevoParametroModal = { ...parametrosModal };
        nuevoParametroModal.mostrar = false;
        setParametrosModal(nuevoParametroModal);
    }

    const onNuevoUsuario = async (nuevoUsuario) => {
        setShowLoading(true);
        const responseData = await CrearUsuario(nuevoUsuario);
        if (responseData) {
            setEsError(false);
            setMensaje('Se guardó el proyecto exitosamente.');
            setRefrescar(!refrescar);
        } else {
            setEsError(true);
            setMensaje('Ocurrió un error al intentar registrar el usuario. Intente nuevamente o contacte a soporte técnico.');
        }
        setShowLoading(false);
    }

    const onEstadoUsuario = async (cedula) => {
        const responseData = await EstadoUsuario(cedula);
        if (responseData) {
            setRefrescar(!refrescar);
        } else {
            console.log('Ocurrió un error al intentar activar/desactivar el usuario. Intente nuevamente o contacte a soporte técnico.');
        }
    }

    const onEliminaUsuario = async (cedula) => {
        const responseData = await BorrarUsuario(cedula);
        if (responseData) {
            setEsError(false);
            setRefrescar(!refrescar);
        } else {
            console.log('Ocurrió un error al intentar eliminar el usuario. Intente nuevamente o contacte a soporte técnico.');
        }
    }

    const onActualizarUsuario = async (usuarioActualizdo) => {
        setShowLoading(true);
        const responseData = await ActualizarUsuario(usuarioActualizdo);
        if (responseData) {
            setEsError(false);
            setMensaje('Se actualizó la informaciíon del usuario exitosamente.');
            setRefrescar(!refrescar);
        } else {
            setEsError(true);
            setMensaje('Ocurrió un error al intentar actualizar el usuario. Intente nuevamente o contacte a soporte técnico.');
        }
        setShowLoading(false);
    }

    const listaUsuarios = vUsuarios.map((usuario) => <Usuario key = {usuario.cedula}
                                                modificarStatus = { onEstadoUsuario }
                                                eliminarUsuario = { onEliminaUsuario }
                                                editarUsuario = { onEditarUsuario }
                                                { ...vUsuarios }/>);

    return(
        <div className="container-fluid px-5" >
            <NavBar />
            <div className="card mt-5 mx-5">
                <div className="card-body">
                    <button className="btn btn-outline-primary float-sm-end ml-1" onClick={ onRefrescar } >
                            Actualizar Lista
                    </button>
                    <button id="btnRegistrarNov" className="btn btn-sm btn-primary float-end"
                        onClick={ onRegistrarUsuario }>Registrar Usuario</button>
                    <h4>Lista de Usuarios Registrados</h4>
                    <h5 className="text-muted"><i>Visualizar, editar, agregar y eliminar usuarios</i></h5>
                </div>
            </div>
            <div class = "mx-5">
                <table class="table caption-top bg-white">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Cedula</th>
                            <th scope="col">Usuario/Status</th>
                            <th scope="col">Nacimiento</th>
                            <th scope="col">Email</th>
                            <th scope="col">Genero</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { showLoading ? <div className="col-sm-12 text-center">
                                            <Spinner animation="border" variant="primary" />
                                        </div>:
                                        <div className="list-group mt-2">{ listaUsuarios }</div> }
                    </tbody>
                </table>
            </div>
            <Paginator pagina= { pagina } onPrevio= { onPrevio }
                    onSiguiente= { onSiguiente } onPaginaNueva={ onPaginaNueva } />

            <Paginator pagina= { pagina } onPrevio= { onPrevio } 
                           onSiguiente= { onSiguiente } onPaginaNueva={ onPaginaNueva } /> 

            <Modal show={ parametrosModal.mostrar } onHide={ cerrarModal }>
                <Modal.Header closeButton>
                    <Modal.Title>{ parametrosModal.titulo }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormUsuario modo={ parametrosModal.modo }
                                cerrar={ cerrarModal }
                                registrar={ parametrosModal.agregarUsuario }
                                usuario={ parametrosModal.usuario } />
                </Modal.Body>
                <Modal.Footer>
                        { esError ? <label className="text-danger">{ mensaje }</label> : <label className="text-success">{ mensaje }</label> }
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default TablaUsuarios;