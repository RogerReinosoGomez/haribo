let StatusUsuario = (props) => {
    return (
        props.status?
            <span className="badge rounded-pill bg-primary">Activo</span>
            :<span className="badge rounded-pill bg-secondary">Inactivo</span>
    );
}

export default StatusUsuario;
