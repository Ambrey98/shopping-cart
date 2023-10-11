import "./Header.scss";
import ShoppingCartIcon from "../../assets/cart.svg";
import { useState } from "react";
import ShoppingCart from "../shopping-cart/ShoppingCart";

function Header(props) {
  const { cartItems } = props;
  const [isCartShown, setIsCartShown] = useState(false);

  return (
    <div className="header">
      <h3 className="header__text">HALLO WORLD</h3>
      <div className="cart" onClick={() => setIsCartShown(!isCartShown)}>
        <div className="cart__icon-container">
          <img src={ShoppingCartIcon} alt="Shopping cart" />
          {cartItems.length > 0 && (
            <div className="cart__icon-container__quantity-icon">
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
        <p className="cart__text">Shopping Cart</p>
      </div>
      {isCartShown && <ShoppingCart cartItems={cartItems} />}
    </div>
  );
}

export default Header;
