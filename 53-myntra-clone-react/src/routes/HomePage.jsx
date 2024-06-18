import { useSelector } from "react-redux"
import HomeItem from "../components/HomeItem"

function HomePage() {
     
    const items = useSelector((store) => store.items);
    // console.log(items);
    
  return (
    <>
    <main>
        <div className="items-container">
          {items.map(items => <HomeItem key={items.id} item={items}> </HomeItem >) }
        
        </div>
        
      </main>
    </>
  )
}

export default HomePage