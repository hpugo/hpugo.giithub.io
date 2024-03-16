import React, { useEffect, useState } from "react";
import classes from '../components/css/shoepage.module.css';
import { useNavigate, useParams } from "react-router-dom";
import { getById } from "../services/ShoeService";
import Price from "../components/Price";
import { useCart } from "../hooks/useCart";
import NotFound from "../components/NotFound";

export default function ShoePage() {
    const [shoe, setShoe] = useState({});
    const {id} =  useParams();
    const {addToCart} = useCart();
    const navigate = useNavigate();

    const handleAddToCart = () =>{
        addToCart(shoe);
        navigate('/cart');

    }

    useEffect(() => { 
        getById(id).then(setShoe);
    }, [id]);
    return ( 
    <>
    { !shoe? (<NotFound message="Shoes Not Found!" linkText="Back To Home"/>) : ( 
    <div className={classes.container}>
        <img className={classes.image} 
        src={`${shoe.imageUrl}`}
        alt={shoe.name}/>
        <div className={classes.details}>
            <div className={classes.header}>
                <span className={classes.name}>{shoe.name}</span>
            </div>
            <div className={classes.condition}>Condition:{shoe.condition}</div>
            <div className={classes.price}><Price price={shoe.price}/></div>
            <div className={classes.size}> Size: {shoe.sizes} </div>
            <div>
                <button onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
        
    </div> 
    )}
    </>
    )
    }
