import axios from 'axios';
import config from '../../config/config.json';

const path = 'usuarios';

const getToken = () => {
    const tokenData = JSON.parse(localStorage.getItem("tokenAcceso"));
    return tokenData.token;
}

const ObtenerListado = async (page, limit, callback) => {
    const url = `${ config.PROTOCOL }://${ config.HOST }/${ path }/usuariosregistrados?page=${page}&limit=${limit}`;
    return await axios.get(url, { headers: { authorization: `Bearer ${ getToken() }` } })
                        .then(function (res) {
                            callback(res.data);
                        })
                        .catch(function (error) {
                           callback(error);
                           console.log(error);
                        });
}

const CrearUsuario = async (data) => {
    const url = `${ config.PROTOCOL }://${ config.HOST }/${ path }/registrar`;
    try {
        const response = await axios.post(url, data, { headers: { authorization: `Bearer ${ getToken() }` } });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const EstadoUsuario = async (cedula) => {
    const url = `${ config.PROTOCOL }://${ config.HOST }/${ path }/estado`;
    try {
        const response = await axios.put(url, { cedula }, { headers: { authorization: `Bearer ${ getToken() }` } });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const BorrarUsuario = async (cedula) => {
    const url = `${ config.PROTOCOL }://${ config.HOST }/${ path }/eliminar`;
    try {
        console.log(cedula);
        const response = await axios.post(url, { cedula }, { headers: { authorization: `Bearer ${ getToken() }` } });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const ActualizarUsuario = async (usuario) => {
    const url = `${ config.PROTOCOL }://${ config.HOST }/${ path }/edit`;
    try {
        const response = await axios.put(url, usuario, { headers: { authorization: `Bearer ${ getToken() }` } });
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export {
    ObtenerListado,
    CrearUsuario,
    EstadoUsuario,
    BorrarUsuario,
    ActualizarUsuario
}