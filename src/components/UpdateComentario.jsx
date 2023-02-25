import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import ComentarioService from '../services/ComentarioService';
import Error from './Error';

const UpdateComentario = () => {
  const [error, setError] = useState(false);
  const { idUsuario, idComentario } = useParams();
  const navigate = useNavigate();
  const [comentario, setComentario] = useState({
    id: "",
    contenido: ""
  });


  const handleChange = (e) => {
    const value = e.target.value;
    setComentario({ ...comentario, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ComentarioService.getComentariosPorUsuarioAndComentario(idUsuario, idComentario);
        console.log(response.data);
        setComentario(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateComentario = (e) => {
    e.preventDefault();

    //Validacion formulario
    if([comentario.contenido].includes('')){
      setError(true);
      return ;  //Termina flujo
    }else{
      setError(false);
    }

    ComentarioService.updateComentario(comentario, idComentario)
      .then((response) => {
        navigate("/usuarioList");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Editar Comentario </h1>
        </div>
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
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updateComentario}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Editar
          </button>
          <button
            onClick={() => navigate("/usuarioList")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Cancelar
          </button>
        </div>
      </div>
    </div>

  )
}

export default UpdateComentario