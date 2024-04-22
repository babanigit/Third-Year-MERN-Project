import { aboutSir } from "../../assets/portfolio";
import RenderSlider from "./RenderSlider";

const Page1 = () => {
  return (
    <>
      {/* page1 */}

      {/* for mobile */}
      <div className=" md:hidden flex place-content-center place-items-center ">
          <div className="w-[40%]  ">
            <RenderSlider />
          </div>
        </div>

      <div className=" min-h-screen  grid grid-flow-row md:grid-flow-col md:grid-cols-3 p-4  ">
        <div className=" md:col-span-2  grid  grid-flow-row gap-3 md:gap-5 ">
          {aboutSir.map((prop) => {
            return (
              <div
                className={
                  " rounded-2xl p-3 px-5 flex place-content-center place-items-center bg-opacity-45 md:text-xl " +
                  prop.bg
                }
                key={prop.id}
              >
                {prop.content}
              </div>
            );
          })}
        </div>
        <div className=" hidden md:flex place-content-center place-items-center ">
          <div className="w-[60%]  ">
            <RenderSlider />
          </div>
        </div>
      </div>

      {/* page2 */}
    </>
  );
};

export default Page1;
