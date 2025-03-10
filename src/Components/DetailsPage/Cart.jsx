import React, { useState, useContext } from "react";
import { CartContext } from "../../App";
import styled from "./Cart.module.css";


export const Cart = () => {

    const { cart, setCart } = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleBuy = () => {
      setIsModalOpen(true);
    };
  
    const clearCart = () => {
      setCart([]);
    };

  return (

    <div className={styled.cartContainer}>
      <h2 className={styled.title}>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className={styled.emptyCart}>Your cart is empty.</p>
      ) : (
        <ul className={styled.cartList}>
          {cart.map((item, index) => (
            <li key={index} className={styled.cartItem}>
              <p><strong>{item.name}</strong></p>
              <p>{item.email}</p>
              <p>{item.phone}</p>
            </li>
          ))}
        </ul>
      )}
       {cart.length > 0 && (
        <div className={styled.buttonContainer}>
          <button className={styled.clearButton} onClick={clearCart}>Clear Cart</button>
          <button className={styled.buyButton} onClick={handleBuy}>Buy 🛍️</button>
        </div>
      )}

      {/* Custom Modal */}
      {isModalOpen && (
        <div className={styled.modalOverlay}>
          <div className={styled.modalContent}>
            <h2>Select Payment Method</h2>
            <div className={styled.paymentOptions}>
              <button className={styled.paymentButton}>💳 Credit Card</button>
              <button className={styled.paymentButton}>🏦 Debit Card</button>
              <button className={styled.paymentButton}>💰 PayPal</button>
              <button className={styled.paymentButton}>📲 UPI</button>
            </div>
            <button className={styled.closeModal} onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
          </div>
      )}
    </div>

    );
};
