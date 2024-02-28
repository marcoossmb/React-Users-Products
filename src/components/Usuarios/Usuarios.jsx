import React from 'react'
import { useUsuarios } from '../../services/hooks/useUsuarios'
import CardUser from './CardUser'
import { Outlet } from 'react-router-dom'

const Usuarios = () => {

  const users = useUsuarios()

  return (
    <div className='container d-flex justify-content-around'>
      <div className='col-2'>
        {
          users ? users.map(user => (
            <CardUser key={user.id} user={user} />
          )) : <p>Loading...</p>
        }
      </div>
      <div className='ms-5 col-8'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Usuarios