import ContactInfo from "../components/Gallery/ContactInfo";
import Form from "../components/Form/contacto";
import Head from "next/head";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative bg-white">
      <Head>
        <title>Contactanos</title>
      </Head>
      <div className="w-full mb-10">
          <div className="md:w-full lg:full xs:w-full imagen-contact">
              
          </div>
      </div>
      <div className="w-full mb-5 px-5  mx-auto md:flex lg:flex">
        
        <div className="lg:w-2/3 md:w-1/2 xs:w-full rounded-lg sm:mr-10 md:px-16 sm:mb-16 xs:mb-16 relative h-auto">
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
        <p>
        <div className="w-full  px-10 py-8 mt-5 rounded-2xl border">
              <h1 className="font-bold text-xl">Información de Contacto</h1>
              <div className="flex mt-5">
                <div className="w-4/6 space-y-2">
              
                      {/* seccion de informacion basica */}
                      <Link  href="mailto:rycinmobiliaria1@hotmail.com"
                              className="text-gray-500 hover:text-dorado flex flex-wrap items-center">
                              <FaEnvelope className="mr-3" /> rycinmobiliaria1@hotmail.com
                      </Link>
                        <Link href="tel:573104191840"
                                  className="text-gray-500 hover:text-dorado flex flex-wrap">
                                  <FaMapMarkerAlt className="mr-3" /> Cra 41 # 69D - 51 Local 8
                        </Link>
                        <Link href="tel:573104191840"
                                  className="text-gray-500 hover:text-dorado flex flex-wrap">
                                  <FaPhoneAlt className="mr-3" /> (310) 419 18-40
                        </Link>
                        
                    </div>
                    <div className="w-2/6 flex space-x-4 items-end bg-white justify-end px-5 py-5">
                      {/* seccion de redes sociales */}
                    <Link href="https://es-la.facebook.com/rycinmobiliariaconstructora/"
                              className="text-gray-500 hover:text-dorado">
                              <FaFacebookF /> 
                    </Link>
                    <Link href="https://wa.me/3104191840?text=Quiero un servicio"
                                className="text-gray-500 hover:text-dorado">
                                <FaWhatsapp />
                    </Link>
                    
                    <Link href="https://www.instagram.com/inmobiliariaryc/"
                                className="text-gray-500 hover:text-dorado">
                                <FaInstagram  />
                    </Link>
                </div>
              </div>
              
        </div>
        

        </p>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
