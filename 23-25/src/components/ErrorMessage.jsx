
function ErrorMessage({ list }) {
    // let foodItems = [];
    // let foodItems = ["Dal","Rice","Vegetable Curry", "Samosa", "Pizza"];
    // let checkFood = foodItems.length === 0 ? <h6>Food nahi hai</h6> : null;
    return (
        <>
            {/* {checkFood} */}
            {list.length === 0 && <h2>No food left</h2>}
        </>

    );
}



export default ErrorMessage