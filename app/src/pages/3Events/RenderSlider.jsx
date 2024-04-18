import { Carousel } from "antd";

import sir from "../../assets/jpgs/sir.png";
import sir2 from "../../assets/jpgs/sir2.png";

import sir3 from "../../assets/jpgs/sir3.png";
import sir4 from "../../assets/jpgs/sir4.png";

const RenderSlider = () => {
  return (
    <>
      <div className="  ">
        <Carousel autoplay>
          <div>
            <img
              src={sir}
              //   style={contentStyle}
              className=" w-[700px] p-13 rounded-3xl "
            />
          </div>
          <div>
            <img
              src={sir4}
              //   style={contentStyle}
              className=" w-[700px] grid place-items-center rounded-3xl "
            />
          </div>
          <div>
            <img
              src={sir2}
              //   style={contentStyle}
              className=" w-[700px] grid place-items-center rounded-3xl "
            />
          </div>
          <div>
            <img
              src={sir3}
              //   style={contentStyle}
              className=" w-[700px] p-13  place-items-center  rounded-3xl "
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default RenderSlider;
