import { useSelector } from "react-redux";



export const Body = () => {
    const { counterVal } = useSelector((store) => store.counter);
    // const counter = counterObj.initialState.counterVal;
  return (
    <>
      <p className="lead mb-4">Current value: {counterVal}</p>
    </>
  );
};
