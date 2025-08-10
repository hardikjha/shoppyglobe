export default function Checkout() {
  return (
    <div className="cart-container">
      <h2>Checkout</h2>
      <p>Integrate payment / order form here.</p>
      <button className="btn-gradient">Submit Order</button>
      <button className="btn-gradient" style={{ marginLeft: 8 }}>
        Go Back
      </button>
    </div>
  );
}
