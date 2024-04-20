import { eventBMI } from "../../assets/portfolio";
import RS1 from "./RS/RS1";
import RS2 from "./RS/RS2";
import RS3 from "./RS/RS3";
import RS4 from "./RS/RS4";

const Page2Event = () => {
  return (
    <>
    <h1  className="w-full text-2xl font-bold flex place-content-center">Events</h1>
      <div className=" p-4 min-h-screen  gap-4 grid">
        {eventBMI.map((p) => {
          var renderComponent;

          switch (p.id) {
            case 1:
              renderComponent = <RS1 />;
              break;

            case 2:
              renderComponent = <RS2 />;
              break;

            case 3:
              renderComponent = <RS3 />;
              break;

            case 4:
              renderComponent = <RS4 />;
              break;

            default:
              break;
          }

          return (
            <div
              className=" grid grid-flow-col grid-cols-3 p-3 text-xl "
              key={p.id}
            >
              <div className=" flex place-content-center place-items-center ">
                <div className="w-[60%]">{renderComponent}</div>
              </div>
              <div
                className={
                  " grid col-span-2 place-content-center place-items-center bg-opacity-45 rounded-2xl p-5 " +
                  p.bg
                }
              >
                {p.content}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Page2Event;
