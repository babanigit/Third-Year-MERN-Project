import yagna from "../../assets/pngs/yagna.png";

const NotFound = () => {
  return (
    <div className=" h-screen grid place-content-center place-items-center ">
      <div>
        <img className=" w-24" src={yagna} alt="women" />
      </div>
      <div className=" font-bold " >PAGE NOT FOUND</div>
    </div>
  );
};

export default NotFound;
