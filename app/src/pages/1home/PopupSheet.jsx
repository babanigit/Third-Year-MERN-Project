/* eslint-disable react/prop-types */

const PopupSheet = (props) => {
    return (
      <>
        {props.trigger3 ? (
          <>
            <div className=" fixed z-10  h-screen w-screen bg-opacity-20 top-0 left-0 flex justify-center items-center ">
              <div
                style={{ backgroundColor: props.theme.body }}
                className="  md:max-w-[80%] max-w-[95%]  md:h-auto max-h-auto grid place-items-center  grid-flow-row grid-rows-12 bg-white rounded-xl p-3 border-2 border-gray-500 "
              >
                <div className="  w-full h-auto grid justify-end px-[2%] bg-gray-300 bg-opacity-50  rounded-md ">
                  <button
                    style={{ borderColor: props.theme.text }}
                    className=" border-2   w-7 grid place-items-center border-gray-700 rounded-lg"
                    onClick={() => props.setTrigg3(!props.trigg3)}
                  >
                    x{" "}
                  </button>
                </div>
  
                <div
                  style={{ borderColor: props.theme.text }}
                  className=" w-full  h-full row-span-11  bg-blue-300 bg-opacity-50 rounded-xl "
                >
                  {props.children}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </>
    );
  };
  
  export default PopupSheet;
  