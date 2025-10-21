import React, { useEffect, useState } from 'react'
import Product from '../Component/Product';
 const Shop = () => {
  const [products,setProducts]= useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/items")
    .then(res=> res.json())
    .then(data=> setProducts(data))
     .catch(err => console.error("Fetch error:", err));
  },[])
  console.log(products)
  return (
    <>
    <div className='text-center text-2xl mt-10'>Buy your best Products..</div>
   <div className="py-10 flex justify-center">
  <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center'>
    {
      products.map(item => (
        <li key={item.id} className="w-64">
          <Product product={item} />
        </li>
      ))
    }
  </ul>
</div>

    </>
  )
}
export default Shop ;