/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useState } from "react";

import bmi from "../../assets/pngs/ganesha.png";
import tabla2 from "../../assets/pngs/tabla2.png";
import tabla from "../../assets/pngs/tabla.png";
import veena from "../../assets/pngs/veena.png";

import tablareal1 from "../../assets/pngs/tablareal1.png";
import pakhawajreal2 from "../../assets/pngs/pakhawajreal2.png";

import { PortfolioData } from "../../assets/portfolio";
import SocialMedia from "../../components/SocialMedia";
import PopupPakhawaj from "./PopupPakhawaj";
import { aboutinstrument } from "../../assets/about";
import PopupTabla from "./PopupTabla";

const Page1 = (props) => {
  const [trigg, setTrigg] = useState(false);
  const [trigg2, setTrigg2] = useState(false);

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
          <div>
            <img
              className=" w-[300px] bg--300 hover:opacity-50 "
              onClick={() => setTrigg(true)}
              src={pakhawajreal2}
            />

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

          <div>
            <img
              className=" w-[300px] bg--300 hover:opacity-50 "
              onClick={() => setTrigg2(true)}
              src={tablareal1}
            />

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
