import { useSelector } from "react-redux";
import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";


function Bag() {
  const items = useSelector(state => state.items)
  const newBagItems = useSelector(state => state.bag)

  const finalItems = items.filter((item) => {
    const itemIndex = newBagItems.indexOf(item.id);
    return itemIndex >= 0;
  })
  return (
    <>
      <main>
        <div className="bag-page">
          {finalItems.map((item) => <BagItems key={item.id} item={item}></BagItems>
          )}
          
          <BagSummary summary={finalItems}></BagSummary>
        </div>
      </main>
     </>
  );
}

export default Bag;
