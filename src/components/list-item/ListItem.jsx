import "./ListItem.scss";
import InfoIconStaticIcon from "../../assets/tooltip-static.svg";
import InfoIconHoveredIcon from "../../assets/tooltip-hover.svg";
import { useState } from "react";
import ListInfo from "../list-info/ListInfo";

function ListItem(props) {
  const { item, cartItems, setCartItems } = props;
  const [isInfoShown, setIsInfoShown] = useState(false);

  const onAddToCart = (newItem) => {
    const updatedCartItems = [...cartItems];

    const existingItemIndex = updatedCartItems.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity + 1,
      };
    } else {
      updatedCartItems.push({ ...newItem, quantity: 1 });
    }

    setCartItems(updatedCartItems);
  };

  return (
    <div className="list-item">
      <div className="info-icon">
        <img
          src={isInfoShown ? InfoIconHoveredIcon : InfoIconStaticIcon}
          onMouseEnter={() => setIsInfoShown(true)}
          onMouseLeave={() => setIsInfoShown(false)}
          alt="Info icon"
        />
      </div>
      <div className="item-img">
        <img src={require(`../../assets/${item.image}`)} alt={item.name} />
      </div>
      <div className="list-item__details">
        <p className="list-item__details__name">{item.name}</p>
        <p className="list-item__details__price">
          £{item.price % 1 !== 0 ? item.price.toFixed(3) : item.price}
        </p>
      </div>
      <button
        className="button button--red"
        type="submit"
        onClick={() => onAddToCart(item)}
      >
        Add to cart
      </button>
      {isInfoShown && <ListInfo item={item} />}
    </div>
  );
}

export default ListItem;
