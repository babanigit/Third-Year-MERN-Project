/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Admission from "../../components/6AdmissionCom/Admission";

const Page1 = (props) => {
  const [trail, setTrail] = useState(true);
  return (
    <>
      <div className=" h-auto grid  grid-rows-3 ">
        <div className=" h-fit p-5 border-2 rounded-md m-3 ">
          {trail ? (
            <Admission theme={props.theme} />
          ) : (
            <>
              <div className=" h-full w-full grid place-content-center place-items-center">
                <div> sign in for further admission process</div>
              </div>
            </>
          )}
        </div>

        <div className=" h-auto">

            <div className=" " >
                hello dev bo
            </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
