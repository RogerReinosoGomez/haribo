// import React from 'react';
import React, {useState } from 'react';
import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox';
import NavBar from './NavBar'
import Productos from './Productos'
// import ProductosDespachados from './ProductosDespachados';
// import ProductosDisponibles from './ProductosDisponibles'
//import './App.css';

export let ModuloProduccion = (props) => {

  const [isChecked, setIsChecked] = useState([]);
  const onCheckboxChange = (e) => {
      let selectedValue = [...isChecked];
      if (e.checked)
          selectedValue.push(e.value);
      else
          selectedValue.splice(selectedValue.indexOf(e.value), 1);
      setIsChecked(selectedValue);
  }

  const despachar = props.despachar;
  const pedidosPorDespachar = despachar.map(p =>
      <Productos
        NOrden= {p.NOrden}
        descripcion= {p.descripcion}
        estado = {p.estado}
        fecha = {p.fecha}
        />);

  const despachado = props.despachado;
  const pedidosDespachados = despachado.map(p =>
    <Productos
      NOrden= {p.NOrden}
      descripcion= {p.descripcion}
      estado = {p.estado}
      fecha = {p.fecha}
    />);

  const disponibles = props.disponibles;
  const pedidosDisponibles = disponibles.map(p =>
    <Productos
      NOrden= {p.NOrden}
      descripcion= {p.descripcion}
      estado = {p.estado}
      materiaPrima = {p.materiaPrima}
      fecha = {p.fecha}
    />);

  return (
    <div>
      <NavBar /> 
      <div className= 'container' >
          <div className="card" style= {{margin: '0px, 0px, 21px', padding: '21px'}}>
          <h5 className= "d-flex justify-content-center" >Generar Reportes</h5>
          <div className="grid">
              <div className="col-12" style= {{ padding: '7px'}}>
                  <div className="card " style= {{margin: '0px, 0px, 14px', padding: '21px'}}>
                      <div className="grid">
                          <div className="col-4 md:col-4 " style= {{ padding: '7px'}} >
                              <div className="field-checkbox">
                                  <Checkbox inputId="checkOption1" name="despachar" value="Por despachar" checked={isChecked.indexOf('Por despachar') !== -1} onChange={onCheckboxChange} />
                                  <label htmlFor="checkOption1">Pedidos por despachar</label>
                              </div>
                          </div>
                          <div className="col-4 md:col-4 " style= {{ padding: '7px'}}>
                              <div className="field-checkbox">
                                  <Checkbox inputId="checkOption2" name="despachado" value="Despachado" checked={isChecked.indexOf('Despachado') !== -1} onChange={onCheckboxChange} />
                                  <label htmlFor="checkOption2">Pedidos despachados</label>
                              </div>
                          </div>
                          <div className="col-4 md:col-4 " style= {{ padding: '7px'}}>
                              <div className="field-checkbox">
                                  <Checkbox inputId="checkOption3" name="disponibles" value="Disponible" checked={isChecked.indexOf('Disponible') !== -1} onChange={onCheckboxChange} />
                                  <label htmlFor="checkOption3">Productos disponibles</label>
                              </div>
                          </div>
                      <Button label="Generar" className="p-button-info mr-2 mb-2" />
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div className= "list-group m-5">
              { pedidosPorDespachar }
              { pedidosDespachados  }
              { pedidosDisponibles  }
          </div>
      </div>
    </div>
  );
}
export default ModuloProduccion;
