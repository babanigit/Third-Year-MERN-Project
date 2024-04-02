/* eslint-disable react/prop-types */

import Header from "../../components/1header/Header";
import Footer from "../../components/2footer/Footer";
import Page1 from "../../container/home/Page1";
import Page2 from "../../container/home/Page2";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} />
      <Page1 theme={props.theme} />
      <Page2 theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
