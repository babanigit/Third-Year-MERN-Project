import IFrame from "./IFrame";
import temple from "../../assets/pngs/temple.png";

const Page3Map = () => {
    return (
        <div className=" grid  min-h-[500px] p-4 ">
        
            <div className="  grid grid-flow-col grid-cols-3">
                <div className="grid  place-items-center">
                <img className=" w-[120px] rounded-lg" src={temple} />

                </div>
                <div className=" col-span-2 grid bg-pink-300 bg-opacity-50 rounded-3xl place-items-center ">
                    <IFrame />
                </div>
            </div>
        </div>
    );
};

export default Page3Map;
