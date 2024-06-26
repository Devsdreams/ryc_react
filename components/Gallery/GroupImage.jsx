import Image from "next/image";

const GroupImage = (props) => (
  <section className="text-gray-600 bg-white body-font">
    <div className="w-full px-5 py-10 mx-auto flex flex-wrap justify-center">
      <div className="flex flex-wrap md:-m-2 -m-1">
        <div className="flex flex-wrap w-3/6">
          <div className="md:p-2 p-1 w-1/2">
            <Image
              width={1080}
              height={720}
              alt="gallery"
              className="w-full object-cover h-full object-center block hover:scale-95 ease-in duration-200"
              src={props.src1}
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <Image
              width={1080}
              height={720}
              alt="gallery"
              className="w-full object-cover h-full object-center block hover:scale-95 ease-in duration-200"
              src={props.src2}
            />
          </div>
          <div className="md:p-2 p-1 w-full">
            <Image
              width={1080}
              height={720}
              alt="gallery"
              className="w-full object-cover h-full object-center block hover:scale-95 ease-in duration-200"
              src={props.src3}
            />
          </div>
          
        </div>
        <div className="flex flex-wrap w-3/6">
        <div className="md:p-2 p-1 w-full">
            <Image
              width={1080}
              height={720}
              alt="gallery"
              className="w-full h-full object-cover object-center block hover:scale-95 ease-in duration-200"
              src={props.src4}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GroupImage;
