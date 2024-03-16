import React from "react";
import classes from '../components/css/cartpage.module.css';
import { useCart } from "../hooks/useCart";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import Price from "../components/Price";
import NotFound from "../components/NotFound";

export default function CartPage() {
  const { cart, removeFromCart, changeQuantity } = useCart();

  return (
    <>
      <Title title="Cart Page" margin="1.5rem 0 0 2.5rem" />
      {cart.items.length === 0? (<NotFound message="Cart is Empty!" />) : (
        <div className={classes.container}>
          <ul className={classes.list}>
            {cart.items.map(item => (
              <li key={item.shoe.id}>
                <div>
                  <img 
                    src={`${item.shoe.imageUrl}`}
                    alt={item.shoe.name}
                  />
                </div>
                <div>
                  <Link to={`/shoes/${item.shoe.id}`}>{item.shoe.name}</Link>
                </div>
                
                <div>
                  <select value={item.quantity} onChange={e => changeQuantity(item, Number(e.target.value))} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div>
                  <Price price={item.price} />
                </div>
                <div>
                  <button className={classes.remove_button} onClick={() => removeFromCart(item.shoe.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className={classes.checkout}>
              <div className={classes.shoes_count}>{cart.totalCount}</div>
              <div className={cart.total_Price}>
                <Price price={cart.totalPrice} />
              </div>
               <Link to="/checkout"> To checkout</Link>
          </div>    
        </div>
      )}
    </>
  );
}
