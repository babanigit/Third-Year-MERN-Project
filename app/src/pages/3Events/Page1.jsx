import { aboutSir } from "../../assets/portfolio";
import RenderSlider from "./RenderSlider";

const Page1 = () => {
  return (
    <>
      {/* page1 */}
      <div className=" min-h-screen  grid grid-flow-col grid-cols-3 p-4  ">
        <div className=" col-span-2  grid  grid-flow-row gap-5 ">
          {aboutSir.map((prop) => {
            return (
              <>
                <div
                  className={
                    " rounded-2xl p-3 px-10 flex place-content-center place-items-center bg-opacity-45 text-xl "+prop.bg
                  }
                  key={prop.id}
                >
                  {prop.content}
                </div>
              </>
            );
          })}
        </div>
        <div className=" flex place-content-center place-items-center ">
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
