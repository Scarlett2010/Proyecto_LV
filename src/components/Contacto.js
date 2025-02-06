import Link from "next/link";
import Image from "next/image";

export default function Contacto() {
  return (
    <>
      <section className="f-section">
        <div className="f-overlay">
          <h1 className="f-title">Formulario de Contacto</h1>
          <p className="f-text">Estamos aquí para ayudarte. Contáctanos.</p>
        </div>
      </section>
      <main className="content">
        <div className="form-and-image-container">
          <div className="form-container">
            <form className="contact-form">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" required />

              <label htmlFor="apellido">Apellido</label>
              <input type="text" id="apellido" name="apellido" required />

              <label htmlFor="correo">Correo</label>
              <input type="email" id="correo" name="correo" required />

              <label htmlFor="comentario">Comentario</label>
              <textarea
                id="comentario"
                name="comentario"
                rows={4}
                required
              ></textarea>

              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className="image">
            <Image
              src="/imagenes/formulario.jpeg"
              alt="Formulario de contacto"
              width={300}
              height={300}
            />
          </div>
        </div>
      </main>
    </>
  );
}
