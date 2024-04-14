/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header";
// import Footer from "../../components/2footer/Footer";

const Gallery = (props) => {
  return (
    <>
      <div className=" w-screen">
        <Header theme={props.theme} setTheme={props.setTheme} />
        <div>gallery</div>
      </div>

      {/* <Footer theme={props.theme} /> */}
    </>
  );
};

export default Gallery;
