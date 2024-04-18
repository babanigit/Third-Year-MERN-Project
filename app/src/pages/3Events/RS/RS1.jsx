import { Carousel } from "antd";

import { rs1 } from "../../../assets/portfolio";

const RS1 = () => {
  return (
    <>
      <div className="  ">
        <Carousel autoplay>

          {rs1.map((p)=>{
            
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

export default RS1;
