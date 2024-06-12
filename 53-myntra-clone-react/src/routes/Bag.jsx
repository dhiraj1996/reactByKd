import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";


function Bag() {
  return (
    <>
      <main>
        <div className="bag-page">
          <BagItems></BagItems>
          <BagSummary></BagSummary>
        </div>
      </main>
     </>
  );
}

export default Bag;
