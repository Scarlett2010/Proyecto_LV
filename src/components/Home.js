import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="p-section">
        <div className="p-background"></div>
        <div className="p-overlay">
          <h1 className="p-title">Aplicaciones distribuidas</h1>
          <p className="p-text">
            Implementación de una Aplicación Distribuida con Contenedores Docker
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <main className="content-section">
        <div className="text-content">
          <h1 className="title">Uso de Docker</h1>
          <br />
          <br />
          <h3>¿Qué es Docker?</h3>
          <p>
            Es una unidad de software liviana y portátil, lo que permite
            encapsular la app y las dependencias.
          </p>
          <br />
          <br />
          <h3>Beneficios de usar un contenedor como Docker</h3>
          <p>
            1. Permite crear y configurar múltiples contenedores en una sola
            línea de comando. <br />
            2. Facilita la implementación y escalabilidad. <br />
            3. Optimiza recursos y permite ejecutar múltiples servicios en el
            mismo servidor.
          </p>
        </div>

        <div className="image-content">
          <Image
            src="/imagenes/docker.png"
            alt="Docker"
            width={300}
            height={300}
          />
        </div>
      </main>
    </>
  );
}
