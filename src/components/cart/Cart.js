import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
  
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity=1
        }
        total = total + product.price*product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shippingCharge = total > 0 ? 15 : 0;
    const tax = (total + shippingCharge) * 0.10;
    const grandTotal = total + shippingCharge + tax;
    return (
        <div className="ps-2 sticky-top">
            <h2>Order Summary</h2>
            <h4>Items ordered:{totalQuantity}</h4>
            <table className="table text-start ">
                <thead className="table-primary">
                    <tr>
                        <th scope="col">Subject</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Items Price</td>
                        <td>$ {total}</td>
                    </tr>
                    <tr>
                        <td>Shipping Charge</td>
                        <td>$ {shippingCharge}</td>
                    </tr>
                    <tr>
                        <td>Tax(10%)</td>
                        <td>$ {tax}</td>
                    </tr>
                    <tr className="table-dark fw-bold">
                        <td>Sub-Total</td>
                        <td>$ {grandTotal}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Cart;