import GroupImage from "../components/Gallery/GroupImage";
import SectionInfoIcons from "../components/Section/SectionInfoIcons";
import SectionWithSocialMedia from "../components/Section/SectionWithSocialMedia";
import TitleSecondary from "../components/Titles/TitleSecondary";
import TitleSimple from "../components/Titles/TitleSimple";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";


const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>Sobre nosotros</title>
      </Head>
      <div className="w-full imagen-banner-about max-[900px]:hidden">

      </div>
      
      <div className="w-full rounded-2xl h-96 -mb-16 bg-dorado-ph min-[901px]:hidden imagen-banner-about"></div>
      <div className="relative">
        <div className="absolute inset-0 h-1/2 bg-slate-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-full mx-auto " style={{float: 'left', marginTop: '-170px', display: 'flex', justifyContent: 'center', width: '100%'}}>
            <dl className="rounded-lg bg-white shadow-lg grid grid-cols-2  sm:grid sm:grid-cols-4 ">
              <Link
                href="/search?tipo_propiedad=1"
                className="flex flex-col border-b border-gray-100 rounded-lg p-4 text-center sm:border-0 sm:border-r"
              >
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Casa
                </dt>
                <dd className="order-1 text-5xl  ">
                  <Image
                    alt="icon-casa"
                    className="mx-auto "
                    src={"/images/partials/icons/Home.svg"}
                    width={60}
                    height={60}
                  />
                </dd>
              </Link>
              <Link
                href="/search?tipo_propiedad=2"
                className="flex flex-col border-t border-b border-gray-100 p-4 text-center sm:border-0 sm:border-l sm:border-r"
              >
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Apartamento
                </dt>
                <dd className="order-1 text-5xl  ">
                  <Image
                    alt="icon-Apartamento"
                    className="mx-auto"
                    src={"/images/partials/icons/apartment.svg"}
                    width={60}
                    height={60}
                  />
                </dd>
              </Link>
              <Link
                href="/search?tipo_propiedad=21"
                className="flex flex-col border-t border-gray-100 p-4 text-center sm:border-0 sm:border-l"
              >
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Penthouse
                </dt>
                <dd className="order-1 text-5xl  ">
                  <Image
                    alt="icon-Penthouse"
                    className="mx-auto"
                    src={"/images/partials/icons/penthouse.svg"}
                    width={60}
                    height={60}
                  />
                </dd>
              </Link>
              <Link
                href="/search?tipo_propiedad=24"
                className="flex flex-col border-t border-gray-100 p-4 text-center sm:border-0 sm:border-l"
              >
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Casa de Playa
                </dt>
                <dd className="order-1 text-5xl  ">
                  <Image
                    alt="icon-Casa-de-Playa"
                    className="mx-auto"
                    src={"/images/partials/icons/beach house.svg"}
                    width={60}
                    height={60}
                  />
                </dd>
              </Link>
            </dl>
          </div>
        </div>
      </div>
      {/* <SectionWithSocialMedia name="Rossana ULLOQUE" /> */}
      
      <section className="mx-0  max-w-full pt-16 px-2 -mt-24 lg:px-0 bg-white">
        <div className="sm:text-center">
          <div className="relative  py-16 sm:py-24 lg:pb-8 lg:pt-20">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"> 
              <h2 className="mt-2 text-2xl font-semibold text-gray-900 tracking-tight ">
              Quiénes Somos
              </h2>
              <p className="mt-5 mx-auto font-light text-md text-gray-500">
              R&C Inmobiliaria es una empresa líder en el sector inmobiliario, con más de 20 años de experiencia 
              y una reputación intachable. Nuestro equipo está conformado por 
              profesionales altamente calificados que se dedican a brindarte un servicio excepcional. 
              </p>
            </div>
          </div>
        </div>
        </section>

      <GroupImage
        src1={"/images/properties/propiedad1.png"}
        src2={"/images/properties/propiedad2.png"}
        src3={"/images/properties/propiedad3.png"}
        src4={"/images/properties/propiedad4.png"}
      />

      <SectionInfoIcons
        divide="divide-x-2 divide-black"
        firstTitle="Misión"
        firstBody="Nuestra visión es afianzarnos como una empresa líder en Inversiones de Construcción y del sector 
        Inmobiliario en Colombia para el año 2025, 
        sustentado en el trabajo responsable, calificado y comprometido con la sostenibilidad social."
        svg_one="/icons/mision.svg"
        padding_bottom_div="mb-16"
        secondTitle="Visión"
        secondBody="Mediante el contenido
                apropiado al comprador desde el inicio del proceso, para satisfacer las necesidades de ese cliente
                potencial y brindar no solo una venta de una propiedad raíz , sino interactuar con el cliente
                ofreciendo un servicio integral."
        svg_two="/icons/Vision.svg"
       
      />
      <div className="md:h-6 xl:6"></div>
      <div className="w-full mt-16 bg-image-banner-about items-center py-16">
          <div className="md:flex px-16 items-center">
              <div className="md:w-4/6 items-center text-white">
              <h3 className="font-bold text-white mb-3 max-[900px]:text-center">¿Por Qué Elegir R&C?</h3>
              <p className="max-[900px]:text-center">Elegir R&C Inmobiliaria es optar por un servicio de calidad, respaldado por años de experiencia 
              y un profundo conocimiento del mercado. Nos comprometemos a ayudarte a encontrar la 
              propiedad que mejor se adapte a tus necesidades y a proporcionarte una experiencia de 
              compra o alquiler sin complicaciones. </p>
              </div>
              <div className="md:w-2/6 items-center flex justify-center max-[900px]:mt-10">
                  <Link className="rounded-md bg-red-700 px-2 py-2 text-white" href={'#'}>
                    Agenda tu cita
                  </Link>
              </div>
          </div>
      </div>
      <SectionInfoIcons
        title_div="Nuestros Logros "
        paragrah_div=""
        divide=""
        firstTitle="Clientes Atendidos "
        firstBody="Más de 500 clientes satisfechos. "
        svg_one=""
        counter_one="500"
        text_center="text-center"
        padding_top_title="pb-0"
        margin_bottom_div="mb-44"
        secondTitle="Inmuebles Vendidos  "
        secondBody="Más de 550 propiedades vendidas. "
        svg_two=""
        counter_two="550"
        
      />
      
    </div>
  );
};

export default AboutUs;
