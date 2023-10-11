import { useEffect, useState } from "react";
import "./ShoppingCart.scss";

function ShoppingCart(props) {
  const { cartItems } = props;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, curr) => (acc += curr.quantity * curr.price),
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  return (
    <div className="shopping-cart">
      <p className="shopping-cart__title">
        You have {cartItems.length} items in your cart!
      </p>
      <div className="shopping-cart__table">
        <div className="shopping-cart__table__header">
          <p>Items</p>
          <p>Units</p>
          <p>Price</p>
        </div>
        {cartItems.map((item) => (
          <div className="shopping-cart__table__items" key={item.id}>
            <div className="shopping-cart__table__items__name">
              <span>{item.name}</span>
            </div>
            <div className="shopping-cart__table__items__quantity">
              <span>{item.quantity}</span>
            </div>
            <div className="shopping-cart__table__items__price">
              <span>
                £
                {(item.quantity * item.price) % 1 !== 0
                  ? (item.quantity * item.price).toFixed(3)
                  : item.quantity * item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      <hr className="dividing-line--total" />
      <div className="shopping-cart__total">
        <p>Total Order Value</p>
        <p>£{totalPrice % 1 !== 0 ? totalPrice.toFixed(3) : totalPrice}</p>
      </div>
      <hr className="dividing-line--checkout" />
      <button className="button button--red">Checkout</button>
    </div>
  );
}

export default ShoppingCart;
