import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";



function FetchItems() {
    const fetchStatus = useSelector((store) => store.fetchStatus);
    let dispatch = useDispatch();
    // console.log(fetchStatus)

    useEffect(()=>{
        if(fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;

        dispatch(fetchStatusActions.markFetchingStarted())
        // https://fakestoreapi.com/products  //api for store
        fetch("http://localhost:8080/items", {signal})
            .then((response) => response.json())
            .then(({items}) => {
                // console.log("Items are" ,items)
                dispatch(fetchStatusActions.markFetchDone())
                dispatch(fetchStatusActions.markFetchingFinished())
                dispatch(itemsActions.addInitialItems(items))
            });

            return()=> {
                controller.abort();
            }
    }, [fetchStatus])

  return (
    <>
    {/* <div>
        Fetch Done: <p>{fetchStatus.fetchDone}</p>
        Currently Fetching...: {fetchStatus.curentlyFetching}
    </div> */}
    </>
  )
}

export default FetchItems