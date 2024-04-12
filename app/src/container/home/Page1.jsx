/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import bmi from "../../assets/pngs/bmi.jpg";
import tabl2 from "../../assets/pngs/tabla2.png";
import tabl3 from "../../assets/pngs/tabla3.png";

import { PortfolioData } from "../../assets/portfolio";
import SocialMedia from "../../components/SocialMedia";

const Page1 = () => {
  return (
    <>
      {/* <SocialMediaBar /> */}

      <div className="grid grid-flow-row gap-7 h-auto ">
        {/* section 1 */}
        <div className=" grid  grid-flow-col grid-cols-3 place-items-center  gap-3 p-4 ">
          <div className="  rounded-3xl grid col-span-2 p-10 ">
            <div className="px-13  text-2xl">{PortfolioData.para}</div>
          </div>

          <div className="  grid ">
            <img className=" w-[120px]" src={bmi} />
          </div>
        </div>

        {/* section 2 */}
        <div className=" place-items-center grid p-5">
          <SocialMedia />
        </div>

        {/* section 3 */}
        <div className=" grid  grid-flow-col grid-cols-3 place-items-center  gap-3 p-4 ">
          <div className="  grid ">
            <img className=" w-[120px]" src={tabl2} />
          </div>

          <div className="  rounded-3xl grid col-span-2 p-10 ">
            <div className="px-13  text-2xl">{PortfolioData.para2}</div>
          </div>
        </div>

        {/* section 4 */}

        <div className=" grid  grid-flow-col grid-cols-3 place-items-center  gap-3 p-4 ">
          <div className="  rounded-3xl grid col-span-2 p-10 ">
            <div className="px-13  text-2xl">{PortfolioData.para3}</div>
          </div>

          <div className="  grid ">
            <img className=" w-[120px]" src={tabl3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
