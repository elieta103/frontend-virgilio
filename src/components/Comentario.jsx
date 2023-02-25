import React from "react";
import { useNavigate } from "react-router-dom";

const Comentario = ({idUsuario, nombre, comentario, todos, deleteComentario }) => {
  const navigate = useNavigate();
  const editComentario = (e, id) => {
    console.log('Editar IdComentario : '+id+' idUsuario :'+idUsuario);
    e.preventDefault();
    navigate(`/editComentario/${idUsuario}/${id}`);
  };

  nombre=(todos)?comentario.nombre:nombre;


  return (
    <tr key={comentario.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{nombre}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{comentario.contenido}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editComentario(e, comentario.id)}
          className="text-indigo-600 hover:text-indigo-800 px-6 hover:cursor-pointer">
          Editar
        </a>
        <a
          onClick={(e, id) => deleteComentario(e, comentario.id)}
          className="text-indigo-600 hover:text-indigo-800 px-6 hover:cursor-pointer">
          Borrar
        </a>

      </td>
    </tr>
  );
};

export default Comentario;
