import { Carousel } from "antd";


import { rs3 } from "../../../assets/portfolio";



const RS3 = () => {
  return (
    <>
      <div className="  ">
        <Carousel autoplay>
        {rs3.map((p)=>{
            
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

export default RS3;
