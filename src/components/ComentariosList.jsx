import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import ComentarioService from '../services/ComentarioService';
import Comentario from './Comentario';

const ComentariosList = () => {
  const { idUsuario, nombre } = useParams();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState(false);
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ComentarioService.getComentariosPorUsuario(idUsuario);
        console.log(response);
        setComentarios(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteComentario = (e, id) => {
    console.log('Borrar IdComentario : '+ id+' IdUsuario :'+idUsuario);
    e.preventDefault();
    ComentarioService.deleteComentario(id).then((res) => {
      if (comentarios) {
        setComentarios((prevElement) => {
          return prevElement.filter((comentario) => comentario.id !== id);
        });
      }
    });
  };  

  const todosComentarios = ()=>{
    const fetchData = async () => {
      setLoading(true);
      setComentarios([]);
      try {
        const response = await ComentarioService.getAllComentarios();
        setComentarios(response.data);
        setTodos(true);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  };


  return (
    <div className='container mx-auto'>
         <div className="h-12">
            <button
                onClick={() => todosComentarios()}
                className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                Todos los comentarios
            </button>
            <button
                onClick={() => navigate("/usuarioList")}
                className="rounded bg-slate-400 text-white px-10 py-2 font-semibold">
                Regresar
            </button>
        </div>

        <div className="flex shadow border-b">
        <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Usuario
                        </th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Comentario
                        </th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Acciones
                        </th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody className="bg-white">
                    {comentarios.map((comentario) => (
                        <Comentario
                        idUsuario={idUsuario}
                        nombre={nombre}
                        comentario={comentario}
                        todos={todos}
                        deleteComentario={deleteComentario}
                        key={comentario.id}></Comentario>
                    ))}
                    </tbody>
                )}
            </table>
        </div>
    </div>
  )
}

export default ComentariosList