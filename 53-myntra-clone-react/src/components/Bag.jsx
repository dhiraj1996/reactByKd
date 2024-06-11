import Header from "./components/Header";
import Footer from "./Footer";

function Bag() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="bag-page">
          <div className="bag-items-container"></div>
          <div className="bag-summary"></div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Bag;
