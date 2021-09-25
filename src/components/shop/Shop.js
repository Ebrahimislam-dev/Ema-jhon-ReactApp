import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';

import './Shop.css'
const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                setproducts(data)
                setDisplayProducts(data)
            });
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedproduct = products.find(product => product.key === key);
                if (addedproduct) {
                    const quantity = savedCart[key];
                    addedproduct.quantity = quantity;
                    storedCart.push(addedproduct)
                }

            }
            setCart(storedCart);
        }
    }, [products]);
// want to be solve
    const handleToCart = (product) => {
        let istrue = false;
        for (const pro of cart) {
            if (pro.key === product.key) {
                istrue = true;
                pro.quantity = pro.quantity + 1;
            }
            if (!istrue) {
                const newCart = [...cart, product]
                setCart(newCart)
            } else {
                const newCart = [...cart]
                setCart(newCart)
            }
        }
        addToDb(product.key)

        /*   const newCart = [...cart, product];
        setCart(newCart);
        // console.log(product);
        // save to local storage
        addToDb(product.key) */
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        // console.log(searchText);
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProducts)
        console.log(matchedProducts.length);
    }

    return (
        <div>
            <div className="search-div">
                <nav className="navbar navbar-light bg-dark">
                    <div className="container-fluid">
                        <form className="d-flex w-50">
                            <input onChange={handleSearch} className="form-control  me-2 search-box" type="search" placeholder="Search products" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>


            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleToCart={handleToCart}
                        ></Product>)

                    }
                </div>
                <div className="cart-container">
                    {
                        <Cart cart={cart}></Cart>

                    }
                </div>
            </div>
        </div>
    );
};

export default Shop; <h1>This is shop</h1>