import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import SearchIcons from '../SearchGlobal';
const forrenta = [
  { name: "Apartaestudio", description: "10", href: "#" },
  { name: "Apartamento", description: "3", href: "#" },
  { name: "Cabaña", description: "2", href: "#" },
  { name: "Casa", description: "5", href: "#" },
  { name: "Local", description: "2", href: "#" },
  { name: "Oficina", description: "3", href: "#" },
];

const forsale = [
  { name: "Apartaestudio", description: "1", href: "#" },
  { name: "Apartamento", description: "126", href: "#" },
  { name: "Bodega", description: "1", href: "#" },
  { name: "Cabaña", description: "2", href: "#" },
  { name: "Casa", description: "68", href: "#" },
  { name: "Casa de Playa", description: "10", href: "#" },
  { name: "Condominio", description: "1", href: "#" },
  { name: "Hoteles", description: "1", href: "#" },
  { name: "Local", description: "2", href: "#" },
  { name: "Lote", description: "10", href: "#" },
  { name: "Lote Comercial", description: "1", href: "#" },
  { name: "Lote de Playa", description: "3", href: "#" },
  { name: "Oficina", description: "3", href: "#" },
  { name: "Penthouse", description: "14", href: "#" },
];
const resources = [
  { name: "Portafolio", href: "#" },
  { name: "Servicios", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    // web layout
    <div className="sticky">
      <div className="flex justify-end">
      <div className="animate-ping fixed items-center inline-block p-4 bg-green-600 z-40 bottom-8 left-6 rounded-full" >
          </div>
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=573104191840&text=hola necesito un servicio en compra, venta y alquiler de propiedades. ¿Me podrian ayudar? &type=phone_number&app_absent=0"
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className=" fixed inline-block p-3 mb-2 bg-green-600 z-40 bottom-4 left-4 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
        >
          <BsWhatsapp className="w-6 h-6" />
        </Link>
        
      </div>
      <Popover>
        <div className=" flex px-5 py-3 items-center sm:px-6 md:justify-center md:space-x-10 bg-white text-black h-25">
          <div className="flex justify-center absolute top-5 left-20">
          <img
                alt="Logo"
                src="/images/partials/LogoSite/Logo_color.png"
                style={{ width:'98.20px', height: '70px'}}
                className="navImage"
              />
            
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 relative  items-center justify-center text-neutral-800 hover:textneutral-300 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-center">
            <Popover.Group as="nav" className="flex space-x-8">
            <Link
                href="/"
                className="text-base font-medium  hover:text-neutral-300"
              >
                INICIO
              </Link>
              <Link
                href="/AboutUs"
                className="text-base font-medium  hover:text-neutral-300"
              >
                NOSOTROS
              </Link>
              

              {/* <Link
                href="/Blog/Section"
                className="text-base font-medium hover:text-neutral-300"
              >
                BLOG
              </Link> */}
              <Link
                href="/Contact"
                className="text-base font-medium hover:text-neutral-300"
              >
                CONTACTO
              </Link>

              {/* <Link
                href="/Testimony"
                className="text-base font-medium text-neutral-100 hover:text-neutral-300"
              >
                Testimonios
              </Link> */}
              
            </Popover.Group>
          </div>
          <div className="flex justify-end absolute flex-1 right-8 items-center justify-center self-center top-5 mt-5 pt-2">
          <Link
              href="https://es-la.facebook.com/rycinmobiliariaconstructora/"
              target="_blank"
              className="mr-6 "
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                className="w-2.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </Link>

            <Link
              href="mailto:info@rycinmobiliaria.com"
              target="_blank"
              className="mr-6 "
            >
              <FaEnvelope />
            </Link>
            <Link
              href="https://www.instagram.com/inmobiliariaryc/"
              target="_blank"
              className="mr-6"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </Link>
            <SearchIcons></SearchIcons>
            </div>
          
          
        </div>
        {/* Mobile layaout */}
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      width={35}
                      height={35}
                      className="h-8 w-auto"
                      src={"/images/partials/LogoSite/logo_color.png"}
                      alt="Workflow"
                    />
                  </div>
                  <p className="text-dorado font-semibold">MENU</p>

                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Popover.Button>
                  </div>
                </div>
               
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="/"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Inicio
                  </Link>
                  <Link
                    href="/AboutUs"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Nosotros
                  </Link>
                  <Link
                    href="/Contact"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Contáctanos
                  </Link>
                  
                </div>
                <div className="mt-6">
                  
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
