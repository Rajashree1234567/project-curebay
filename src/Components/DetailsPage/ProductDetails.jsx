import React, {useState, useEffect, useContext  } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import styled from './Details.module.css';
import { CartContext } from "../../RootContext";

export const ProductDetails = () => {

    const { id } = useParams(); 
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const { setCart } = useContext(CartContext);
    const navigate = useNavigate();

    const fetchProducDetails = async () => {
        setLoading(true);
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
          const result = await response.json();
          setUser(result);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
        setLoading(false);
    };

    useEffect(()=>{
        fetchProducDetails();
    }, [id]);

    const addToCart = () => {
        if (user) {
          setCart((prevCart) => [...prevCart, user]);
        }
    };

    if (loading) return <p>Loading user details...</p>;
    if (!user) return <p>No user details found!</p>;
      
  return (
    <div>
        <div className={styled.detailContainer}>
            <h2 className={styled.title}>{user.name}'s Details</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Website:</strong> {user.website}</p>

            <button className={styled.backButton} onClick={() => navigate(-1)}>Back</button>
            <button className={styled.addToCartButton} onClick={addToCart}>Add to Cart 🛒</button>
      
        </div>
    </div>
  )
}
