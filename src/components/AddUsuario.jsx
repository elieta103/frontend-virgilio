import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import UsuarioService from '../services/UsuarioService';
import Error from './Error';

const AddUsuario = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    id: "",
    nombre: "",
    email: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUsuario({ ...usuario, [e.target.name]: value });
  };

  const guardar = (e) => {
    e.preventDefault();
    
  //Validacion formulario
  if([usuario.nombre, usuario.email].includes('')){
    setError(true);
    return ;  //Termina flujo
  }else{
    setError(false);
  }

    UsuarioService.saveUsuario(usuario)
      .then((response) => {
        console.log(response);
        navigate("/usuarioList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const limpiar = (e) => {
    e.preventDefault();
    setUsuario({
      id: "",
      nombre: "",
      email: ""
    });
    setError(false);
  };

      

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Agregar usuario</h1>
                {error && <Error mensaje="Todos los campos son obligatorios."/> }
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="nombre"
                        value={usuario.nombre}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={usuario.email}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2">
                    </input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button
                        onClick={guardar}
                        className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
                        Guardar
                    </button>
                    <button
                        onClick={limpiar}
                        className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
                        Limpiar
                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AddUsuario