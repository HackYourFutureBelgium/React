import React from "react";
import ProductCategory from "./ProductCategory";

const ProductListings = ({ products }) => {

    const productsByCategory = {};

    // Fill productsByCategory with a key for each category
    products.forEach(product => {
        if (!productsByCategory[product.category]) {
            productsByCategory[product.category] = [];
        }
    });

    console.log(productsByCategory);

    products.forEach(product => {
        productsByCategory[product.category].push(product);
    });

    let $products = [];
    // Fills $products with listings for categories and items
    for (let category in productsByCategory) {
        if (!productsByCategory.hasOwnProperty(category)) {
            continue;
        }

        const products = productsByCategory[category];
        const $productCategory = <ProductCategory category={category} products={products} />;

        $products.push($productCategory);
    }

    console.log($products);

    return (
        <tbody>
            {$products}
        </tbody>
    )
};

export default ProductListings;