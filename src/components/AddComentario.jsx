import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ComentarioService from "../services/ComentarioService";
import Error from './Error';

const AddComentario = () => {
  const [error, setError] = useState(false);
  const { idUsuario, nombre } = useParams();
  
  const navigate = useNavigate();
  const [comentario, setComentario] = useState({
    id:"",
    contenido: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setComentario({ ...comentario, [e.target.name]: value });
  };


  const guardar = (e) => {
    e.preventDefault();
  
    //Validacion formulario
    if([comentario.contenido].includes('')){
      setError(true);
      return ;  //Termina flujo
    }else{
      setError(false);
    }

    ComentarioService.saveComentarioParaUsuario(idUsuario, comentario)
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
    setComentario({
      id:"",
      contenido: ""
    });
    setError(false);
  };


  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Agregar Comentario de {nombre}</h1>
                {error && <Error mensaje="El campo es obligatorio."/> }
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Comentario
                    </label>
                    <input
                        type="text"
                        name="contenido"
                        value={comentario.contenido}
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

export default AddComentario