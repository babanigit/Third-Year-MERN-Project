/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useState } from "react";

import bmi from "../../assets/pngs/ganesha.png";
import tabla2 from "../../assets/pngs/tabla2.png";
import tabla from "../../assets/pngs/tabla.png";
import veena from "../../assets/pngs/veena.png";

import tablareal1 from "../../assets/pngs/tablareal1.png";
import pakhawaj3 from "../../assets/pngs/pakhawaj3.png";

import sheet from "../../assets/pngs/sheet.png";

import { PortfolioData } from "../../assets/portfolio";
import SocialMedia from "../../components/SocialMedia";
import PopupPakhawaj from "./PopupPakhawaj";
import { aboutinstrument } from "../../assets/about";
import PopupTabla from "./PopupTabla";
import PopupSheet from "./PopupSheet";

const Page1 = (props) => {
  const [trigg, setTrigg] = useState(false);
  const [trigg2, setTrigg2] = useState(false);
  const [trigg3, setTrigg3] = useState(false);

  return (
    <>
      {/* <SocialMediaBar /> */}

      <div className="grid grid-flow-row gap-7 h-auto  p-4">
        {/* section 1 */}
        <div className=" grid  grid-flow-col grid-cols-3 place-items-center  gap-3 p-4  ">
          <div className="  rounded-3xl grid col-span-2 p-10 bg-red-300 bg-opacity-50 ">
            <div className="px-13  text-2xl">{PortfolioData.para}</div>
          </div>

          <div className="  grid ">
            <img className=" w-[120px] rounded-lg" src={bmi} />
          </div>
        </div>

        {/* section 3 */}
        <div className=" grid  grid-flow-col grid-cols-3 place-items-center  gap-3 p-4 ">
          <div className="  grid ">
            <img className=" w-[120px]" src={tabla} />
          </div>

          <div className="  rounded-3xl grid col-span-2 p-10 bg-purple-300 bg-opacity-50 ">
            <div className="px-13  text-2xl">{PortfolioData.para2}</div>
          </div>
        </div>

        {/* section 2 */}

        <div className=" place-items-center grid p-5">
          <SocialMedia />
        </div>

        <section
          style={{ borderColor: props.theme.text }}
          className=" bg-blue-200 rounded-3xl border-2  bg-opacity-50 grid grid-flow-col place-items-center h-[300px] w-full"
        >
          {/* pakhawaj */}
          <div>
            <div>
              <img
                className=" max-w-[300px] bg--300 hover:opacity-50 "
                onClick={() => setTrigg(true)}
                src={pakhawaj3}
              />

              <p className="w-full text-2xl font-bold flex place-content-center">
                {" "}
                Pakahwaj
              </p>
            </div>

            <PopupPakhawaj
              trigger={trigg}
              setTrigg={setTrigg}
              trigg={trigg}
              theme={props.theme}
            >
              <p className="w-full px-4 text-xl font-bold pt-4  ">
                {" "}
                About Pakhawaj :-
              </p>
              <div
                // style={{backgroundColor:theme.body}}
                className=" h-full w-full p-4 text-xl  "
              >
                {aboutinstrument.pakhawaj}
              </div>
            </PopupPakhawaj>
          </div>

          {/* sheet */}
          <div>
            <div>
              <img
                className=" max-w-[150px] bg--300 hover:opacity-50 rounded-md "
                onClick={() => setTrigg3(true)}
                src={sheet}
              />

              {/* <p className="w-full text-2xl font-bold flex place-content-center">
                {" "}
                Sheet
              </p> */}

            </div>

            <PopupSheet
              trigger3={trigg3}
              setTrigg3={setTrigg3}
              trigg3={trigg3}
              theme={props.theme}
            >
              {/* <p className="w-full px-4 text-xl font-bold pt-4  ">
                {" "}
                About Sheet :-
              </p> */}

              <div
                // style={{backgroundColor:theme.body}}
                className=" h-full w-full p-4 text-xl  "
              >

                <div className=" flex place-content-center items-center">
                <img
                  className=" max-w-[360px] rounded-md flex justify-center items-center"
                  src={sheet}
                />


                </div>
              
                {/* {aboutinstrument.tabla} */}
              </div>
            </PopupSheet>
          </div>

          {/* tabla */}
          <div>
            <div>
              <img
                className=" max-w-[300px] bg--300 hover:opacity-50 "
                onClick={() => setTrigg2(true)}
                src={tablareal1}
              />

              <p className="w-full text-2xl font-bold flex place-content-center">
                {" "}
                Tabla
              </p>
            </div>

            <PopupTabla
              trigger2={trigg2}
              setTrigg2={setTrigg2}
              trigg2={trigg2}
              theme={props.theme}
            >
              <p className="w-full px-4 text-xl font-bold pt-4  ">
                {" "}
                About Tabla :-
              </p>

              <div
                // style={{backgroundColor:theme.body}}
                className=" h-full w-full p-4 text-xl  "
              >
                {aboutinstrument.tabla}
              </div>
            </PopupTabla>
          </div>
        </section>

        {/* section 4 */}

        <div className=" grid  grid-flow-col grid-cols-3 place-items-center  gap-3 p-4 ">
          <div className="  rounded-3xl grid col-span-2 p-10 bg-green-300 bg-opacity-50 ">
            <div className="px-13  text-2xl">{PortfolioData.para3}</div>
          </div>

          <div className="  grid ">
            <img className=" w-[120px]" src={tabla2} />
          </div>
        </div>

        <div className=" grid  grid-flow-col grid-cols-3 place-items-center  gap-3 p-4 ">
          <div className="  grid ">
            <img className=" w-[120px]" src={veena} />
          </div>

          <div className="  rounded-3xl grid col-span-2 p-10 bg-blue-300 bg-opacity-50 ">
            <div className="px-13  text-2xl">{PortfolioData.para4}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
