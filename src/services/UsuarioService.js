import axios from "axios";

//const USUARIO_API_BASE_URL = "http://localhost:8080/api/usuarios";
const USUARIO_API_BASE_URL = "https://backend-virgilio.herokuapp.com/api/usuarios";

class UsuarioService {
  saveUsuario(usuario) {
    return axios.post(USUARIO_API_BASE_URL, usuario);
  }

  getUsuarios() {
    return axios.get(USUARIO_API_BASE_URL);
  }

  deleteUsuario(id) {
    return axios.delete(USUARIO_API_BASE_URL + "/" + id);
  }

  getUsuarioById(id) {
    return axios.get(USUARIO_API_BASE_URL + "/" + id);
  }

  updateUsuario(usuario, id) {
    return axios.put(USUARIO_API_BASE_URL + "/" + id, usuario);
  }
}

export default new UsuarioService();