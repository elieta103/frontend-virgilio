import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsuarioService from '../services/UsuarioService';
import Usuario from "./Usuario";

const UsuarioList = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await UsuarioService.getUsuarios();
            if(response.data===''){
              setUsuarios([]);
            }else{
              setUsuarios(response.data);
            }
            
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        };
        fetchData();
      }, []);


      const deleteUsuario = (e, id) => {
        e.preventDefault();
        UsuarioService.deleteUsuario(id).then((res) => {
          if (usuarios) {
            setUsuarios((prevElement) => {
              return prevElement.filter((usuario) => usuario.id !== id);
            });
          }
        });
      };  

  return (
    <div className='container mx-auto'>
        <div className="h-12">
            <button
                onClick={() => navigate("/addUsuario")}
                className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                Agregar Usuario
            </button>
        </div>
        <div className="flex shadow border-b">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Nombre
                        </th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Email
                        </th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                            Acciones
                        </th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody className="bg-white">
                    {usuarios.map((usuario) => (
                        <Usuario
                        usuario={usuario}
                        deleteUsuario={deleteUsuario}
                        key={usuario.id}></Usuario>
                    ))}
                    </tbody>
                )}
            </table>
        </div>

    </div>
  )
}

export default UsuarioList