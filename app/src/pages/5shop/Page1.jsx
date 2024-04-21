import { aboutinstrument } from "../../assets/about";
import ShopRenderSlider from "./ShopRenderSlider";

const Page1 = () => {
  return (
    <>
      <div className="  h-auto w-full bg--200 p-4 ">
        <div className="grid place-items-center gap-4">
          <div className=" flex place-content-center place-items-center ">
            <div className="w-auto max-w-[300px] lg:max-w-[550px] min-w-auto">
              <ShopRenderSlider />
            </div>
          </div>

          <div className=" bg-green-300 bg-opacity-50 text-2xl rounded-2xl p-7 w-full">
            {" "}
            {aboutinstrument.manu}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
