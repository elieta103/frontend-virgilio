import React from "react";
import { useNavigate } from "react-router-dom";

const Usuario = ({ usuario, deleteUsuario }) => {
  const navigate = useNavigate();

  const editUsuario = (e, id) => {
    e.preventDefault();
    navigate(`/editUsuario/${id}`);
  };
  
  const verComentarios = (e, id, nombre) => {
    e.preventDefault();
    navigate(`/comentariosList/${id}/${nombre}`);
  };
  
  const nuevoComentario = (e, id, nombre) => {
    e.preventDefault();
    navigate(`/addComentario/${id}/${nombre}`);
  };

  return (
    <tr key={usuario.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{usuario.nombre}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{usuario.email}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editUsuario(e, usuario.id)}
          className="text-indigo-600 hover:text-indigo-800 px-6 hover:cursor-pointer">
          Editar
        </a>
        <a
          onClick={(e, id) => deleteUsuario(e, usuario.id)}
          className="text-indigo-600 hover:text-indigo-800 px-6 hover:cursor-pointer">
          Borrar
        </a>
        <a
          onClick={(e, id) => nuevoComentario(e, usuario.id, usuario.nombre)}
          className="text-indigo-600 hover:text-indigo-800 px-6 hover:cursor-pointer">
          Nuevo Comentario
        </a>
        <a
          onClick={(e, id) => verComentarios(e, usuario.id, usuario.nombre)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
          Ver Comentarios
        </a>

      </td>
    </tr>
  );
};

export default Usuario;
