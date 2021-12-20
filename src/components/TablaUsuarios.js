import Usuario from './Usuario';
import NavBar from './NavBar';
import FormUsuario from './FormUsuario'
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

let TablaUsuarios = (props) => {
    const usuarios = props.usuarios;
    const parametros = {
                            titulo: "",
                            mostrar: false,
                            modo: "nuevo",
                            usuario: null,
                            agregarUsuario: null
                        };

    const [ parametrosModal, setParametrosModal ] = useState(parametros);

    const cerrarModal = () => {
        const nuevoParametroModal = { ...parametrosModal };
        nuevoParametroModal.mostrar = false;
        setParametrosModal(nuevoParametroModal);
    }
    const registrarUsuario = () => {
        const nuevoParametroModal = { ...parametrosModal };
        nuevoParametroModal.modo = "nuevo";
        nuevoParametroModal.mostrar = true;
        nuevoParametroModal.titulo = "Registrar Usuario";
        nuevoParametroModal.agregarUsuario = props.agregarUsuario;
        nuevoParametroModal.usuario = null;
        setParametrosModal(nuevoParametroModal);
    }

    const editarUsuario = (parametro) => {
        const nuevoParametroModal = { ...parametrosModal };
        nuevoParametroModal.modo = "editar";
        nuevoParametroModal.mostrar = true;
        nuevoParametroModal.titulo = "Editar Usuario";
        nuevoParametroModal.agregarUsuario = props.editarUsuario;
        nuevoParametroModal.usuario = parametro;
        setParametrosModal(nuevoParametroModal);
    }

    const listaUsuarios = usuarios.map((usuario) => <Usuario key = {usuario.cedula}
                                                modificarStatus = { props.modificarStatus }
                                                eliminarUsuario = { props.eliminarUsuario }
                                                editarUsuario = { editarUsuario }
                                                { ...usuario }/>);

    return(
        <div className="container-fluid px-5" >
            <NavBar />
            <div className="card mt-5 mx-5">
                <div className="card-body">
                    <button id="btnRegistrarNov" className="btn btn-sm btn-primary float-end"
                        onClick={ registrarUsuario }>Registrar Usuario</button>
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
                        { listaUsuarios }
                    </tbody>
                </table>
            </div>
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
            </Modal>
        </div>
    );
}

export default TablaUsuarios;