import IFrame from "./IFrame";
import temple from "../../assets/pngs/temple.png";

const Page3Map = () => {
  return (
    <div className=" grid  min-h-[500px] p-4 ">
      <div className="  grid grid-flow-row md:grid-flow-col md:grid-cols-3">
        <div className=" col-span-2 grid bg-blue-300  md:p-5 bg-opacity-50 rounded-3xl place-items-center ">
          <IFrame />
        </div>
        <div className="hidden md:grid  place-items-center place-content-center">
        <img className=" w-[120px] rounded-lg" src={temple} />
        </div>
      </div>
    </div>
  );
};

export default Page3Map;
