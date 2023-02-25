import { BrowserRouter, Routes, Route} from "react-router-dom"
import AddComentario from "./components/AddComentario"
import AddUsuario from "./components/AddUsuario"
import ComentariosList from "./components/ComentariosList"
import Navbar from "./components/Navbar"
import UpdateComentario from "./components/UpdateComentario"
import UpdateUsuario from "./components/UpdateUsuario"
import UsuarioList from "./components/UsuarioList"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<UsuarioList/>}></Route>
          <Route path="/" element={<UsuarioList/>}></Route>
          <Route path="/usuarioList" element={<UsuarioList/>}></Route>
          <Route path="/addUsuario" element={<AddUsuario/>}></Route>
          <Route path="/editUsuario/:id" element={<UpdateUsuario/>}></Route>
          <Route path="/comentariosList/:idUsuario/:nombre" element={<ComentariosList/>}></Route>
          <Route path="/addComentario/:idUsuario/:nombre" element={<AddComentario/>}></Route>
          <Route path="/editComentario/:idUsuario/:idComentario" element={<UpdateComentario/>}></Route>
          
        </Routes>        
      </BrowserRouter>
    </>
  )
}

export default App
