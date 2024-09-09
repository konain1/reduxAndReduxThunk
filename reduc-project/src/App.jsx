import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import  getProducts  from './redux/ProductSlice';
import getProducts from './redux/GetProductSlice';
import Product from './components/Product';
import { addmore } from './redux/counterSlice';



function App() {

 const dispatch  = useDispatch()
 
  const productsData = useSelector(state=>state.productStore.productData)
  
const countVal = useSelector(state => state.countStore.count)
  
 const handlerCount = ()=>{
  
  dispatch(addmore(countVal * 10))


 }
 

 useEffect(()=>{
  dispatch(getProducts())

 },[])
  return (
    <>
    <button onClick={handlerCount}>{countVal}</button>
      <Product/>
 
    </>
  );
}

export default App;
