
import tabla64 from "../../assets/pngs/tabla5.png";
import { PortfolioData } from "../../assets/portfolio";

const Page2 = () => {
  return (
    <>
    <div className="grid grid-flow-col grid-cols-3  h-screen p-4 ">
      
      <div className="  rounded-3xl grid place-content-center col-span-2  p-44 ">
        <div className="px-13  text-2xl">
        {PortfolioData.para}

        </div>
      </div>
      <div className="  grid place-content-center">
        <img className=" w-[120px]" src={tabla64} />
      </div>
    </div>
  </>
  )
}

export default Page2