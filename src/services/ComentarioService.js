import axios from "axios";

//const COMENTARIO_API_BASE_URL = "http://localhost:8080/api";
const COMENTARIO_API_BASE_URL = "https://backend-virgilio.herokuapp.com/api";

class ComentarioService {

  getAllComentarios(){
    return axios.get(COMENTARIO_API_BASE_URL+"/comentarios");
  }

  getComentariosPorUsuario(id) {
    return axios.get(COMENTARIO_API_BASE_URL+"/usuario/"+id+"/comentarios");
  }

  getComentariosPorUsuarioAndComentario(idUsuario, idComentario) {
    return axios.get(COMENTARIO_API_BASE_URL+"/comentarios/"+idUsuario+"/"+idComentario);
  }

  updateComentario(comentario, id) {
    return axios.put(COMENTARIO_API_BASE_URL+"/comentarios/"+id, comentario);
  }

  saveComentarioParaUsuario(id, comentario){
    return axios.post(COMENTARIO_API_BASE_URL+"/usuario/"+id+"/comentarios", comentario);
  }
  
  deleteComentario(id) {
    return axios.delete(COMENTARIO_API_BASE_URL + "/comentarios/" + id);
  }

}

export default new ComentarioService();