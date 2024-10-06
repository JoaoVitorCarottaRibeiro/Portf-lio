import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import LP from './assets/Components/Pages/LP/Lp.jsx'
import Apresentacao from './assets/Components/Pages/Apresentacao/Apresentacao.jsx'
import Formulario from './assets/Components/Pages/Formulario/Formulario.jsx'
import Projetos from './assets/Components/Pages/Projetos/Projetos.jsx'
import ErrorPage from './assets/Components/Erro 404/erro.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LP />
      },
      {
        path: "/apresentacao",
        element: <Apresentacao />
      },
      {
        path: "/projetos",
        element: <Projetos />
      },
      {
        path: "/formulario",
        element: <Formulario />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
