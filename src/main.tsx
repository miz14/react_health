import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loyout from './components/Loyout/loyout.tsx'


// function Routs() {
//   return(
//     <Routes>
//       <Route path='/' element={<Loyout/>}>

//       </Route>
//     </Routes>
//   )
// }


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Loyout/>
  </React.StrictMode>,
)
