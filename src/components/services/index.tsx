import SidebarData from "./SidebarData";
import { useState } from "react";
import ServiceData from "../../data.ts/ServiceData";
import Image from "../Image";
import { useParams } from "react-router-dom";
export default function Service() {
  const [currTab, setCurrTab] = useState(1);
  const { id } = useParams();
  const currId= parseInt(id || "0");
  const data = ServiceData.find((item) => item._id === currId);
  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-[27%]">
            <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
              <ul className="space-y-2">
                <SidebarData
                  currTab={currTab}
                  setCurrTab={setCurrTab}
                  currId={currId}
                />
              </ul>
            </div>
          </div>

          <div className="w-full px-4 lg:w-[73%]">
            <div className="blog-details shadow-solid-4 dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] dark:bg-blacksection">
              {data && (
                <>
                  <div className="relative aspect-[700/444] w-full">
                    <Image className="dark:hidden" src={data.mainImage} alt="Hero" fill />
                    <Image
                      className="hidden shadow-solid-l dark:block"
                      src="/src/images/hero/hero-dark.svg"
                      alt="Hero"
                      fill
                    />
                  </div>
                  <div className="flex items-center justify-between mt-5 mb-5">
                    <h1>{data.title}</h1>
                    <button className="px-2 rounded-[2vw] py-4 bg-primary hover:bg-blue-600 text-white hover:text-white duration-300 ease-in-out">Book Appointment</button>
                  </div>
                  <p className="text-body-color dark:text-body-color-dark text-base">
                    {data.metadata}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
