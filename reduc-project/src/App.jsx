import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import  getProducts  from './redux/ProductSlice';
import getProducts from './redux/GetProductSlice';
import Product from './components/Product';



function App() {

 const dispatch  = useDispatch()
 
  const productsData = useSelector(state=>state.productStore.productData)
  

  
 
 

 useEffect(()=>{
  dispatch(getProducts())

 },[])
  return (
    <>
      <Product/>
 
    </>
  );
}

export default App;
