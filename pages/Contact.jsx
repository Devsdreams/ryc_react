import ContactInfo from "../components/Gallery/ContactInfo";
import Form from "../components/Form/contacto";
import Head from "next/head";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative bg-white">
      <Head>
        <title>Contactanos</title>
      </Head>
      <div className="container mb-10">
          <div className="md:w-full lg:full xs:w-full imagen-contact">
              
          </div>
      </div>
      <div className="container mb-5 px-5  mx-auto md:flex lg:flex">
        
        <div className="lg:w-2/3 md:w-1/2 xs:w-6/6 rounded-lg sm:mr-10 md:px-16 sm:mb-16 xs:mb-16 relative h-auto">
          <img
              src="/images/ventana.jpg"
              className="relative w-6/6 inset-0"
              alt="ventana del mundo barranquilla"
              style={{height:"50%", width:"85%"}}
          />
          <h1 className="text-xl font-bold mt-5">Beneficios de Nuestros Proyectos </h1>
          <p className="text-base font-normal mb-5 mt-10">En R&C Inmobiliaria, cada proyecto está diseñado pensando en tu bienestar y comodidad. 
                Nuestros inmuebles cuentan con ubicaciones estratégicas, excelente infraestructura y todas las comodidades 
                necesarias para mejorar tu calidad de vida. Además, ofrecemos asesoramiento personalizado para ayudarte a 
                tomar la mejor decisión de inversión. 

          </p>
          <p className="text-base font-normal">Estamos aquí para ayudarte. Si tienes alguna pregunta o necesitas más información sobre nuestros servicios y propiedades, 
        no dudes en contactarnos. Nuestro equipo de atención al cliente está disponible para asistirte en todo lo que necesites. </p>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
