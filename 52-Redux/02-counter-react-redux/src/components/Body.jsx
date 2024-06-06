import { useSelector } from "react-redux";



export const Body = () => {
    const counter = useSelector((store) => store.counter);
  return (
    <>
      <p className="lead mb-4">Current value: {counter}</p>
    </>
  );
};
