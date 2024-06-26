import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Bibliography from "../components/Section/SectionBlibliographylite";
import Popup from "../components/Popup";
import SesionIcosn from "../components/sesionIcon";
import { useState } from "react";
import SectionInfoIcons from "../components/Section/SectionInfoIcons";

const Property = dynamic(() => import('../components/Property'), {
  loading: () => <div className="w-full rounded-2xl h-96 bg-dorado-ph"></div>,
  ssr: false,
})

export default function Home({ propertysAll, Banner, Categories }) {
  const [Categorie, setCategorie] = useState(null);

  return (
    <>
      <Head>
        <title>R&C Inmobiliaria Constructora</title>
      </Head>
      <div className="w-full imagen-banner">

      </div>
      
      <div className="w-full rounded-2xl h-96 -mb-16 bg-dorado-ph image-mobile"></div>
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
      <section className="mx-0 mb-16 max-w-full pt-16 px-6 -mt-24 lg:px-0 bg-slate-50">
        <div className="sm:text-center">
          <div className="relative  py-16 sm:py-24 lg:pb-8 lg:pt-20">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"> 
              <h2 className="mt-2 text-2xl font-semibold text-gray-900 tracking-tight ">
              Encuentra aquí el Inmueble que siempre has soñado
              </h2>
              <p className="mt-5 max-w-prose mx-auto font-light text-xl text-gray-500">
              Aquí encontrarás la mejor selección de inmuebles para tí
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mt-16 mb-16  mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 ">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
            
            {Object.entries(propertysAll).map((property) =>
              property[0] === "total" || property[0] === "status" ? null : (
                
                <Property property={property[1]} categories={Categories} key={property[1].id_property} />
              )
            )}
          </div>
      </div>
      <SectionInfoIcons
        divide=""
        firstTitle="¿Qué Hacemos?"
        firstBody="Nos especializamos en la compra, venta y alquiler de propiedades residenciales y comerciales. 
        Contamos con una amplia cartera de inmuebles que se adapta a todas tus necesidades y presupuestos. Ya sea que estés 
        buscando una casa, un apartamento, un local comercial o un terreno, en R&C tenemos la solución perfecta para ti. "
        svg_one="/icons/doing.svg"
        padding_bottom_div="mb-24"
        margin_bottom_div="mb-24"
        padding_top_div="mt-16"
        secondTitle="Nuestro Servicio"
        secondBody="En R&C, nos enorgullecemos de brindar un servicio integral y personalizado. 
        Desde la búsqueda del inmueble ideal hasta la firma del contrato, te acompañamos en cada paso del proceso.
         Nuestro compromiso es ofrecerte una experiencia sin estrés, eficiente y transparente. "
        svg_two="/icons/service.svg"
        width_image="w-14"
      />
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const propertysAll = await fetchApi(
    `${baseUrl}/property/search?&short=true`,
    "8"
  );
  // const propertysDest = await fetchApi(`${baseUrl}/property/highlighted?&short=true`, '2');
  const Categories = await fetchApi(`${baseUrl}/property-type/all?&quantity=true`);
  // const Banner = await fetchApi(`${baseUrl}/banner/search`);
  return {
    props: {
      propertysAll: propertysAll,
      Categories: Categories,
    },
  };
}
