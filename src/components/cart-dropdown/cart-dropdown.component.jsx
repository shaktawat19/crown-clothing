import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import withRouter from "./withRouter";
import {toggleCartHidden} from "../../redux/cart/cart.actions";


const CartDropdown = ({ cartItems, navigate, dispatch }) => {
  const clickHandler = () => {
    navigate('/checkout');
    dispatch(toggleCartHidden());
  }
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={clickHandler}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
// TODO: Alternative of withRouter to use in line-30, as withRouter removed from react-router 6. 