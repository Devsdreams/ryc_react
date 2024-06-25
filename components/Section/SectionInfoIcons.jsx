import Link from "next/link";
import AnimatedCounter from '@/components/AnimatedCounter';

const SectionInfoIcons = (props) =>
(
    <section className={"text-gray-600 bg-white body-font w-full pt-16 md:pl-16 md:pr-16 "+props.margin_bottom_div}>
        { props.title_div ? (
            <div className="sm:text-center">
            <div className="relative  py-1 sm:py-24 lg:pb-8 lg:pt-2">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"> 
                <h2 className="mt-2 text-2xl font-semibold text-gray-900 tracking-tight ">
                {props.title_div}
                </h2>
                <p className="mt-5 mx-auto font-light text-md text-gray-500">
                {props.paragrah_div}
                </p>
              </div>
            </div>
          </div>
          ) : null
        }
        
        {/* div title contain */}
        <div className="container mx-auto w-50">
            <div className="flex flex-wrap md:-m-4  max-[900px]:justify-center">
                <div className={"p-4 md:w-1/2 max-[900px]:mb-8 max-[900px]:text-center "+props.padding_top_title}>
                    <div className={"flex  h-full  md:p-8 flex-col "+props.padding_top_title}>
                        <div className="text-center mx-auto items-center mb-3">
                            <div className="w-6/6 h-8 mb-10 flex items-center text-center justify-center ">
                                {props.svg_one ? ( <img className={props.width_image} src={props.svg_one} alt="" srcset="" /> ) : null}
                                {props.counter_one ? ( <AnimatedCounter target={props.counter_one} />) : null }
                            </div>
                            <h2 className="text-gray-900 text-lg title-font font-bold max-[900px]:text-center">{props.firstTitle}</h2>
                        </div>
                        <div className="px-4 md:w-1/2 min-[901px]:hidden">
                            <div className="flex  h-full px-5 flex-col">
                                <div className={"flex-grow "+props.text_center}>
                              
                                    <p className="leading-relaxed text-base">{props.firstBody}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <div className={"p-4 md:w-1/2 "+props.padding_top_title}>
                    <div className={"flex  h-full  md:p-8 flex-col "+props.padding_top_title}>
                        <div className="text-center items-center mb-3">
                            <div className="w-6/6 h-8 mb-10 flex items-center justify-center">
                                {props.svg_two ? (<img className={props.width_image} src={props.svg_two} alt="" srcset="" />) : null}
                                {props.counter_two ? ( <AnimatedCounter target={props.counter_two} />) : null}
                            </div>
                            <h2 className="text-gray-900 text-lg title-font font-bold">{props.secondTitle}</h2>
                        </div>
                        <div className="px-4 md:w-1/2 min-[901px]:hidden max-[900px]:text-center">
                            <div className="flex  h-full px-5 flex-col">
                                <div className={"flex-grow "+props.text_center}>
                                    <p className="leading-relaxed text-base">
                                        {props.secondBody}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
        {/* div paragraf contain */}
        <div className="container px-5  mx-auto w-50 max-[900px]:hidden">
            <div className={'flex flex-wrap -m-4 '+ props.divide}>
                <div className="px-4 md:w-1/2 ">
                    <div className="flex  h-full px-5 flex-col">
                        <div className={"flex-grow "+props.text_center}>
                            <p className="leading-relaxed text-base">{props.firstBody}</p>
                        </div>
                    </div>
                </div>
                
                <div className="px-4 md:w-1/2">
                    <div className="flex  h-full px-5 flex-col">
                        <div className={"flex-grow "+props.text_center}>
                            <p className="leading-relaxed text-base">
                                {props.secondBody}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    
);


export default SectionInfoIcons