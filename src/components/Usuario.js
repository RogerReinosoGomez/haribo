import StatusUsuario from './StatusUsuario';

let Usuario = ({modificarStatus, eliminarUsuario, editarUsuario, ...props}) => {
    const onModificarStatus = (event) => {
        event.preventDefault();
        modificarStatus(props.cedula);
    }
    const onEliminarUsuario = (event) => {
        event.preventDefault();
        eliminarUsuario(props.cedula);
    }
    const onEditarUsuario = (event) => {
        event.preventDefault();
        editarUsuario(props);
    }
    return(
        <tr>
            <th scope="row" class="align-middle">{ props.cedula }</th>
            <td>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-1 me-auto">
                            <div class="fw-bold">{ props.nombre }</div>
                            { props.apellido }
                        </div>
                        <span><StatusUsuario status = { props.status } /></span>
                    </li>
                </ul>
            </td>
            <td class="align-middle">{ props.nacimiento }</td>
            <td class="align-middle">{ props.email }</td>
            <td class="align-middle">{ props.genero }</td>
            <td class="align-middle">{ props.ciudad }</td>
            <td class="align-middle">{ props.telefono }</td>
            <td class="align-middle">
                <div class="ms-1 me-auto">
                    <div>
                        <span className="badge bg-danger" type="button"
                                onClick={ onEliminarUsuario }>Eliminar</span>
                    </div>
                    <div>
                        <span className="badge bg-primary" type="button" onClick={ onModificarStatus }>
                            { props.status ? "Desactivar" : "Activar" }
                        </span>
                    </div>
                    <div>
                        <span className="badge bg-warning" type="button"
                                onClick={ onEditarUsuario }>Editar</span>
                    </div>
                </div>
            </td>
        </tr>
    );
}
export default Usuario;
