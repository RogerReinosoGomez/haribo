import React from "react";
// import {ScrollTop } from 'primereact/scrolltop';
// import {ScrollPanel} from 'primereact/scrollpanel';

let Productos = (props) => {

    return(
        <div className="col-12 lg:col-6 d-flex justify-content-center ">
            <div className="card" style= {{ margin:'0px, 0px, 14px', padding:'21px' }}>
                <h4>{props.estado}</h4>
                <p style={{ width:'700px', height:'200px' }}>
                    <p className= 'mb-1'>Orden: { props.NOrden }</p>
                    <p className= 'mb-1'>Fecha: { props.fecha }</p>
                    <p className= 'mb-1'>Descripcion: { props.descripcion }</p>
                    <p className= 'mb-1'>Estado: { props.estado }</p>
                    <p className= 'mb-1'>Materia Prima: { props.materiaPrima }</p>
                </p>
            </div>
        </div>
    )
}
export default Productos;
