/* eslint-disable no-unused-vars */
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import Usuarios from './components/Usuarios/Usuarios'
import UsuariosDetail from './components/Usuarios/UsuariosDetail'
import Productos from './components/Productos/Productos'
import ProductosDetail from './components/Productos/ProductosDetail'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="usuarios" element={<Usuarios />}>
          <Route path=":id" element={<UsuariosDetail />}></Route>
        </Route>
        <Route path="productos" element={<Productos />}></Route>
        <Route path="productos/:id" element={<ProductosDetail />}></Route>
      </Route>
        <Route path='*' element={<Navigate to='/'/>} />
    </Routes>
  </BrowserRouter>
)
