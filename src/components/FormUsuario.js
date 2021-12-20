import { useState } from 'react';

function FormUsuario(props) {
    const nuevoUsuario = {
        cedula: 0,
        nombre: "",
        apellido: "",
        email: "",
        genero: "",
        ciudad: "",
        telefono: "",
        password: "",
        status: true,
        nacimiento: ""
    };

    const inicializarUsuario = (props.modo!=="nuevo" ? {...props.usuario} : nuevoUsuario);
    const [ usuario , setUsuario ] = useState(inicializarUsuario);

    const edicionUsuario = (evento) => {
        const usuarioSeleccionado = {...usuario};
        usuarioSeleccionado[evento.target.name] = evento.target.value;
        setUsuario(usuarioSeleccionado);
    }
    const onFormSubmit = (evento) => {
        evento.preventDefault();
        props.registrar(usuario);
        setUsuario(nuevoUsuario);
    }

    return (
        <form class="mx-5" onSubmit={ onFormSubmit }>
            <div className="form-group mb-2">
                <label className="control-label" htmlFor="Id" ><i>Cedula</i></label>
                <input className="form-control" type="number"
                       name="cedula" value={usuario.cedula} onChange={ edicionUsuario } />
            </div>
            <div className="form-group mb-2">
                <label className="control-label"><i>Nombre</i></label>
                <input className="form-control" type="text"
                       name="nombre" value={usuario.nombre} onChange={ edicionUsuario }/>
            </div>
            <div className="form-group mb-2">
                <label className="control-label"><i>Apellido</i></label>
                <input className="form-control" type="text"
                       name="apellido" value={usuario.apellido} onChange={ edicionUsuario }/>
            </div>
            <div className="form-group mb-2">
                <label className="control-label"><i>Email</i></label>
                <input className="form-control" type="text"
                       name="email" value={usuario.email} onChange={ edicionUsuario }/>
            </div>
            <div className="form-group mb-2">
                <label className="control-label"><i>Genero</i></label>
                <select className="form-control"
                       name="genero" onChange={ edicionUsuario }>
                    <option>Seleccionar...</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
            </div>
            <div className="form-group mb-2">
                <label className="control-label"><i>Ciudad</i></label>
                <input className="form-control" type="text"
                       name="ciudad" value={usuario.ciudad} onChange={ edicionUsuario }/>
            </div>
            <div className="form-group mb-2">
                <label className="control-label"><i>Telefono</i></label>
                <input className="form-control" type="number"
                       name="telefono" value={usuario.telefono} onChange={ edicionUsuario }/>
            </div>
            <div className="form-group mb-2">
                <label className="control-label"><i>Password</i></label>
                <input className="form-control" type="password"
                       name="pasword" onChange={ edicionUsuario }/>
            </div>
            <div className="form-group mb-2">
                <label className="control-label"><i>Status</i></label>
                <select className="form-control"
                       name="status" onChange={ edicionUsuario }>
                    <option>Seleccionar...</option>
                    <option value="true">Activo</option>
                    <option value="false">Inactivo</option>
                </select>
            </div>
            <div className="form-group mb-2">
                <label className="control-label"><i>Nacimiento</i></label>
                <input className="form-control" type="date"
                       name="nacimiento" value={usuario.nacimiento} onChange={ edicionUsuario }/>
            </div>
            <div className="form-group">
                <button className="btn btn-sm btn-primary m-2" type="submit">Guardar</button>
                <button className="btn btn-sm btn-danger" type="button" data-dismiss="modal">Cancelar</button>
            </div>
        </form>
    );
}

export default FormUsuario;