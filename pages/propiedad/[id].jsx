import { baseAPP, baseUrl, fetchApi } from "../../utils/fetchApi";
import parse from "html-react-parser";
import { BsXDiamondFill, BsXDiamond, BsFillEnvelopeFill } from "react-icons/bs";
import { FaFacebook, FaFacebookMessenger, FaLinkedin, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Characteristics from "../../components/characteristcs";
import dynamic from "next/dynamic";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import styles from '../../styles/StylePageItem.module.css';
import PdfToDownload from "@/components/pdf/PdfToDownload";
// funciones ---
const Carousel = dynamic(() => import('../../components/carrucel'), {
   loading: () => <div className="mb-1 w-full rounded-2xl h-72  bg-dorado-ph"></div>,
   ssr: false,
});
const ChangeView = dynamic(() => import('../../components/map'), {
   ssr: false,
});
// precargado de la clases (para ver o ocultar)------------------
function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}
// fin del cargado ----------------------------------------------
// contendio de la vista -----------------------------------------
const DetailProperty = ({ property }) => {
   // variables
   const [open, setOpen] = useState(true)
   const [username, setUsernamen] = useState('')
   const handleDragStart = (e) => e.preventDefault();

// Recorrer Galeria por item -----------------------
   const filterGalerie = () => {
      let newGalerie = [];
      Object.entries(property.galleries[0]).map((a) => {
         a[1].url_original != undefined
            ? newGalerie.push(
               <img
                  alt={`imagen-inmueble-${a[1].id}`}
                  className="w-96 cursor-pointer pl-0.5"
                  src={a[1].url_original}
                  onDragStart={handleDragStart}
                  role="presentation"
               />
            )
            : null;
      });
      return newGalerie;
   };
   // end galeriam ---------------------------------
// Funcion enviar formulario al api de wasi --------
   const submitContact = async (event) => {
      event.preventDefault();
      const res = await fetch('/api/newUser', {
         body: JSON.stringify({
            name: event.target.name.value,
            mail: event.target.mail.value,
            tel: event.target.tel.value,
            mensage: event.target.mensage.value,
            property: property.id_property,
         }),
         headers: {
            'Content-Type': 'application/json',
         },
         method: 'POST',
      });
      const result = await res.json();
      if (result['msg'].status === "success") {
         setUsernamen(`${event.target.name.value}.`)
         setOpen(false)
      }
   };
// end form -------------------------------------------
// ReCAPTCHA ------------------------------------------
const recaptchaRef = React.createRef();
   const onReCAPTCHAChange = async (captchaCode) => {
      if (!captchaCode) {
         return;
      }
      recaptchaRef.current.reset();
   }
// end ReCAPTCHA--------------------------------------
   return (
      
      <div className="bg-white">
         <div className="">
            {/* Image gallery */}
            <Carousel item={filterGalerie()} />
            {/* property info */}
            <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-4 lg:pb-24">
               {/* columna */}
               <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-5">
                     {property.title}
                  </h1>
                  <div className="grid  md:grid-cols-2 gap-4 mb-5">
                        <div className="text-4xl">
                           {/* Precio de (renta o venta) dependiendo */}
                           {property.rent_price > 0 ? 
                              <>
                                 <span className="text-base text-neutral-600">Precio de renta</span>
                                 <p className="font-black text-gray-500 uppercase mr-8">{property.rent_price_label}<span  className="text-[18px] capitalice text-gray-500">/Mes</span></p>
                              </>
                           : property.sale_price > 0 ?
                              <>
                                 <span className={styles.title_text_price + " text-neutral-600"}>Precio de venta</span>
                                 <p className="font-black text-gray-500 uppercase">{property.sale_price_label} <span className={styles.item_text+ " text-neutral-600 text-[16px]"}>COP</span> </p>
                              </>
                           : null}
                        </div>
                        {/* Link de descarga del PDF */}
                        <PdfToDownload property={property} ></PdfToDownload>
                  </div>
                  <div className={styles.pdding_left + " bg-white"}>
                  <h4 className={styles.text_font_size_detalle}>Detalles del inmueble</h4>
                  </div>
                  <div className="bg-white relative grid gap-3  px-5 py-6 sm:gap-6 sm:p-8 lg:grid-cols-3">
                     {/* Caracteristicas  del producto*/}
                     <Characteristics content={property.country_label} imagesrc={'/images/partials/LogoSite/Logo_color.png'} />
                     <Characteristics content={property.city_label} imagesrc={'/images/partials/LogoSite/Logo_color.png'} />
                     <Characteristics content={property.zone_label} imagesrc={'/images/partials/LogoSite/Logo_color.png'} />
                     <Characteristics content={property.availability_label} imagesrc={'/images/partials/LogoSite/Logo_color.png'} />
                     {property.maintenance_fee != 0 ? <Characteristics content={`${property.maintenance_fee} Administración`} imagesrc={'/images/partials/LogoSite/Logo_color.png'} /> : false}
                     {property.built_area != 0 ? <Characteristics content={`${property.built_area} m² Área Construida`} imagesrc={'/images/partials/LogoSite/Logo_color.png'} /> : false}
                     {property.bathrooms != 0 ? <Characteristics content={`${property.bathrooms} Baños`} imagesrc={'/images/partials/LogoSite/Logo_color.png'} /> : null}
                     {property.bedrooms != 0 ? <Characteristics content={`${property.bedrooms} Habitaciones`} imagesrc={'/images/partials/LogoSite/Logo_color.png'} /> : null}
                     {property.garages != 0 ? <Characteristics content={`${property.garages} Garages`} imagesrc={'/images/partials/LogoSite/Logo_color.png'} /> : null}
                     {property.floor != 0 ? <Characteristics content={`${property.floor} Piso`} imagesrc={'/images/partials/LogoSite/Logo_color.png'} /> : null}
                     {property.floor != 0 ? <Characteristics content={`Año ${property.building_date}`} imagesrc={'/images/partials/LogoSite/Logo_color.png'} /> : null}
                     <Characteristics content={`Ref. ${property.id_property}`} imagesrc={'/images/partials/LogoSite/Logo_color.png'} />
                  </div>
               </div>
               {/* columna  */}
               <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <h1 className="text-left my-6 text-md font-semibold tracking-tight text-gray-900 sm:text-lg">
                     Compartir con:
                  </h1>
                  <div className={styles.div_container}>
                  {property.rent_price > 0? 
                     <>
                        <div className={styles.item}>
                              <Link href={`https://www.facebook.com/sharer.php?t=${property.title} - ${property.rent_price_label} COP&u=${process.env.APP_URL+'propiedad/'+property.id_property}`} target="_blank">
                                 <FaFacebook /> 
                              </Link>
                        </div>
                        <div className={styles.item}>
                              <Link href={`https://twitter.com/intent/tweet?text=${property.title} - ${property.sale_price_label} COP&url=${process.env.APP_URL+'propiedad/'+property.id_property}`} target="_blank">
                                 <FaTwitter /> 
                              </Link>
                        </div>
                        <div className={styles.item}>
                              <Link href={`https://web.whatsapp.com/send?text=${process.env.APP_URL+'propiedad/'+property.id_property}`} target="_blank">
                                 <FaWhatsapp /> 
                              </Link>
                        </div>
                        <div className={styles.item}>
                              <Link href={`https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Ftitle%3D${property.title} - ${property.sale_price_label} COP%26url%3D${process.env.APP_URL+'propiedad/'+property.id_property}`} target="_blank">
                                 <FaLinkedin /> 
                              </Link>
                        </div>
                        <div className={styles.item}>
                              <Link href={`https://www.facebook.com/dialog/send?link=${process.env.APP_URL+'propiedad/'+property.id_property}&app_id=291494419107518&redirect_uri=https://www.sharethis.com`} target="_blank">
                                 <FaFacebookMessenger /> 
                              </Link>
                        </div>
                    </>
                     : property.sale_price > 0 ?
                     <>
                        <div className={styles.item}>
                           <Link href={`https://www.facebook.com/sharer.php?t=${property.title} - ${property.sale_price_label} COP&u=${process.env.APP_URL+'propiedad/'+property.id_property}`} target="_blank">
                              <FaFacebook /> 
                           </Link>
                        </div>
                        <div className={styles.item}>
                        <Link href={`https://twitter.com/intent/tweet?text=${property.title} - ${property.sale_price_label} COP&url=${process.env.APP_URL+'propiedad/'+property.id_property}`} target="_blank">
                           <FaTwitter /> 
                        </Link>
                        </div>
                        <div className={styles.item}>
                              <Link href={'https://web.whatsapp.com/send?text='+process.env.APP_URL+'propiedad/'+property.id_property} target="_blank">
                                 <FaWhatsapp /> 
                              </Link>
                        </div>
                        <div className={styles.item}>
                              <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.APP_URL+'propiedad/'+property.id_property}`} target="_blank">
                                 <FaLinkedin /> 
                              </Link>
                        </div>
                        <div className={styles.item}>
                              <Link href={`https://www.facebook.com/dialog/send?link=${process.env.APP_URL+'propiedad/'+property.id_property}&app_id=291494419107518&redirect_uri=https://www.sharethis.com`} target="_blank">
                                 <FaFacebookMessenger /> 
                              </Link>
                        </div>
                     </>
                     :null}
                  </div>
                  <br />
                     <h1 className="text-left my-6 text-2xl font-semibold tracking-tight text-gray-900 sm:text-lg">
                     Contactanos:
                  </h1>
                  <Link
                     className="group flex items-center justify-between rounded-lg  px-5 py-0 text-dorado transition-colors  hover:bg-gradient-to-r hover:from-dorado hover:via-dorado-super-light hover:to-dorado  active:bg-dorado"
                     href="tel:3104191840"
                  >
                     <span className="flex font-medium transition-colors group-hover:text-black">
                        <FaPhoneAlt className={"mr-4 mt-1 "+ styles.color_red } /> (310) 419 18-40
                     </span>
                     <span className={"ml-4 flex-shrink-0 border  rounded-full  bg-white p-2 group-active:border-dorado " +styles.color_red}>
                        <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                     </span>
                  </Link>
                  <Link className="mt-4 group flex items-center justify-between rounded-lg  px-5  text-dorado transition-colors  hover:bg-gradient-to-r hover:from-dorado hover:via-dorado-super-light hover:to-dorado active:bg-dorado"  href="mailto:luxury@rossanaulloque.com">
                     <span className="flex font-medium transition-colors group-hover:text-black">
                        <BsFillEnvelopeFill className={"mr-4 mt-1 "+ styles.color_red} /> rycinmobiliaria1@hotmail.com
                     </span>
                     <span className={"ml-4 flex-shrink-0 rounded-full border border-dorado bg-white p-2 group-active:border-dorado " +styles.color_red}>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                     </span>
                  </Link>
                  <div className={classNames(open ? "visible border rounded-md p-5 mt-5 border-[#1D293E]" : "hidden", "")}>
                     <h1 className=" text-lg font-semibold tracking-tight text-gray-900 sm:text-lg ">
                        ¿Prefieres que te contactemos?
                     </h1>
                     <p className="text-md mt-2">Aquí llena la informacvión correspondiente para enviarte nuestros servicios</p>
                     <form className="flex flex-col space-y-4" onSubmit={submitContact}>
                        <ReCAPTCHA  ref={recaptchaRef} size="invisible" sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={onReCAPTCHAChange}/>
                        <input id="name" name="name" type="text" placeholder="Tu Nombre (*)" className="form-input text-black outline-0 px-3 py-2 border-b border-b-gray-300" required />
                        <input id="mail" name="mail" type="email" placeholder="Correo electronico*" className="form-input px-3 py-2 text-black outline-0 border-b border-b-gray-300" required />
                        <input id="tel" name="tel" type="tel" placeholder="Celular*" className="form-input px-3 py-2 text-black outline-0 border-b border-b-gray-300" required />
                        <textarea id="mensage" name="mensage" rows="4" placeholder="Mensaje" className="form-input px-3 py-2 text-black outline-0 border-b border-b-gray-300" />
                        <p>Al enviar tus datos <Link href={'/Docs/DataTreatment'} className="text-sm my-2 underline">aceptas recibir información sobre ofertas inmobiliarias</Link></p>
                        <button type="submit" className="px-4 py-2 font-normal text-white bg-[#1D293E] rounded-md">
                           Enviar mensaje
                        </button>
                     </form>
                  </div>
                  <div className={classNames(open ? "hidden" : "visible","")}>
                     <div className="flex flex-col items-start text-left mt-16">
                        <span className="mb-4 text-xs font-bold tracking-widest text-dorado uppercase">
                           Mensaje enviado correctamente </span>
                        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-3xl lg:text-4xl">
                           {username ? username : null} Gracias por confiar en nosotros</h1>
                        <p className="text-base leading-relaxed text-left text-gray-500">
                           Nos pondremos en contacto con usted lo antes posible.</p>
                     </div>
                  </div>
                  {/* <FormProperty /> */}
               </div>
               {/* Options */}
               <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                  {/* Description and details */}
                  <div className="">
                     <div className="space-y-4">
                        {property.features.internal.length > 0 ? (
                           <details className="group [&_summary::-webkit-details-marker]:hidden" open >
                              <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                                 <h2 className="font-medium text-gray-900">
                                    Características internas
                                 </h2>
                                 <svg className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor">
                                    <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                 </svg>
                              </summary>
                              <div className="bg-white relative grid gap-3  px-5 py-6 sm:gap-6 sm:p-8 lg:grid-cols-3">
                                 {property.features.internal.map((item) => (
                                    <div key={item.id} className="-m-3 p-2 flex items-start rounded-lg">
                                       <Characteristics content={item.nombre} imagesrc={'/images/partials/LogoSite/Logo_color.png'} />
                                    </div>
                                 ))}
                              </div>
                           </details>
                        ) : null}
                        {property.features.external.length > 0 ? (
                           <details className="group [&_summary::-webkit-details-marker]:hidden"  open  >
                              <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                                 <h2 className="font-medium text-gray-900">
                                    Características externas
                                 </h2>
                                 <svg className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                 </svg>
                              </summary>
                              <div className="bg-white relative grid gap-3  px-5 py-6 sm:gap-6 sm:p-8 lg:grid-cols-3">
                                 {/* backdrop-blur-xl bg-white/70   */}
                                 {property.features.external.map((item) => (
                                    <div key={item.id}  className="-m-3 p-2 flex items-start rounded-lg">
                                        <Characteristics content={item.nombre} imagesrc={'/images/partials/LogoSite/Logo_color.png'} />
                                    </div>
                                 ))}
                              </div>
                           </details>
                        ) : null}
                        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                           <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                              <h2 className="font-medium text-gray-900">
                                 Descripción Adicional
                              </h2>
                              <svg  className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                 <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2"  d="M19 9l-7 7-7-7" />
                              </svg>
                           </summary>
                           <div className="px-4 mt-4 leading-relaxed text-gray-700">
                              {parse(property.observations)}
                           </div>
                        </details>
                        {property.map ? <ChangeView latitude={property.latitude} longitude={property.longitude} /> : null}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default DetailProperty;
export async function getServerSideProps({ params: { id } }) {
   const data = await fetchApi(`${baseUrl}/property/get/${id}`);
   return {
      props: {
         property: data,
      },
   };
}
