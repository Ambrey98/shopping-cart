import "./Main.scss";
import Header from "../components/header/Header";
import data from "../data.json";
import { useEffect, useState } from "react";
import ListItem from "../components/list-item/ListItem";

function Main() {
  const [listItems, setListItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      setListItems(data);
    } else {
      return [];
    }
  }, []);

  return (
    <>
      <Header cartItems={cartItems} />
      <div className="main-content">
        <h1 className="main-content__text">
          Fingertips
          <br />
          Store
        </h1>
        <div className="main-content__list">
          {listItems.map((currItem) => (
            <ListItem
              key={currItem.id}
              item={currItem}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
