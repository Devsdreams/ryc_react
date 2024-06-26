import Link from "next/link";
const ContactInfo = (props) => (
  <div className="lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-16  relative h-auto">
    <img
      src="/images/partials/Banners/BANNER HOME 1.png"
      className="relative w-6/6 inset-0"
      alt="ventana del mundo barranquilla"
      style={{height:"70%", width:"70%"}}
    />
      <h1 className="text-xl font-bold mt-5">Beneficios de Nuestros Proyectos </h1>
      <p className="text-base font-normal mb-5">En R&C Inmobiliaria, cada proyecto está diseñado pensando en tu bienestar y comodidad. 
        Nuestros inmuebles cuentan con ubicaciones estratégicas, excelente infraestructura y todas las comodidades 
        necesarias para mejorar tu calidad de vida. Además, ofrecemos asesoramiento personalizado para ayudarte a 
        tomar la mejor decisión de inversión. 

</p>
<p className="text-base font-normal">Estamos aquí para ayudarte. Si tienes alguna pregunta o necesitas más información sobre nuestros servicios y propiedades, 
no dudes en contactarnos. Nuestro equipo de atención al cliente está disponible para asistirte en todo lo que necesites. </p>
  </div>
    
  
);

export default ContactInfo;
