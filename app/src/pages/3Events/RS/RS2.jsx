import { Carousel } from "antd";


import { rs2 } from "../../../assets/portfolio";



const RS2 = () => {
  return (
    <>
      <div className="  ">
        <Carousel autoplay>
        {rs2.map((p)=>{
            
            return(
              <div key={p.id}>
              <img
              src={p.link}
              //   style={contentStyle}
              className=" w-[700px]  p-13 rounded-3xl "
            />
              </div>
            )
          })}
        </Carousel>
      </div>
    </>
  );
};

export default RS2;
