import React from 'react'

const Login = () => {
  return (
    <form className="form-signin  container w-75">
      
    <h1 className="h3 mb-3 font-weight-normal pt-5 ">Login</h1>
    <label for="inputEmail" className="sr-only">Email</label>
    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
    <label for="inputPassword" className="pt-3">Contraseña</label>
    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
    <div className='pt-3'>
    <button className="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
    </div>
    <p className="mt-5 mb-3 text-muted">© 2020-2022</p>
  </form> 
  )
}

export default Login