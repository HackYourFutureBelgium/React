import React, {useState} from 'react';
import ProductListings from "./ProductListings";
import Search from "./search"

function App() {
  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

  const [filter, setFilter] = useState(false)
  const [search, setSearch] = useState("")
  
  const filteredProducts = PRODUCTS.filter(item => item.stocked === true)

    
  return (
    <div className="App">
    <Search setFilter={setFilter} setSearch={setSearch} />
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
        </thead>
        <ProductListings search={search} filter={filter} products={filter ? filteredProducts : PRODUCTS }/>
      </table>
    </div>
  );
}

export default App;