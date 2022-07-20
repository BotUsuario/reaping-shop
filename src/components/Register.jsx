import React from 'react'
import '../App.css'

const Register = () => {
  return (
    <>
    <form className="form-signin  container w-75">
      <h1 className="h3 mb-3 font-weight-normal pt-5 ">Register</h1>
      <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>
      
            <div class="mb-3">
              <label for="username">Username</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">@</span>
                </div>
                <input type="text" class="form-control" id="username" placeholder="Username"/>
                <div class="invalid-feedback" >
                  Your username is required.
                </div>
              </div>
            </div>

      <label for="inputEmail">Email</label>
      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
      <label for="inputPassword" className="pt-3">Contraseña</label>
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
      <div className="checkbox mb-3">
        <label className='pt-3'>
          <input type="checkbox" value="remember-me"  /> Acepto condiciones y Politica de la empresa.
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">Registrarse</button>
      <p className="mt-5 mb-3 text-muted">© 2020-2022</p>
    </form> 
    </>
  )
}

export default Register