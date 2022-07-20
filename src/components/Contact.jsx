import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="mb-4 container">

<h2 className="h1-responsive font-weight-bold text-center my-4">Contacto</h2>
<p className="text-center w-responsive mx-auto mb-5">¿Tiene usted alguna pregunta? Por favor, no dude en contactarnos directamente. Nuestro equipo le responderá dentro de
     Cuestión de horas para ayudarte.</p>

<div className="row">

    <div className="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

            <div className="row">

                <div className="col-md-6">
                    <div className="md-form mb-0">
                    <label for="name" className="">Nombre</label>
                        
                        <input type="text" id="name" name="name" className="form-control" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="md-form mb-0">
                    <label for="email" className="">Email</label>

                        <input type="text" id="email" name="email" className="form-control" />
                    </div>
                </div>

            </div>
            <div className="row pt-3">
                <div className="col-md-12">
                    <div className="md-form mb-0">
                    <label for="subject" className="">Tema</label>
                        <input type="text" id="subject" name="subject" className="form-control" />
                    </div>
                </div>
            </div>

            <div className="row pt-3">

                <div className="col-md-12">

                    <div className="md-form">
                    <label for="message">Tu mensaje</label>

                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                    </div>

                </div>
            </div>

        </form>

        <div className="text-center text-md-left pt-3">
            <a className="btn btn-primary w-100">Enviar</a>
        </div>
        <div className="status"></div>
    </div>

    <div className="col-md-3 text-center">
        <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p>San Francisco, CA 94126, USA</p>
            </li>

            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
            </li>

            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@gmail.com</p>
            </li>
        </ul>
    </div>

</div>

</section>
    </>
  )
}

export default Contact