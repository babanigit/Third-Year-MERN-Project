/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header";
// import Footer from "../../components/2footer/Footer";

const Faculty = (props) => {
  return (
    <>
      <div className=" w-screen">
        <Header theme={props.theme} setTheme={props.setTheme} />
        <div>Faculty</div>
      </div>

      {/* <Footer theme={props.theme} /> */}
    </>
  );
};

export default Faculty;
