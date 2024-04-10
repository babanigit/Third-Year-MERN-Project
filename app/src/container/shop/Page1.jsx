import { Carousel } from "antd";

import banner1 from "../../assets/tablaBanner/banner1.png";
import banner2 from "../../assets/tablaBanner/banner2.png";
import banner3 from "../../assets/tablaBanner/banner3.png";

// const contentStyle = {
//   width: "max",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

const Page1 = () => {
  const renderSlider = () => {
    return (
      <>
      <div className=" h-auto w-auto bg-yellow-300 p-8 px-96 " >
           <Carousel autoplay >
          <div>
            <img
              src={banner1}
            //   style={contentStyle}
              className=" w-[700px] p-13 "
            />
          </div>

          {/* <div>
            <img
              src={banner2}
            //   style={contentStyle}
              className=" w-[600px] grid "
            />
          </div> */}

          <div>
            <img
              src={banner3}
            //   style={contentStyle}
              className=" w-[700px] grid place-items-center "
            />
          </div>
        </Carousel>
      </div>
     
      </>
    );
  };
  return (
    <>
      <div className=" h-screen  ">
        <div className="">{renderSlider()}</div>
      </div>
    </>
  );
};

export default Page1;
