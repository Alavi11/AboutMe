import { Route, Routes } from "react-router-dom"

import Header from "./component/header/Header"
import Main from "./component/main/Main";
import Skills from "./component/skills/Skills";

function App() {
  return <>
      <Header/>
      <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/project" element={<Skills/>} />
      </Routes>
  </>
}

export default App;
