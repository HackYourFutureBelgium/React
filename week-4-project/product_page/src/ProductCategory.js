import React from 'react';
import Product from "./Product";


const ProductCategory = ({category, products}) => {
    const $categoryRow = [
        <tr>{category}</tr>
    ];
    const $productItems = products.map(product => <Product {...product} />);

    const $products = [...$categoryRow, ...$productItems];

    return (
        <>
            {$products}
        </>
    )
};

export default ProductCategory;