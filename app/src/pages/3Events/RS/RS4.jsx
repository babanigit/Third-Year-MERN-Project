import { Carousel } from "antd";


import { rs4 } from "../../../assets/portfolio";



const RS4 = () => {
  return (
    <>
      <div className="  ">
        <Carousel autoplay>
        {rs4.map((p)=>{
            
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

export default RS4;
