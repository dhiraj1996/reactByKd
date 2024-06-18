


function BagSummary({summary}) {
  console.log(summary);
    // let summary = {
    //     totalItem: 3,
    //     totalMRP: 599,
    //     totalDiscount:"10%" ,
    //     finalPayment: 499,
    // }
    const CONV_FEES = 99;
    const totalItems = summary.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    summary.forEach(items => {
      totalMRP += items.original_price;
      totalDiscount += items.original_price - items.current_price;
    })

    let finalPayment = totalMRP + CONV_FEES;

  return (
    <div className="bag-summary">
    <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItems} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹ {CONV_FEES}</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
  )
}

export default BagSummary;