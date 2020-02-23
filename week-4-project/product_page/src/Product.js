import React from 'react';

const Product = ({ name, price, stocked }) => {
    const style ={};

    if (stocked === false) {
        style.backgroundColor = 'red';
    }

    return (
        <tr style={style}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    );
};

export default Product;